<template>
  <div id="app">
    <h1>路由 Demo 测试</h1>
    <p>
      <router-link events="click" tag="li" to="/foo">
        <a>Go to Foo</a>
      </router-link>
    </p>
    <p>
      <router-link to='/bar'>Go to Bar</router-link>
    </p>
    <p>
      <router-link :to="{name: 'user', params: { username: 'Bob', id: 123 }}">Go to User</router-link>
    </p>
    <p>
      <button @click="routerPushClick">测试router.push</button>
    </p>
    <p>
      <button @click="routerReplaceClick">测试router.replace</button>
    </p>
    <p>
      <button @click="routerGoClick">测试router.go 后退3步</button>
    </p>
    <p>
      <router-link to="/named-views">测试命名视图</router-link>
    </p>
    <p>
      <router-link to="/redirect-foo">测试路由重定向</router-link>
    </p>
    <p>
      <router-link to="/alias-foo">测试路由别名</router-link>
    </p>
    <p>
      <router-link to="/scroll-behavior">测试滚动行为</router-link>
    </p>
    <router-view name="foo"></router-view>
    <transition><!-- 路由切换的过渡效果 -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import router from './router/index'
  export default {
    name: 'app',
    methods: {
      routerPushClick () {
        /**
         * router.push() 导航到该路由，并向 history 栈添加一个新的记录
         */
//        router.push({  // 编程式导航
//          path: '/user/lili/18/women'
//        })
        router.push({
          name: 'user',
          params: {
            username: 'Lili',
            id: '18'
          }
        })
      },
      routerReplaceClick () {
        /**
         * router.replace() 导航到该路由，不会向 history 添加新记录
         */
        router.replace({
          path: '/bar'
        })
      },
      routerGoClick () {
        /**
         * router.go() 在 history 记录中向前或者后退多少步
         */
        router.go(-3)  // 后退3步
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
