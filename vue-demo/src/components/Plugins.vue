<template>
  <div class="plugins">
    <h1>插件</h1>
    <div v-adirective></div>
    <all-component />
    <button @click="allMethod">点击插件上注册的方法</button>
  </div>
</template>
<script>
  import Vue from 'vue'
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('在插件上注册的全局函数')
    }

    // 添加全局资源
    Vue.directive('adirective', {
      bind (el, binding, vnode, oldVnode) {
        console.log('在插件上注册的全局指令-->', el, binding, vnode, oldVnode)
      }
    })

    // 注册混合
    Vue.mixin({
      components: {
        'all-component': {
          template: `<div>在插件上注册全局组件</div>`
        }
      },
      created () {
        console.log('在插件上注册全局的created函数')
      }
    })

    // 添加实例方法
    Vue.prototype.$myMethod = function (options) {
      console.log('在插件上注册定义实例方法')
    }
  }
  Vue.use(MyPlugin)
  export default {
    name: 'plugins',
    data () {
      return {}
    },
    methods: {
      allMethod () {
        this.$myMethod()
      }
    }
  }
</script>
<style>

</style>
