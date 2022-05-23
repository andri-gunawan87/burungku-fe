<template>
  <v-container id="regular-tables" fluid tag="section">
    <section class="mb-12 text-center">
      <h1 class="font-weight-light mb-2 headline" v-text="`Daftar Event`" />

      <span class="font-weight-light subtitle-1"> Table Daftar Event </span>
    </section>
    <div class="py-3" />

    <material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Table Daftar Event"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Event</th>
            <th>Tanggal</th>
            <th>Lokasi</th>
            <th class="text-center">Pendaftar</th>
            <th class="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(data, index) in listEvent" :key="index" :data="data">
            <td>{{ data.id }}</td>
            <td>{{ data.judul }}</td>
            <td>{{ data.tanggal }}</td>
            <td>{{ data.lokasi }}</td>
            <td class="text-center">
              <span class="red--text">{{ data.pendaftar }}</span
              >/<span class="green--text">{{ data.jumlahKursi }}</span>
            </td>
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
                  <v-list-item to="/admin/detail-event/1">
                    <v-list-item-title>Detail</v-list-item-title>
                  </v-list-item>

                  <v-list-item to="/admin/EditEvent/1">
                    <v-list-item-title>Edit</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="DeleteUser(datas.id, index)">
                    <v-list-item-title>Cancel</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
            <!-- <v-dialog v-model="data.modal" max-width="300">
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
            </v-dialog> -->
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>
  </v-container>
</template>
<script>
import MaterialCard from "../../components/Card/MaterialCard.vue";

export default {
  layout: "AdminLayout",
  name: "ListUser",
  components: {
    MaterialCard,
  },

  data() {
    return {
      listEvent: [
        {
          id: 1,
          judul: "Event 1",
          nomorTiket: "20220516-321-111",
          tanggal: "23 Oktober 2022",
          lokasi: "Bandung",
          pendaftar: 14,
          jumlahKursi: 24,
          modal: false,
        },
        {
          id: 2,
          judul: "Event 2",
          nomorTiket: "20220516-321-112",
          tanggal: "23 Oktober 2022",
          lokasi: "Bandung",
          pendaftar: 20,
          jumlahKursi: 36,
          modal: false,
        },
        {
          id: 3,
          judul: "Event 3",
          nomorTiket: "20220516-321-113",
          tanggal: "23 Oktober 2022",
          lokasi: "Bandung",
          pendaftar: 9,
          jumlahKursi: 25,
          modal: false,
        },
      ],
      offset: true,
    };
  },

  methods: {
    async search() {
      try {
        // await this.$axios
        //   .get("/search/?q=" + this.location)
        //   .then((res) => (this.datas = res.data.results));
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    DeleteUser(id, index) {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("/api/artist/" + id)
          .then((resp) => {
            this.artists.data.splice(index, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
