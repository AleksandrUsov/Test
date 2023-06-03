<template>
    <div class="container">
        <div class="status-block-content">
            <div class="countries-box">
                <router-link to="/" class="countries-box-item">
                    <img src="img/country-img-1.png" alt="country-img" class="country-img">
                    <div class="country-name">Стамбул</div>
                </router-link>
                <router-link to="/" class="countries-box-item">
                    <img src="img/country-img-2.png" alt="country-img" class="country-img">
                    <div class="country-name">Дубай</div>
                </router-link>
                <router-link to="/" class="countries-box-item">
                    <img src="img/country-img-3.png" alt="country-img" class="country-img">
                    <div class="country-name">Санкт-Петербург</div>
                </router-link>
            </div>
            <div class="user-function-box">
                <person-cart-box />
                <router-link to="/" class="favorites-box">
                    <img src="/img/status-block-favorites.png" alt="status-block-favorites"
                         class="user-favorites-img">
                    <div class="favorites-value">
                        2
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import personCartBox from "@/components/personCartBox.vue";

export default {
    name: "statusBar",
    components: {
        personCartBox
    }

}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global.scss";

.status-block-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .countries-box {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .countries-box-item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-right: 40px;
            padding: 29px 0 27px;
            text-decoration: none;

            .country-name {
                margin-left: 9px;
                @include inter-600;
                font-size: 16px;
                line-height: 20px;
                color: #0E254B;
            }
        }

        .countries-box-item:last-child {
            margin-right: 0;
        }
    }

    .user-function-box {
        display: flex;
        align-items: center;

        .favorites-box {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #F4F6F9;
            border-radius: 50px;
            padding: 7px 5px 7px 10px;
            @include inter-600;
            font-size: 14px;
            line-height: 20px;
            color: white;
            text-decoration: none;

            .user-favorites-img {
                width: 20px;
                height: 20px;
                padding: 3px 5px;
            }

            .favorites-value {
                margin-left: 7px;
                background: #FF6B17;
                padding: 2px 8px;
                border-radius: 50%;
            }
        }
    }
}
</style>
