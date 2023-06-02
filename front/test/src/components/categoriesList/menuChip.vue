<template>
    <router-link
        :to="chip.link"
        class="categories-menu-chip"
    >
        {{ chip.name }}
    </router-link>
</template>

<script>
export default {
    name: "menuChip",
    props: ['chip']
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
.categories-menu-chip {
    padding: 7px 15px;
    border-radius: 50px;
    margin-right: 12px;
    font-size: 16px;
    line-height: 20px;
    @include chip;

    &:hover {
        @include chipHover;
    }
}
</style>
