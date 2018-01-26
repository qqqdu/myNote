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
![image](./images/1.gif)  
你会发现下拉的过程有些僵硬。这实际上是没有添加背景色的原因，加上背景色后再试试。  
![image](./images/2.gif)  
现在感觉好多了吧。下拉刷新有现成的配置和方法，很容易实现，可上拉加载就不同了。  
## 上拉加载
上拉加载就没有官方提供的完整动画了，这里有两个实现的方案。一个是 `page` 自带的下拉触底钩子事件 `onReachBottom` 能做的只是下拉到底部的时候通知你触底了，一个是 `scroll-view` 标签的一系列事件。现在用两个方法分别实现一下上拉加载。
### 上拉触底事件 `onReachBottom`
模板
```html
<template>
  <view class="loading"></view>
  <view class="container"  
        @touchmove="moveFn" 
        @touchstart="startFn" 
        @touchend="endFn">
    <view style="top:{{top}}px;position:relative;" 
          class="container-son">
    <repeat for="{{list}}" 
            key="index" 
            index="index" 
            item="item">
        <view>{{ item }}<text>{{index}}</text></view>
    </repeat>
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
  canDrag: false,
  list: []
}
onReachBottom() {
 this.canDrag = true
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
    if( -this.top>= this.maxTop  )
      this.top = -this.maxTop
  },
  startFn(ev) {
    this.lastTop = ev.changedTouches[0].clientY 
  },
  endFn() {
    if(this.top <= -this.maxTop) {
      this.text = "去请求数据了"
      setTimeout(()=>{
        this.text = "请求回来了"
        this.canDrag = false
        this.list.push(...["数据","数据","数据"])
        this.$apply()
        this.top = 0;
        return
      },1000)
    }
  },
  gotoTop() {
    wepy.pageScrollTo({
      scrollTop: 0
    })
  }
}
```
完成后看一下效果：  
![image](./images/3.gif)  
这样子起码可以应对大多数上拉加载业务，但人才3g端搜索结果页面还存在这样一个需求  
滑动屏幕的时候需要记录翻页的页数。  
![image](./images/4.gif)  
解决方法：  
- 全局添加 `scroll` 钩子
- 在 `scroll` 钩子触发的时候计算 `scrollTop` 、 `childHeight` 和 `documentHeight` 之间的关系
- 计算当前页数，更新视图

tip: 那在以上解决方案中有几个必要条件， `scroll` 和  `scrollTop` 在查阅了官方文档以及社区后，全局是没有 `scroll` 方法的，并且 `scrollTop` 是 只写 的。原生滚动行不通。  
因此引入了第二种上拉加载的解决方法，`scroll-view`  
### 滚动容器实现上拉加载  
scroll-view： 可滚动视图区域。  
它的具体用法不赘述，看官方文档就行了。这里提解决上述问题的方法即可。
- `bindscrolltolower` 类比原生全局钩子 `onReachBottom`  
- `scroll-view` 自带 `scroll` 函数 并且可以通过回调参数获取scrollTop `ev.detail.scrollTop`    
模板
```html
<scroll-view    scroll-y 
                id="content"   
                @scroll="scroll"  
                @scrolltolower="lower" 
                scroll-top="{{gotoTopNum}}" 
                lower-threshold="100" 
                style="transform:translate3d(0,{{childTop}}px,0)">
    <view  class="sty-search" 
            @touchmove="moveContent" 
            @touchstart="startContent" 
            @touchend="endContent">...</view>
</scroll-view>
```  
以上就是最终的模板，你可能在想为什么这么复杂。虽然复杂，但每个属性都是有用的，当然这其中有几个坑在等着我们。  
首先节点分为滚动容器和子容器。  

