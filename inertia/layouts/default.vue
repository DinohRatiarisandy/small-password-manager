<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import Header from '~/components/Header.vue'
import Sidebar from '~/components/sidebar/Sidebar.vue'
</script>

<template>
  <Header />

  <section class="flex">
    <div class="flex-1">
      <Sidebar />
    </div>

    <main class="border mx-auto w-full max-w-6xl px-4 py-6">
      <slot />
    </main>
  </section>

  <Toaster position="top-center" rich-colors />
</template>
