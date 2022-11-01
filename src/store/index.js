import Vue from 'vue'
import Vuex from 'vuex'
import category from "@/store/modules/category";
import products from "@/store/modules/products";
import mainstore from "@/store/modules/mainstore";

Vue.use(Vuex)

export default new Vuex.Store({


  modules: {
    mainstore,
    category,
    products
  }
})
