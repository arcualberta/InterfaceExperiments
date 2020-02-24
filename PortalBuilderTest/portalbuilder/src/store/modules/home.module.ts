import Vue from "vue";
import { Module } from "vuex";
import axios from 'axios';


const homeModule: Module<any, any> = {

    state: {
        title: null,
        subTitle: null,
        portalItems: Array<any>(), //create Item object for this based on DB
        data: []
    },

    getters: {
        //returns the title of the portal
        getTitle(state: any) {
            return state.title || "";
        },

        getSubTitle(state: any) {
            return state.subTitle || "";
        },

        getPortalItems(state: any) {
            return state.portalItems || [];
        },

        getDataNames(state: any) {
            let tmp = [];
            for (let user of state.data) {
                tmp.push(user.name);
            }
            return tmp;
        }
    },
    /**
     * Actions commit mutations
     * Can be asynchronous
     * Called as dispatches - can call other actions too
     * These call mutations on the state, they don't change the state themselves
     * Very similar to mutations otherwise
     **/
    actions: {
        fetchUsers({ commit }):Promise<any> {
            return axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    commit("assignData", response.data);
                    Promise.resolve();
                })
                .catch((error) => {
                    console.log(error.statusText)
                });
        },

        updateUserName({ commit }, newNameObject) {
            commit("setName", newNameObject);
        },

        updatePortalItems({ commit }, payload){
            commit("updatePortalItems", payload);
        },

        deletePortalItem({ commit }, payload) {
            commit('deleteLayoutItem', payload);
        }



    },

    /**
     *  Mutations are called using commits
     *  Directly change the state
     *  Must be synchronous
     **/
    mutations: {

        assignData(state, jsonData) {
            state.data = jsonData;
        },

        setName(state: any, newInfoObject) {
            state.data[newInfoObject.index].name = newInfoObject.newName;
        },


        updateTitle(state: any, newTitle:string) {
            state.title = newTitle;
        },

        updateSubTitle(state: any, newSubTitle: string) {
            state.subTitle = newSubTitle;
        },

        updateLayoutItems(state, payload){
            state.portalElements = payload;
        },

        deleteLayoutItem(state, index) {
            state.portalItems.splice(index, 1);
        }


    },
};
export default homeModule;