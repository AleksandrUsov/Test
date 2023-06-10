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
            <div class="bottom-items">
                <cartDeliveryChip />
                <cartButton />
            </div>
        </div>
    </div>
</template>

<script>
import personCartBox from "@/components/cart/personCartBox";
import cartItem from "@/components/cart/cartItem";
import cartMessage from "@/components/cart/cartMessage";
import cartDeliveryChip from "@/components/cart/cartDeliveryChip";
import cartButton from "@/components/cart/cartButton";
import {mapActions, mapState} from "vuex";

export default {
    name: "cartView",
    components: {
        personCartBox,
        cartItem,
        cartMessage,
        cartDeliveryChip,
        cartButton
    },
    computed: {
        ...mapState('cartItems', ['cartItems'])
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
        min-height: 100vh;

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            max-width: 500px;

            .person-cart-box {
                margin: 20px 0;
                width: 100%;
            }
            .bottom-items {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
</style>
