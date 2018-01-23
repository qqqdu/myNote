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

            _this2.top = 0;
            _this2.$apply();
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
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/main'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiY29tcG9uZW50cyIsImRhdGEiLCJnZXREYXRhIiwidG9wIiwibGFzdFRvcCIsImNhbkRyYWciLCJ0ZXh0IiwibWF4VG9wIiwibGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm1vdmVGbiIsImV2Iiwibm93WSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydEZuIiwiZW5kRm4iLCJzZXRUaW1lb3V0IiwicHVzaCIsIiRhcHBseSIsImdvdG9Ub3AiLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtJQUN1QkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLFUsR0FBYSxFLFFBS2JDLEksR0FBTztBQUNMQyxlQUFTLEVBREo7QUFFTEMsV0FBSyxDQUZBO0FBR0xDLGVBQVMsQ0FISjtBQUlMQyxlQUFTLEtBSko7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLGNBQVEsRUFOSDtBQU9MQyxZQUFNLENBQUUsSUFBRixFQUNFLElBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLElBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsSUFURixFQVVFLElBVkYsRUFXRSxJQVhGLEVBWUUsSUFaRjtBQVBELEssUUFzQlBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxFQURDLEVBQ0c7QUFDVCxZQUFJQyxPQUFPRCxHQUFHRSxjQUFILENBQWtCLENBQWxCLEVBQXFCQyxPQUFoQztBQUNBRixlQUFPQSxPQUFLLEtBQUtULE9BQWpCO0FBQ0FZLGdCQUFRQyxHQUFSLENBQVlKLElBQVo7QUFDQSxZQUFHQSxPQUFPLENBQVYsRUFDRSxLQUFLUixPQUFMLEdBQWUsS0FBZjtBQUNGVyxnQkFBUUMsR0FBUixDQUFZLEtBQUtaLE9BQWpCLEVBQTBCUSxJQUExQjtBQUNBLFlBQUlBLFFBQU0sQ0FBTixJQUFXLEtBQUtSLE9BQXBCLEVBQThCO0FBQzVCLGVBQUtGLEdBQUwsR0FBV1UsSUFBWDtBQUNEO0FBQ0QsWUFBSSxDQUFDLEtBQUtWLEdBQU4sSUFBWSxLQUFLSSxNQUFyQixFQUNFLEtBQUtKLEdBQUwsR0FBVyxDQUFDLEtBQUtJLE1BQWpCO0FBQ0gsT0FiTztBQWNSVyxhQWRRLG1CQWNBTixFQWRBLEVBY0k7QUFDVixhQUFLUixPQUFMLEdBQWVRLEdBQUdFLGNBQUgsQ0FBa0IsQ0FBbEIsRUFBcUJDLE9BQXBDO0FBQ0QsT0FoQk87QUFpQlJJLFdBakJRLG1CQWlCQTtBQUFBOztBQUNOLFlBQUcsS0FBS2hCLEdBQUwsSUFBWSxDQUFDLEtBQUtJLE1BQXJCLEVBQTZCO0FBQzNCLGVBQUtELElBQUwsR0FBWSxRQUFaO0FBQ0FjLHFCQUFXLFlBQUk7QUFBQTs7QUFDYixtQkFBS2QsSUFBTCxHQUFZLE9BQVo7QUFDQSxtQkFBS0QsT0FBTCxHQUFlLEtBQWY7QUFDQSw0QkFBS0csSUFBTCxFQUFVYSxJQUFWLGNBQWtCLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLENBQWxCOztBQUVBLG1CQUFLbEIsR0FBTCxHQUFXLENBQVg7QUFDQSxtQkFBS21CLE1BQUw7QUFDQTtBQUNELFdBUkQsRUFRRSxJQVJGO0FBU0Q7QUFDRixPQTlCTztBQStCUkMsYUEvQlEscUJBK0JFO0FBQ1IsdUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLHFCQUFXO0FBREssU0FBbEI7QUFHRDtBQW5DTyxLLFFBc0NWQyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FFUjs7O29DQUVlO0FBQ2YsV0FBS3JCLE9BQUwsR0FBZSxJQUFmO0FBQ0E7Ozs7RUFwRmdDLGVBQUtzQixJOztrQkFBbkIvQixLIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4vLyA8dmlldz57eyB0ZXh0IH19PC92aWV3PlxyXG4vLyAgICAgICA8dmlldyBiaW5kdGFwPVwiZ290b1RvcFwiPuWbnuWIsOmhtumDqDwvdmlldz5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIrmi4nliqDovb0nLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBnZXREYXRhOiAnJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsYXN0VG9wOiAwLFxyXG4gICAgICBjYW5EcmFnOiBmYWxzZSxcclxuICAgICAgdGV4dDogJycsXHJcbiAgICAgIG1heFRvcDogNTAsXHJcbiAgICAgIGxpc3Q6IFsgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixdXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG1vdmVGbihldikge1xyXG4gICAgICAgIGxldCBub3dZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICAgIG5vd1kgPSBub3dZLXRoaXMubGFzdFRvcFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5vd1kpXHJcbiAgICAgICAgaWYobm93WSA+IDAgKVxyXG4gICAgICAgICAgdGhpcy5jYW5EcmFnID0gZmFsc2VcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhbkRyYWcsIG5vd1kpXHJcbiAgICAgICAgaWYoIG5vd1k8PTAgJiYgdGhpcy5jYW5EcmFnICkge1xyXG4gICAgICAgICAgdGhpcy50b3AgPSBub3dZXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCAtdGhpcy50b3A+PSB0aGlzLm1heFRvcCAgKVxyXG4gICAgICAgICAgdGhpcy50b3AgPSAtdGhpcy5tYXhUb3BcclxuICAgICAgfSxcclxuICAgICAgc3RhcnRGbihldikge1xyXG4gICAgICAgIHRoaXMubGFzdFRvcCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZEZuKCkge1xyXG4gICAgICAgIGlmKHRoaXMudG9wIDw9IC10aGlzLm1heFRvcCkge1xyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gXCLljrvor7fmsYLmlbDmja7kuoZcIlxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBcIuivt+axguWbnuadpeS6hlwiXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJhZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKC4uLltcIuaVsOaNrlwiLFwi5pWw5o2uXCIsXCLmlbDmja5cIl0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBnb3RvVG9wKCkge1xyXG4gICAgICAgIHdlcHkucGFnZVNjcm9sbFRvKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICB0aGlzLmNhbkRyYWcgPSB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=