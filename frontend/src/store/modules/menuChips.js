import axios from "axios"

const menuChips = {
    namespaced: true,
    state: {
        menuChips: []
    },
    actions: {
        async GET_CHIPS({ commit }) {
            axios
                .get('/api/menuChips.json')
                .then(response => {
                    const data = response.data
                    commit('SET_CHIPS', data)
                })
        }
    },
    mutations: {
        SET_CHIPS (state, data) {
            state.menuChips = data.chips
        }
    },
}
export default menuChips
