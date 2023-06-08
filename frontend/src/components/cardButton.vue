<template>
    <div>
        <template
            v-if="stopList"
        >
            <button
                class="in-cart"
                disabled
            >
                <div class="cart-text">Нет в наличии</div>
            </button>
        </template>
        <template
            v-else
        >
            <button
                v-if="count === 0"
                class="in-cart"
                @click="inCart(); postCount()"
            >
                <img src="/img/status-block-cart.png" alt="status-block-cart" class="cart-img">
                <div class="cart-text">В заказ</div>
            </button>
            <button
                v-else
                class="active-button"
            >
                <button @click="transformAmount('-'); postCount()">
                    <img src="/img/cartMinus.png" alt="cartMinus">
                </button>
                <div class="count">
                    {{ count }} {{ word }}
                </div>
                <button @click="transformAmount('+'); postCount()">
                    <img src="/img/cartPlus.png" alt="cartPlus">
                </button>
            </button>
        </template>
    </div>
</template>

<script>
export default {
    name: "cartButton",
    data () {
        return {
            count: this.amount,
            message: 'Вы выбрали максимальное кол-во одинаковых товаров'
        }
    },
    methods: {
        inCart () {
            this.count = 1
        },
        transformAmount (action) {
            if (action === '-') {
                this.count -= 1
            } else if (action === '+') {
                if (this.count === 4) {
                    console.log(this.message)
                } else {
                    this.count += 1
                }
            }
        },
        postCount () {
            this.$emit('postCount', {
                count: this.count
            })
        },
    },
    computed: {
        word: function () {
            if (this.count === 0) {
                return ''
            } else if (this.count === 1) {
                return 'набор'
            } else  {
                return 'набора'
            }
        }
    },
    props: ['stopList', 'amount'],
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.in-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF6B17;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    width: 148px;
    height: 36px;

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
    &:disabled {
        cursor: default;
    }
}
.active-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFE9DC;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    width: 148px;
    height: 36px;

    button {
        border: none;
        background: transparent;
        width: 38px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

    }
    .count {
        @include inter-600;
        font-size: 16px;
        line-height: 20px;
        color: #FF6B17;
    }
}

</style>
