import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './app.vue';

import './assets/css/main.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
