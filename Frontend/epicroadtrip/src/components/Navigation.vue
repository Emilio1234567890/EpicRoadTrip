<template>
  <div id="po" class="po" v-if="this.$store.state.geojson != null">
    <button @click="retract">
      <svg id="arrow" class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    <div>
    <div id="nav" class="nav" v-for="i in this.$store.state.geojson.features[0].properties.segments[0].steps" :key="i.distance">
      <h3>{{i.instruction}}</h3>
      <svg v-if="i.type === 7" class="rp" id="eg9XWH2Z5V11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="81.367925" ry="81.367925" transform="translate(150 150)" fill="none" stroke="#000" stroke-width="20"/><rect width="18.113208" height="49.075471" rx="0" ry="0" transform="translate(138.679245 19.556605)" stroke-width="0"/><rect width="18.113208" height="49.075471" rx="0" ry="0" transform="matrix(.457524 0.889197-.889197 0.457524 265.458283 107.283796)" stroke-width="0"/><rect width="18.113208" height="49.075471" rx="0" ry="0" transform="translate(138.679245 238.89464)" stroke-width="0"/><rect width="18.113208" height="49.075471" rx="0" ry="0" transform="matrix(.804095-.5945 0.5945 0.804095 54.266232 62.011965)" stroke-width="0"/><rect width="18.113208" height="49.075471" rx="0" ry="0" transform="matrix(.77317 0.634199-.634199 0.77317 100.257639 208.435425)" stroke-width="0"/></svg>
      <svg :class="(i.type === 4 || i.type === 12 )?'reverse' :''" v-if="i.type === 4 || i.type === 5 || i.type === 12 || i.type === 13" class="ltl" id="eGuYegC1W301" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M164.716976,239.179245l-8.656323,11.795145c0-31.871535,0-60.274968,0-89.33346l23.373306-35.651722-14.716983-11.813523l51.044862-11.535437-4.671976,44.85097-15.093488-10.81815-16.562419,24.967862.000004,88.38119-14.716983-10.842875Z" transform="translate(.000005 0)" stroke="#000" stroke-width="0.6"/></svg>
      <svg :class="i.type === 0 ?'reverse' :''" v-if="i.type === 0 || i.type === 1" class="rig" id="eSlcBzCVOsm1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M164.716976,239.179245L149.999995,250.02212c0-31.871535,0-92.727779,0-121.786271h71.886792v-30.566038l48.113208,47.54717-48.113208,46.357971v-29.934022h-42.452832l.000004,88.38119-14.716983-10.842875Z" transform="translate(.000005 0)" stroke="#000" stroke-width="0.6"/></svg>
      <svg v-if="i.type === 6" class="for" id="eAiZt5M34621" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M149.999995,242.229031l-29.998226,7.619586v-149.832685h-30.125445l60.123675-71.402724L210.0837,100.015932h-30.649741v150.006188l-29.433964-7.793089Z" transform="translate(.000005 0)" stroke="#000" stroke-width="0.6"/></svg>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "navigationVue",
    data() {
      return {
        geo : null,
        ret : false
      }
    },
    watch: {
      geo() {
        this.geo = this.$store.state.geojson
      }
    },
    methods : {
      retract() {
        if (this.ret === false) {
          this.ret = !this.ret
          document.getElementById("po").style.transform = "translateX(93%)";
          document.getElementById("arrow").style.transform = "rotate(180deg)";
        }
        else {
          this.ret = !this.ret
          document.getElementById("po").style.transform = "translateX(0%)";
          document.getElementById("arrow").style.transform = "rotate(0deg)";
        }
      }
    },
    created() {
      this.geo = this.$store.state.geojson
    },
};
</script>

<style scoped>
button {
  position: fixed;
  height: 600px;
  border: none;
  border-radius: 12px;
  background-color: #ffffff;
}
.nav{
  border-bottom: solid 1px #e2e2e2;
  text-align: center;
  padding: 10px;
  padding-left: 30px;
  font-size: 20px;
  display: flex;
  width: 90%;
}
.arrow {
  width: 20px;
  height: 20px;
}
svg {
  width: 100px;
  height: 100px;
}
.reverse {
  transform: scaleX(-1);
}
.po {
  display: flex;
  flex-direction: row;
    height: 600px;
    right: 0;
    width: 400px;
    border-radius: 12px;
    overflow: scroll;
    color: gray;
    box-shadow: 6px 8px 10px rgba(0, 0, 0, 0.783);
    z-index: 2;
    background-color: #ffffff;
}
</style>
