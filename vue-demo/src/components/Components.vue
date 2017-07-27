<template>
  <div class="components">
    <h1>组件</h1>
      <h2>全局注册组件</h2>
        <global-component />
        <br />

      <h2>局部注册组件</h2>
        <child-component msg="父组件传值给子组件"/>
        <br />

      <h2>模板解析测试</h2>
        <table>
          <row-component></row-component>
        </table>
        <table>
          <tr is="row-component"></tr>
        </table>
        <br />

      <h2>Prop验证</h2>
         <verify-component :num="10"/>

      <h2>使用v-on绑定自定义事件</h2>
        <p>父组件的值：{{ total }}</p>
        <button-counter v-on:increment="incrementTotal"/>

      <h2>.sync修饰符</h2>
        <p>父组件的值：{{bar}}</p>
        <sync-component :foo.sync="bar"/>

      <h2>自定义事件的表单输入组件</h2>
        <currency-input v-model="value"/>
        <p>输入的金额为：{{value}}</p>

      <h2>非父子组件通信</h2>
        <friend-a />
        <friend-b />

      <h2>使用slot分发内容</h2>
        <h3>单个Slot</h3>
          <div>
            <p>这是父组件的标题</p>
            <single-slot>
              <p>从父组件里向子组件添加内容</p>
            </single-slot>
            <single-slot />
          </div>

        <h3>具名slot</h3>
          <named-slot>
            <p slot="header">具名slot测试的header</p>
            <p>具名slot测试的内容</p>
            <p slot="footer">具名slot测试的flooter</p>
          </named-slot>

        <h3>作用域插槽</h3>
          <list-slot :items="items">
            <template slot="item" scope="props"><li>{{props.text}}</li></template>
          </list-slot>

        <h3>动态组件</h3>
          <button @click="changeA">切换A组件</button>
          <button @click="changeB">切换B组件</button>
          <keep-alive>
            <component v-bind:is="currentView"></component>
          </keep-alive>

      <h2>异步组件</h2>
        <async-example />

      <h2>高级异步组件</h2>
        <!--<high-async />-->

      <h2>递归组件</h2>
        <recursion-component :flag="0"></recursion-component>
  </div>
</template>
<script>
  import Vue from 'vue'
  // 注册全局组件
  Vue.component('global-component', {
    template: '<div>注册全局组件测试</div>'
  })

  // 注册局部组件
  let Child = {
    props: ['msg'],
    template: `<div>局部注册组件测试：{{msg}}</div>`
  }
  let Row = {
    template: `<tr><td>第一列</td><td>第二列 </td></tr>`
  }
  // 组件Prop属性
  let Verify = {
    props: {
      num: {
        type: Number,
        required: true,
        default: 10,
        validator (val) {
          return val > 0
        }
      }
    },
    template: `<p>props验证测试{{num}}</p>`
  }
  // 使用v-on绑定自定义事件
  let ButtonCounter = {
    template: `<button v-on:click.native="increment">{{counter}}</button>`,
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increment () {
        this.counter += 1
        this.$emit('increment')
      }
    }
  }
  // .sync修饰符
  let Sync = {
    props: {
      foo: {
        type: String
      }
    },
    template: '<input v-model="foo">',
    watch: {
      foo (newValue) {
        this.$emit('update:foo', newValue)
      }
    }
  }
  // 自定义事件的表单输入组件
  let CurrencyInput = {
    template: `<span>$<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"></span>`,
    props: ['value'],
    data () {
      return {}
    },
    methods: {
      updateValue (value) {
        let formattedValue = value.trim().slice(0, value.indexOf('.') + 3)
        if (formattedValue !== value) {
          this.$ref.input.value = formattedValue
        }
        this.$emit('input', Number(formattedValue))
      }
    }
  }
  // 非父子组件通信
  let bus = new Vue()  // 使用一个空的 Vue 实例作为中央事件总线
  let FriendA = {
    template: '<div>这是组件A <button @click="clickA">发送信息给B</button></div>',
    data () {
      return {
        count: 0
      }
    },
    methods: {
      clickA () {
        bus.$emit('value-change', this.count++)
      }
    }
  }
  let FriendB = {
    template: '<div>这是组件B，从A或许的信息是{{value}}</div>',
    data () {
      return {
        value: null
      }
    },
    mounted () {
      bus.$on('value-change', (id) => {
        this.value = id
      })
    }
  }
  // 使用slot分发内容
  let SingleSlot = {  // 单个slot
    template: `<div><p>这是子组件的标题</p><slot>只有在没有要分发的内容时才会显示。</slot></div>`
  }
  let NamedSlot = {  // 具名slot
    template: `<div><header><slot name="header"></slot></header><main><slot>子组件默认内容</slot></main><footer><slot name="footer"></slot></footer></div>`
  }
  let ListSlot = {  // 作用域slot
    props: ['items'],
    template: `<ul><slot name="item" v-for="item in items" :text="item.text"></slot></ul>`
  }
  // 动态组件
  let DynamicA = {
    template: `<div>动态组件A</div>`
  }
  let DynamicB = {
    template: `<div>动态组件B</div>`
  }
  // 异步组件
  Vue.component('async-example', function (resolve, reject) {
    setTimeout(function () {
      resolve({
        template: '<div>模拟异步，我是异步的。</div>'
      })
    }, 5000)
  })
  // 高级异步组件(未实现??????)
//  Vue.component('high-async', function (resolve, reject) {
//    setTimeout(function () {
//      resolve({
//        // 需要加载的组件. 应当是一个 Promise
//        component: {
//          template: `<div>高级异步组件内容</div>`
//        },
//        // loading 时应当渲染的组件
//        loading: {
//          template: `<div>高级异步组件加载中……</div>`
//        },
//        // 出错时渲染的组件
//        error: {
//          template: `<div>高级异步组件内容加载失败！</div>`
//        },
//        // 渲染 loading 组件前的等待时间。默认：200ms.
//        delay: 200,
//        // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
//        timeout: 3000
//      })
//    }, 1000)
//  })
  // 递归组件
  let RecursionComponent = {
    name: 'stack-overflow',
    template: '<div v-if="data < 10">递归组件测试<stack-overflow :flag="data"></stack-overflow></div>',
    props: ['flag'],
    data () {
      return {
        data: Number(this.flag) + 1
      }
    }
  }
  export default {
    name: 'components',
    data () {
      return {
        total: 0,
        bar: 'bar',
        value: 0,
        items: [
          {
            id: 1,
            text: 'apple'
          },
          {
            id: 2,
            text: 'banana'
          }
        ],
        currentView: DynamicA
      }
    },
    components: {
      'child-component': Child,
      'row-component': Row,
      'verify-component': Verify,
      'button-counter': ButtonCounter,
      'sync-component': Sync,
      'currency-input': CurrencyInput,
      'friend-a': FriendA,
      'friend-b': FriendB,
      'single-slot': SingleSlot,
      'named-slot': NamedSlot,
      'list-slot': ListSlot,
      'recursion-component': RecursionComponent
    },
    methods: {
      incrementTotal () {
        this.total += 1
      },
      changeA () {
        this.currentView = DynamicA
      },
      changeB () {
        this.currentView = DynamicB
      }
    }
  }
</script>
<style>

</style>
