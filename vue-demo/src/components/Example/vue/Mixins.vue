<template>
  <div class="mixins">
    <h1>混合</h1>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.mixin({  // 全局注册混合，影响到 所有 之后创建的 Vue 实例
    created () {
      console.log('来自全局的mixin created方法')
    }
  })
  let myMixin = {
    created () {
      this.hello()
    },
    methods: {
      hello () {
        console.log('hello from mixin')
      },
      foo: function () {
        console.log('foo')
      },
      conflicting: function () {
        console.log('方法来自 mixin')
      }
    }
  }
  export default {
    name: 'mixins',
    mixins: [myMixin],  // 局部注册mixin
    // 同名钩子函数将混合为一个数组,混合对象的 钩子将在组件自身钩子之前调用,methods,
    // components 和 directives，将被混合为同一个对象。 两个对象键名冲突时，取组件对象的键值对
    methods: {
      bar: function () {
        console.log('bar')
      },
      conflicting: function () {
        console.log('方法来自组件')
      }
    },
    created () {
      console.log('hello from component')
    },
    mounted () {
      this.foo()
      this.bar()
      this.conflicting()
    }
  }
</script>
<style>

</style>
