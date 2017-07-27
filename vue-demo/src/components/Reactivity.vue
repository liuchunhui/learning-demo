<template>
  <div class="reactivity">
    <h1>异步更新队列</h1>

    <button @click="updateMessage">更新dom</button>
    <div id="example">{{message}}</div>
  </div>
</template>
<script>
  export default {
    name: 'reactivity',
    data () {
      return {
        message: '没有更新'
      }
    },
    methods: {
      updateMessage () {
        this.message = '更新完成'
        console.log('还在事件中-->', this.$el.textContent)
        this.$nextTick(function () {
          console.log('nextTick方法中-->', this.$el.textContent)
        })
      }
    }
  }
</script>
<style scoped>

</style>
