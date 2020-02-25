import Vue from "vue";
import { mapState } from "vuex";
import store from "../store";

export default class Home extends Vue{
	el: "#app-home";//,
	//store,
	//data() {
	//	return {
	message: string = "Hello world!!!";
	//	};
	//},
	//computed: {
	//	...mapState(["anotherMessage"])
	//},
	//methods: {
		changeMessage() {
			this.$store.commit("changeMessage");
		}
	//}
};