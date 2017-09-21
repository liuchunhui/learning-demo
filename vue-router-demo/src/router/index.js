import Vue from 'vue'
import Router from 'vue-router'
import Bar from '@/components/Bar'
import Foo from '@/components/Foo'
import User from '@/components/User'
import UserMan from '@/components/UserMan'
import UserWomen from '@/components/UserWomen'
import Auth from '@/components/Auth'
import ScrollBehavior from '@/components/ScrollBehavior'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

// 匹配的优先级按照路由的定义顺序
const router = new Router({
  // HTML5 History 模式，需要后台配置支持,在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面.
  // 在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面
  mode: 'history',
  routes: [{  // routes 配置中的每个路由对象为 路由记录
    path: '/foo',
    name: 'foo',  // name: 路由命名
    alias: '/alias-foo',  // 别名，当用户访问 /alias-foo 时，URL 会保持为 /alias-foo，但是路由匹配则为 /foo，就像用户访问 /foo 一样
    component: Foo,
    beforeEnter: (to, from, next) => {  // 路由独享的before钩子
      console.log('路由独享的 before 钩子', to, from, next)
      next()
    }
  }, {
    path: '/bar',
    name: 'bar',
    component: Bar,
    meta: {  // 路由元信息，示例：当导向到该组件是，先要求验证用户身份
      requiresAuth: true
    }
  }, {
    path: '/user/:username/:id',  // 动态路由参数
    name: 'user',
    component: User,
    children: [{  // 嵌套路由
      path: '',
      component: UserMan
    }, {
      path: 'man',  // 以 / 开头的嵌套路径会被当作根路径
      component: UserMan
    }, {
      path: 'women',
      component: UserWomen
    }]
  }, {
    path: '/named-views',
    components: {  // 路由的视图命名
      foo: Foo,
      default: Bar
    }
  }, {  // 路由重定向，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
    path: '/redirect-foo',
    redirect: '/foo'
  }, {
    path: '/auth',
    component: Auth
  }, {
    path: '/scroll-behavior',
    component: ScrollBehavior
  }, {  // 路由重定向，回调函数实现
    path: '/redirect/:name',
    redirect: to => {
      return {
        name: to.params.name
      }
    }
  }, {  // 匹配不存在的路由
    path: '*',
    component: NotFoundComponent
  }],
  scrollBehavior (to, from, savedPosition) {
    /**
     * savedPosition:
     * 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用,
     * 位置的对象信息{ x: number, y: number }
     * 返回一个布尔假的值，或者是一个空对象，那么不会发生滚动
     */
    console.log('页面滚动测试----->', to, from, savedPosition)
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
    // 模拟滚到锚点
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  }
})

/**
 * 全局的 before 钩子
 * 全局的 before 钩子按照创建顺序调用。
 * 钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于 等待中
 *
 * to:  即将要进入的目标 路由对象
 * from: 当前导航正要离开的路由对象
 * next: 执行跳转function，执行效果依赖 next 方法的调用参数
 * next(): 进行管道中的下一个钩子
 * next(false): 中断当前的导航
 * next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址
 */
router.beforeEach((to, from, next) => {
  console.log('全局的 before 钩子', to, from)
  // 验证用户身份信息 eg: bar 组件有配置元信息
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next({
      path: '/auth',
      query: { redirect: to.fullPath }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

/**
 * 全局的 after 钩子, 没有next方法,不能改变导航
 */
router.afterEach(route => {
  console.log('全局的 after 钩子', route)
})
export default router
