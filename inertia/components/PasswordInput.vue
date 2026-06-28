<script setup lang="ts">
const props = defineProps<{
  name: string
  id?: string
  label?: string
  autocomplete?: string
  error?: string
  placeholder?: string
}>()
</script>

<template>
  <label class="input validator">
    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2.5"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
        ></path>
        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
      </g>
    </svg>
    <input
      :id="id ?? name"
      type="password"
      :name="name"
      :autocomplete="autocomplete"
      :data-invalid="error ? 'true' : undefined"
      :placeholder="placeholder"
    />
  </label>
  <div class="text-red-400 text-xs" v-if="error">{{ error }}</div>
</template>
