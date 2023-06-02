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
        <div class="container">
            <sliderBlock
                v-for="(sliderBlock, index) in sliderBlocks"
                :key="index"
                :sliderBlock="sliderBlock.sliderBlockData"
                :sliderBlockComponents="sliderBlock.sliderBlockComponentsData"
                class="slider-block"
            />
        </div>
        <advantagesBlock id="advantagesBlock"/>
    </div>
</template>

<script>

import statusBar from "@/components/statusBar";
import promoBlock from "@/components/promoBlock";
import historyStroke from "@/components/historyStroke";
import categoriesList from "@/components/categoriesList/categoriesList";
import menuBlock from "@/components/menu/menuBlock";
import sliderBlock from "@/components/slider/sliderBlock";
import advantagesBlock from "@/components/advantages/advantagesBlock";

export default {
    name: 'HomeView',
    data () {
        return {
            menuBlocks: [
                {
                    menuBlockData: {
                        logo: '/img/menuBlock-company-logo-1.png',
                        companyName: 'Футура',
                        isLarge: false
                    },
                    menuBlockComponentsData: {
                        chips: [
                            {img: '/img/info-chip-icon-1.png', desc: 'Заказать не позднее чем за:', span: ' 3 часа'},
                            {img: '/img/info-chip-icon-2.png', desc: 'Минимальный заказ:', span: ' 5000 ₽'},
                            {img: '/img/info-chip-icon-3.png', desc: 'Доставка:', span: ' бесплатно'},
                        ],
                        smallCards: [
                            {
                                img: '/img/small-card-img-1.png',
                                title: 'Чипсы, 50гр',
                                desc: 'Вкус: соль',
                                price: '120 ₽'
                            },
                            {
                                img: '/img/small-card-img-2.png',
                                title: 'Клубника, 50гр',
                                desc: 'Кусочками',
                                price: '250 ₽'
                            },
                            {
                                img: '/img/small-card-img-3.png',
                                title: 'Печеный хумус с бастурмой, 60гр',
                                desc: 'Нут, тахини, винный уксус, кумин, паприка, бастурма',
                                price: '200 ₽'
                            },
                            {
                                img: '/img/small-card-img-4.png',
                                title: 'Круассаны, 70гр',
                                desc: 'Сливочный сыр, копченый лосось, лисонный сок',
                                price: '170 ₽'
                            },
                        ],
                        largeCards: [
                            {
                                img1: '/img/big-card-img-1-1.png',
                                img2: '/img/big-card-img-1-2.png',
                                chip: 'Набор',
                                title: 'Набор для двоих, 580гр',
                                infoAboutKit: 'На 2 персоны',
                                desc: 'Багет, ржанная чиабатта, вафли, гриссини, мусс из цветной капусты с беконом, паштет с вишневым конфи, ассорти сыров и мясных',
                                price: '2375 ₽'
                            },
                            {
                                img1: '/img/big-card-img-2-1.png',
                                img2: '/img/big-card-img-2-2.png',
                                img3: '/img/big-card-img-2-3.png',
                                chip: 'Набор',
                                title: 'Большой набор , 1100гр',
                                infoAboutKit: 'На 4 персоны',
                                desc: 'Ассорти мясных деликатесов, ассорти сыров и антипасти, хлебная корзина, парфе из птицы с фисташкой, гуаккамоле, хумус с брезаолой, риет из',
                                price: '4000 ₽'
                            },
                        ]
                    },
                },
                {
                    menuBlockData: {
                        logo: '/img/menuBlock-company-logo-2.png',
                        companyName: 'ProBrbnch',
                        isLarge: true
                    },
                    menuBlockComponentsData: {
                        chips: [
                            {img: '/img/info-chip-icon-1.png', desc: 'Заказать не позднее чем за:', span: ' 2 часа'},
                            {img: '/img/info-chip-icon-2.png', desc: 'Минимальный заказ:', span: ' 3000 ₽'},
                            {img: '/img/info-chip-icon-3.png', desc: 'Доставка:', span: ' 500 ₽'},
                        ],
                        largeCards: [
                            {
                                img1: '/img/big-card-img-2-1.png',
                                img2: '/img/big-card-img-2-2.png',
                                img3: '/img/big-card-img-2-3.png',
                                chip: 'Набор',
                                title: 'Большой набор , 1100гр',
                                infoAboutKit: 'На 4 персоны',
                                desc: 'Ассорти мясных деликатесов, ассорти сыров и антипасти, хлебная корзина, парфе из птицы с фисташкой, гуаккамоле, хумус с брезаолой, риет из',
                                price: '4000 ₽'
                            },
                            {
                                img1: '/img/big-card-img-1-1.png',
                                img2: '/img/big-card-img-1-2.png',
                                chip: 'Набор',
                                title: 'Набор для двоих, 580гр',
                                infoAboutKit: 'На 2 персоны',
                                desc: 'Багет, ржанная чиабатта, вафли, гриссини, мусс из цветной капусты с беконом, паштет с вишневым конфи, ассорти сыров и мясных',
                                price: '2375 ₽'
                            },
                        ]
                    },
                }
            ],
            sliderBlocks: [
                {
                    sliderBlockData: {
                        logo: '/img/vine-company-logo-1.png',
                        companyName: 'Винный вояж & Винный склад',
                        productCount: '12'
                    },
                    sliderBlockComponentsData: {
                        sliderCards: [
                            {
                                img: '/img/slider-card-1.png',
                                title: 'Toucas, Vinho Verde DOC, 2021',
                                desc: 'Португалия, белое полусухое 9,5%',
                                price: '1900 ₽'
                            },
                            {
                                img: '/img/slider-card-2.png',
                                title: 'Pago Casa Gran, Falcata White, Valencia DO, 2021',
                                desc: 'Португалия, белое полусухое 9,5%',
                                price: '1950 ₽'
                            },
                            {
                                img: '/img/slider-card-3.png',
                                title: 'Belguardo Vermentino, Toscana IGT, 2020',
                                desc: 'Португалия, белое полусухое 9,5%',
                                price: '2000 ₽'
                            },
                            {
                                img: '/img/slider-card-4.png',
                                title: 'Loveblock Pinot Gris, 2020',
                                desc: 'Португалия, белое полусухое 9,5%',
                                price: '13 000 ₽'
                            },
                            {
                                img: '/img/slider-card-1.png',
                                title: 'Toucas, Vinho Verde DOC, 2021',
                                desc: 'Португалия, белое полусухое 9,5%',
                                price: '1900 ₽'
                            },
                        ],
                    },
                },

            ],
        }
    },
    components: {
        statusBar,
        promoBlock,
        historyStroke,
        categoriesList,
        menuBlock,
        sliderBlock,
        advantagesBlock
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
