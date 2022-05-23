<template>
  <v-container id="regular-tables" fluid tag="section">
    <section class="mb-12 text-center">
    <h1
      class="font-weight-light mb-2 headline"
      v-text="`Daftar Peserta`"
    />

    <span
      class="font-weight-light subtitle-1"
    >
      List daftar semua User
      {{allUser}}
    </span>
  </section>
    <div class="py-3" />

    <material-card
      color="success"
      dark
      icon="mdi-account"
      title="Daftar Users"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Kota</th>
            <th>Jumlah Event</th>
            <th>Tanggal Join</th>
            <th>Status</th>
            <th class="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="data, index in listPeserta" :key="index" :data="data">
            <td>{{data.id}}</td>
            <td>{{data.nama}}</td>
            <td>Bandung</td>
            <td>{{data.nomorKursi}}</td>
            <td></td>
            <td class="red--text" v-if="data.statusPembayaran == 'Belum dibayar'">{{data.statusPembayaran}}</td>
            <td class="secondary--text" v-if="data.statusPembayaran == 'Menunggu konfirmasi'">{{data.statusPembayaran}}</td>
            <td class="green--text" v-if="data.statusPembayaran == 'Sudah dibayar'">{{data.statusPembayaran}}</td>
            <td class="primary--text" v-if="data.statusPembayaran == 'On The Spot'">{{data.statusPembayaran}}</td>
            <td class="text-right">
              <v-menu
                transition="slide-x-transition"
                bottom
                right
                :offset-y="offset"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="grey"
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    ...
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    to="/user/Profile"
                  >
                    <v-list-item-title>Detail</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    to="/user/Profile"
                  >
                    <v-list-item-title>Edit</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    @click="data.modal = true"
                  >
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
            <v-dialog v-model="data.modal" max-width="300">
              <v-card>
                <v-card-title>
                  Are you sure? {{ data.id }}

                  <v-spacer />

                  <v-icon aria-label="Close" @click="data.modal = false">
                    mdi-close
                  </v-icon>
                </v-card-title>

                <v-card-text class="pb-6 pt-12 text-center">
                  <v-btn class="mr-3" text @click="data.modal = false">
                    Nevermind
                  </v-btn>

                  <v-btn color="red" text @click="data.modal = false">
                    Yes
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-dialog>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>
  </v-container>
</template>
<script>
import MaterialCard from '../../components/Card/MaterialCard.vue';

export default {
  layout: "AdminLayout",
  name: "ListPeserta",
  components: {
    MaterialCard
  },

  data() {
    return {
      listPeserta: [
        {
          id: 1,
          nomorKursi: 14,
          nama: "Fandi",
          statusPembayaran: "Belum dibayar",
          modal: false
        },
        {
          id: 2,
          nomorKursi: 9,
          nama: "Andri",
          statusPembayaran: "Menunggu konfirmasi",
          modal: false
        },
        {
          id: 3,
          nomorKursi: 2,
          nama: "Fandi",
          statusPembayaran: "Sudah dibayar",
          modal: false
        },
        {
          id: 4,
          nomorKursi: 19,
          nama: "Syahrul",
          statusPembayaran: "On The Spot",
          modal: false
        },
      ],
      offset: true,

      allUser: []
    };
  },

  async fetch() {
    await this.$axios
      .get("/peserta")
      .then((res) => (this.allUser = res.data));
  },

  mounted() {
    console.log(this.allUser)
  }


};
</script>
