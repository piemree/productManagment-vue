import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

const state = {
  outProductName: "",
  outProductCount: null,
  isProduct: false,
  outProductId: "",
  newProductCount: null,
  newProductPrice:null
};

const getters = {
  getOutProductName(state) {
    return state.outProductName;
  },
  getOutProductCount(state) {
    return state.outProductCount;
  },
};

const mutations = {
  setOutProductCount(state, overload) {
    state.newProductCount =  overload;
  },
  setOutProductPrice(state, overload) {
    state.newProductPrice =  overload;
  },
  setOutProductName(state, overload) {
    this.state.products.filter((data) => {
      if (data.name == overload) {
        state.isProduct == true;
        state.outProductId = data.id;
      }
    });
    state.outProductName = overload;

    console.log(this.state.products);
  },
};

const actions = {
 async updateProduct() {
   await Vue.http
      .put(
        `https://product-manager-d1a56-default-rtdb.firebaseio.com/products/${state.outProductId}/count/.json`,
        state.newProductCount
      )
      .then((response) => {
        console.log(response);
      });

      await Vue.http
      .put(
        `https://product-manager-d1a56-default-rtdb.firebaseio.com/products/${state.outProductId}/price/.json`,
        state.newProductPrice
      )
      .then((response) => {
        console.log(response);
      });
  },
  outProductCount({ commit }, overload) {
    commit("setOutProductCount", overload);
  },
  outProductPrice({ commit }, overload) {
    commit("setOutProductPrice", overload);
  },
  outProductName({ commit }, overload) {
    commit("setOutProductName", overload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
