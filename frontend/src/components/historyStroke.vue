<template>
    <div class="container">
        <div class="history-stroke">
            <router-link to="/" class="history-link">Главная</router-link>
            /
            <router-link to="/" class="history-link">Яхтенное меню</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "historyStroke"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";

.container {
    padding: 25px 0 30px 0;

    .history-stroke {
        @include inter-400;
        font-size: 14px;
        line-height: 17px;
        color: #0E254B99;
        text-decoration: none;

        .history-link {
            @extend .history-stroke
        }
    }
}
</style>
