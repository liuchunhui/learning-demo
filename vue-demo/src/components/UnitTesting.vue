<template>
  <div class="unit-testing">
    <h1>单元测试</h1>
    <span>{{message}}</span>
  </div>
</template>
<script>
  export default {
    name: 'unit-testing',
    props: ['msg'],
    data () {
      return {
        message: 'hello!'
      }
    },
    created () {
      this.message = 'bye!'
    }
  }
</script>
<style>

</style>
