import type { RouteRecordRaw } from 'vue-router'
import LoginView from './views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

export default routes