<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Piarco Guest House</h3>
          <div class="space-y-2">
            <p class="flex items-center gap-2">
              <MapPin :size="20" />
              34 Factory Road, Piarco, Trinidad
            </p>
            <p class="flex items-center gap-2">
              <Phone :size="20" />
              <a href="tel:+18683881452">+1 (868) 388-1452</a>
            </p>
            <p class="flex items-center gap-2">
              <Mail :size="20" />
              <a href="mailto:piarcoguesthouse@gmail.com">
                piarcoguesthouse@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="#home" class="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="hover:text-blue-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#rooms" class="hover:text-blue-400 transition-colors">
                Rooms
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Connect With Us</h3>
          <div class="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-400 transition-colors"
            >
              <Facebook :size="24" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-pink-400 transition-colors"
            >
              <Instagram :size="24" />
            </a>
            <a
              href="https://airbnb.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-red-400 transition-colors"
            >
              <Home :size="24" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Piarco Guest House. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Phone, Mail, MapPin, Facebook, Instagram, Home } from 'lucide-vue-next'
</script>