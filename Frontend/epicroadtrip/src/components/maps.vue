<template>
  <div class="map">
    <l-map v-if="this.marker != null" ref="map" :zoom="this.$store.state.zoom" :center="this.$store.state.marker[0] != 0 ? this.$store.state.marker : [47.313220, -1.319482]  "> -->
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-geo-json v-if="this.$store.state.geojson" :geojson="this.$store.state.geojson"></l-geo-json>
      <l-marker v-for="coord in this.$store.state.markerlist" :key="coord" :lat-lng="coord.coord"> <l-icon 
          :icon-anchor="[15, 42]" :icon-url="this.$store.state.mode === 'gas' ? 'http://localhost:8081/gas.png':'http://localhost:8081/marker.png'"></l-icon><l-popup>{{ coord.name }}</l-popup></l-marker>
      <l-marker :lat-lng="this.$store.state.markerA"><l-icon 
          :icon-anchor="[15, 42]" icon-url="http://localhost:8081/red.png"></l-icon></l-marker>
      <l-marker :lat-lng="this.$store.state.marker"><l-icon 
          :icon-anchor="[15, 42]" icon-url="http://localhost:8081/red.png"></l-icon></l-marker>
    </l-map>
  </div>
</template>

<script>
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { mapGetters } from 'vuex'
import {LGeoJson, LMap, LTileLayer, LMarker, LPopup, LIcon } from "@vue-leaflet/vue-leaflet";
export default {
    name: "mapsVe",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LIcon,
    LMarker,
    LPopup
  },
  data () {
    return {
      marker: null,
    }
  },
  async created () {
    this.geojson = await axios.get("http://localhost:8080/api/geogps/Nancy,France/Paris,France")
    this.geojson = this.geojson.data
    this.marker = this.getMarker()
    console.log(JSON.parse(JSON.stringify(this.marker)))
  },
  computed: {
    ...mapGetters([
      'getMarkerList',
      'getMarker',
      // ...
    ]),
  },
};
</script>

<style>
.map {
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100vw;
}
</style>