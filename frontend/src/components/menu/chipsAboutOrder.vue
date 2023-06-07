<template>
    <div class="info-chip">
        <img :src="chip.img" alt="info-chip-icon" class="info-chip-icon">
        <div class="chip-desc">
            {{ chip.desc }}<span>{{ chip.span }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "chipsAboutOrder",
    props: ['chip']
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";
.info-chip {
    display: flex;
    align-items: center;
    background: #F4F6F9;
    padding: 10px;
    border-radius: 10px;
    margin-right: 17px;

    .info-chip-icon {
        height: 24px;
        width: 24px;
        margin-right: 10px;
    }
    .chip-desc {
        @include inter-400;
        font-size: 14px;
        line-height: 17px;
        color: #0E254B99;

        & span {
            color: #0E254B;
        }
    }
}
.info-chip:last-child {
    margin-right: 0;
}
</style>
