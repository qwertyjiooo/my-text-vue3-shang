import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'element-plus/theme-chalk/el-message.css';

// console.log('环境变量：', import.meta.env);

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
