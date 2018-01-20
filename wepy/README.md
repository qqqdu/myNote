# 上拉加载和下拉刷新  
下拉刷新和上拉加载是业务上一个很常见的需求，在微信小程序里，提供了比较全面下拉刷新的方法 `onPullDownRefresh` 。而实现上拉加载就没有这么方便了。
## 下拉刷新  
虽然微信的官方文档有很多坑，但上拉加载介绍的还是很全面的。在这里稍稍带过。
- 首先在全局 `config` 中的 `window` 配置 `enablePullDownRefresh` .
- 在 `Page` 中定义 `onPullDownRefresh` 监听函数。到达下拉刷新条件后，该钩子函数执行，发起请求方法。
- 请求返回后，调用 `wx.stopPullDownRefresh` 停止下拉刷新。
### config
```javascript
config = {
    pages: [
      'pages/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ccc',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: '#000',
      enablePullDownRefresh: true
    }
  }
```
### page
```javascript
onPullDownRefresh() {
  wepy.showNavigationBarLoading() 
  setTimeout(()=>{
    this.getData = '数据拿到了'
    wepy.stopPullDownRefresh()
    wepy.hideNavigationBarLoading()
    this.$apply()
  },3000)
}
```
效果如下：
![image](./images/1.gif)
