'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

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
    }, _this.$repeat = {}, _this.$props = { "counter": { "xmlns:v-bind": "", "v-bind:num.once": "{{num}}" } }, _this.$events = {}, _this.components = {
      counter: _counter2.default
    }, _this.data = {
      getData: '',
      num: 0,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY291bnRlciIsImRhdGEiLCJnZXREYXRhIiwibnVtIiwidG9wIiwibGFzdFRvcCIsImNhbkRyYWciLCJ0ZXh0IiwibWF4VG9wIiwibGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm1vdmVGbiIsImV2Iiwibm93WSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydEZuIiwiZW5kRm4iLCJzZXRUaW1lb3V0IiwicHVzaCIsIiRhcHBseSIsImdvdG9Ub3AiLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0lBQ3VCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixTQUFyQyxFQUFYLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUtWQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLFdBQUssQ0FGQTtBQUdMQyxXQUFLLENBSEE7QUFJTEMsZUFBUyxDQUpKO0FBS0xDLGVBQVMsS0FMSjtBQU1MQyxZQUFNLEVBTkQ7QUFPTEMsY0FBUSxFQVBIO0FBUUxDLFlBQU0sQ0FBRSxJQUFGLEVBQ0UsSUFERixFQUVFLElBRkYsRUFHRSxJQUhGLEVBSUUsSUFKRixFQUtFLElBTEYsRUFNRSxJQU5GLEVBT0UsSUFQRixFQVFFLElBUkYsRUFTRSxJQVRGLEVBVUUsSUFWRixFQVdFLElBWEYsRUFZRSxJQVpGO0FBUkQsSyxRQXVCUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLEVBREMsRUFDRztBQUNULFlBQUlDLE9BQU9ELEdBQUdFLGNBQUgsQ0FBa0IsQ0FBbEIsRUFBcUJDLE9BQWhDO0FBQ0FGLGVBQU9BLE9BQUssS0FBS1QsT0FBakI7QUFDQVksZ0JBQVFDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLFlBQUdBLE9BQU8sQ0FBVixFQUNFLEtBQUtSLE9BQUwsR0FBZSxLQUFmO0FBQ0ZXLGdCQUFRQyxHQUFSLENBQVksS0FBS1osT0FBakIsRUFBMEJRLElBQTFCO0FBQ0EsWUFBSUEsUUFBTSxDQUFOLElBQVcsS0FBS1IsT0FBcEIsRUFBOEI7QUFDNUIsZUFBS0YsR0FBTCxHQUFXVSxJQUFYO0FBQ0Q7QUFDRCxZQUFJLENBQUMsS0FBS1YsR0FBTixJQUFZLEtBQUtJLE1BQXJCLEVBQ0UsS0FBS0osR0FBTCxHQUFXLENBQUMsS0FBS0ksTUFBakI7QUFDSCxPQWJPO0FBY1JXLGFBZFEsbUJBY0FOLEVBZEEsRUFjSTtBQUNWLGFBQUtSLE9BQUwsR0FBZVEsR0FBR0UsY0FBSCxDQUFrQixDQUFsQixFQUFxQkMsT0FBcEM7QUFDRCxPQWhCTztBQWlCUkksV0FqQlEsbUJBaUJBO0FBQUE7O0FBQ04sWUFBRyxLQUFLaEIsR0FBTCxJQUFZLENBQUMsS0FBS0ksTUFBckIsRUFBNkI7QUFDM0IsZUFBS0QsSUFBTCxHQUFZLFFBQVo7QUFDQWMscUJBQVcsWUFBSTtBQUFBOztBQUNiLG1CQUFLZCxJQUFMLEdBQVksT0FBWjtBQUNBLG1CQUFLRCxPQUFMLEdBQWUsS0FBZjtBQUNBLDRCQUFLRyxJQUFMLEVBQVVhLElBQVYsY0FBa0IsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FBbEI7O0FBRUEsbUJBQUtsQixHQUFMLEdBQVcsQ0FBWDtBQUNBLG1CQUFLbUIsTUFBTDtBQUNBO0FBQ0QsV0FSRCxFQVFFLElBUkY7QUFTRDtBQUNGLE9BOUJPO0FBK0JSQyxhQS9CUSxxQkErQkU7QUFDUix1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMscUJBQVc7QUFESyxTQUFsQjtBQUdEO0FBbkNPLEssUUFzQ1ZDLE0sR0FBUyxFOzs7Ozs2QkFJQSxDQUVSOzs7b0NBRWU7QUFDZixXQUFLckIsT0FBTCxHQUFlLElBQWY7QUFDQTs7OztFQXhGZ0MsZUFBS3NCLEk7O2tCQUFuQnBDLEsiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCBjb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRlcidcclxuLy8gPHZpZXc+e3sgdGV4dCB9fTwvdmlldz5cclxuLy8gICAgICAgPHZpZXcgYmluZHRhcD1cImdvdG9Ub3BcIj7lm57liLDpobbpg6g8L3ZpZXc+XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiK5ouJ5Yqg6L29JyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY291bnRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLm9uY2VcIjpcInt7bnVtfX1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBjb3VudGVyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGdldERhdGE6ICcnLFxyXG4gICAgICBudW06IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGFzdFRvcDogMCxcclxuICAgICAgY2FuRHJhZzogZmFsc2UsXHJcbiAgICAgIHRleHQ6ICcnLFxyXG4gICAgICBtYXhUb3A6IDUwLFxyXG4gICAgICBsaXN0OiBbIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXHJcbiAgICAgICAgICAgICAgXCLmlbDmja5cIixcclxuICAgICAgICAgICAgICBcIuaVsOaNrlwiLFxyXG4gICAgICAgICAgICAgIFwi5pWw5o2uXCIsXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBtb3ZlRm4oZXYpIHtcclxuICAgICAgICBsZXQgbm93WSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICBub3dZID0gbm93WS10aGlzLmxhc3RUb3BcclxuICAgICAgICBjb25zb2xlLmxvZyhub3dZKVxyXG4gICAgICAgIGlmKG5vd1kgPiAwIClcclxuICAgICAgICAgIHRoaXMuY2FuRHJhZyA9IGZhbHNlXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYW5EcmFnLCBub3dZKVxyXG4gICAgICAgIGlmKCBub3dZPD0wICYmIHRoaXMuY2FuRHJhZyApIHtcclxuICAgICAgICAgIHRoaXMudG9wID0gbm93WVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggLXRoaXMudG9wPj0gdGhpcy5tYXhUb3AgIClcclxuICAgICAgICAgIHRoaXMudG9wID0gLXRoaXMubWF4VG9wXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXJ0Rm4oZXYpIHtcclxuICAgICAgICB0aGlzLmxhc3RUb3AgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIFxyXG4gICAgICB9LFxyXG4gICAgICBlbmRGbigpIHtcclxuICAgICAgICBpZih0aGlzLnRvcCA8PSAtdGhpcy5tYXhUb3ApIHtcclxuICAgICAgICAgIHRoaXMudGV4dCA9IFwi5Y676K+35rGC5pWw5o2u5LqGXCJcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCLor7fmsYLlm57mnaXkuoZcIlxyXG4gICAgICAgICAgICB0aGlzLmNhbkRyYWcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCguLi5bXCLmlbDmja5cIixcIuaVsOaNrlwiLFwi5pWw5o2uXCJdKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfSwxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZ290b1RvcCgpIHtcclxuICAgICAgICB3ZXB5LnBhZ2VTY3JvbGxUbyh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgdGhpcy5jYW5EcmFnID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuIl19