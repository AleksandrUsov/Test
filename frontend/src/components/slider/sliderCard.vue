<template>
    <div :class="['slide-card', {'stop-list' : slide.stopList}]">
        <img :src="slide.img" alt="slide-card-img" class="card-img">
        <div class="card-content">
            <div class="top-and-middle-items">
                <h3 class="title">{{ slide.title }}</h3>
                <div class="card-desc">{{ slide.desc }}</div>
            </div>
            <div class="items-in-bottom">
                <div class="card-price">{{ slide.price }}</div>
                <cartButton
                    :stopList="slide.stopList"
                    @postCount="productCount"
                />
            </div>
        </div>
    </div>
</template>

<script>
import cartButton from "@/components/cartButton";
export default {
    name: "sliderCard",
    data () {
        return {
            amount: 0
        }
    },
    props: ['slide'],
    components: {
        cartButton
    },
    methods: {
        productCount (count) {
            console.log(this.slide.id)
            console.log(count)
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.slide-card {
    width: 310px;
    height: 420px;
    border-radius: 20px;
    background: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    .card-img {
        width: 100%;
        height: 242px;
    }
    .card-content {
        padding: 15px;
        height: 178px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .top-and-middle-items {
            .title {
                @include card-title;
            }
            .card-desc {
                @include card-desc;
            }
        }

        .items-in-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .card-price {
                @include card-price;
            }
        }
    }
}
.stop-list {
    filter: grayscale(80%);
}
</style>
