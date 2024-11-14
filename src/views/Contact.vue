<template>
  <div class="pt-16 min-h-screen">
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>
        
        <div class="bg-gray-50 rounded-xl p-8 shadow-lg">
          <div class="text-center mb-8">
            <p class="text-xl text-gray-600 mb-6">
              Feel free to reach out to us anytime. We're here to help!
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">WhatsApp</h3>
                  <a 
                    href="https://wa.me/18683881452" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +1 (868) 388-1452
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Phone</h3>
                  <a 
                    href="tel:+18681234567" 
                    class="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +1 (868) 388-1452
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                  <a 
                    href="mailto:Piarcoguesthouse@gmail.com" 
                    class="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    piarcoguesthouse@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Home class="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Book on Airbnb</h3>
                  <a 
                    href="https://www.airbnb.com/rooms/908820191854785508?adults=1&children=0&infants=0&search_mode=regular_search&check_in=2024-11-17&check_out=2024-11-22&source_impression_id=p3_1731550292_P3yuo1BGasLO9GVf&previous_page_section_name=1000&federated_search_id=e3cbe72f-cd4d-4e6c-8ccc-5e1ad0d9ac6f" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-red-600 hover:text-red-700 transition-colors"
                  >
                    View our listing
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Home class="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Book on Bookings.com</h3>
                  <a 
                    href="https://www.booking.com/hotel/tt/piarco-airport-guest-house.html?aid=318615&label=New_English_EN_TT_26768406385-EjtdXuJbByhQGE0bC5wnngS634117826526%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-912298703241%3Alp9075957%3Ali%3Adec%3Adm%3Aag26768406385%3Acmp394949785&sid=ec989a848689de66a6467bed310e5075&dest_id=-1360570&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1731552575&srpvid=54b413dd8efa0035&type=total&ucfs=1&" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-red-600 hover:text-red-700 transition-colors"
                  >
                    View our listing
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Address</h3>
                  <p class="text-gray-600">
                    34 Factory Road<br />
                    Piarco, Trinidad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MessageCircle, Phone, Mail, Home, MapPin } from 'lucide-vue-next'
</script>