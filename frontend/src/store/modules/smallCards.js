import axios from "axios"
import menuBlock from "../../components/menu/menuBlock.vue"

const smallCards = {
    namespaced: true,
    state: {
        smallCards: [],
    },
    actions: {
        async GET_SMALL_CARDS({ commit }) {
             axios
                .get('/api/smallCards.jso' + menuBlock.data().page)
                .then(response => {
                    const data = response.data
                    commit('SET_SMALL_CARDS', data)
                })
        }
    },
    mutations: {
        SET_SMALL_CARDS (state, data) {
            state.smallCards = data.smallCards
        }
    },
}
export default smallCards
