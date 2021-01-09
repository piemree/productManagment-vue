import Vue from "vue";
import Vuex from "vuex";
import VueResource from "vue-resource";
import outProduct from "./outProduct";

Vue.use(VueResource);

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    product: {
      name: null,
      count: 0,
      description: null,
      price: 0,
    },
    products: [],
    info: null,
  },
  getters: {
    getProduct(state) {
      return state.products;
    },
  },
  mutations: {
    setProductName(state, overload) {
      state.product.name = overload;
    },
    setProductCount(state, overload) {
      state.product.count = overload;
    },
    setProductPrice(state, overload) {
      state.product.price = overload;
      state.alıs=state.product.price*state.product.count
    },
    setProductDescription(state, overload) {
      state.product.description = overload;
    },
    saveInfo(state, overload) {
      state.info = overload;
      console.log(overload);
    },
    getProductDb(state, overload) {
      state.products = [];
      for (var productId in overload) {
        state.products.push({
          id: productId,
          name: overload[productId].name,
          count: overload[productId].count,
          price: overload[productId].price,
          description: overload[productId].description,
        });
      }
    },
    
  },
  actions: {
    setProductNameAsync({ commit }, overload) {
      commit("setProductName", overload);
    },
    setProductCountAsync({ commit }, overload) {
      commit("setProductCount", overload);
    },
    setProductPriceAsync({ commit }, overload) {

      commit("setProductPrice", overload);
    },
    setProductDescriptionAsync({ commit }, overload) {
      commit("setProductDescription", overload);
    },
    saveDbAsync({ commit }) {
      Vue.http
        .post(
          "https://product-manager-d1a56-default-rtdb.firebaseio.com/products.json",
          this.state.product
        )
        .then((resolve) => {
          commit("saveInfo", resolve);
        });
    },
    getProductDbAsync({ commit }) {
      Vue.http
        .get(
          "https://product-manager-d1a56-default-rtdb.firebaseio.com/products.json"
        )
        .then((resolve) => {
          console.log(resolve.data);
          commit("getProductDb", resolve.data);
        });
    },
  },
  modules:{
    outProduct
  }
});
