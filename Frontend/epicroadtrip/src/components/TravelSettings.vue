<template>
  <div class="bar">
    <div class="logout">
      <svg
        name="logoutButton"
        class="option"
        v-on:click="this.$router.push('/login')"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>
      <svg
        class="option"
        @click="gethistory()"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    <transition name="listfade">
      <div v-if="this.history.length" class="propal">
        <div class="item" v-for="i in this.history" :key="i.nom">
          {{ i }}
          <svg
            @click="loc(i.nom)"
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
      </div>
    </transition>

    <svg
      class="trajet"
      id="eMmhfZDyxYq1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <g transform="translate(-21.887295-5.819595)">
        <path
          d="M61.914029,300Q-7.133186,196.987645,62.92943,185.310543c70.062616-11.677102,123.878829-53.308513,120.324928-91.893722s-8.123203-83.26282,56.862412-81.73972q64.985615,1.5231,83.77052,0"
          transform="translate(.000001 0.000002)"
          fill="none"
          stroke="#3f5787"
          stroke-width="10"
          stroke-linecap="round"
          stroke-dasharray="15"
        />
        <g transform="matrix(.77778 0 0 0.777779 39.98944 18.220725)">
          <ellipse
            rx="18.277204"
            ry="18.277204"
            transform="translate(182.238956 56.862413)"
            fill="#d2dbed"
            stroke-width="0"
          />
          <ellipse
            rx="18.277204"
            ry="18.277204"
            transform="matrix(.61111 0 0 0.611109 182.238956 56.862413)"
            fill="#fff"
            stroke-width="0"
          />
        </g>
        <g transform="matrix(.77778 0 0 0.777779-64.612181 137.561057)">
          <ellipse
            rx="18.277204"
            ry="18.277204"
            transform="translate(182.238956 56.862413)"
            fill="#d2dbed"
            stroke-width="0"
          />
          <ellipse
            rx="18.277204"
            ry="18.277204"
            transform="matrix(.61111 0 0 0.611109 182.238956 56.862413)"
            fill="#fff"
            stroke-width="0"
          />
        </g>
      </g>
    </svg>
    <div class="searchbar">
      <h1>Epic Road Trip</h1>
      <div
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        "
      >
        <div>
          <input
            type="text"
            placeholder="Search by price"
            list="listeprice"
            v-model="price"
          />
          <button @click="filter">Search</button>
          <datalist id="listeprice">
            <option value="€"></option>
            <option value="€€"></option>
            <option value="€€€"></option>
          </datalist>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search event by category"
            list="category"
            v-model="category"
            style="margin-left: 30px"
          />
          <datalist id="category">
            <option value="concerts"></option>
            <option value="expos"></option>
            <option value="festivals"></option>
            <option value="perfoming-arts"></option>
            <option value="sports"></option>
            <option value="community"></option>
          </datalist>
          <button @click="searcheventbycategory">Search</button>
        </div>
      </div>

      <div class="ligne" v-for="(i, index) in this.dest" :key="i">
        <div class="inputzone">
          <input
            v-model="city[index]"
            class="input"
            placeholder="Où allez vous ?"
          />
          <span v-if="this.loader === true" class="loader"></span>
        </div>
        <svg
          name="removeButton"
          @click="remove()"
          v-if="i != 1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="plus"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          name="addButton"
          @click="add()"
          v-if="this.dest === 1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="plus"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <button name="goButton" class="gobtn" v-if="i != 1" @click="path">
          go
        </button>
      </div>
      <transition name="listfade">
        <div v-if="this.cityProp.length" class="propal">
          <div class="item" v-for="i in this.cityProp" :key="i.nom">
            {{ i.nom }}
            <svg
              @click="loc(i.nom)"
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
        </div>
      </transition>
    </div>
    <div v-if="this.Mode === 'events'" class="event">
      <events-card
        v-for="event in this.events"
        :key="event.id"
        :title="event.title"
        :category="event.category"
        :labels="[event.labels[0], event.labels[1], event.labels[2]]"
        :start="event.start"
        :end="event.end"
        :location="[event.location[1], event.location[0]]"
      ></events-card>
      <div v-if="this.category != null">
        <events-card
          v-for="event in this.events"
          :key="event.id"
          :title="event.title"
          :category="event.category"
          :labels="[event.labels[0], event.labels[1], event.labels[2]]"
          :start="event.start"
          :end="event.end"
          :location="[event.location[1], event.location[0]]"
        ></events-card>
      </div>
    </div>
    <div v-else-if="this.Mode != 'gas'" class="activity">
      <Loader v-if="this.bar.length === 0" />
      <activitycard
        v-for="i in this.bar"
        :key="i.name"
        :Pos="[i.coordinates.latitude, i.coordinates.longitude]"
        :Name="i.name"
        :Addres="i.location.display_address"
        :Phone="i.display_phone"
        :Img="i.image_url"
        :Price="i.price"
      ></activitycard>
    </div>
  </div>
