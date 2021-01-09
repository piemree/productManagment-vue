<template>
  <div id="list" class="container bg-light m-auto mt-5 p-5 pt-3 rounded">
    <h2>Ürün Ekle</h2>
    <hr />

    <div class="d-flex row justify-content-center">
      <div
        v-show="getProduct.length > 0"
        v-for="product in getProduct"
        :key="product.id"
        class="card m-2"
        style="width: 20rem"
      >
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">id: {{ product.id }}</li>
          <li class="list-group-item" :class="productCount(product.count)">
            stok: {{ product.count }}
          </li>
          <li class="list-group-item">{{ product.price }}₺</li>
        </ul>

        <button @click="deleteProduct(product.id)" class="btn btn-danger">
          Sil
        </button>
      </div>

      <div
        v-show="getProduct.length <= 0"
        id="yellow"
        class="container rounded"
      >
        <h5><b>Henüz bir kayıt bulamadık</b></h5>
        <p>
          Kayıt Eklemek için<router-link
            id="link"
            class="nav-link px-0 mx-2"
            to="/urun-girisi"
            tag="a"
            >Ürün İşlemleri</router-link
          >
          menüsünden yararlanabilirsiniz
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProduct"]),
  },
  methods: {
    productCount(count) {
      if (count > 0) {
        return "bg-success text-light";
      } else {
        return "bg-danger text-light";
      }
    },
    async deleteProduct(e) {
      if (confirm("Ürünü silmek istiyor musun?")) {
        await this.$http
          .delete(
            `https://product-manager-d1a56-default-rtdb.firebaseio.com/products/${e}/.json`
          )
          .then((response) => {
            console.log(response);
            this.$router.go();
          });
      }
    },
    reload() {
      this.$forceUpdate();
      console.log("reolared");
    },
  },
  async created() {
    await this.$store.dispatch("getProductDbAsync");
  },
};
</script>

<style scoped>
#yellow {
  background-color: rgb(255, 212, 147);
}
#link {
  display: inline;
}
</style>