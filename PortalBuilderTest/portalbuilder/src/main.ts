import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import Preview from './components/Preview.vue';
import Home from './components/Home.vue';
import DragItem from './components/Item.vue';

Vue.config.productionTip = true;

const routes = [
    { path: '/', component: Home },
    { path: '/preview', component: Preview }
]

Vue.use(VueRouter)
const router = new VueRouter({ routes });

//globally register components here
Vue.component('DragItem', DragItem);
Vue.component('Home', Home);
Vue.component('Preview', Preview);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
