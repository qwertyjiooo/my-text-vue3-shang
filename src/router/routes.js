import Home from '@/views/home/index.vue'
import My from '@/views/my/index.vue'
import Login from '@/views/login/index.vue'
import VueUseDemo1 from '@/views/vueuse/demo1.vue'
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
  },
  {
    path: '/demo1',
    name: 'VueUseDemo1',
    component: VueUseDemo1
  }
]

export default routes