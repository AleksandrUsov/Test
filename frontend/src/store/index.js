import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import menuChips from "@/store/modules/menuChips";
import menuBlock from "@/store/modules/menuBlock";
import sliderBlock from "@/store/modules/sliderBlock";
import cartItems from "@/store/modules/cartItems";
import cartChip from "@/store/modules/cartChip";
import smallCards from "@/store/modules/smallCards";

Vue.prototype.axios = axios

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menuChips,
        menuBlock,
        sliderBlock,
        cartItems,
        cartChip,
        smallCards
    }
})
