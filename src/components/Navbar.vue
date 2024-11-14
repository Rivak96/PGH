<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex-shrink-0">
          <RouterLink to="/" class="text-2xl font-bold text-blue-900">
            Piarco Airport Guest House
          </RouterLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-800 hover:text-blue-600 transition-colors"
          >
            {{ item.name }}
          </RouterLink>
          
          <div class="flex items-center space-x-4">
            <a href="https://wa.me/18683881452" target="_blank" rel="noopener noreferrer"
              class="text-green-600 hover:text-green-700 transition-colors">
              <MessageCircle :size="24" />
            </a>
            <a href="https://www.airbnb.com/rooms/908820191854785508?adults=1&children=0&infants=0&search_mode=regular_search&check_in=2024-11-17&check_out=2024-11-22&source_impression_id=p3_1731550292_P3yuo1BGasLO9GVf&previous_page_section_name=1000&federated_search_id=e3cbe72f-cd4d-4e6c-8ccc-5e1ad0d9ac6f" target="_blank" rel="noopener noreferrer"
              class="text-red-500 hover:text-red-600 transition-colors">
              <Home :size="24" />
            </a>
          </div>
        </div>

        <button
          class="md:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu v-if="!isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white/90 backdrop-blur-sm">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="block px-3 py-2 text-gray-800 hover:text-blue-600"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </RouterLink>
        
        <div class="flex space-x-4 px-3 py-2">
          <a href="https://wa.me/3881452" target="_blank" rel="noopener noreferrer"
            class="text-green-600 hover:text-green-700">
            <MessageCircle :size="24" />
          </a>
          <a href="https://www.airbnb.com/rooms/908820191854785508?adults=1&children=0&infants=0&search_mode=regular_search&check_in=2024-11-17&check_out=2024-11-22&source_impression_id=p3_1731550292_P3yuo1BGasLO9GVf&previous_page_section_name=1000&federated_search_id=e3cbe72f-cd4d-4e6c-8ccc-5e1ad0d9ac6f" target="_blank" rel="noopener noreferrer"
            class="text-red-500 hover:text-red-600">
            <Home :size="24" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X, MessageCircle, Home } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Contact', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>