<template>
    <div>
        <button
            v-if="disable"
            disabled
            class="cart-button"
        >
            <div class="overlay"></div>
            <div class="cart-text">Оформить</div>
        </button>
        <button
            v-if="!disable"
            class="cart-button"
        >
            <div class="cart-text">Оформить</div>
        </button>
    </div>
</template>

<script>
export default {
    name: "cartButton",
    data () {
        return {
            disable: true,
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.cart-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF6B17;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    width: 184px;
    height: 50px;
    position: relative;

    .cart-text {
        @include inter-600;
        font-size: 16px;
        line-height: 20px;
        color: white;
    }

    &:disabled {
        cursor: default;
        background: #0E254B99;

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            background: rgba(32, 47, 73, 0.6);
            border-radius: 50px;
        }
    }
}
</style>
