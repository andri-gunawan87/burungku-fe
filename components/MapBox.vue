<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl";
export default {
  data() {
    return {
      access_token:
        "pk.eyJ1Ijoic3JhbWFkaGFuNzQyIiwiYSI6ImNrdHR3cm42bDFvOXgydnBpYXBwbTkzemgifQ.HN0YiTVw219ui3akg_CQsw",
      map: {},
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.access_token;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 11,
        center: [107.61861, -6.90389],
      });
    },
  },
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>
