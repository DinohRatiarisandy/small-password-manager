<script lang="ts" setup>
const props = defineProps<{
  error?: string
  name?: string
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </g>
    </svg>
    <input
      type="text"
      required
      placeholder="FullName"
      pattern="[A-Za-z_-]+"
      title="Only letters, underscores (_) and dashes (-) are allowed."
      minlength="3"
      maxlength="100"
      :data-invalid="error ? 'true' : undefined"
      :name="name"
    />
  </label>
  <div class="text-red-400 text-xs" v-if="error">{{ error }}</div>
</template>
