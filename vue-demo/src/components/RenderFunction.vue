<template>
  <div class="render-function">
    <h1>Render函数</h1>

      <anchored-heading :level="3">
        <span>我来自render函数</span>
      </anchored-heading>
      <v-if-and-v-for :items="items" />
      <v-model />
  </div>
</template>
<script>
  import Vue from 'vue'

  // 动态生成heading 标签
  Vue.component('anchored-heading', {
    render: function (createElement) {
      return createElement(
        `h${this.level}`,  // tab name标签
        this.$slots.default  // 子组件的阵列
      )
    },
    props: {
      level: {
        type: Number,
        require: true
      }
    }
  })

  // createElement参数
//  /**
//   * @param vNodeTag html标签字符串
//   * @param vNodeProp 组件选项对象
//   * @param func 一个返回值类型为String/Object的函数
//   */
//  createElement(vNodeTag, vNodeProp, func) {
//    return vNode
//  }
//  // 上面vNodeProps传值参数
//  let vNodeProp = {
//    'class': {  // 和`v-bind:class`一样的 API
//      foo: true
//    },
//    'style': {  // 和`v-bind:style`一样的 API
//      fontSize: '14px'
//    },
//    'attrs': {  // 正常的 HTML 特性
//      id: 'foo'
//    },
//    props: {  // 组件 props
//      myProps: 'bar'
//    },
//    domProps: {  //  DOM 属性
//      innerHTML: 'baz'
//    },
//    // 事件监听器基于 "on"
//    // 所以不再支持如 v-on:keyup.enter 修饰器
//    // 需要手动匹配 keyCode。
//    on: {
//      click: () => ''
//    },
//    nativeOn: {  // 仅对于组件，用于监听原生事件，而不是组件内部使用 vm.$emit 触发的事件
//
//    },
//    directives: [{  // 自定义指令. 注意事项：不能对绑定的旧值设值
//      name: 'my-custom-directive',
//      value: '2',
//      expression: '1 + 1',
//      arg: 'foo',
//      modifiers: {
//        bar: true
//      }
//    }],
//    scopedSlots: {  // Scoped slots in the form of
//      default: props => h('span', props.text)
//    },
//    slot: 'name-of-slot',  // 如果组件是其他组件的子组件，需为slot指定名称
//    key: 'myKey',  // 其他特殊顶层属性
//    ref: 'myRef'
//  }

  //  v-if 和 v-for render实现
  let vIfAndVFor = {
    render: function (createdElement) {
      if (this.items.length) {
        return createdElement('ul', this.items.map(function (item) {
          return createdElement('li', item.name)
        }))
      } else {
        return createdElement('p', 'No items found')
      }
    },
    props: {
      items: {
        type: Array,
        require: true
      }
    }
  }

  // v-model render实现
  let vModel = {
    render: function (createdElement) {
      let self = this
      return createdElement('input', {
        domProps: {
//          value: self.value
        },
        on: {
          input: function (event) {
            console.log('render重写v-model, input事件-->', event.target.value)
            self.value = event.target.value
          }
        }
      })
    }
  }
//  // 函数组件化公共的组件render
//  let EmptyList = {}
//  let TableList = {}
//  let OrderedList = {}
//  let UnorderedList = {}
//
//  Vue.component('smart-list', {
//    functional: true,  // 意味它是无状态（没有 data），无实例（没有 this 上下文）
//    render: function (createElement, context) {  // 增加 context 参数，this.$slots.default 更新为 context.children，之后this.level 更新为 context.props.level
//      function appropriateListComponent() {
//        let items = context.props.items
//
//        if (items.length === 0) return EmptyList
//        if (typeof items[0] === 'object') return TableList
//        if (context.prop.isOrdered) return OrderedList
//
//        return UnorderedList
//      }
//
//      return createElement(
//        appropriateListComponent(),
//        context.data,
//        context.children
//      )
//    },
//    props: {
//      items: {
//        type: 'Array',
//        required: true
//      },
//      isOrdered: Boolean
//    }
//  })
//  // context 参数列表
//  context = {
//    props: {},  // 提供props 的对象
//    children: [],   // VNode 子节点的数组
//    slots: {},  // slots 对象
//    data: {},  // 传递给组件的 data 对象
//    parent: "",  // 对父组件的引用
//    listeners: {},  //(2.3.0+) 一个包含了组件上所注册的 v-on 侦听器的对象。这只是一个指向 data.on 的别名。
//    injections: {}  // (2.3.0+) 如果使用了 inject 选项, 则该对象包含了应当被注入的属性。
//  }

  export default {
    name: 'render-function',
    data () {
      return {
        items: [{
          name: 'render重写v-if 和 v-for'
        }, {
          name: 'render重写v-if 和 v-for'
        }, {
          name: 'render重写v-if 和 v-for'
        }]
      }
    },
    components: {
      vIfAndVFor,
      vModel
    }
  }
</script>
<style scoped>

</style>
