`<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
        <div class="flex items-center justify-center gap-2">
          <div class="flex">
            <Star
              v-for="i in 5"
              :key="i"
              :class="[
                'w-6 h-6',
                i <= Math.floor(averageRating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              ]"
            />
          </div>
          <span class="text-lg font-semibold">{{ averageRating.toFixed(2) }} out of 5</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <img
              :src="review.image"
              :alt="review.name"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h3 class="font-semibold text-gray-900">{{ review.name }}</h3>
              <p class="text-sm text-gray-500">{{ review.date }}</p>
            </div>
          </div>
          
          <div class="flex mb-3">
            <Star
              v-for="i in 5"
              :key="i"
              :class="[
                'w-5 h-5',
                i <= review.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              ]"
            />
          </div>
          
          <p class="text-gray-600">{{ review.comment }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Star } from 'lucide-vue-next'

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "February 2024",
    comment: "Beautiful mountain views and excellent service. The workspace was perfect for my remote work needs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    date: "January 2024",
    comment: "Convenient location near the airport. Clean rooms and friendly staff made my stay wonderful.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    rating: 4,
    date: "December 2023",
    comment: "Great value for money. The air conditioning worked perfectly and the Wi-Fi was fast.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
]

const averageRating = computed(() => 
  reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
)
</script>`