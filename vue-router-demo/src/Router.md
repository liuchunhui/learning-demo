# Router构造配置

```
new Router({
  routes: [{
    path: string,
    component: Component,
    name: string,  // for named routes (命名路由)
    components: { [name: string]: Component },  // for named views (命名视图组件)
    redirect: string | Location | Function,
    alias: string | Array<string>,
    children: Array<RouteConfig>,  // for nested routes
    beforeEnter: (to: Route, from: Route, next: Function) => void,
    meta: any
  }],
  mode: string,  // "hash",使用 URL hash 值来作路由 | "history":HTML5 History | "abstract": 支持所有 JavaScript 运行环境，如 Node.js 服务器端
  base: string,  // 默认：/ ,应用的基路径
  linkActiveClass: string,  // 全局配置 <router-link> 的默认『激活 class 类名』
  scrollBehavior: Function,  // 滚动行为
})
```
