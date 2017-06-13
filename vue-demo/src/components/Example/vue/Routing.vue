<template>
  <div class="routing">
    <h1>路由</h1>
    <h2>模拟实现路由</h2>
    <component :is="ViewComponent"></component>
  </div>
</template>
<script>
  const NotFound = { template: '<p>Page not found</p>' }
  const Home = { template: '<p>home page</p>' }
  const About = { template: '<p>about page</p>' }
  const routes = {
    '/': Home,
    '/about': About
  }
  export default {
    name: 'routing',
    data () {
      return {
        currentRoute: window.location.pathname
      }
    },
    computed: {
      ViewComponent () {
        return routes[this.currentRoute] || NotFound
      }
    }
  }
</script>
<style>

</style>
