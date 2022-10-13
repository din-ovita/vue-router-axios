<template>
  <div class="provinsi">
    <div class="balis">
      <h1>BALI</h1>
      <img src="../assets/tari.gif" alt="" width="80" height="80" />
    </div>
    <hr />
    <form @submit.prevent="add">
      <table class="table">
        <tr>
          <td>
            <h2>RUANG ASPIRASI</h2>
          </td>
        </tr>
        <tr>
          <input type="hidden" v-model="form.id" required />
          <td><label>No</label></td>
          <td>:</td>
          <td><input type="text" v-model="form.no" required /></td>
        </tr>
        <tr>
          <td><label>Kota Administrasi</label></td>
          <td>:</td>
          <td><input type="text" v-model="form.kota" required /></td>
        </tr>
        <tr>
          <td><label>Wali Kota</label></td>
          <td>:</td>
          <td><input type="text" v-model="form.bupati" required /></td>
        </tr>
        <tr>
          <td><label>Luas Wilayah</label></td>
          <td>:</td>
          <td><input type="text" v-model="form.luas" required /></td>
        </tr>
        <tr>
          <td><label>Jumlah Penduduk</label></td>
          <td>:</td>
          <td><input type="text" v-model="form.jumlah" required /></td>
        </tr>
        <tr>
          <td style="width: 200px">
            <label>Kepadatan Penduduk</label>
          </td>
          <td>:</td>
          <td><input type="text" v-model="form.kepadatan" required /></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="submit" v-show="!updateSubmit">Add</button>
            <button type="button" v-show="updateSubmit" @click="update(form)">
              Update
            </button>
          </td>
        </tr>
      </table>
    </form>
    <table border="1">
      <tr bgcolor="teal">
        <th width="50">No</th>
        <th width="120">Kota Administrasi</th>
        <th width="120">Wali Kota</th>
        <th width="120">Luas Wilayah</th>
        <th width="120">Jumlah Penduduk</th>
        <th width="120">Kepadatan Penduduk</th>
        <th width="120">Lambang</th>
        <th>Action</th>
      </tr>
      <tr v-for="user in balis" :key="user.id">
        <td>{{ user.no }}</td>
        <td>{{ user.kota }}</td>
        <td>{{ user.bupati }}</td>
        <td>{{ user.luas }}</td>
        <td>{{ user.jumlah }}</td>
        <td>{{ user.kepadatan }}</td>
        <td><img :src="user.image" alt="" width="100" height="100" /></td>
        <td style="text-align: center">
          <button @click="edit(user)" class="btn-edit">Edit</button> ||
          <button @click="del(user)" class="btn-del">Delete</button>
        </td>
      </tr>
    </table>
    <!-- <ul v-for="user in hps" :key="user.id">
      <li>
        <span>{{ user.merk }}</span> &#160; <span>{{ user.ram }}</span> &#160;
        <span>{{ user.storage }}</span> &#160;
        <span>{{ user.prosessor }}.</span> &#160;
      </li>
    </ul> -->
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "BaLi",
  data() {
    return {
      form: {
        id: "",
        no: "",
        kota: "",
        bupati: "",
        luas: "",
        jumlah: "",
        kepadatan: "",
        image: "",
      },
      balis: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/balis")
        .then((res) => {
          this.balis = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/balis/", this.form).then((res) => {
        this.load();
        this.form.no = "";
        this.form.kota = "";
        this.form.bupati = "";
        this.form.luas = "";
        this.form.jumlah = "";
        this.form.kepadatan = "";
        this.form.image = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.no = user.no;
      this.form.kota = user.kota;
      this.form.bupati = user.bupati;
      this.form.luas = user.luas;
      this.form.jumlah = user.jumlah;
      this.form.kepadatan = user.kepadatan;
      this.form.image = user.image;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/balis/" + form.id, {
          kota: this.form.kota,
          no: this.form.no,
          bupati: this.form.bupati,
          luas: this.form.luas,
          jumlah: this.form.jumlah,
          kepadatan: this.form.kepadatan,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.no = "";
          this.form.kota = "";
          this.form.bupati = "";
          this.form.luas = "";
          this.form.jumlah = "";
          this.form.kepadatan = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/balis/" + user.id).then((res) => {
        this.load();
        let index = this.balis.indexOf(
          form.no,
          form.kota,
          form.bupati,
          form.luas,
          form.jumlah,
          form.kepadatan,
          form.image
        );
        this.balis.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.balis {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.balis > h1 {
  color: teal;
}
</style>
