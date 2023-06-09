import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts';
import axios from "axios";
//引入echarts

const app = createApp(App)


axios.defaults.baseURL = "api"
app.config.globalProperties.$echarts = echarts;//全局使用
app.use(ElementPlus)
app.use(router)
app.mount('#app')


