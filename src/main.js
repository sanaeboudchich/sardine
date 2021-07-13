import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./plugins/vue2-leaflet"
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import store from './store'


Vue.config.productionTip = false;
Vue.use(BootstrapVue)

const config = {
        apiKey: "AIzaSyBX_Nk8e54pD36s783HkuedzBhBOrCzG1s",
        authDomain: "sardine-807a2.firebaseapp.com",
        projectId: "sardine-807a2",
        storageBucket: "sardine-807a2.appspot.com",
        messagingSenderId: "403035783837",
        appId: "1:403035783837:web:1c955ba39ab3c1c3fe0a74",
        measurementId: "G-SXH3WEE67Z"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });


// createApp(App).use(router).mount('#app')
new Vue({
    router,
    store,
    // bootstrap,
    render: h => h(App)
}).$mount('#app')