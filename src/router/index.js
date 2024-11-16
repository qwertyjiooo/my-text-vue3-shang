import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes, // 路由懒加载
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token'); // 获取 token
  // 判断当前跳转是否时登录页面，如果是，则直接放行
  if (to.path === '/login') {
    next();
  } else {
    // 判断 token 是否存在，如果存在则放行，否则跳转到登录页面
    if (token) {
      next();
    } else {
      // next('/login');
      next();
    }
    next();
  }
});

export default router