# 路由信息对象

## route
### 表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，还有 URL 匹配到的 route records（路由记录）

```
route = {
  name: '',  // string, 当前路由的名称
  meta: {},  // object, 路由元信息
  path: '',  // string, 对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"
  fullPath: '',  // string, 完成解析后的 URL，包含查询参数和 hash 的完整路径
  hash: '',  // string, 当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串
  matched: [],  // Array, 包含当前路由的所有嵌套路径片段的 路由记录 ,还有在 children 数组
  params: {},  // object, 包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象
  query: {}  // object, 表示 URL 查询参数
}
```


