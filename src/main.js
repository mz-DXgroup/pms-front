import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import routes from './router';
import App from './App.vue'

const app = createApp(App)
app.use(routes);
app.mount('#app');
