<template>
  <div class="min-h-screen bg-gradient-to-b from-base-300 to-base-200 text-base-content">
    <!-- Navbar -->
    <div class="sticky top-0 z-50 backdrop-blur-xl bg-night-rider/90 border-b border-golden-grass/20 h-16 shadow-sm">
      <div class="container mx-auto px-4 flex justify-between items-center h-full">
        <div class="flex-1">
          <div
            class="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
            @click="handleLogoClick"
          >
            <img
              src="~/assets/images/logo.jpg"
              alt="Elys logo"
              class="w-10 h-10 rounded-xl ring-2 ring-golden-grass/20"
            />
            <span class="text-2xl font-bold ">
              Elys Learn
            </span>
          </div>
        </div>
        <div class="flex items-center gap-5">
          <!-- Search bar -->
          <div class="relative hidden lg:block">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search documentation..."
              class="input input-bordered w-[300px] h-10 pr-10 bg-base-200/50 text-sm
                     focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              @keyup.enter="handleSearch"
            />
            <div
              class="absolute top-1/2 right-3 transform -translate-y-1/2 text-base-content/40 
                     hover:text-primary cursor-pointer transition-colors"
              @click="handleSearch"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <!-- Language Selector -->
          <select 
            v-model="currentLanguage" 
            class="select select-bordered h-10 bg-base-200/50 text-sm
                   focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
            @change="switchLanguage"
          >
            <option 
              v-for="(lang, code) in languages" 
              :key="code" 
              :value="code"
            >
              {{ lang.flag }} {{ lang.nativeName }}
            </option>
          </select>
          <!-- Mobile menu button -->
          <button
            class="btn btn-square btn-ghost lg:hidden"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex">
      <!-- Sidebar - fixed on the left -->
      <Sidebar v-if="!isMarkdownPreview" class="w-72 fixed left-0" />
      
      <!-- Main Content - pushed to the right of sidebar -->
      <div :class="[
        'flex-1',
        { 'ml-72': !isMarkdownPreview }
      ]">
        <div class="p-8">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from '#app'
import { languages } from '~/config/languages'

const router = useRouter()
const route = useRoute()
const searchQuery = ref('')
const mobileMenuOpen = ref(false)
const currentLanguage = ref('en')

const isMarkdownPreview = computed(() => {
  return route.path === '/markdown-preview'
})

const switchLanguage = async () => {
  const newPath = route.path.replace(/^\/[^/]+/, `/${currentLanguage.value}`)
  await navigateTo(newPath)
}

onMounted(() => {
  // Set initial language based on route
  const routeLang = route.path.split('/')[1]
  if (languages[routeLang]) {
    currentLanguage.value = routeLang
  }
})

const handleSearch = () => {
  // Implement search functionality
  console.log('Searching for:', searchQuery.value)
}

const handleLogoClick = () => {
  navigateTo('/')
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.3s ease;
}
.mobile-menu-leave-to {
  transform: translateX(100%);
}
</style>
