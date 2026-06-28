<script setup lang="ts">
import Organisation from '#models/organisation'

defineProps<{
  organisations: Organisation[]
}>()
</script>

<template>
  <h1 class="text-2xl">Available organisations</h1>

  <ul>
    <li v-for="organisation in organisations" :key="organisation.id">
      {{ organisation.name }}
    </li>
  </ul>
</template>
