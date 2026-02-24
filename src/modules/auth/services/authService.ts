import { api } from '@/services/api'

export async function loginApi(email: string, password: string) {
  const response = await api.post('v1/user/login', {
    email,
    password
  })

  return response.data
}