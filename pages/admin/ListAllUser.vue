<template>
<v-data-table
      :headers="headers"
      :items="listUser"
      loading
      loading-text="Loading... Please wait"
      class="elevation-1"
    >
  <v-card>
    <v-card-title>
      List User
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details 
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="listUser"
      :search="search"
    ></v-data-table>
  </v-card>
  </v-data-table>
</template>

<script>
  export default {  
    layout: "AdminLayout",
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nama User',
            align: 'start',
            sortable: false,
            value: 'nama',
          },
          { text: 'Email', value: 'email' },
          { text: 'No Handphone', value: 'no_hp' },
        ],
        listUser: [],
      }
    },
    methods: {
        async loadApi() {
            const response = await this.$axios.get("/user/transaksi");
            this.listUser = response.data;
        },
    },

    mounted() {
        this.loadApi();
    },
  }
</script>