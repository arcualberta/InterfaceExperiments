import Vue from "vue";
import { Module } from "vuex";


const homeModule: Module<any, any> = {

    state: {
        title: null,
        subTitle: null,
        portalItems: Array<any>() //create Item object for this based on DB
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
        }
    },

    actions: {
        updatePortalItems({ commit }, payload){
            commit("updatePortalItems", payload);
        },

        deletePortalItem({ commit }, payload) {
            commit('deleteLayoutItem', payload);
        }



    },

    mutations: {
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