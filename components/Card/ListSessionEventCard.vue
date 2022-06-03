<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="pa-5">
          <h2 class="font-weight-bold text_main_color" v-text="'Pilih Sesi'" />
        </v-col>
      </v-row>
      <v-btn-toggle v-model="toggle_exclusive" mandatory class="v-btn-toggle_bot">
        <div v-for="(data, index) in data" :key="index" :data="data">
          <v-btn
            :value="data"
            width="100%"
            class="mx-auto mb-3 text_main_color"
            plain
            @click="returnJam()"
            ><span>{{ index + 1 }}</span
            ><v-spacer></v-spacer><span>{{ data.jam_start }} - {{ data.jam_end }}</span></v-btn
          >
        </div>
      </v-btn-toggle>

      <!-- <v-col cols="12" class="text-center">
        Model: {{ toggle_exclusive }}
      </v-col> --> 
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },

  data() {
    return {
      checked: false,
      toggle_exclusive: [],
    };
  },

  methods: {
    returnJam() {
      this.$emit('update:showNav', this.toggle_exclusive)
    }
  }
};
</script>