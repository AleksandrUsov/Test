<template>
    <div class="slider-wrapper">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide
                v-for="(slide, index) in sliderBlockComponents.sliderCards"
                :key="index"
            >
                <sliderCard :value="slide" :slide="slide"/>
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import sliderCard from "@/components/slider/sliderCard";

export default {
    name: "sliderWrapper",
    props: ['sliderBlockComponents'],
    computed: {
        swiperOption() {
            return {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 1,
                initialSlide: 1,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                    bulletElement: 'button'
                },
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        sliderCard
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.slider-wrapper {
    .swiper {
        max-width: 970px;
        overflow: initial;

        .swiper-slide {
            opacity: .4;

            &.swiper-slide-active, &.swiper-slide-next, &.swiper-slide-prev {
                transition: ease-in-out .3s;
                opacity: 1;
            }
        }
    }
    .swiper-pagination {
        position: relative;
        padding-top: 85px;
        width: 100px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 auto;
    }
}
</style>
