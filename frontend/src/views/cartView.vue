<template>
    <div class="cart">
        <div class="container">
            <personCartBox class="person-cart-box"/>
            <cartItem
                v-for="(cartItem, index) in cartItems"
                :key="index"
                :cartItem="cartItem"
            />
            <cartMessage />
        </div>
    </div>
</template>

<script>
import personCartBox from "@/components/cart/personCartBox";
import cartItem from "@/components/cart/cartItem";
import cartMessage from "@/components/cart/cartMessage";
import {mapActions, mapState} from "vuex";
export default {
    name: "cartView",
    components: {
        personCartBox,
        cartItem,
        cartMessage
    },
    computed: {
        ...mapState('cartItems', {
            cartItems: 'cartItems'
        })
    },
    methods: {
        ...mapActions('cartItems', ['GET_CART_ITEMS'])
    },
    created() {
        this.GET_CART_ITEMS();
    }
}
</script>

<style scoped lang="scss">
    @import "src/assets/styles/global";
    .cart {
        min-height: 500px;

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .person-cart-box {
                margin: 20px 0;
                width: 500px;
            }
        }
    }
</style>
