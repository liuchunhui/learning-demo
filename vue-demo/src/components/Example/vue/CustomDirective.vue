<template>
  <div class="custom-directive">
    <h1>自定义指令</h1>
    <input v-focus>
    <div id="hook-arguments-example" v-demo:hello.a.b="message"></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  // 全局注册指令
  Vue.directive('focus', {
    inserted (el) {
      el.focus()
    }
  })
  export default {
    name: 'custom-directive',
    data () {
      return {
        message: 'hello!'
      }
    },
    directives: {
      demo: {  // 局部内定义指令
        /**
         * 自定义指令参数说明
         * @param el 指令所绑定的元素，可以用来直接操作 DOM
         * @param binding 一个对象，包含（name, value, oldValue, expression, arg, modifiers）
         * @param vnode  编译生成的虚拟节点
         * @param oldVnode 上一个虚拟节点
         */
        bind (el, binding, vnode, oldVnode) {  // 只调用一次，指令第一次绑定到元素时调用
          console.log('bind--->', el, binding, vnode, oldVnode)
          var s = JSON.stringify
          el.innerHTML = `
            name: ${s(binding.name)}<br>
            value: ${s(binding.value)}<br>
            expression: ${s(binding.expression)}<br>
            argument: ${s(binding.arg)}<br>
            modifiers: ${s(binding.modifiers)}<br>
            vnode keys: ${Object.keys(vnode).join(', ')}`
        },
        inserted (el, binding, vnode, oldVnode) {  //  被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）
          console.log('inserted--->', el, binding, vnode, oldVnode)
        },
        update (el, binding, vnode, oldVnode) {  // 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。
          console.log('update--->', el, binding, vnode, oldVnode)
        },
        componentUpdated (el, binding, vnode, oldVnode) {  // 被绑定元素所在模板完成一次更新周期时调用
          console.log('componentUpdated--->', el, binding, vnode, oldVnode)
        },
        unbind (el, binding, vnode, oldVnode) {  // 只调用一次， 指令与元素解绑时调用
          console.log('unbind--->', el, binding, vnode, oldVnode)
        }
      }
    }
  }
</script>
<style>
</style>
