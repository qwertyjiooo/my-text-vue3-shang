import { createApp } from 'vue'
import './style/tailwindcss/style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/theme-chalk/el-message.css';

// console.log('环境变量：', import.meta.env);

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
