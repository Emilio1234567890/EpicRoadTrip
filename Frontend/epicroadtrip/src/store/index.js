import { createStore } from 'vuex'

const store = createStore({
  state: {
    marker : [0 ,0],
    markerA : [0 ,0],
    zoom: 7,
    markerlist: [[48.69255892529268, 6.188065611170852 ], [78.69255892529268, 6.188065611170852 ]],
    geojson : null,
    mode : 'bar'
  },
  getters: {
    getMarkerList(state) {
      return () => state.markerlist;
    },
    getMarker(state) {
      return () => state.marker;
    },
    getMarkerA(state) {
      return () => state.markerA;
    },
    getZoom(state) {  
      return () => state.zoom;
    },
    getGeojson(state) {
      return () => state.geojson;
    },
    getMode(state) {
      return () => state.mode;
    },
    getEventList(state){
      return ()=> state.eventlist
    }
    
  },
  mutations: {
    setMarker(state, marker) {
      state.marker = marker;
    },
    setMarkerA(state, marker) {
      state.markerA = marker;
    },
    setZoom(state, zoom) {
      state.zoom = zoom;
    },
    setMarkerList(state, markerlist) {  
      state.markerlist = markerlist;
    },
    setGeojson(state, geojson) {
      state.geojson = geojson;
    },
    setMode(state, mode) {
      state.mode = mode;
    },
    setEventList(state, eventlist){
      state.eventlist = eventlist;
    }

  },
  actions: {
  },
  modules: {
  }
})
export default store