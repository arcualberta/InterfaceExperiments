import Vue from "vue";
import 'es6-promise/auto'
import Vuex from 'vuex'

import home from "./modules/home.module";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    }
})