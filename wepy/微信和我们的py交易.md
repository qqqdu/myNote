# wepy-cli 微信小程序组件化开发框架    
`wepy` 参考了 `vue.js` 的风格和语法特性，但在某些方面和 `VUE` 也有不同之处，如果稍稍不注意，就会浪费很多时间去调试、找出bug。在这里列举一些我们遇到的坑以及解决方法。这些坑有的是 `wepy` 引起的，有的是由微信开发者工具引起的，有的则是微信小程序自身的。也有的是几者同时造成的。我会在小标题注明坑的来源。  

## 很重要的微信开发者工具三条黄金法则  
### 明明没错，但开发者工具还是报错怎么办？？？
- 删掉 `dist` 目录。 
- 还不行？ 重启微信开发者工具。
- 还是报错？ 重启一下 `wepy` 项目
## WePY项目的目录结构

```
├── dist                   微信开发者工具指定的目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules           
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置
```
- 在新建微信小程序的时候要选择工程目录，此时 `dist` 为小程序根目录，`wepy` 编译后的文件就打包在这个目录。
- `src` 中 每新建 `pages` 页面 就要在 `app.wpy` 中标明路由，也就创建了一个新的路由页面。`component` 为公用组件库。
- `app.wpy` 中配置全局信息，`pages` 内部页面配置各自局部信息。

## `WePy` 与 `Vue` 不同之处  
### 全局钩子

钩子函数 | Vue | WePy| 功能
---|---|---|---|
beforeCreate| Y|N | \
beforeMount | Y|N|\
mounted     | Y|N|\
beforeUpdate| Y|N|\
updated     | Y|N|\
beforeDestroy| Y|N|\
destroyed |Y|N|\
onShow | N | Y | 页面显示时调用，使用场景后面会介绍
onLoad | N | Y | 页面加载时调用，在这里可以拿到路由参数


















```
遇到的坑：  
返回页面传递数据  
repeat各种坑  
mixins 中的 computed 不能混合  
插入富文本标签
```