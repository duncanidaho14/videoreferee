<template>
<div>
    <div appear-active-class="GoogleMap">
        <div id="map"></div>  
    </div>
</div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      keyapi: "AIzaSyDVqrB0KN-Heg24aHQ0T5tLLA40TpPGeJ4"
    };
  },
  methods: {
    initMap: function() {
      var map;
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }
  }
};
</script>    

<style>
#map {
  width: 400px;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
