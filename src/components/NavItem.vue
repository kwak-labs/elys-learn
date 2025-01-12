<template>
  <div>
    <!-- Directory with children -->
    <div v-if="item.children?.length" class="mb-1">
      <button 
        @click="isOpen = !isOpen"
        :class="[
          'flex items-center w-full px-4 py-2 rounded-lg transition-colors duration-200',
          'hover:bg-golden-grass/10 hover:text-golden-grass text-ebb/80',
          (depth || 0) > 0 ? 'ml-4' : ''
        ]"
      >
        <span>{{ item.title }}</span>
        <svg 
          class="w-4 h-4 ml-auto transition-transform duration-200"
          :class="{ 'rotate-90': isOpen }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div v-show="isOpen" class="mt-1 mb-2">
        <NavItem 
          v-for="child in item.children" 
          :key="child._path" 
          :item="child" 
          :depth="(depth || 0) + 1"
        />
      </div>
    </div>

    <!-- Regular link -->
    <NuxtLink 
      v-else
      :to="item._path" 
      :class="[
        'block px-4 py-2 rounded-lg transition-colors duration-200',
        'hover:bg-golden-grass/10 hover:text-golden-grass',
        isActive ? 'bg-golden-grass/20 text-golden-grass font-medium' : 'text-ebb/80',
        (depth || 0) > 0 ? 'ml-4' : ''
      ]"
    >
      {{ item.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from '#app'

const props = defineProps<{
  item: any
  depth?: number
}>()

const route = useRoute()
const isOpen = ref(true)

const isActive = computed(() => {
  // Only highlight exact matches for content files
  return route.path === props.item._path
})
</script> 