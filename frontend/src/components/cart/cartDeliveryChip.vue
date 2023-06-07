<template>
    <div class="cart-delivery-chip">
        <template
            v-for="(chip, index) in chips"
            :key="index"
        >
            <chipsAboutOrder
                :chip="chip"
                v-if="chip.class === 'delivery'"
            />
        </template>
    </div>
</template>

<script>
import chipsAboutOrder from "@/components/menu/chipsAboutOrder";
export default {
    name: "cartDeliveryChip",
    components: {
        chipsAboutOrder
    }
}
</script>

<style scoped>

</style>