</template>

<script>
import Activitycard from "./Activitycard.vue";

import Loader from "./Loader.vue";
import axios from "axios";
import EventsCard from "./EventsCard.vue";

export default {
  components: { Activitycard, Loader, EventsCard },
  name: "TravelSettings",
  props: {
    Mode: String,
  },
  data() {
    return {
      dest: 1,
      bar: [],
      city: ["", ""],
      cityInfo: { name: "Nancy", postalcode: 54000 },
      timeout: 0,
      cityProp: [],
      loader: false,
      mode: "loc",
      history: [],
      events: [],
      price: "",
      category: "",
    };
  },
  methods: {
    async path() {
      var res = await axios.get(
        "http://localhost:8080/api/geogps/" +
          this.city[0] +
          ",France/" +
          this.city[1] +
          ",France"
      );
      this.$store.commit("setGeojson", res.data);
      this.$store.commit("setMarkerList", []);
      this.$store.commit("setZoom", 7);
      this.$store.commit("setMarker", [
        res.data.features[0].geometry.coordinates[0][1],
        res.data.features[0].geometry.coordinates[0][0],
      ]);
      this.$store.commit("setMarkerA", [
        res.data.features[0].geometry.coordinates[
          res.data.features[0].geometry.coordinates.length - 1
        ][1],
        res.data.features[0].geometry.coordinates[
          res.data.features[0].geometry.coordinates.length - 2
        ][0],
      ]);
    },
    async loc(city) {
      var res = await axios.get(
        "https://geo.api.gouv.fr/communes?nom=" +
          city +
          "&fields=code,nom,centre&limit=5"
      );
      console.log(res.data);
      city = res.data.find((element) => element.nom == city);
      this.cityInfo = { name: city.nom, postalcode: city.code };
      this.$store.commit("setMarker", [
        city.centre.coordinates[1],
        city.centre.coordinates[0],
      ]);
      this.$store.commit("setZoom", 12);
    },
    remove() {
      this.dest = this.dest - 1;
      navigator.geolocation;
      this.mode = "loc";
      this.city = ["", ""];
      this.cityProp = [];
      this.$store.commit("setGeojson", null);
      this.$store.commit("setMarker", [0, 0]);
      this.$store.commit("setMarkerA", [0, 0]);
    },
    async gethistory() {
      await axios.post("http://localhost:8080/user/getlocation", {
        data: { email: "maxime.saidi@maxou.fr" },
      });
    },
    add() {
      this.dest = this.dest + 1;
      this.mode = "path";
      this.city = ["", ""];
      this.cityProp = [];
    },
    async filter() {
      var res = await axios.post(
        "http://localhost:8080/api/places/" + this.Mode
      );
      console.log("====================================");
      console.log(res);
      console.log("====================================");
    },
    async searcheventbycategory() {
      var res = await axios.get(
        "http://localhost:8080/api/events/" + this.category
      );
      this.events = res.data.results;
    },
  },
  watch: {
    city: {
      deep: true,
      async handler() {
        if (this.mode === "loc") {
          this.loader = true;
          clearTimeout(this.timeout);
          this.timeout = setTimeout(async () => {
            var res = await axios.get(
              "https://geo.api.gouv.fr/communes?nom=" +
                this.city[0] +
                "&fields=departement&boost=population&limit=5"
            );
            this.cityProp = res.data;
            this.loader = false;
          }, 1000);
        }
      },
    },
    async Mode() {
      if (this.Mode === "gas") {
        var ok = await axios.get("http://localhost:8080/api/station/Labry/");
        console.log(ok);
        this.bar = ok.data.records;
        let pos = [];

        for (let i = 0; i < this.bar.length; i++) {
          pos.push({
            coord: [
              this.bar[i].geometry.coordinates[1],
              this.bar[i].geometry.coordinates[0],
            ],
            name: "essence",
          });
        }
        this.$store.commit("setMarkerList", pos);
      } else if (this.Mode === "events") {
        var res1 = await axios.get("http://localhost:8080/api/events");
        this.events = res1.data.results;
        let pos = [];
        for (let i = 0; i < this.events.length; i++) {
          pos.push({
            coord: [this.events[i].location[1], this.events[i].location[0]],
            name: "evenement",
          });
        }
        this.$store.commit("setMarkerList", pos);
        console.log(res1);
      } else {
        var res = await axios.post(
          "http://localhost:8080/api/places/" + this.Mode,
          { city: this.cityInfo.name, postalcode: this.cityInfo.postalcode }
        );
        console.log(res);
        this.bar = res.data.businesses;
        let pos = [];

        for (let i = 0; i < this.bar.length; i++) {
          pos.push({
            coord: [
              this.bar[i].coordinates.latitude,
              this.bar[i].coordinates.longitude,
            ],
            name: this.bar[i].name,
          });
        }
        this.$store.commit("setMarkerList", pos);
      }
    },
  },
  async created() {
    var res = await axios.post(
      "http://localhost:8080/api/places/" + this.Mode,
      { city: "nancy", postalcode: "54000" }
    );
    this.bar = res.data.businesses;
    let pos = [];
    for (let i = 0; i < this.bar.length; i++) {
      pos.push({
        coord: [
          this.bar[i].coordinates.latitude,
          this.bar[i].coordinates.longitude,
        ],
        name: this.bar[i].name,
      });
    }
    this.$store.commit("setMarkerList", pos);
  },
};
</script>

