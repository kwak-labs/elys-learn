<template>
  <div class="w-72 h-[calc(100vh-4rem)] overflow-y-auto border-r border-golden-grass/10 bg-night-rider/50 p-4 fixed top-16">
    <ContentNavigation v-slot="{ navigation }" :key="currentLanguage" :query="{
      where: { _path: { $contains: currentLanguage } }
    }">
      <div class="space-y-1">
        <template v-for="item in flattenedNavigation(navigation)" :key="item._path">
          <NavItem :item="item" :depth="0" />
        </template>
      </div>
    </ContentNavigation>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const currentLanguage = computed(() => {
  const pathParts = route.path.split('/')
  return pathParts[1] || 'en'
})

// Refresh navigation data when language changes
const { data: navigation, refresh } = await useAsyncData('navigation', () => fetchContentNavigation(), {
  watch: [currentLanguage]
})

// Function to flatten the language directory level
const flattenedNavigation = (navigation: any[]) => {
  if (!navigation?.length) return []
  
  // Get the language directory (should be the first item with children)
  const langDir = navigation[0]
  if (!langDir?.children) return navigation

  // Process children to maintain directory structure
  return langDir.children.map((item: any) => {
    // If the item has a _dir property from _dir.yml, use its title
    if (item._dir?.title) {
      item.title = item._dir.title
    }
    return item
  })
}
</script>

<style scoped>
/* Remove the old router-link-active style since we're handling active states in NavItem */
</style> 