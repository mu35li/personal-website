<script setup>
import { RouterLink } from 'vue-router'
import { legal } from '../config/legal.js'

defineProps({
  showTagline: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <footer
    class="mt-10 flex flex-col gap-4 border-t-2 border-dashed border-retro-teal pt-6 text-sm text-purple-200 md:flex-row md:items-center md:justify-between animate-fade-in-up [animation-delay:640ms]"
  >
    <div class="flex flex-col gap-2">
      <p v-if="showTagline" class="animate-soft-flicker">Now loading: your next project.</p>
      <div class="flex flex-wrap gap-3">
        <RouterLink
          class="w-fit rounded border border-retro-purple/60 px-3 py-1 text-purple-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-retro-purple/20 hover:shadow-neon"
          to="/impressum"
        >
          Impressum
        </RouterLink>
        <RouterLink
          class="w-fit rounded border border-retro-purple/60 px-3 py-1 text-purple-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-retro-purple/20 hover:shadow-neon"
          to="/datenschutz"
        >
          Datenschutz
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-wrap gap-3">
      <a
        class="contact-box rounded border border-retro-pink px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-retro-pink/20 hover:shadow-neon"
        :href="`mailto:${legal.email}`"
      >
        {{ legal.email }}
      </a>
      <a
        class="contact-box rounded border border-retro-teal px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-retro-teal/20 hover:shadow-neon"
        :href="`tel:${legal.phone}`"
      >
        {{ legal.phoneDisplay }}
      </a>
    </div>
  </footer>
</template>
