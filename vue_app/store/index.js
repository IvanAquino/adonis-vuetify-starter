import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {

        SET_USER (state, user) {
            state.user = user
        }

    }
})

export default store