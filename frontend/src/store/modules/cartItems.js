import axios from "axios"

const cartItems = {
    namespaced: true,
    state: {
        cartItems: []
    },
    actions: {
        async GET_CART_ITEMS({ commit }) {
            axios
                .get('/api/cartItems.json')
                .then(response => {
                    const data = response.data
                    commit('GET_CART_ITEMS', data)
                })
        }
    },
    mutations: {
        GET_CART_ITEMS (state, data) {
            state.cartItems = data.cartItems
        }
    },
}
export default cartItems
