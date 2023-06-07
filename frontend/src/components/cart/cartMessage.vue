<template>
    <div class="cart-message">
        <img src="/img/cart-message-icon.png" alt="cart-message-icon" class="message-img">
        <div class="message">Минимальный заказ: 5000 ₽</div>
    </div>
</template>

<script>
export default {
    name: "cartMessage"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.cart-message {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 26px;

    .message-img {
        width: 16px;
        height: 18px;
        margin-right: 15px;
    }
    .message {
        @include inter-400;
        font-size: 14px;
        line-height: 17px;
        color: #FF6B17;
    }
}
</style>
