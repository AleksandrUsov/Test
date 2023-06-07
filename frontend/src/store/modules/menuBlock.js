import axios from "axios"

const menuBlock = {
    namespaced: true,
    state: {
        menuBlocks: []
    },
    actions: {
        async GET_MENU({ commit }) {
            axios
                .get('/api/menuBlocks.json')
                .then(response => {
                    const data = response.data
                    commit('SET_MENU', data)
                })
        }
    },
    mutations: {
        SET_MENU (state, data) {
            state.menuBlocks = data.menuBlocks
        }
    },
}
export default menuBlock
