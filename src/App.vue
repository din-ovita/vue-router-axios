<template>
  <div class="router">
    <NavComp />
    <div class="dinda">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavComp from "./components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    NavComp,
  },
};
</script>

<style>
.navbar {
  font-size: 14px;
  padding: 0 12px;
  margin-bottom: 50px;
  margin-top: 20px;
}
.provinsi {
  margin-left: 240px;
  margin-right: 40px;
  top: 0;
}
.all {
  background: rgb(71, 207, 207);
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 8px;
}
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #cccccc;
}
.label {
  font-size: 16px;
  margin-bottom: 30px;
}
th {
  font-size: 17px;
  height: 60px;
}
td {
  font-size: 15px;
  padding: 10px;
}
.table {
  width: 50%;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  /* color: white; */
  background-color: rgb(71, 207, 207);
}
.table > tr > td > label {
  font-weight: bold;
}
form > table > tr > td > button {
  background-color: teal;
  border: 1px solid #cccccc;
  /* color: white; */
  font-weight: bold;
  padding: 7px 15px;
  border-radius: 3px;
}
.btn-edit {
  border: 1px solid skyblue;
  background-color: #fff;
  /* color: white; */
  font-weight: bold;
  padding: 7px 15px;
  border-radius: 3px;
}
.btn-edit:hover {
  background-color: skyblue;
}
.btn-del:hover {
  background-color: red;
}
.btn-del {
  border: 1px solid red;
  background-color: #fff;
  /* color: white; */
  font-weight: bold;
  padding: 7px 15px;
  border-radius: 3px;
}
</style>
