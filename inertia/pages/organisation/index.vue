<script setup lang="ts">
import { ref } from 'vue'
import Organisation from '#models/organisation'
import Modal from '~/components/Modal.vue'
import { Form } from '@adonisjs/inertia/vue'

defineProps<{
  organisations: Organisation[]
}>()

const createModal = ref<InstanceType<typeof Modal>>()
</script>

<template>
  <button class="btn" @click="createModal?.open()">New organisation</button>

  <Modal ref="createModal">
    <template #header>
      <h3 class="text-lg font-bold">Create organisation</h3>
    </template>

    <Form v-slot="{ errors, processing }" route="organisations.store" resetOnSuccess>
      <input
        required
        name="name"
        type="text"
        class="input"
        minlength="3"
        maxlength="100"
        placeholder="Organisation name"
        :data-invalid="errors.name ? 'true' : undefined"
      />

      <div v-if="errors.name" class="text-red-400 text-sm">
        {{ errors.name }}
      </div>

      <button class="btn btn-primary mt-4" :disabled="processing">Create</button>
    </Form>

    <template #footer>
      <button class="btn btn-outline" @click="createModal?.close()">Cancel</button>
    </template>
  </Modal>

  <h1 class="text-2xl mt-6">Available organisations</h1>

  <ul>
    <li v-for="organisation in organisations" :key="organisation.id">
      {{ organisation.name }}
      <span class="badge badge-neutral badge-xs">{{ organisation.slug }}</span>
    </li>
  </ul>
</template>
