<template>
  <div class="list">
    <h1>条件渲染</h1>
    <div v-for="item in items" :key="item.id">
      {{item.text}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'list',
    data () {
      return {
        items: [
          {
            id: 1,
            text: 'apple'
          },
          {
            id: 2,
            text: 'banana'
          }
        ]
      }
    }
  }
</script>
<style>

</style>
