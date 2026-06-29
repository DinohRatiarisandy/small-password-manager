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
      cn('avatar avatar-placeholder', props.dataTip && 'tooltip tooltip-info', {
        'tooltip-top': props.tooltipPosition === 'top',
        'tooltip-bottom': props.tooltipPosition === 'bottom',
        'tooltip-left': props.tooltipPosition === 'left',
        'tooltip-right': props.tooltipPosition === 'right',
      })
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
