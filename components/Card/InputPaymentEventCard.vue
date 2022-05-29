<template>
  <v-card light rounded="lg">
    <v-col class="text_main_color">
      <v-row>
        <v-col cols="12" class="px-5">
          <h2 class="font-weight-bold" v-text="'Upload Bukti Pembayaran'" />
        </v-col>

        <v-col cols="12" class="px-5 pt-0 pb-5">
          <v-row>
            <v-col cols="12">
              <v-file-input label="File input" outlined dense prepend-icon=""></v-file-input>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: 0,
  },

  data() {
    return {
      checked: false,
      noKursi: "",
    };
  },
};
</script>