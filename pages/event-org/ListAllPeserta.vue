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
      List daftar peserta yang mengikuti event
    </span>
  </section>
    <div class="py-3" />

    <material-card
      color="success"
      dark
      icon="mdi-account"
      title="Table on Dark Background"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Event</th>
            <th>Kota</th>
            <th>No Kursi</th>
            <th class="text-right">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="data, index in listPeserta" :key="index" :data="data">
            <td>{{data.id}}</td>
            <td>{{data.nama}}</td>
            <td>{{data.event}}</td>
            <td>Bandung</td>
            <td>{{data.nomorKursi}}</td>
            <td class="text-right red--text" v-if="data.statusPembayaran == 'Belum dibayar'">{{data.statusPembayaran}}</td>
            <td class="text-right yellow--text" v-if="data.statusPembayaran == 'Menunggu konfirmasi'">{{data.statusPembayaran}}</td>
            <td class="text-right green--text" v-if="data.statusPembayaran == 'Sudah dibayar'">{{data.statusPembayaran}}</td>
            <td class="text-right primary--text" v-if="data.statusPembayaran == 'On The Spot'">{{data.statusPembayaran}}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>
  </v-container>
</template>
<script>
import MaterialCard from '../../components/Card/MaterialCard.vue';

export default {
  layout: "EoLayout",
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
          event: "Event 1",
          statusPembayaran: "Belum dibayar",
        },
        {
          id: 2,
          nomorKursi: 9,
          nama: "Andri",
          event: "Event 2",
          statusPembayaran: "Menunggu konfirmasi",
        },
        {
          id: 3,
          nomorKursi: 2,
          nama: "Fandi",
          event: "Event 1",
          statusPembayaran: "Sudah dibayar",
        },
        {
          id: 4,
          nomorKursi: 19,
          nama: "Syahrul",
          event: "Event 2",
          statusPembayaran: "On The Spot",
        },
      ],
    };
  },


};
</script>
