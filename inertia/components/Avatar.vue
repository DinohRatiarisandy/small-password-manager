<script lang="ts" setup>
import { cn } from 'tailwind-variants'

const props = defineProps<{
  initials?: string
  dataTip?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
}>()
</script>

<template>
  <div
    :class="
      cn(
        'tooltip avatar avatar-placeholder',
        props.tooltipPosition && `md:tooltip-${props.tooltipPosition} md:tooltip-center`
      )
    "
    :data-tip="props.dataTip"
  >
    <div class="bg-neutral text-neutral-content w-8 rounded-full">
      <span class="text-xs font-bold">
        {{ initials }}
      </span>
    </div>
  </div>
</template>
