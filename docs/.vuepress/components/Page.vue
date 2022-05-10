<template>
  <main class="page">
    <div class="theme-default-content theme-lin-content-wrap" :class="{ 'with-toc': true }">
      <div class="theme-lin-content">
        <Content />
        <PageMeta />
        <PageNav />
      </div>

      <Toc />
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
    return {
      headers,
    }
  },
})
</script>