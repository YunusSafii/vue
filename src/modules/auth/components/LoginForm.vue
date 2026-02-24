<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const email = ref('')
const password = ref('')
const loading = ref(false)

const authStore = useAuthStore()

async function handleLogin() {
  loading.value = true
  await authStore.login(email.value, password.value)
  loading.value = false
}
</script>

<template>
  <n-card title="Login" style="width: 350px">
    <n-space vertical>
      <n-input v-model:value="email" placeholder="Email" />
      <n-input
        v-model:value="password"
        type="password"
        placeholder="Password"
      />
      <n-button
        type="primary"
        block
        :loading="loading"
        @click="handleLogin"
      >
        Login
      </n-button>
    </n-space>
  </n-card>
</template>