import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal';

import Preview from './components/Preview.vue';
import Home from './components/Home.vue';
import DragItem from './components/Item.vue';
import ModalContentsBase from './components/ModalContentsBase.vue';
import Carousel from './components/Carousel.vue';
import Description from './components/Description.vue';
import Form from './components/Form.vue';
//import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './custom.scss'


Vue.config.productionTip = true;

const routes = [
    { path: '/', component: Home },
    { path: '/preview', component: Preview }
]

Vue.use(BootstrapVue)
//Vue.use(PortalVue)
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: true } })
Vue.use(VueRouter)
const router = new VueRouter({ routes });

//globally register components here
Vue.component('DragItem', DragItem);
Vue.component('Home', Home);
Vue.component('Preview', Preview);
Vue.component('Carousel', Carousel);
Vue.component('Description', Description);
Vue.component('Form', Form);
Vue.component('ModalContentsBase', ModalContentsBase);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
