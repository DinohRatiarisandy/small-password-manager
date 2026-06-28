<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
import EmailInput from '~/components/EmailInput.vue'
import PasswordInput from '~/components/PasswordInput.vue'
import FullNameInput from '~/components/FullNameInput.vue'
</script>

<template>
  <div class="form-container">
    <div>
      <h1>Signup</h1>
      <p>Enter your details below to create your account</p>
    </div>

    <div>
      <Form v-slot="{ processing, errors }" route="new_account.store">
        <div>
          <FullNameInput name="fullName" :error="errors.fullName" />
        </div>

        <div>
          <EmailInput name="email" :error="errors.email" />
        </div>

        <div>
          <PasswordInput
            id="password"
            name="password"
            autocomplete="new-password"
            placeholder="Password"
            :error="errors.password"
          />
        </div>

        <div>
          <PasswordInput
            id="passwordConfirmation"
            name="passwordConfirmation"
            autocomplete="new-password"
            placeholder="Confirm password "
            :error="errors.passwordConfirmation"
          />
        </div>

        <div>
          <button type="submit" class="btn btn-secondary" :disabled="processing">Sign up</button>
        </div>
      </Form>
    </div>
  </div>
</template>
