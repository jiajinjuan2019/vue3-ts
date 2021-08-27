import { createApp } from 'vue'
import App from './App.vue'
import '../src/style/flexbox.scss'
import  'echarts';
import VChart from "vue-echarts";

const app = createApp(App)
app.component('v-chart', VChart)
app.mount('#app')
