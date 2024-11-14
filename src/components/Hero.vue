`<template>
  <div class="relative h-screen w-full overflow-hidden">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="[
        'absolute inset-0 transition-opacity duration-1000 ease-in-out',
        currentSlide === index ? 'opacity-100' : 'opacity-0'
      ]"
    >
      <div class="absolute inset-0 bg-black/40 z-10" />
      <img
        :src="slide.image"
        :alt="slide.title"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Piarco Airport Guest House</h1>
        <p class="text-xl md:text-2xl mb-8">
          Relaxed Accommodation Minutes from Piarco International Airport
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">{{ slide.title }}</h2>
        <p class="text-lg md:text-xl">{{ slide.description }}</p>
        <a 
          href="https://wa.me/18683881452" 
          target="_blank" 
          rel="noopener noreferrer"
          class="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
        >
          <MessageCircle :size="24" />
          Contact Us
        </a>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
      <button
        v-for="(_, index) in slides"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full transition-colors duration-300',
          currentSlide === index ? 'bg-white' : 'bg-white/50'
        ]"
        @click="currentSlide = index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { MessageCircle } from 'lucide-vue-next'

const slides = [
  {
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-908820191854785508/original/36c0f462-54fc-44ea-a347-c61343f2bdac.jpeg?im_w=1200&im_format=avif",
    title: "Mountain View Rooms",
    description: "Wake up to breathtaking views of the Northern Range"
  },
  {
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-908820191854785508/original/b3c6fe5c-372f-45c3-be54-b20f5953511d.jpeg?im_w=1440&im_format=avif",
    title: "Free Parking Available",
    description: "Secure, on-site parking for your convenience"
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-908820191854785508/original/3436b14a-06f4-440e-8586-9f2f28cf48fa.jpeg?im_w=1440&im_format=avif",
    title: "Dedicated Workspace",
    description: "High-speed Wi-Fi and comfortable work areas"
  }
]

const currentSlide = ref(0)
let timer: number

const startSlideshow = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
}

onMounted(() => {
  startSlideshow()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>`