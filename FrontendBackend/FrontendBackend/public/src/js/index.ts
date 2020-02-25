import "../scss/index.scss";

import "jquery";
import "popper.js";
import "bootstrap";

import Vue from "vue";
import Home from "./home";
import store from './store';
import About from "./about";

//globally register components
Vue.component('Home', Home);
Vue.component('About', About);

new Vue({
    store,
    //router,
    render: h => h(Home),
}).$mount('#app');