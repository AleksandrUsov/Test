<template>
    <div class="container">
        <div class="menu-block-content">
            <div class="item-in-top">
                <div class="logo-and-name-company">
                    <img :src="menuBlockData.logo" alt="menuBlock-company-logo-1" class="company-logo">
                    <h2 class="company-name">{{ menuBlockData.companyName }}</h2>
                </div>
                <div class="chips-about-order">
                    <chipsAboutOrder
                        v-for="(chip, index) in menuBlockComponentsData.chips"
                        :key="index"
                        :chip="chip"
                    />
                </div>
            </div>
            <div class="small-cards">
                <smallCardProduct
                    v-for="(smallCard, index) in smallCards"
                    :key="index"
                    :smallCard="smallCard"
                />
            </div>
<!--            <div class="small-cards"
                v-if="!menuBlockData.isLarge"
            >
                <smallCardProduct
                    v-for="(smallCard, index) in menuBlockComponentsData.smallCards"
                    :key="index"
                    :smallCard="smallCard"
                />
            </div>
            <div class="large-cards"
                v-if="menuBlockData.isLarge"
            >
                <largeMenuProduct
                    v-for="(largeCard, index) in menuBlockComponentsData.largeCards"
                    :key="index"
                    :largeCard="largeCard"
                />
            </div>-->
            <div class="pagination-block">
                <button class="more">
                    Показать ещё
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import chipsAboutOrder from "@/components/menu/chipsAboutOrder";
import smallCardProduct from "@/components/menu/smallCardProduct";
import smallCards from "@/store/modules/smallCards";
/*
import largeMenuProduct from "@/components/menu/largeMenuProduct";
*/

export default {
    name: "menuBlock",
    props: ['menuBlockData', 'menuBlockComponentsData', 'smallCards'],
    components: {
        chipsAboutOrder,
        smallCardProduct,
/*
        largeMenuProduct
*/
    },
    created() {
        console.log(smallCards)
    }
}
</script>

<style scoped lang="scss">

@import "src/assets/styles/global";

.menu-block-content {
    .item-in-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;

        .chips-about-order {
            display: flex;
            align-items: center;
        }
    }
    .small-cards, .large-cards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .pagination-block {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .more {
            color: #FF6B17;
            background: #FFE9DC;
            border-radius: 50px;
            border: solid 1px #FF6B1726;
            padding: 9px 30px;
            @include inter-600;
            font-size: 16px;
            line-height: 30px;
            cursor: pointer;
        }
    }
}


</style>
