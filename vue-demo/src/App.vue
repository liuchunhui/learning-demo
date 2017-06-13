<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  font-size: 12px;
}
h1 {
  font-size: 18px;
  font-weight: 700;
}
h2 {
  font-size: 16px;
  font-weight: 700;
}
h3 {
  font-size: 14px;
  font-weight: 700;
}
h4 {
  font-size: 12px;
  font-weight: 700;
}
</style>
