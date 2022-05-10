<template>
  <ParentLayout>
    <template #sidebar>
      <Sidebar/>
    </template>
    <template #page>
      <Home v-if="frontmatter.home" />
      <Page v-else :key="page.path" />
    </template>
  </ParentLayout>
  <div class="lin-footer">
    <div class="text">
      Copyright © {{new Date().getFullYear()}} LinDB. All Rights Reserved.
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import Page from "../../components/Page.vue";
import Sidebar from '../../components/Sidebar.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Home from '@vuepress/theme-default/lib/client/components/Home.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Page,
    Home,
    Sidebar,
    ParentLayout,
  },
  setup() {
    const page = usePageData()
    const frontmatter = usePageFrontmatter()
    return {
      page,
      frontmatter,
    }
  },
})
</script>