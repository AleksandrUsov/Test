import axios from "axios"

const smallCards = {
    namespaced: true,
    state: {
        smallCards: []
    },
    actions: {
        async GET_SMALL_CARDS({ commit }) {
            axios
                .get('project-back.test/api/dishes')
                .then(response => {
                    const data = response.data
                    commit('SET_SMALL_CARDS', data)
                })
        }
    },
    mutations: {
        SET_SMALL_CARDS (state, data) {
            state.smallCards = data.cards
        }
    },
}
export default smallCards
