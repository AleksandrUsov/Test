<template>
    <div class="cart-item">
        <img :src="cartItem.img" alt="cart-item-img" class="cart-item-img">
        <div class="cart-desc-box">
            <div class="cart-item-title">
                {{ cartItem.title }}
            </div>
            <div class="grade-box">
                <img :src="cartItem.gradeStars" alt="grade-stars" class="grade-stars">
                <div class="grade-text">{{ cartItem.gradeText }}</div>
            </div>
        </div>
        <div class="price-and-count-box">
            <div class="price">{{ cartItem.price }}</div>
            <cartButton
                :amount="cartItem.count"
                @postCount="productCount"
            />
        </div>
    </div>
</template>

<script>
import cartButton from "@/components/cartButton";
export default {
    name: "cartItem",
    props: ['cartItem'],
    components: {
        cartButton
    },
    methods: {
        productCount (count) {
            console.log(this.cartItem.id)
            console.log(count)
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
.cart-item {
    background: white;
    width: 488px;
    height: 92px;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin: 13px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .cart-item-img {
        height: 100%;
        margin-right: 5px;
    }
    .cart-desc-box {
        padding: 0 6px 0 15px;
        margin: 7px 5px 0 0;
        align-self: flex-start;

        .cart-item-title {
            @include inter-600;
            font-size: 16px;
            line-height: 20px;
            color: #0E254B;
            margin-bottom: 7px;
        }
        .grade-box {
            display: flex;
            align-items: center;
            cursor: pointer;

            .grade-stars {
                margin-right: 6px;
                width: 78px;
                height: 16px;
            }
            .grade-text {
                @include inter-500;
                font-size: 12px;
                line-height: 15px;
                color: #0E254B99;
            }
        }
    }
    .price-and-count-box {
        margin-top: 19px;
        display: flex;
        align-self: flex-start;
        flex-direction: column;

        .price {
            @include card-price;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 9px;
            align-self: flex-end;
        }
    }
}
</style>
