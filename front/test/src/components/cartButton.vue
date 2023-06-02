<template>
    <button class="on-cart">
        <img src="/img/status-block-cart.png" alt="status-block-cart" class="cart-img">
        <div class="cart-text">В заказ</div>
    </button>
</template>

<script>
export default {
    name: "cartButton"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.on-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF6B17;
    border-radius: 50px;
    padding: 8px 30px;
    border: none;
    cursor: pointer;

    .cart-img {
        margin-right: 9px;
        width: 20px;
        height: 20px;
    }
    .cart-text {
        @include inter-600;
        font-size: 16px;
        line-height: 20px;
        color: white;
    }
}

</style>
