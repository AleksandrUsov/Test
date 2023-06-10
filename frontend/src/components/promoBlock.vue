<template>
    <div class="promo-container">
        <div class="promo-content">
            <img src="/img/promo-logo.png" alt="promo-logo" class="promo-logo">
            <div class="promo-message-block">
                <h1 class="title">Яхтенное меню</h1>
                <div class="desc">
                    Здесь вы можете заказать еду в вояж. Сделайте
                    это в любое время, заблаговременно до старта
                    вояжа. Минимальное время заказа указано рядом
                    с названием каждого ресторана.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "promoBlock"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.promo-container {
    width: 100%;
    max-width: 1500px;
    height: 476px;
    margin: 0 auto;
    background: url("../../public/img/promo-background.png") no-repeat;

    .promo-content {
        padding: 127px 191px 55px 83px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;

        .promo-logo {
            width: 218px;
            height: 54px;
            align-self: flex-end;
            z-index: 1;
        }

        .promo-message-block {
            padding: 35px 8px 35px 35px;
            background: rgba(180, 201, 229, 0.2);
            backdrop-filter: blur(4px);
            max-width: 530px;
            border-radius: 20px;
            border: solid 1px rgba(244, 246, 250, 0.23);
            z-index: 1;

            .title {
                @include mont-900;
                font-size: 45px;
                font-weight: 900;
                line-height: 49px;
                color: white;
                margin-bottom: 12px;
            }

            .desc {
                @include inter-600;
                font-size: 18px;
                line-height: 23px;
                color: white;
                max-width: 452px;
            }
        }
    }
    &:before {
        content: '';
        display: block;
        width: 1498px;
        height: 476px;
        position: absolute;
        background: linear-gradient(to bottom, rgba(116, 154, 252, 0.6), rgba(37, 90, 174, 0.2));
        opacity: .5;
        border-radius: 30px;
    }
}
</style>
