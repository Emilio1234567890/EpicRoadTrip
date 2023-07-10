<template>
  <div class="container">
    <travel-settings :Mode="this.mode" />
    <div class="travel">
      <button
        name="restauButton"
        :class="this.mode === 'restau' ? 'act' : ''"
        @click="change('restau')"
      >
        Restaurants
      </button>
      <button
        name="barButton"
        :class="this.mode === 'bar' ? 'act' : ''"
        @click="change('bar')"
      >
        Bar
      </button>
      <button
        name="hotelButton"
        :class="this.mode === 'hotel' ? 'act' : ''"
        @click="change('hotel')"
      >
        Hotel
      </button>
      <button
        name="gasButton"
        :class="this.mode === 'gas' ? 'act' : ''"
        @click="change('gas')"
      >
        Gas
      </button>
      <button
        name="eventsButton"
        :class="this.mode === 'events' ? 'act' : ''"
        @click="change('events')"
      >
        Event
      </button>
      <!-- <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishKey"
        :line-items="lineItems"
        :success-url="successUrl"
        :cancel-url="cancelUrl"
        @loading="(v) => (loading = v)"
      /> -->
      
      <svg
        name="locButton"
        @click="loc()"
        class="loc"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    </div>
    <navigation class="navigation" />
    <maps></maps>
  </div>
</template>

<script>
import maps from "../components/maps.vue";
import Navigation from "../components/Navigation.vue";
import TravelSettings from "../components/TravelSettings.vue";


export default {
  components: { TravelSettings, maps, Navigation },
  name: "HomePage",
  data() {
    
    return {
      mode: "bar",
    };
  },
  methods: {
    async loc() {
      const successCallback = async (position) => {
        this.$store.commit("setMarker", [
          position.coords.latitude,
          position.coords.longitude,
        ]);
      };

      const errorCallback = (error) => {
        console.log(error);
      };
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    },
    change(mode) {
      this.mode = mode;
      this.$store.commit("setMode", mode);
    },
    submit() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style scoped>
.navigation {
  top: 0;
  right: 0;
  position: absolute;
}
button {
  cursor: pointer;
  z-index: 2;
  border: none;
  height: fit-content;
  padding: 8px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 15px;
  margin: 15px 10px 10px 10px;
  background-color: white;
  box-shadow: -2px 2px 5px #363a438c;
  border: solid 1px whitesmoke;
  transition-duration: 0.1s;
}
.loc {
  color: rgb(226, 43, 43);
  box-shadow: -2px 2px 5px #363a438c;
  transition-duration: 0.1s;
  width: 30px;
  background-color: rgba(250, 246, 246, 0.959);
  padding: 2px;
  border-radius: 50%;
  height: 30px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 30px;
}
.loc:hover {
  transform: scale(1.1);
}
.act {
  border: solid 2px rgba(44, 44, 128, 0.539);
}
button:hover {
  transform: scale(1.1);
}
button:active {
  background-color: rgb(203, 203, 230);
}
img {
  position: absolute;
}
h1 {
  font-size: 400%;
}
.travel {
  z-index: 1;
  margin-left: 60px;
  display: flex;
  width: fit-content;
  height: fit-content;
}
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  color: aliceblue;
}
</style>
