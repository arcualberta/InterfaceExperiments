import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vueLocalStorage = new VuexPersist({
	key: "vuex", //the key to store the state in the storage provider
	storage: window.localStorage //or window.sesssionStorage or localForage
	//some other stuff here that the tutorial commented out
});

export default new Vuex.Store({
	state: {
		anotherMessage: "This message is from STATE"
	},
	mutations: {
		changeMessage(state:any) {
			state.anotherMessage = `This message was changed at ${new Date().toLocaleString()} }`;
		}

	},
	actions: {

	},
	plugins: [vueLocalStorage.plugin]
})