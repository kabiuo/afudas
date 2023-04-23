import {createApp} from 'vue';
import Antd from 'ant-design-vue';
import router from "./router";
import App from './App';
// import 'ant-design-vue/dist/antd.css';
// import 'ant-design-vue/dist/antd.less';

const app = createApp(App);

app.use(Antd);
app.use(router);
app.mount('#app');