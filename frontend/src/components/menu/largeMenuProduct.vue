<template>
    <div :class="['largeMenuCard', {'stop-list' : largeCard.stopList}]">
        <div class="card-images">
            <template v-if="largeCard.img3">
                <img :src="largeCard.img1" alt="big-card-img" class="card-img" style="max-width: 210px">
                <img :src="largeCard.img2" alt="big-card-img" class="card-img" style="max-width: 210px">
                <img :src="largeCard.img3" alt="big-card-img" class="card-img" style="max-width: 210px">
            </template>
            <template v-else-if="!largeCard.img3">
                <img :src="largeCard.img1" alt="big-card-img" class="card-img">
                <img :src="largeCard.img2" alt="big-card-img" class="card-img">
            </template>
        </div>
        <div class="card-content">
            <div class="top-and-middle-items">
                <div class="items-in-top">
                    <div class="title-and-chip">
                        <div class="chip">
                            {{ largeCard.chip }}
                        </div>
                        <h3 class="title">{{ largeCard.title }}</h3>
                    </div>
                    <router-link to="/" class="food-info-icon">
                        <img src="/img/food-info-icon.png" alt="food-info-icon">
                    </router-link>
                </div>
                <div class="info-about-kit">
                    <img src="/img/kit-info-icon.png" alt="kit-info-icon" class="info-about-kit-icon">
                    <div>{{ largeCard.infoAboutKit }}</div>
                </div>
                <div class="card-desc">{{ largeCard.desc }}</div>
            </div>
            <div class="items-in-bottom">
                <div class="card-price">{{ largeCard.price }}</div>
                <cartButton
                    :stopList="largeCard.stopList"
                    :amount="largeCard.count"
                    @postCount="productCount"
                />
            </div>
        </div>
    </div>
</template>

<script>
import cartButton from "@/components/cardButton";

export default {
    name: "largeMenuProduct",
    methods: {
        productCount (count) {
            console.log(this.largeCard.id)
            console.log(count)
        }
    },
    components: {
        cartButton
    },
    props: ['largeCard']
}
</script>

<style scoped lang="scss">

@import "src/assets/styles/global";

.largeMenuCard {
    width: 640px;
    height: 420px;
    border-radius: 20px;
    background: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    .card-images {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .card-img {
            max-width: 317px;
            width: 100%;
            height: 200px;

            &:first-child {
                border-radius: 20px 0 0 20px;
            }

            &:last-child {
                border-radius: 0 20px 20px 0;
            }
        }
    }

    .card-content {
        padding: 15px;
        height: 220px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .top-and-middle-items {
            .items-in-top {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .title-and-chip {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;

                    .chip {
                        background: #D5E5FB;
                        border-radius: 34px;
                        color: #3485FF;
                        padding: 2px 13px;
                        @include inter-600;
                        font-size: 18px;
                        line-height: 23px;
                        cursor: pointer;
                    }

                    .title {
                        @include inter-600;
                        font-size: 18px;
                        line-height: 23px;
                        max-width: 260px;
                        margin-left: 7px;
                    }
                }

                .food-info-icon {
                    width: 14px;
                    height: 14px;

                    img {
                        @extend .food-info-icon;
                    }
                }
            }

            .info-about-kit {
                display: flex;
                align-items: center;

                .info-about-kit-icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }

                div {
                    @include inter-400;
                    font-size: 14px;
                    line-height: 17px;
                    color: #0E254B;

                }
            }

            .card-desc {
                max-width: 486px;
                @include card-desc;
            }
        }

        .items-in-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .card-price {
                @include mont-700;
                font-size: 22px;
                line-height: 27px;
                color: #3485FF;
            }

        }
    }
}
.stop-list {
    filter: grayscale(80%);
}
</style>
