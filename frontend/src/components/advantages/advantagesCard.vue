<template>
    <div
        v-if="card.blue"
        class="advantages-card blue-card"
    >
        <div class="card-desc">
            {{ card.desc }}
        </div>
        <img src="/img/advantages-card-img-blue.png" alt="advantages-card-img-blue" class="card-img">
    </div>
    <div
        v-else
        class="advantages-card white-card"
    >
        <div class="card-desc">
            {{ card.desc }}
        </div>
        <img src="/img/advantages-card-img-white.png" alt="advantages-card-img-white" class="card-img">
    </div>
</template>

<script>
export default {
    name: "advantagesCard",
    props: ['card']
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.advantages-card {
    width: 420px;
    height: 218px;
    border-radius: 20px;
    padding: 30px;
    position: relative;


    .card-desc {
        @include inter-600;
        font-size: 18px;
        line-height: 23px;
        color: #0E254B;
        max-width: 313px;
        z-index: 1;
    }
    .card-img {
        position: absolute;
        right: 20px;
        bottom: 30px;
    }
    &.white-card {
        background: #F4F6F9;
    }
    &.blue-card {
        background: #D5E5FB;
    }
    &:first-child, &:nth-child(2), &:nth-child(3), {
        margin-bottom: 20px;
    }

}
</style>
