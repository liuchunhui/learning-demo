import Vue from 'vue'
import Router from 'vue-router'
import Bar from '@/components/Bar'
import Foo from '@/components/Foo'
import User from '@/components/User'
import UserMan from '@/components/UserMan'
import UserWomen from '@/components/UserWomen'

Vue.use(Router)

// 匹配的优先级按照路由的定义顺序
export default new Router({
  routes: [{
    path: '/foo',
    name: 'foo',
    component: Foo
  },
  {
    path: '/bar',
    name: 'bar',
    component: Bar
  },
  {
    path: '/user/:username/:id',  // 动态路由参数
    name: 'user',
    component: User,
    children: [{
      path: '',
      component: UserMan
    }, {
      path: '/man',
      component: UserMan
    }, {
      path: '/woman',
      component: UserWomen
    }]
  }]
})
