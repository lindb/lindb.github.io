<template>
  <main class="page">
    <div class="theme-lin-content-wrap" :class="{ 'with-toc': shouldShowToc }">
      <div class="theme-lin-content">
        <Content />
        <PageMeta />
        <PageNav />
      </div>

      <div v-if="shouldShowToc" class="toc-wrap">
        <Toc />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, defineComponent } from 'vue'
import Toc from './Toc.vue'
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
export default defineComponent({
  name: 'Page',
  components: {
    Toc,
    PageMeta,
    PageNav,
  },
  setup() {
    const page = usePageData()
    const headers = computed(() => page.value.headers)
    const shouldShowToc = true
    return {
      headers,
      shouldShowToc,
    }
  },
})
</script>