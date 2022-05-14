<template>
  <aside class="sidebar">
    <Scrollbar>
      <NavbarItems />
      <SidebarItems />
    </Scrollbar>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarItems } from '@vuepress/theme-default/lib/client/composables'
import NavbarItems from '@theme/NavbarItems.vue'
import SidebarItems from '@theme/SidebarItems.vue'
import Scrollbar from './Scrollbar.vue'

export default defineComponent({
  name: 'Sidebar',

  components: {
    Scrollbar,
    NavbarItems,
    SidebarItems,
  },

  setup() {
    const sidebarItems = useSidebarItems()

    return {
      sidebarItems,
    }
  },
})
</script>
