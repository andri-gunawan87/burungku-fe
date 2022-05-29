<template>
  <div>
    <v-row class="judul mb-4">
      <v-col cols="2">
      <v-btn @click="goToPrev()" icon>
          <v-icon size="32">mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="8" class="my-auto text_center text_main_color">
      <h2>Profile</h2>
      </v-col>
    </v-row>
    <div class="box-profile">
      <h1 class="text-600 sub-judul">AKUN ANDA</h1>
      <p class="text-400 desk-sub-judul">Edit dan atur detail akun anda</p>
      <div v-for="(data, index) in profil" :key="index" :data="data">
        <hr class="garis" />
        <v-row no-gutters>
          <v-col cols="6" md="4">
            <label class="text-500 label">NAMA</label>
          </v-col>
          <v-col cols="12" sm="6" md="8">
            <P class="text-500 isi-label">{{ data.nama }}</P>
          </v-col>
        </v-row>
        <hr class="garis" />
        <v-row no-gutters>
          <v-col cols="6" md="4">
            <label class="text-500 label">EMAIL</label>
          </v-col>
          <v-col cols="12" sm="6" md="8">
            <P class="text-500 isi-label">{{ data.email }}</P>
          </v-col>
        </v-row>
        <hr class="garis" />
        <v-row no-gutters>
          <v-col cols="6" md="4">
            <label class="text-500 label">NO TELP</label>
          </v-col>
          <v-col cols="12" sm="6" md="8">
            <P class="text-500 isi-label">{{ data.no_telp }}</P>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="box-profile">
      <h1 class="text-600 sub-judul">BANTUAN & MASUKAN</h1>
      <p class="text-400 desk-sub-judul">
        Kami menyambut umpan balik, pertayaan, dan komentar Anda! Hubungi kami
        dibawah ini.
      </p>
      <v-row no-gutters>
        <v-col cols="2">
          <img src="/assets/help.svg" />
        </v-col>
        <v-col cols="8">
          <p class="text-500 isi-label" style="margin-top: 7px">
            FAQ dan Tutorial
          </p>
        </v-col>
        <v-col cols="2">
          <img src="/assets/arrow-right.svg" alt="" style="margin-top: 9px" />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2">
          <img src="/assets/mail.svg" />
        </v-col>
        <v-col cols="8">
          <p class="text-500 isi-label" style="margin-top: 7px">Hubungi Kami</p>
        </v-col>
        <v-col cols="2">
          <img src="/assets/arrow-right.svg" alt="" style="margin-top: 9px" />
        </v-col>
      </v-row>
    </div>
    <div class="box-profile">
      <center>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/user/Discover'"
        >
          <h1 class="text-600 keluar">Keluar</h1>
        </nuxt-link>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profil: [
        {
          id: 1,
          nama: "Tukimin",
          email: "Tukimin@tayo.com",
          no_telp: "991",
        },
      ],
    };
  },

  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  },
};
</script>
