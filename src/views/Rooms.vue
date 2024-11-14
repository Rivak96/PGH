<template>
  <div class="pt-16 min-h-screen">
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-12">Our Rooms</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="room in rooms" :key="room.id" class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="relative h-64">
              <img :src="room.image" :alt="room.name" class="w-full h-full object-cover" />
              <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                From ${{ room.price }}/night
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ room.name }}</h3>
              <p class="text-gray-600 mb-4">{{ room.description }}</p>
              
              <div class="space-y-2">
                <div v-for="(feature, index) in room.features" :key="index" class="flex items-center gap-2">
                  <component :is="feature.icon" class="w-5 h-5 text-blue-600" />
                  <span class="text-gray-700">{{ feature.text }}</span>
                </div>
              </div>

              <a 
                href="https://wa.me/1234567890" 
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
              >
                <MessageCircle class="w-5 h-5" />
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Wifi, Wind, Users, Tv, Coffee, Mountain, Bath, MessageCircle } from 'lucide-vue-next'

const rooms = [
  {
    id: 1,
    name: "Mountain View Suite",
    price: 120,
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-908820191854785508/original/3436b14a-06f4-440e-8586-9f2f28cf48fa.jpeg?im_w=1200&im_format=avif",
    description: "Spacious suite with stunning views of the Northern Range",
    features: [
      { icon: Mountain, text: "Mountain view" },
      { icon: Users, text: "Up to 2 guests" },
      { icon: Wind, text: "Air conditioning" },
      { icon: Wifi, text: "High-speed WiFi" }
    ]
  },
  {
    id: 2,
    name: "Deluxe Double Room",
    price: 100,
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-908820191854785508/original/3436b14a-06f4-440e-8586-9f2f28cf48fa.jpeg?im_w=1200&im_format=avif",
    description: "Comfortable room with modern amenities",
    features: [
      { icon: Tv, text: "Smart TV" },
      { icon: Users, text: "Up to 2 guests" },
      { icon: Bath, text: "Private bathroom" },
      { icon: Wind, text: "Air conditioning" }
    ]
  },
  {
    id: 3,
    name: "Business Single",
    price: 80,
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-908820191854785508/original/3436b14a-06f4-440e-8586-9f2f28cf48fa.jpeg?im_w=1200&im_format=avif",
    description: "Perfect for the business traveler",
    features: [
      { icon: Wifi, text: "High-speed WiFi" },
      { icon: Coffee, text: "Work desk" },
      { icon: Wind, text: "Air conditioning" },
      { icon: Bath, text: "Private bathroom" }
    ]
  }
]
</script>