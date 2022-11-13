import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import AxiosAdapter from './infra/AxiosAdapter'
import TodoHttpGateway from './gateways/TodoHttpGateway';

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`

const app = createApp(App);

const httpClient = new AxiosAdapter();
const todoGateway = new TodoHttpGateway(httpClient, BASE_URL);

app.provide("todoGateway", todoGateway);
app.mount('#app');
