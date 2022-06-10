<template>
  <div class="main">
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
export default {
  data() {
    return {
      access_token:
        "pk.eyJ1Ijoic3JhbWFkaGFuNzQyIiwiYSI6ImNrdHR3cm42bDFvOXgydnBpYXBwbTkzemgifQ.HN0YiTVw219ui3akg_CQsw",
      loading: false,
      location: "",
      center: [0, 0],
      lngLat: [0, 0],
      map: {},
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.createMap);
    } else {
      console.log("Izinkan perangkat mengakses Lokasi !");
    }
    // this.createMap();
  },
  methods: {
    async createMap(position) {
      this.center = [position.coords.longitude, position.coords.latitude];
      try {
        mapboxgl.accessToken = this.access_token;
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: this.center,
          zoom: 16,
        });
        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, "top-right");
        const marker = new mapboxgl.Marker({
          draggable: true,
        })
          .setLngLat(this.center)
          .addTo(this.map);
        marker.on("dragend", (e) => {
          const lngLat = marker.getLngLat();
          // this.center = Object.values(e.target.getLngLat());
          this.lngLat = [lngLat.lng, lngLat.lat];
          this.$emit("mapLngLat", this.lngLat);
        });
      } catch (e) {
        console.log("map error ", e);
      }
    },
    async getLocation() {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
        );
        this.loading = false;
        this.location = response.data.features[0].place_name;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.main {
  padding: 15px 20px;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.map-holder {
  width: 100%;
}
#map {
  height: 80vh;
}
</style>
