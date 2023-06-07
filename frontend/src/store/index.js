import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import menuChips from "@/store/modules/menuChips";
import menuBlock from "@/store/modules/menuBlock";
import sliderBlock from "@/store/modules/sliderBlock";
import cartItems from "@/store/modules/cartItems";

Vue.prototype.axios = axios

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menuChips,
        menuBlock,
        sliderBlock,
        cartItems
    }
})
