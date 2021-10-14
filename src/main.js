import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "semantic-ui-css/semantic.min.css";
import 'mdb-vue-ui-kit/css/mdb.min.css'


import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "bootstrap-icons/font/bootstrap-icons.css";
// VueElement.use(bootstrapVue)
// import LoadScript from 'vue-plugin-load-script';
// Vue.use(LoadScript);

createApp(App).use(store).use(router).mount('#app')
