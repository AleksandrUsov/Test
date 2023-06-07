<template>
    <router-link to="/cart" class="cart-box">
        <img src="/img/status-block-cart.png" alt="status-block-cart" class="user-cart-img">
        <div class="cart-text">Ваш заказ</div>
        <div class="cart-price">
            9450 ₽
        </div>
    </router-link>
</template>

<script>
export default {
    name: "personCartBox"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.cart-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF6B17;
    border-radius: 50px;
    padding: 6px 5px 6px 10px;
    @include inter-600;
    font-size: 16px;
    line-height: 20px;
    color: white;
    margin-right: 20px;
    text-decoration: none;

    .user-cart-img {
        width: 20px;
        height: 20px;
    }

    .cart-text {
        margin: 0 7px;
    }

    .cart-price {
        background: white;
        color: #FF6B17;
        padding: 2px 7px;
        border-radius: 22px;
    }
}
</style>
