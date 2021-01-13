import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    modules: {
        user
    }
});

export default store;