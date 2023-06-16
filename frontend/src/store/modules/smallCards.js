import axios from "axios"

const smallCards = {
    namespaced: true,
    state: {
        smallCards: []
    },
    actions: {
        async GET_SMALL_CARDS({ commit }) {
            axios
                .get('/api/menuBlock.json')
                .then(response => {
                    const data = response.data
                    commit('SET_SMALL_CARDS', data)
                })
        }
    },
    mutations: {
        SET_SMALL_CARDS (state, data) {
            state.smallCards = data.menuBlocks
        }
    },
}
export default smallCards
