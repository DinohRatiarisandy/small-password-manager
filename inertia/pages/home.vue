<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Homepage" />
  <div>
    <Link route="organisations.index"><a class="link link-primary">Organisations</a></Link>
    <h1 class="text-3xl">HOME PAGE</h1>
  </div>
</template>
