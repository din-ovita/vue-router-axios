<template>
  <div class="all">
    <div class="navbar">
      <h1>DATA PROVINSI DI PULAU JAWA</h1>
    </div>
    <div class="jkt">
      <router-link to="/">JAKARTA</router-link>
    </div>
    <div class="barat">
      <router-link to="jabar">JAWA BARAT</router-link>
    </div>
    <div class="tengah">
      <router-link to="jateng">JAWA TENGAH</router-link>
    </div>
    <div class="timur">
      <router-link to="jatim">JAWA TIMUR</router-link>
    </div>
    <div class="bali">
      <router-link to="bali">BALI</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: rgb(37, 31, 31);
}
.jkt,
.barat,
.timur,
.tengah,
.bali {
  margin: 10px;
  padding: 10px;
}
.jkt:hover,
.barat:hover,
.timur:hover,
.tengah:hover,
.bali:hover {
  background-color: darkcyan;
}
</style>
