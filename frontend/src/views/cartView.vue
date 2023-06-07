<template>
    <div class="cart">
        <div class="container">
            <personCartBox class="person-cart-box"/>
        </div>
    </div>
</template>

<script>
import personCartBox from "@/components/personCartBox";
export default {
    name: "cartView",
    components: {
        personCartBox
    }
}
</script>

<style scoped lang="scss">
    @import "src/assets/styles/global";
    .cart {

        .container {

            .person-cart-box {
                margin: 20px 0;
            }
        }
    }
</style>
