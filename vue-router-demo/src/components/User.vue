<template>
	<div style="border: solid 1px #cccccc">
    User：{{ $route.params.username }}, id：{{ $route.params.id }}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {}
  },
  watch: {  // 两个路由渲染同一个组件，组件实例会被复用,用watch监听路由参数的变化
//    '$route' (to, from) {
//      console.log('to: ', to, ' from: ', from)
//    }
    '$route': 'fetchData'  // 可以这样定义监听
  },
  methods: {
    fetchData () {
      console.log('--------------》监听路由变化')
    }
  },
  created () {
    console.log('user created')
  },
  mounted () {
    console.log('user mounted')
  }
}
</script>
<style scoped>
</style>
