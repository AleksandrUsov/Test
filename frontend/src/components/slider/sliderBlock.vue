<template>
    <div class="slider-block-content">
        <div class="item-in-top">
            <div class="logo-and-name-company">
                <img :src="sliderBlock.logo" alt="menuBlock-company-logo-1" class="company-logo">
                <h2 class="company-name">{{ sliderBlock.companyName }}</h2>
                <div class="product-count">{{ sliderBlock.productCount }}</div>
            </div>
        </div>
        <sliderWrapper :sliderBlockComponents="sliderBlockComponents"/>
    </div>
</template>

<script>

import sliderWrapper from "@/components/slider/sliderWrapper";

export default {
    name: "sliderBlock",
    props: ['sliderBlock', 'sliderBlockComponents'],
    components: {
        sliderWrapper
    }
}
</script>

<style scoped lang="scss">

@import "src/assets/styles/global";

.slider-block-content {
    border-radius: 30px;
    padding: 30px 0 25px 50px;
    overflow: hidden;

    .item-in-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        .product-count {
            @include inter-600;
            font-size: 18px;
            line-height: 23px;
            color: #0E254B99;
            margin-left: 26px;
        }
    }
}
</style>
