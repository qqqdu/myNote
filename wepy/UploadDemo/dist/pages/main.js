'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <view>{{ text }}</view>
//       <view bindtap="gotoTop">回到顶部</view>
var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '上拉加载',
      enablePullDownRefresh: true
    }, _this.components = {}, _this.data = {
      getData: '',
      top: 0,
      lastTop: 0,
      canDrag: false,
      text: '',
      maxTop: 50,
      list: ["数据", "数据", "数据", "数据", "数据", "数据", "数据", "数据", "数据", "数据", "数据", "数据", "数据"]
    }, _this.computed = {}, _this.methods = {
      moveFn: function moveFn(ev) {
        var nowY = ev.changedTouches[0].clientY;
        nowY = nowY - this.lastTop;
        console.log(nowY);
        if (nowY > 0) this.canDrag = false;
        console.log(this.canDrag, nowY);
        if (nowY <= 0 && this.canDrag) {
          this.top = nowY;
        }
        if (-this.top >= this.maxTop) this.top = -this.maxTop;
      },
      startFn: function startFn(ev) {
        this.lastTop = ev.changedTouches[0].clientY;
      },
      endFn: function endFn() {
        var _this2 = this;

        if (this.top <= -this.maxTop) {
          this.text = "去请求数据了";
          setTimeout(function () {
            var _list;

            _this2.text = "请求回来了";
            _this2.canDrag = false;
            (_list = _this2.list).push.apply(_list, ["数据", "数据", "数据"]);
            _this2.$apply();
            _this2.top = 0;
            return;
          }, 1000);
        }
      },
      gotoTop: function gotoTop() {
        _wepy2.default.pageScrollTo({
          scrollTop: 0
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.canDrag = true;
      console.log("触底了");
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/main'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiY29tcG9uZW50cyIsImRhdGEiLCJnZXREYXRhIiwidG9wIiwibGFzdFRvcCIsImNhbkRyYWciLCJ0ZXh0IiwibWF4VG9wIiwibGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm1vdmVGbiIsImV2Iiwibm93WSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydEZuIiwiZW5kRm4iLCJzZXRUaW1lb3V0IiwicHVzaCIsIiRhcHBseSIsImdvdG9Ub3AiLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtJQUN1QkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLFUsR0FBYSxFLFFBS2JDLEksR0FBTztBQUNMQyxlQUFTLEVBREo7QUFFTEMsV0FBSyxDQUZBO0FBR0xDLGVBQVMsQ0FISjtBQUlMQyxlQUFTLEtBSko7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLGNBQVEsRUFOSDtBQU9MQyxZQUFNLENBQUUsSUFBRixFQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsSUFURixFQVVFLElBVkYsRUFXRSxJQVhGLEVBWUUsSUFaRjtBQVBELEssUUFzQlBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxFQURDLEVBQ0c7QUFDVCxZQUFJQyxPQUFPRCxHQUFHRSxjQUFILENBQWtCLENBQWxCLEVBQXFCQyxPQUFoQztBQUNBRixlQUFPQSxPQUFLLEtBQUtULE9BQWpCO0FBQ0FZLGdCQUFRQyxHQUFSLENBQVlKLElBQVo7QUFDQSxZQUFHQSxPQUFPLENBQVYsRUFDRSxLQUFLUixPQUFMLEdBQWUsS0FBZjtBQUNGVyxnQkFBUUMsR0FBUixDQUFZLEtBQUtaLE9BQWpCLEVBQTBCUSxJQUExQjtBQUNBLFlBQUlBLFFBQU0sQ0FBTixJQUFXLEtBQUtSLE9BQXBCLEVBQThCO0FBQzVCLGVBQUtGLEdBQUwsR0FBV1UsSUFBWDtBQUNEO0FBQ0QsWUFBSSxDQUFDLEtBQUtWLEdBQU4sSUFBWSxLQUFLSSxNQUFyQixFQUNFLEtBQUtKLEdBQUwsR0FBVyxDQUFDLEtBQUtJLE1BQWpCO0FBQ0gsT0FiTztBQWNSVyxhQWRRLG1CQWNBTixFQWRBLEVBY0k7QUFDVixhQUFLUixPQUFMLEdBQWVRLEdBQUdFLGNBQUgsQ0FBa0IsQ0FBbEIsRUFBcUJDLE9BQXBDO0FBQ0QsT0FoQk87QUFpQlJJLFdBakJRLG1CQWlCQTtBQUFBOztBQUNOLFlBQUcsS0FBS2hCLEdBQUwsSUFBWSxDQUFDLEtBQUtJLE1BQXJCLEVBQTZCO0FBQzNCLGVBQUtELElBQUwsR0FBWSxRQUFaO0FBQ0FjLHFCQUFXLFlBQUk7QUFBQTs7QUFDYixtQkFBS2QsSUFBTCxHQUFZLE9BQVo7QUFDQSxtQkFBS0QsT0FBTCxHQUFlLEtBQWY7QUFDQSw0QkFBS0csSUFBTCxFQUFVYSxJQUFWLGNBQWtCLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLENBQWxCO0FBQ0EsbUJBQUtDLE1BQUw7QUFDQSxtQkFBS25CLEdBQUwsR0FBVyxDQUFYO0FBQ0E7QUFDRCxXQVBELEVBT0UsSUFQRjtBQVFEO0FBQ0YsT0E3Qk87QUE4QlJvQixhQTlCUSxxQkE4QkU7QUFDUix1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMscUJBQVc7QUFESyxTQUFsQjtBQUdEO0FBbENPLEssUUFxQ1ZDLE0sR0FBUyxFOzs7Ozs2QkFJQSxDQUVSOzs7b0NBRWU7QUFDZixXQUFLckIsT0FBTCxHQUFlLElBQWY7QUFDQVcsY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDQTs7OztFQXBGZ0MsZUFBS1UsSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuLy8gPHZpZXc+e3sgdGV4dCB9fTwvdmlldz5cbi8vICAgICAgIDx2aWV3IGJpbmR0YXA9XCJnb3RvVG9wXCI+5Zue5Yiw6aG26YOoPC92aWV3PlxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4iuaLieWKoOi9vScsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGdldERhdGE6ICcnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGFzdFRvcDogMCxcbiAgICAgIGNhbkRyYWc6IGZhbHNlLFxuICAgICAgdGV4dDogJycsXG4gICAgICBtYXhUb3A6IDUwLFxuICAgICAgbGlzdDogWyBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBtb3ZlRm4oZXYpIHtcbiAgICAgICAgbGV0IG5vd1kgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgIG5vd1kgPSBub3dZLXRoaXMubGFzdFRvcFxuICAgICAgICBjb25zb2xlLmxvZyhub3dZKVxuICAgICAgICBpZihub3dZID4gMCApXG4gICAgICAgICAgdGhpcy5jYW5EcmFnID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYW5EcmFnLCBub3dZKVxuICAgICAgICBpZiggbm93WTw9MCAmJiB0aGlzLmNhbkRyYWcgKSB7XG4gICAgICAgICAgdGhpcy50b3AgPSBub3dZXG4gICAgICAgIH1cbiAgICAgICAgaWYoIC10aGlzLnRvcD49IHRoaXMubWF4VG9wICApXG4gICAgICAgICAgdGhpcy50b3AgPSAtdGhpcy5tYXhUb3BcbiAgICAgIH0sXG4gICAgICBzdGFydEZuKGV2KSB7XG4gICAgICAgIHRoaXMubGFzdFRvcCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgXG4gICAgICB9LFxuICAgICAgZW5kRm4oKSB7XG4gICAgICAgIGlmKHRoaXMudG9wIDw9IC10aGlzLm1heFRvcCkge1xuICAgICAgICAgIHRoaXMudGV4dCA9IFwi5Y676K+35rGC5pWw5o2u5LqGXCJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLnRleHQgPSBcIuivt+axguWbnuadpeS6hlwiXG4gICAgICAgICAgICB0aGlzLmNhbkRyYWcgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goLi4uW1wi5pWw5o2uXCIsXCLmlbDmja5cIixcIuaVsOaNrlwiXSlcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHRoaXMudG9wID0gMDtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH0sMTAwMClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdvdG9Ub3AoKSB7XG4gICAgICAgIHdlcHkucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICBcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBcbiAgICB9XG5cbiAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICB0aGlzLmNhbkRyYWcgPSB0cnVlXG4gICAgIGNvbnNvbGUubG9nKFwi6Kem5bqV5LqGXCIpXG4gICAgfVxuICB9XG4iXX0=