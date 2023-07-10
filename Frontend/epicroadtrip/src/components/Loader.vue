<template>
    <div class="container">
        <span class="loaderp"></span>
    </div>
</template>

<script>
export default {
    name: "loaderVue"
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
}
.loaderp {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: inline-block;
  border-top: 1px solid rgb(53, 109, 179);
  border-right: 1px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loaderp::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 58px;
  height: 58px;
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
</style>