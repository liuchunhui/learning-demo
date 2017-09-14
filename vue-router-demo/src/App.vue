<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to='/foo'>Go to Foo</router-link>
    </p>
    <p>
      <router-link to='/bar'>Go to Bar</router-link>
    </p>
    <p>
      <router-link to='/user/bob/123'>Go to User</router-link>
    </p>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
