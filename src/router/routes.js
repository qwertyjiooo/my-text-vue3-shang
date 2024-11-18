import Home from '@/views/home/index.vue'
import My from '@/views/my/index.vue'
import Login from '@/views/login/index.vue'

const routes = [
  // 重定向到首页
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default routes