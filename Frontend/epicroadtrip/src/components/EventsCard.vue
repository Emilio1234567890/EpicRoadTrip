<template>
  <div name="Card" class="card" @click="loc()">
    <div class="top">
      <div>
        <h2>{{ this.title }}</h2>

        <h3>{{ this.category }}</h3>

        <h4>{{ this.labels[0] }} {{ this.labels[1] }} {{ this.labels[2] }}</h4>
        <p>{{ this.start }}</p>

        <p>{{ this.end }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsCard",
  components: {},
  props: {
    title: String,
    labels: Array,
    category: String,
    start: String,
    end: String,
    location: Array,
  },
  methods: {
    async loc() {
      this.$store.commit("setMarker", this.location);
      this.$store.commit("setMarkerList", []);
      this.$store.commit("setZoom", 12);
    },
  },
};
</script>

<style scoped>
h1 {
  line-height: 40px;
}
.search {
  color: rgb(72, 99, 154);
  transition-duration: 0.1s;
}

.top {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
}

.card {
  /* border-radius: 25px; */
  width: 90%;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-bottom: solid 2px rgb(183, 196, 206);
  color: #383838;
  padding: 10px;
  /* box-shadow: 10px 10px 5px #6688cb4b; */
  animation: cardin 0.2s linear;
}
.card:nth-child(2) {
  animation: cardin 0.3s linear;
}
</style>
