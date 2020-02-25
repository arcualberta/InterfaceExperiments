import Vue from "vue";
import { mapState } from "vuex";
import store from "../store";

const vm = new Vue({
	el: "#app-home",
	store,
	data() {
		return {
			message: "Hello world!!!"
		};
	},
	computed: {
		...mapState(["anotherMessage"])
	},
	methods: {
		changeMessage() {
			this.$store.commit("changeMessage");
		}
	}
});