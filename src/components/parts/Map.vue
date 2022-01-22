<template>
    <div id="map">
        <l-map
            v-model="zoom"
            v-model:zoom="zoom"
            :center="center"
            @move="log('move')"
            >
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-control-layers />
            <l-marker :lat-lng="center">
                <l-tooltip>
                I am here
                </l-tooltip>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { 
    LMap, 
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
    name:"Map",
    props:['center'],
    components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip
  },
  data() {
    return {
      zoom:17,      
    };
  },
  methods: {
    log(a) {
      console.log(a);
    },
  }  
};
</script>

<style lang='scss' scoped>
#map{
    height: 50vh; 
    width: 80%;
    margin: 0 auto;
}
</style>