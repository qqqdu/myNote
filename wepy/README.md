# 下拉刷新和上拉加载  
下拉刷新和上拉加载是业务上一个很常见的需求，在微信小程序里，提供了下拉刷新的方法 `onPullDownRefresh` 。而实现上拉加载相对来说就比较不方便了。
## 下拉刷新  
虽然微信的官方文档有很多坑，但上拉加载介绍的还是很全面的。在这里稍稍带过。
- 首先在全局 `config` 中的 `window` 配置 `enablePullDownRefresh` .
- 在 `Page` 中定义 `onPullDownRefresh` 钩子函数。到达下拉刷新条件后，该钩子函数执行，发起请求方法。
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
![image](./images/1.gjf)  
你会发现下拉的过程有些僵硬。这实际上是没有添加背景色的原因，加上背景色后再试试。  
![image](./images/2.gif)  
现在感觉好多了吧。下拉刷新有现成的配置和方法，很容易实现，可上拉加载就不同了。  
## 上拉加载
上拉加载就没有官方提供的完整动画了，这里有两个实现的方案。一个是 `page` 自带的下拉触底钩子事件 `onReachBottom` 能做的只是下拉到底部的时候通知你触底了，一个是 `scroll-view` 标签的一系列事件。现在用两个方法分别实现一下上拉加载。
### 下拉触底事件 `onReachBottom`
模板
```html
<template>
  <view class="container"  
        @touchstart="startFn"
        @touchmove="moveFn" 
        @touchend="endFn">
    <view style="top:{{top}}px;position:relative;">
      <view>上拉加载测试</view>
      <view>上拉加载测试</view>
      <view @tap="gotoTop">回到顶部</view>
    </view>
  </view>
</template>
```
钩子函数
```javascript
data = {
  getData: '',
  top: 0,
  lastTop: 0,
  canDrag: false
}

methods = {
  moveFn(ev) {
    let nowY = ev.changedTouches[0].clientY
    nowY = nowY-this.lastTop
    if(nowY > 0 )
      this.canDrag = false
    if( nowY<=0 && this.canDrag ) {
      this.top = nowY
    }
    if( -this.top>= 50  )
      this.top = -50
  },
  startFn(ev) {
    this.lastTop = ev.changedTouches[0].clientY 
  },
  endFn() {
    this.top = 0
  },
  gotoTop() {
    wepy.pageScrollTo({
      scrollTop: 0
    })
  }
}

onReachBottom() {
 this.canDrag = true
}
```