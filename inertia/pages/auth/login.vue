<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
import PasswordInput from '~/components/PasswordInput.vue'
import EmailInput from '~/components/EmailInput.vue'
</script>

<template>
  <div class="form-container">
    <div>
      <h1>Login</h1>
      <p>Enter your details below to login to your account</p>
    </div>

    <div>
      <Form v-slot="{ processing, errors }" route="session.store">
        <div>
          <EmailInput name="email" :error="errors.email" />
        </div>

        <div>
          <PasswordInput
            id="password"
            type="password"
            name="password"
            autocomplete="password"
            placeholder="Password"
            :error="errors.password"
          />
        </div>

        <div>
          <button type="submit" class="btn btn-primary" :disabled="processing">Login</button>
        </div>
      </Form>
    </div>
  </div>
</template>