<style scoped>
.logout {
  position: absolute;
  width: 100%;
  height: fit-content;
  display: flex;
  cursor: pointer;
  left: 0;
  z-index: 3;
}
.option {
  width: 30px;
  color: rgb(72, 99, 154);
  transition-duration: 0.1s;
  height: 30px;
}
.option:hover {
  transform: scale(1.1);
}
.gobtn {
  border: solid 2px #6688cb;
  color: #6688cb;
  text-align: center;
  border-radius: 100%;
  height: 35px;
  width: 38px;
  background-color: transparent;
  cursor: pointer;
}
.loader {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-block;
  border-top: 1px solid rgb(53, 109, 179);
  border-right: 1px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border-left: 1px solid #7991d4;
  border-bottom: 1px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.listfade-enter-from {
  opacity: 0;
}
.listfade-enter-active {
  transition: all 0.1s ease;
}
.listfade-leave-active {
  transition: all 1s ease;
}

.listfade-leave-to {
  opacity: 0;
}
.loc {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.loc:hover {
  transform: scale(1.1);
}
.item {
  border-bottom: solid #6688cb36 1px;
  padding: 10px;
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.propal {
  background-color: #ffffff;
  padding: 10px;
  margin-top: -8px;
  width: 80%;
  margin-left: -35px;
  border-bottom: solid #6688cb 1px;
  border-left: solid #6688cb 1px;
  border-right: solid #6688cb 1px;
  border-radius: 0px 0px 10px 10px;
  color: #6688cb;
}
h1 {
  color: #74829e;
  text-align: left;
  width: 100%;
}
.select {
  height: 90px;
  width: 20vw;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.select button {
  margin: 10px;
  border: none 2px white;
  background-color: transparent;
  color: white;
  width: 40px;
  padding: 5px;
  border-radius: 200px;
}
.activity {
  width: 100%;
  display: inline;
  margin-top: 10px;
  overflow: scroll;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
}
.ligne {
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 10px;
  width: 100%;
}
.trajet {
  overflow: hidden;
  position: absolute;
  opacity: 0.4;
  margin-top: 20px;
  transform: rotate(0) scale(1) translate(50px, -10px);
}
.plus {
  cursor: pointer;
  color: #6688cb;
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
.bar {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 25vw;
  min-width: 450px;
  z-index: 2;
  align-items: center;
  height: 100%;
  box-shadow: 10px -6px 50px 2px #2f3034e3;
  border-radius: 0 0px 0 0;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: #6688cb;
  flex-direction: column;
  animation: barup 0.3s linear;
}
@keyframes barup {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.searchbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  z-index: 1;
  width: 100%;
  height: fit-content;
  border-bottom: #6688cb solid 2px;
}
.input {
  background-color: #ffffff;
  color: black;
  height: fit-content;
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  padding-left: 20px;
  border: none;
  border-radius: 25px;
}
.input:focus {
  outline: none;
}
.inputzone {
  display: flex;
  border: solid 1px #6688cb;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.search {
  transform: scale(0.5);
}
.event {
  width: 100%;
  display: inline;
  margin-top: 10px;
  overflow: scroll;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
}
</style>