Q：为什么滚动容器里嵌套一个子容器，并且将拖动的三个方法绑定在它上面。  
A：这是第一个坑，因为 `scroll-view` 容器不能绑定 `touchmove`   事件,那如果绑定了会怎么样呢？不会怎么样，事件钩子不会调用。（这个坑在官方文档查不出来，当时绑定了不调用，在社区找到了解决方法，就是将touchmove事件绑定到子容器）  
再来看代码
```javascript
methods = {
    async lower() {
      this.canDrag = true
    },
    scroll (ev) {
      this.scrollTop = ev.detail.scrollTop
      if (ev.detail.deltaY > 0) {
        this.canDrag = false
      } else {
        
      }
      let nowSet = this.documentHeight+this.scrollTop-this.contentHeader
      let num = Math.ceil(nowSet/this.listHeight) - 1
      num = Math.floor(num / this.pageBean.pageSize) + 1
      num = (num > this.pageBean.pageNo) ? this.pageBean.pageNo : num 
      if(num != this.page) {
        this.page = num
        this.$apply()
      }
    },
    startContent(ev) {
      this.lastTop = ev.changedTouches[0].clientY
      if(!this.documentHeight){
        this.documentHeight = wx.getSystemInfoSync().windowHeight
      }
      this.moveY = 0
      this.startScroll = this.scrollTop
      /* 这句是解决回到顶部的bug */
      if (this.gotoTopNum || this.gotoTopNum==0) { this.gotoTopNum = undefined }
    },
    moveContent (ev) {
      let {
        pageNo,
        pageSize,
        totalCount
      } = this.pageBean
      let nowY = ev.changedTouches[0].clientY
      nowY = nowY-this.lastTop
      if (this.canDrag && nowY) {
          this.state = 1;
          if (nowY <= -this.maxMove) {
            nowY = -this.maxMove
                this.state = 2
          }
          /* 数据到底部改变状态 */
          if (pageNo >= this.maxPage || pageNo * pageSize >= totalCount) {
            this.state = 0
          }
          if (nowY <= 0) {
            this.moveY = nowY
            this.childTop = nowY
          } 
      }
    },
    async endContent(ev) {
      let {
        pageNo,
        pageSize,
        totalCount
      } = this.pageBean
    
      if (this.childTop === -this.maxMove) {
        
        /* 状态 */
        if (pageNo >= this.maxPage || pageNo * pageSize >= totalCount) {
            this.state = 0
        } else {
          this.pageBean.pageNo++ 
          await this.fillData()
          this.page = this.pageBean.pageNo
          this.gotoTopNum = this.scrollTop + this.maxMove
          this.childTop = 0
          this.canDrag = false
          this.$apply()
        }
      }
      /* 如果没超过刷新高度则重置 */
      this.childTop = 0
    },
    gotoTop() {
      this.gotoTopNum = 0
    },
}

```  
Q： 为什么要在 `touchStart` 的时候 将 `gotoTopNum` 置为 `undefined`?  
A： 因为这个页面有一个回到顶部的功能，当回到顶部时，`gotoTopNum` 置为0，再次下翻时，虽然实际的 `scrollTop` 改变了，但是 `gotoTopNum`   还为0，再次点击回到顶部时，因为数据未改变，视图层就不会去更新。所以在 `touchStart` 的时候给 `gotoTopNum` 一个无效的值，再次点击回到顶部时，视图层也就更新了。  
tip：还有一个需要注意的问题，虽然小程序之前不能操作DOM节点，但后来为了使开发者更便利，引入了一些得到节点属性的方法，比如得到一个容器的高度或者宽度，这些方法一般效率比较低，能做缓存就做缓存。比如在 `startContent` 钩子中缓存的窗口高度。  
至此就完成了 滚动容器 实现的上拉加载，这里看一下项目实际的效果。 

![image](./images/5.gif)  

## 原生滚动 OR scroll-view  

对比 | 原生滚动 | scroll-view  
---|---|---
性能 |  流畅 |  节点过多卡顿 
坑点 | 没有scroll方法，scrollTop只写不可读 | 1，与 enablePullDownRefresh不能共存  2，不能绑定touchmove事件 3，不能触发双击bar栏回到顶部的“彩蛋”
适用性| 不需要scroll方法的情况 | 不需要系统的下拉刷新事件

END...  
本以为结束了，1/26 周五又遇到了 scroll-view 的问题，大概是请求返回了，数据了拿到了，也调用了 `this.$apply` 去重新脏检测了，但视图迟迟不更新，总要等两秒钟、或是用手指再拖动一下屏幕才更新。因为用的是wepy，也懒得去检查是小程序数据监测的问题还是wepy监测的问题。总之，最好用原生滚动。