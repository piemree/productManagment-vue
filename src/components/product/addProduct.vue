<template>
  <div  class="container bg-light m-auto mt-5 p-5 pt-3 mw-50 rounded">
    <div>
      <h2>Ürün ekle</h2>
      <hr />
      <p>Ürün Adı</p>
      <input
        v-model="name"
        type="text"
        class="form-control form-control-sm"
        placeholder="Ürün adını giriniz."
      />
      <p>Adet</p>
      <input
        v-model="count"
        type="number"
        class="form-control form-control-sm"
        placeholder="Ürün adetini giriniz."
      />
      <p>Fiyat</p>
      <input
        v-model="price"
        type="number"
        class="form-control form-control-sm"
        placeholder="Ürün fiyatnı giriniz."
      />
      <p>Açıklama</p>
      <textarea
        v-model="description"
        class="form-control form-control-sm"
        rows="3"
        placeholder="Ürüne ait bir açıklama giriniz."
        style="resize: none"
      ></textarea>
      <hr />

      <button @click="saveToDb" class="btn btn-primary btn-sm">
        <router-link to="/" tag="span">Kaydet</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubmit: true,
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.getProduct.name;
      },
      set(e) {
        this.$store.dispatch("setProductNameAsync", e);
      },
    },
    count: {
      get() {
        return this.$store.getters.getProduct.count;
      },
      set(e) {
        this.$store.dispatch("setProductCountAsync", e);
      },
    },
    price: {
      get() {
        return this.$store.getters.getProduct.price;
      },
      set(e) {
        this.$store.dispatch("setProductPriceAsync", e);
      },
    },
    description: {
      get() {
        return this.$store.getters.getProduct.description;
      },
      set(e) {
        this.$store.dispatch("setProductDescriptionAsync", e);
      },
    },
  },
  methods: {
    saveToDb() {
      this.$store.dispatch("saveDbAsync");
      this.isSubmit = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (!this.isSubmit) {
      if (confirm("Değişiklikler kaybolacak!")) {
        next();
      }
    } else {
      next();
    }
  },
};
</script>

<style scoped>
</style>