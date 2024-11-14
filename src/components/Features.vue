`<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">
        Property Highlights
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <component :is="feature.icon" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mountain, Car, Laptop, Wind } from 'lucide-vue-next'

const features = [
  {
    icon: Mountain,
    title: 'Mountain View',
    description: "Stunning views of Trinidad's Northern Range"
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure on-site parking for all guests'
  },
  {
    icon: Laptop,
    title: 'Dedicated Workspace',
    description: 'Comfortable work area with high-speed Wi-Fi'
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms for your comfort'
  }
]
</script>`