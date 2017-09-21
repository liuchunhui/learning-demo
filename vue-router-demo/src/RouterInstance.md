# Router实例


## 属性

router.app  // 配置了 router 的 Vue 根实例
router.mode  // 路由使用的 模式
router.currentRoute  // 当前路由对应的 路由信息对象


## 方法

### 全局导航钩子
router.beforeEach(guard)
router.beforeResolve(guard) // (2.5.0+): 此时异步组件已经加载完成
router.afterEach(hook)

### 动态的导航到一个新 url
router.push(location, onComplete?, onAbort?)
router.replace(location, onComplete?, onAbort?)
router.go(n)
router.back()
router.forward()

router.getMatchedComponents(location?)  // 返回目标位置或是当前路由匹配的组件数组
router.resolve(location, current?, append?)  // 解析目标位置
router.addRoutes(routes)  // 动态添加更多的路由规则
router.onReady(callback)  // 添加一个会在第一次路由跳转完成时被调用的回调函数
