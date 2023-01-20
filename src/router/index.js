
import {createRouter,createWebHistory} from 'vue-router'
import Signup from '../components/SignupUser.vue'
import LoginUser from '../components/LoginUser.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Home from '../components/HomeUser.vue'

  const routes = [
  {
    path: '/singUp',
    name: 'signupUser',
    component:Signup,
  },
  {
    path: '/login',
    name: 'loginUser',
    component: LoginUser,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/home',
    name: 'home',
    component: Home
    
  },
  {
    path: '/',
    name: '',

    component: Home
  }
]
const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})
export default router