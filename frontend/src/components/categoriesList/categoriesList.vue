<template>
    <div class="container">
        <div class="categories-menu-content">
            <section class="categories-menu-chips">
                <menuChip
                    v-for="(chip, index) in menuChips"
                    :key="index"
                    :chip="chip"
                />
            </section>
            <div class="menu-search-box">
                <input type="text" class="menu-search-form">
                <button class="search-icon">
                    <img src="/img/categoriesMenu-search-icon.png" alt="categoriesMenu-search-icon">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import menuChip from "@/components/categoriesList/menuChip";
import {mapActions, mapState} from "vuex";
export default {
    name: "categoriesList",
    components: {
        menuChip
    },
    computed: {
        ...mapState('menuChips', {
            menuChips: 'menuChips'
        })
    },
    methods: {
        ...mapActions('menuChips', ['GET_CHIPS']),
    },
    created() {
        this.GET_CHIPS()
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
.categories-menu-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 25px;

    .categories-menu-chips {
        display: flex;
        align-items: center;
    }
    .menu-search-box {
        display: flex;
        align-items: center;
        position: relative;

        .menu-search-form {
            width: 665px;
            height: 34px;
            border-radius: 30px;
            border: solid 1px #F4F6F9;
            padding: 0 42px 0 10px;
            outline-color: #F4F6F9;
            @include inter-400;
            font-size: 16px;
            line-height: 20px;
            color: #0E254B;
        }
        .search-icon {
            position: absolute;
            right: 10px;
            border: none;
            background: transparent;
            cursor: pointer;
            max-width: 32px;
            max-height: 32px;
        }
    }
}
</style>
