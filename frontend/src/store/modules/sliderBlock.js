import axios from "axios"

const sliderBlock = {
    namespaced: true,
    state: {
        sliderBlocks: []
    },
    actions: {
        async GET_SLIDER({ commit }) {
            axios
                .get('/api/sliderBlock.json')
                .then(response => {
                    const data = response.data
                    commit('SET_SLIDER', data)
                })
        }
    },
    mutations: {
        SET_SLIDER (state, data) {
            state.sliderBlocks = data.sliderBlocks
        }
    },
}
export default sliderBlock
