import { defineStore } from 'pinia'
import { loginApi } from '@/modules/auth/services/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as any
  }),

  actions: {
    async login(email: string, password: string) {
      const data = await loginApi(email, password)
      this.token = data.token
      this.user = data.user
    }
  }
})