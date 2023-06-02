<template>
    <footer>
        <div class="container">
            <div class="left-part">
                <img src="/img/footer-logo.png" alt="footer-logo" class="footer-logo">
                <div class="footer-social">
                    <a href="#" class="social-item">
                        <img src="/img/footer-social-vk.png" alt="footer-social-vk" class="social-icon">
                    </a>
                    <a href="#" class="social-item">
                        <img src="/img/footer-social-instagram.png" alt="footer-social-instagram" class="social-icon">
                    </a>
                </div>
                <form class="footer-form">
                    <label for="news">Подписка на эксклюзивные новости</label>
                    <div class="input-box">
                        <input type="text" id="news" placeholder="Например: moyapochta@mail.ru">
                        <button class="footer-button-in-input">Подписаться</button>
                    </div>
                </form>
            </div>
            <div class="right-part">
                <div class="useful-links-block"
                     v-for="(item, index) in items"
                     :key="index"
                >
                    <div class="title">{{ item.title }}</div>
                    <div class="links">
                        <router-link
                            v-for="(link, index) in item.links"
                            :key="index"
                            to="/"
                            class="link"
                        >
                            {{ link.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footerBlock",
    data () {
        return {
            items: [
                {
                    title: 'О нас',
                    links: [
                        {name: 'О компании'},
                        {name: 'Команда'},
                        {name: 'Кейтеринг'},
                        {name: 'Частые вопросы'},
                        {name: 'Блог'},
                    ]
                },
                {
                    title: 'Вояжи',
                    links: [
                        {name: 'Вояж в Петергоф'},
                        {name: 'По Ладожским шахерам'},
                        {name: 'Люди на катерах'},
                        {name: 'День ВМФ'},
                        {name: 'Вояж в крепость Орешек'},
                        {name: 'Вояж в Кронштадт'},
                    ]
                },
                {
                    title: 'Катера и яхты',
                    links: [
                        {name: 'Эль Чапа'},
                        {name: 'Princess 25M'},
                        {name: 'Meridian'},
                        {name: 'Виндзора'},
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";

footer {
    width: 100%;
    background: #4F4F4F;
    padding: 140px 0 95px 0;

    .container {
        display: flex;
        justify-content: space-between;

        .left-part {

            .footer-logo {
                width: 147px;
                height: 37px;
                margin-bottom: 24px;
            }
            .footer-social {
                margin-bottom: 38px;

                .social-item {
                    width: 50px;
                    height: 42px;

                    .social-icon {
                        @extend .social-item;
                    }
                    & .social-icon:first-child {
                        margin-right: 16px;
                    }
                }
            }
            .footer-form {

                label {
                    @include inter-400;
                    font-size: 14px;
                    line-height: 20px;
                    color: white;
                }
                .input-box {
                    margin-top: 20px;
                    position: relative;
                    max-width: 426px;

                    #news {
                        width: 426px;
                        height: 48px;
                        border-radius: 90px;
                        padding: 16px 172px 16px 30px;
                        outline: none;
                        border: none;
                        @include inter-400;
                        font-size: 14px;
                        line-height: 17px;
                        color: #0E254B;

                    }
                    .footer-button-in-input {
                        position: absolute;
                        @include inter-600;
                        font-size: 16px;
                        line-height: 30px;
                        color: #0E254B;
                        background: #D5E5FB;
                        border: none;
                        border-radius: 50px;
                        padding: 9px 30px;
                        right: 0;
                        cursor: pointer;
                    }
                }
            }
        }
        .right-part {
            display: flex;
            justify-content: space-between;
            width: 650px;
            max-height: 225px;

            .useful-links-block {
                display: flex;
                flex-direction: column;

                .title {
                    @include inter-600;
                    font-size: 18px;
                    line-height: 23px;
                    color: white;
                    margin-bottom: 20px;

                }
                .links {
                    display: flex;
                    flex-direction: column;

                    & .link {
                        @include inter-400;
                        font-size: 14px;
                        line-height: 17px;
                        color: white;
                        margin-bottom: 16px;
                        text-decoration: none;

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }

                &:last-child {
                    margin-right: 85px;
                }
            }
        }
    }
}
</style>
