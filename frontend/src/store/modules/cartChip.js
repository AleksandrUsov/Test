import axios from "axios"

const cartChip = {
    namespaced: true,
    state: {
        cartDeliveryChip: {}
    },
    actions: {
        async GET_CART_CHIP({ commit }) {
            axios
                .get('/api/cartDeliveryChip.json')
                .then(response => {
                    const data = response.data
                    commit('SET_CART_CHIP', data)
                })
        }
    },
    mutations: {
        SET_CART_CHIP (state, data) {
            state.cartDeliveryChip = data.deliveryChip
        }
    },
}
export default cartChip
