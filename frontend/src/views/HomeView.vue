<template>
    <div class="home">
        <statusBar />
        <promoBlock />
        <historyStroke id="historyStroke"/>
        <categoriesList />
        <menuBlock
            v-for="(menuBlock, index) in menuBlocks"
            :key="index"
            :menuBlockData="menuBlock.menuBlockData"
            :menuBlockComponentsData="menuBlock.menuBlockComponentsData"
            class="menu-block"
        />
<!--        <div class="container">
            <sliderBlock
                v-for="(sliderBlock, index) in sliderBlocks"
                :key="index"
                :sliderBlock="sliderBlock.sliderBlockData"
                :sliderBlockComponents="sliderBlock.sliderBlockComponentsData"
                class="slider-block"
            />
        </div>-->
        <advantagesBlock id="advantagesBlock"/>
    </div>
</template>

<script>

import statusBar from "@/components/statusBar";
import promoBlock from "@/components/promoBlock";
import historyStroke from "@/components/historyStroke";
import categoriesList from "@/components/categoriesList/categoriesList";
import menuBlock from "@/components/menu/menuBlock";
/*
import sliderBlock from "@/components/slider/sliderBlock";
*/
import advantagesBlock from "@/components/advantages/advantagesBlock";
import {mapState, mapActions} from "vuex"
/*
import smallCards from "@/store/modules/smallCards";
*/

export default {
    name: 'HomeView',
    components: {
        statusBar,
        promoBlock,
        historyStroke,
        categoriesList,
        menuBlock,
/*
        sliderBlock,
*/
        advantagesBlock
    },
    computed: {
        ...mapState('menuBlock', ['menuBlocks']),
/*
        ...mapState('sliderBlock', ['sliderBlocks']),
*/
/*
        ...mapState('smallCards', ['smallCards'])
*/
    },
    methods: {
        ...mapActions('menuBlock', ['GET_MENU']),
// /*
//         ...mapActions('sliderBlock', ['GET_SLIDER']),
// */
/*
        ...mapActions('smallCards', ['GET_SMALL_CARDS'])
*/
    },
    created() {
        this.GET_MENU();
/*
        this.GET_SLIDER();
*/
/*
        this.GET_SMALL_CARDS();
*/
    }
}
</script>

<style scoped lang="scss">

    @import "src/assets/styles/global";

    #historyStroke {
        margin-bottom: 20px;
    }
    .menu-block {
        margin-bottom: 80px;
    }
    .slider-block {
        margin-bottom: 70px;

        &:nth-child(1) {
            background: linear-gradient(to right top, rgba(129, 202, 255, 0.7), rgba(189, 227, 255, 0.7));
        }
        &:nth-child(2) {
            background: linear-gradient(to right top, rgba(255, 182, 129, 0.7), rgba(255, 197, 189, 0.7));
        }
    }
    #advantagesBlock {
        margin-bottom: 130px;
    }
</style>
