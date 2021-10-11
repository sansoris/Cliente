import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "semantic-ui-css/semantic.min.css";
import "/css/bootstrap.min.css";
import "/js/bootstrap.bundle.min.js";

// VueElement.use(bootstrapVue)


createApp(App).use(store).use(router).mount('#app')
