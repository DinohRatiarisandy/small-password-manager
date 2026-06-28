<script setup lang="ts">
import { useTemplateRef } from 'vue'

const modal = useTemplateRef('modal')

function open() {
  modal.value?.showModal()
}

function close() {
  modal.value?.close()
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <dialog ref="modal" class="modal">
    <div class="modal-box">
      <div v-if="$slots.header" class="mb-4">
        <slot name="header" />
      </div>

      <div>
        <slot />
      </div>

      <div v-if="$slots.footer" class="modal-action mt-4">
        <slot name="footer" />
      </div>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
