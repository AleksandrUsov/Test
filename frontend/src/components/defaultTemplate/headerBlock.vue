<template>
    <header>
        <div class="container">
            <div class="header-content">
                <router-link to="/" class="header-logo">
                    <img src="/img/header-logo.png" alt="header-logo" class="header-logo">
                </router-link>
                <div class="header-social-box">
                    <div class="social-item">+7 921 400 50 20</div>
                    <div class="social-item b-40">
                        <a href="#">
                            <img src="/img/header-social-whatsapp.png" alt="social-icon">
                        </a>
                    </div>
                    <div class="social-item b-40">
                        <a href="#">
                            <img src="/img/header-social-telegram.png" alt="social-icon">
                        </a>
                    </div>
                </div>
                <nav>
                    <router-link to="/" class="nav-item">Праздники и события</router-link>
                    <router-link to="/" class="nav-item">Подарочный сертификат</router-link>
                    <router-link to="/" class="nav-item">Партнёрам</router-link>
                    <router-link to="/" class="nav-item">Путеводитель</router-link>
                </nav>
                <div class="header-social-box">
                    <div class="social-item b-40 w-36">
                        <a href="#">
                            <img src="/img/header-social-vk.png" alt="social-icon">
                        </a>
                    </div>
                    <div class="social-item b-40 w-36">
                        <a href="#">
                            <img src="/img/header-social-instagram.png" alt="social-icon">
                        </a>
                    </div>
                </div>
                <div class="lang">RU</div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "headerBlock",
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";

header {
    width: 100%;
    background: white;
    border-bottom: solid 1px rgba(14, 37, 75, 0.1);

    .container {

        .header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;

            .header-logo {
                width: 100px;
                height: 25px;
            }
            .header-social-box {
                display: flex;
                align-items: center;
                margin: 0 35px;

                .social-item {
                    background: #F4F6F9;
                    border-radius: 50px;
                    padding: 6px 20px;
                    margin-right: 6px;
                    @include inter-500;
                    font-size: 14px;
                    line-height: 20px;
                    color: rgba(14, 37, 75, 0.6);

                    &.b-40 {
                        border-radius: 40px;
                        width: 55px;
                        height: 30px;
                        padding: 6px 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        a {
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        &.w-36 {
                            width: 36px;
                            height: 30px;
                            padding: 6px 10px;
                        }
                    }
                }
                .social-item:last-child {
                    margin-right: 0;
                }
            }
            nav {

                .nav-item {
                    text-decoration: none;
                    margin-right: 24px;
                    @include inter-400;
                    line-height: 20px;
                    color: #0E254B;
                    font-size: 13px;
                }
                .nav-item:last-child {
                    margin-right: 0;
                }
            }
            .lang {
                @include inter-600;
                color: #0E254B;
                font-size: 16px;
                line-height: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
