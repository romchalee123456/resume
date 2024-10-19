import './assets/main.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Button from "primevue/button";
import './assets/tailwind.css';

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Button', Button);