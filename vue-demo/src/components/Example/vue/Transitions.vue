<template>
  <div class="transitions">
    <h1>过渡效果</h1>
      <h2>单元素/组件的过渡</h2>
        <button v-on:click="show = !show">测试过渡效果</button>
        <transition>
          <p v-if="show">hello</p>
        </transition>
        <transition name="fade">
          <p v-if="show">hello</p>
        </transition>
      <h2>css过渡</h2>
        <div>
          <button @click="cssShow = !cssShow">css过渡</button>
          <transition name="slide-fade">
            <p v-if="cssShow">hello world</p>
          </transition>
        </div>

      <h2>css动画</h2>
        <button @click="animationShow = !animationShow">css动画</button>
        <transition name="bounce">
          <p v-if="animationShow">动画效果展示</p>
        </transition>

      <h2>自定义过渡类名</h2>
        <button @click="defineShow = !defineShow">自定义过渡类名</button>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
        >
          <p v-if="defineShow">自定义过渡类名</p>
        </transition>

      <h2>JavaScript钩子</h2>
        <button @click="jsHookShow = !jsHookShow">JavaScript钩子</button>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
          v-on:enter-cancelled="enterCancelled"

          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
          v-on:leave-cancelled="leaveCancelled"
        >
          <p v-if="jsHookShow">JavaScript钩子函数</p>
        </transition>

      <h2>初始化渲染过渡</h2>
        <button @click="appearShow = !appearShow">初始化渲染过渡</button>
        <transition
          appear
          appear-class="animated tada"
          appear-active-class="animated bounceOutRight"
        >
          <p v-if="appearShow">CSS初始化渲染过渡</p>
        </transition>
        <transition
          appear
          v-on:before-appear="beforeAppearHook"
          v-on:appear="appearHooK"
          v-on:after-appear="afterAppearHook"
        >
          <p v-if="appearShow">JavaScript初始化渲染过渡</p>
        </transition>

      <h2>多个元素过渡</h2>
        <transition>
          <table v-if="items.length > 0">
            <tr v-for="item in items"><td>{{item.text}}</td></tr>
          </table>
          <p v-else>Sorry, no items found.</p>
        </transition>
        <button v-on:click="outIn = !outIn">切换</button>
        <transition mode="out-in">
          <p v-if="outIn">当前元素先进行过渡，完成之后新元素过渡进入。</p>
          <p v-else>文案隐藏了</p>
        </transition>
        <button v-on:click="inOut = !inOut">切换</button>
        <transition mode="in-out">
          <p v-if="inOut">新元素先进行过渡，完成之后当前元素过渡离开。</p>
          <p v-else>文案隐藏了</p>
        </transition>

      <h2>多个组件的过渡</h2>
        <input type="radio" id="v-a" v-model="view" value="v-a">
        <label for="v-a">A组件</label>
        <input type="radio" id="v-b" v-model="view" value="v-b">
        <label for="v-b">B组件</label>
        <transition mode="in-out">
          <component v-bind:is="view"></component>
        </transition>

      <h2>列表过渡</h2>
        <button v-on:click="add">Add</button>
        <button v-on:click="remove">Remove</button>
        <transition-group name="list" tag="p">
          <span v-for="(num, $index) in nums" v-bind:key="$index" class="list-item">
            {{ num }}
          </span>
        </transition-group>

      <h2>列表的位移过渡</h2>
        <div id="flip-list-demo" class="demo">
          <button v-on:click="shuffle">Shuffle</button>
          <transition-group name="flip-list" tag="ul">
            <li v-for="num in nums" v-bind:key="num">
              {{ num }}
            </li>
          </transition-group>
        </div>
  </div>
</template>
<script>
  import 'animate.css'
  import _ from 'lodash'
  export default {
    name: 'transitions',
    data () {
      return {
        show: true,
        cssShow: true,
        animationShow: true,
        defineShow: true,
        jsHookShow: true,
        appearShow: true,
        items: [],
        outIn: true,
        inOut: true,
        view: 'v-a',
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
      }
    },
    components: {
      'v-a': {
        template: `<div>组件A</div>`
      },
      'v-b': {
        template: `<div>组件B</div>`
      }
    },
    methods: {
      // JavaScript钩子函数
      beforeEnter () {
        console.log('beforeEnter')
      },
      enter () {
        console.log('enter')
      },
      afterEnter () {
        console.log('afterEnter')
      },
      enterCancelled () {
        console.log('enterCancelled')
      },
      beforeLeave () {
        console.log('beforeLeave')
      },
      leave () {
        console.log('leave')
      },
      afterLeave () {
        console.log('afterLeave')
      },
      leaveCancelled () {
        console.log('leaveCancelled')
      },
      // 初始化渲染过渡
      beforeAppearHook () {
        console.log('beforeAppearHook')
      },
      appearHooK () {
        console.log('appearHooK')
      },
      afterAppearHook () {
        console.log('afterAppearHook')
      },
      // 列表的进入和离开过渡
      randomIndex () {
        return Math.floor(Math.random() * this.nums.length)
      },
      add () {
        this.nums.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove () {
        this.nums.splice(this.randomIndex(), 1)
      },
      // 列表的位移过渡
      shuffle: function () {
        this.nums = _.shuffle(this.nums)
      }
    }
  }
</script>
<style scoped>
  /*单元素/组件的过渡*/
  .v-enter-active, .v-leave-active {
    transition: opacity .5s
  }
  .v-enter, .v-leave-active {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  /*css过渡*/
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
  /*动画效果*/
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  /*列表的进入和离开过渡*/
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  /*列表的位移过渡*/
  .flip-list-move {
    transition: transform 1s;
  }
</style>
