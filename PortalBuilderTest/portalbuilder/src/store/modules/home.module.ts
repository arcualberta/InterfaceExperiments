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
        addItemToPortal({ commit }, { id, type }) {
            
        },

        moveItemInPortal({ commit }) {

        },

        deleteItemInPortal({ commit }) {

        },



    },

    mutations: {
        updateTitle(state: any, newTitle:string) {
            state.title = newTitle;
        },

        updateSubTitle(state: any, newSubTitle: string) { //passed payload value should be an object
            state.subTitle = newSubTitle;
        }

    },
};
export default homeModule;