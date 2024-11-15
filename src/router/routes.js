import Home from '@/views/home/index.vue'
import My from '@/views/my/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

export default routes