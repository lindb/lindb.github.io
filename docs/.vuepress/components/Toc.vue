<template>
  <div v-if="anchors && anchors.length>0" class="toc-wrap">
    <Scrollbar>
      <div class="theme-lin-toc" :class="{ 'toc-open': isTocOpen }">
        <div class="toc-mask" @click="isTocOpen = false"></div>
        <button class="mobile-toc-title" @click="isTocOpen = !isTocOpen">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            shape-rendering="geometricPrecision"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            style="color: currentcolor"
          >
            <path d="M21 10H7M21 6H3M21 14H3M21 18H7"></path>
          </svg>
        </button>
        <div class="toc-items-wrap" :class="{ 'show-toc': isTocOpen }">
-         <div class="toc-nav-text">{{ themeLocaleData.tocNavText }}</div>
          <ul class="toc-items">
            <li
              class="toc-item"
              v-for="anchor in anchors"
              :key="anchor.slug"
              :class="{
                ['toc-level-' + anchor.level]: true,
                active: `#${anchor.slug}` === hash,
              }"
              @click="isTocOpen = !isTocOpen"
            >
              <a class="toc-anchor" :href="'#' + anchor.slug">{{ anchor.title }}</a>
            </li>
          </ul>
        </div>
      </div>
     </Scrollbar>
  </div>
</template>

<script lang="ts">
import { debounce } from 'ts-debounce'
import { usePageData } from '@vuepress/client'
import { PageHeader } from '@vuepress/shared'
import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { ComputedRef } from 'vue'
import { useThemeData,useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import { useRoute } from 'vue-router'
import Scrollbar from './Scrollbar.vue'

export default defineComponent({
  name: 'Toc',
  components: {
    Scrollbar,
  },
  setup() {
    const page = usePageData()
    const themeLocaleData = useThemeLocaleData()
    const themeData = useThemeData()

    const tocLevel = 5
    const resolved: PageHeader[] = []
    const resolveAnchors = (
      headers: PageHeader[],
      depth: number = 0
    ): ComputedRef<PageHeader[]> => {
      if (headers.length === 0 || depth >= tocLevel) {
        return computed(() => resolved)
      }

      headers.map((header) => {
        resolved.push(header)
        if (header.children.length) {
          resolveAnchors(header.children, ++depth)
        }
        depth = 0
      })

      return computed(() => resolved)
    }

    const anchors = resolveAnchors(page.value.headers)
    const isTocOpen = ref(false)
    const route = useRoute()
    const hash = ref(route.hash)

    let target: HTMLAnchorElement | null = null
    const onScroll = debounce(() => {
      isTocOpen.value = false

      // get current scrollTop
      const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      )

      // get all header links
      const headerLinks: HTMLAnchorElement[] = Array.from(
        document.querySelectorAll('.toc-anchor')
      )
      // get all header anchors
      const headerAnchors: HTMLAnchorElement[] = Array.from(
        document.querySelectorAll('.header-anchor')
      )
      // filter anchors that do not have corresponding links
      const existedHeaderAnchors = headerAnchors.filter((anchor) =>
        headerLinks.some((link) => link.hash === anchor.hash)
      )
      if (scrollTop === 0 && existedHeaderAnchors.length) {
        target = existedHeaderAnchors[0]
      }

      let min = scrollTop
      for (let i = 0; i < existedHeaderAnchors.length; i++) {
        const offsetTop = existedHeaderAnchors[i].parentElement?.offsetTop ?? 0
        if (Math.abs(scrollTop - offsetTop) < min) {
          min = Math.abs(scrollTop - offsetTop)
          target = existedHeaderAnchors[i]
        }
      }

      hash.value = decodeURIComponent(target?.hash ?? '')
    }, 0)

    onMounted(() => {
      if (hash.value) {
        // get all header anchors
        const headerAnchors: HTMLAnchorElement[] = Array.from(
          document.querySelectorAll('.header-anchor')
        )
        for (let i = 0; i < headerAnchors.length; i++) {
          if (decodeURIComponent(headerAnchors[i].hash) === hash.value) {
            scrollTo(0, headerAnchors[i].parentElement?.offsetTop ?? 0)
          }
        }
      }

      window.addEventListener('scroll', onScroll)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return {
      anchors,
      isTocOpen,
      hash,
      themeLocaleData,
    }
  },
})
</script>
