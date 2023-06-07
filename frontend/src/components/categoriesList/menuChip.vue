<template>
    <button
        class="categories-menu-chip"
        @click="log(chip.id)"
    >
        {{ chip.name }}
    </button>
</template>

<script>
export default {
    name: "menuChip",
    props: ['chip'],
    methods: {
        log (id) {
            console.log(id)
        }
    }
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
    border: none;
    cursor: pointer;

    &:hover {
        @include chipHover;
    }
}
</style>
