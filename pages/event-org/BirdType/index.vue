<template>
  <v-container id="regular-tables" fluid tag="section">
    <section class="mb-12 text-center">
      <h1 class="font-weight-light mb-2 headline" v-text="`Daftar Event`" />

      <span class="font-weight-light subtitle-1">
        Table Daftar Jenis Burung
      </span>
    </section>
    <v-card-actions class="justify-end">
      <v-btn color="orange" to="/event-org/birdType/Create" text>
        Tambah Data Burung
      </v-btn>
    </v-card-actions>

    <div class="py-3" />
    <v-simple-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Judul</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(data, index) in listData" :key="index" :data="data">
          <td>{{ data.id }}</td>
          <td>{{ data.nama }}</td>
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
                <v-list-item :to="`/event-org/birdtype/${data.id}`">
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>

                <v-list-item @click="DeleteData(data.id, index)">
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>
<script>
export default {
  layout: "EoLayout",
  name: "ListUser",
  components: {},

  data() {
    return {
      offset: true,
      listData: [],
    };
  },

  async fetch() {
    await this.$axios
      .get("/jenisBurung")
      .then((res) => (this.listData = res.data));
  },

  methods: {
    async DeleteData(id, index) {
      if (confirm("Do you really want to delete?")) {
        try {
          await this.$axios.delete("/jenisBurung/delete/" + id);
          this.$router.push("/event-org/birdtype");
        } catch (e) {
          this.error = e.response.data.message;
        }
      }
    },
  },
};
</script>
