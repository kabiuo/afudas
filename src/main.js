import {createApp} from 'vue';
import Antd from 'ant-design-vue';
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App';
import axios from "axios";

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8081';

app.use(ElementPlus)
app.use(Antd);
app.use(router);
app.mount('#app');