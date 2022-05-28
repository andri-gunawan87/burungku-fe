<template>
  <v-card light rounded="lg">
    <v-col>
      <v-row>
        <v-col cols="12" class="pa-5">
          <h2 class="font-weight-bold" v-text="'Pilih Sesi'" /> 
        </v-col>
      </v-row>
          <div v-for="(data, index) in data" :key="index" :data="data">
              <v-btn v-model="noKursi" :value="data" width="100%" @click="checked = !checked" class="mx-auto mb-3" :class="{'': checked, 'brown_color white--text': !checked}" outlined plain><span>{{index + 1}}</span><v-spacer></v-spacer><span>{{data}}</span></v-btn>
          </div>
          <label>
   </label>

    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    data: 0
  },

  data() {
    return {
      checked: false,
      noKursi: ""
    }
  }
};
</script>