<template>
    <div class="cart-delivery-chip">
        <chipsAboutOrder
            :chip="cartDeliveryChip"
        />
    </div>
</template>

<script>
import chipsAboutOrder from "@/components/menu/chipsAboutOrder";
import {mapActions, mapState} from "vuex";
export default {
    name: "cartDeliveryChip",
    components: {
        chipsAboutOrder
    },
    computed: {
        ...mapState('cartChip', {
            cartDeliveryChip: 'cartDeliveryChip'
        }),
    },
    methods: {
        ...mapActions('cartChip', ['GET_CART_CHIP']),
    },
    created() {
        this.GET_CART_CHIP();
    }
}
</script>

<style scoped lang="scss">

</style>
