import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./plugins/vue2-leaflet"

import BootstrapVue from 'bootstrap-vue'




Vue.use(BootstrapVue)
// createApp(App).use(router).mount('#app')
new Vue({
    router,
    // store,
    // bootstrap,
    render: h => h(App),
}).$mount('#app')