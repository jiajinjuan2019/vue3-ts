import { createApp } from 'vue'
import App from './App.vue'
import '../src/style/flexbox.scss'
import 'echarts';
import request from './utils/request';
import VChart from "vue-echarts";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
console.log(app)
app.config.globalProperties.$fetch =request.feach
app.config.globalProperties.$instance = request.instance
app.component('v-chart', VChart)
app.use(ElementPlus)
app.mount('#app')
