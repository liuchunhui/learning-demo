# 组件注入


## 注入的属性

通过在 Vue 根实例的 router 配置传入 router 实例，
$router, $route属性成员会被注入到每个子组件

$router: router 实例
$route: 当前激活的 路由信息对象


## 允许的额外配置
beforeRouteEnter: 组件中的路由钩子
beforeRouteLeave: 组件中的路由钩子
