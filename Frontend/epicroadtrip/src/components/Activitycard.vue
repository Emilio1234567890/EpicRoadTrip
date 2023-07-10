<template>
  <div name="Card" class="card" @click="loc()">
    <div class="top">
      <div>
        <h1>{{ this.Name }}</h1>
        <h3>{{ this.Addres[0] }}</h3>
        <p>{{ this.Addres[1] }}</p>
        <p>{{ this.Phone }}</p>
      </div>
    </div>
    <div class="bot">
      <img
        :src="
          this.Img != ''
            ? this.Img
            : 'https://www.challenges.fr/assets/img/2022/10/06/cover-r4x3w1200-633eeafb54371-sir-winston2-romainricard-09.jpg'
        "
      />
      <h2>{{ this.Price }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",
  components: {},
  props: {
    Name: String,
    Addres: Array,
    Img: String,
    Price: String,
    Phone: String,
    Pos: Array,
  },

  methods: {
    async loc() {
      this.$store.commit("setMarker", this.Pos);
      this.$store.commit("setMarkerList", []);
      this.$store.commit("setZoom", 17);
    },
  },
};
</script>

<style scoped>
h1 {
  line-height: 40px;
}
svg {
  transform: scale(0.3);
}
.top {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
}
.bot {
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
}

.loc {
  width: 80px;
  height: 80px;
  cursor: pointer;
}
.loc:hover {
  transform: scale(1.1);
}
img {
  width: 80%;
  height: 200px;
  object-fit: cover;
  margin: 10px;
  border-radius: 25px;
}
.card {
  width: 90%;
  /* border-radius: 25px; */
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
@keyframes cardin {
  0% {
    opacity: 0;
    transform: translate(-10em);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
.card:hover {
  transform: scale(1.01);
}
</style>
