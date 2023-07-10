<template>
  <div>
    <transition name="scroll" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>
 <script>
export default {
  components : {
  }
}
</script>
<style >
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: aliceblue;
  background-color: rgb(160, 197, 230);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<style scoped>
.scroll-leave-active, .scroll-enter-active
 {
  transition: all .5s ease;
}

.scroll-enter-from {
  transform: translate(3em);
  opacity: 0;
}

.scroll-leave-to {
  transform: translate(3em);
  opacity: 0;
}

.scroll-leave-from,
.scroll-enter-to {
  transform: translate(0);
  opacity: 1;
}
</style>