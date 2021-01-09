<template>
  <div  class="container bg-light p-3 mt-5 rounded mw-50">
    <div>
      <h2>Ürün güncelle</h2>
      <hr />
      <p>Ürün Adı</p>
      <!-- <input v-model.lazy="name" type="text" class="form-control form-control-sm" />  -->
      <select name="productNames" class="form-control" v-model="name" >
        <option v-for="product in getProduct" :key="product.id" :value="product.name">{{product.name}}</option>
      </select>
      <p>Adet</p>
      <input
      v-model.lazy="count"
        type="number"
        class="form-control form-control-sm"
        placeholder="Ürün adetini giriniz."
      />
      <p>Fiyat</p>
      <input
      v-model.lazy="price"
        type="number"
        class="form-control form-control-sm"
        placeholder="Ürün fiyatını giriniz."
      />
      <hr />
      <button @click="update" class="btn btn-primary btn-sm">Kaydet</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      value:null
    }
  },
  computed: {
    ...mapGetters(["getProduct"]),
    name: {
      get() {
        return this.$store.getters.getOutProductName;
      },
      set(e) {
        console.log(e);
        this.$store.dispatch("outProductName",e);
        
      },
    },
    count:{
       get() {
        return this.$store.getters.getOutProductCount;
      },
      set(e) {
        this.$store.dispatch("outProductCount", e);
      },
    },
    price:{
       get() {
        return this.$store.getters.getOutProductPrice;
      },
      set(e) {
        this.$store.dispatch("outProductPrice", e);
      },
    }
  },
  methods:{
    async update(){
      await this.$store.dispatch("updateProduct")
    }
  },
  created(){
    this.$store.dispatch("getProductDbAsync")
  }
};
</script>

<style scoped>

</style>