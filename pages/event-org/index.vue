<template>
  <v-container id="regular-tables" fluid tag="section">
    <section class="mb-12 text-center">
      <h1 class="font-weight-light mb-2 headline" v-text="`Selamat Datang`" />

      <span class="font-weight-light subtitle-1"> Welcome {{ isAuthenticated }} / {{loggedInUser}}</span>
    </section>
    <div class="py-3" />
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  layout: "EoLayout",
  name: "IndexPage",
  components: {
  },

  data() {
    return {
      
    };
  },

  computed: {
...mapGetters(['isAuthenticated', 'loggedInUser'])
},

beforeCreate() {
  
}
};
</script>
