<template>
  <div class="nav">
    <router-link
      active-class="text-warning"
      class="nav-link px-0 mx-2"
      to="/urunler"
      tag="li"
      >Ürün Listesi</router-link
    >
    <router-link
      active-class="text-warning"
      class="nav-link px-0 mx-2"
      to="/urun-girisi"
      tag="li"
      >Ürün Ekle</router-link
    >
    <router-link
      active-class="text-warning"
      class="nav-link px-0 mx-2"
      to="/urun-cıkısı"
      tag="li"
      >Ürün Güncelle</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background-color: rgb(74, 9, 136);
}
li {
  color: white;
  cursor: pointer;
}

</style>