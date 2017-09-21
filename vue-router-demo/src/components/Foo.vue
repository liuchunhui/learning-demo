<template>
	<div>Foo</div>
</template>
<script>
export default {
  name: 'foo',
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    console.log('组件独享 beforeRouteEnter 钩子', to, from)
    next(vm => {  // 参数为回调函数，在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
      console.log('组件内 beforeRouteEnter 获取组件的 this', vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('组件独享 beforeRouteUpdate 钩子', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // 通常用来禁止用户在还未保存修改前突然离开。可以通过 next(false) 来取消导航。
    console.log('组件独享 beforeRouteLeave 钩子', to, from)
    next()
  }
}
</script>
<style scoped>

</style>
