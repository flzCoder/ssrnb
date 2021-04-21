(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__, "render")) __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__, "staticRenderFns")) __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []



/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var vuex_router_sync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var vuex_router_sync__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuex_router_sync__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);






vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin(_util_title__WEBPACK_IMPORTED_MODULE_5__["default"]);
function createApp() {
  var router = Object(_router__WEBPACK_IMPORTED_MODULE_2__["createRouter"])();
  var store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["createStore"])();
  Object(vuex_router_sync__WEBPACK_IMPORTED_MODULE_4__["sync"])(store, router);
  var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    router: router,
    store: store,
    render: function render(h) {
      return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
  return {
    app: app,
    router: router,
    store: store
  };
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_36e7b224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return createRouter; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

var video = function video() {
  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 53));
};

function createRouter() {
  return new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
    mode: 'history',
    routes: [{
      path: '/vuessr/video/:id',
      name: 'video',
      component: video
    }]
  });
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
function createStore() {
  return new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
    state: {
      items: {}
    },
    actions: _actions__WEBPACK_IMPORTED_MODULE_2__["default"],
    mutations: _mutations__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

/* harmony default export */ __webpack_exports__["default"] = ({
  fetchMain: function fetchMain(_ref, obj) {
    var commit = _ref.commit;
    var id = obj.name;
    var videoId = obj.id;
    return Object(_api__WEBPACK_IMPORTED_MODULE_0__["fetchMain"])(id, videoId).then(function (item) {
      item = item.data;
      commit('setItem', {
        id: id,
        item: item
      });
    });
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMain", function() { return fetchMain; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




function getIndex(_x) {
  return _getIndex.apply(this, arguments);
}

function _getIndex() {
  _getIndex = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(videoId) {
    var list, dealedData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log('videoId', videoId);
            list = {
              data: 'artiList({"BBM50AKDwangning":[{"liveInfo":null,"docid":"G31P0T0F05509RJR","source":"十点一分","title":"网曝18岁女生被闺蜜诱骗到酒店，随后遭黑人性侵","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G31P0T0F05509RJR.html","commentCount":36296,"imgsrc3gtype":"3","stitle":"","digest":"某女性（18岁）交了个黑人男友（22岁），也不知道是什么情况","imgsrc":"http://dingyue.ws.126.net/2021/0217/ac2f8679j00qonowo001hd000u000f0p.jpg","ptime":"2021-02-17 12:40:38"},{"liveInfo":null,"docid":"VJ23UMG96","source":"十点一分","title":"网曝18岁女生被闺蜜诱骗到酒店，随后遭黑人性侵","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VJ23UMG96","commentCount":0,"imgsrc3gtype":"1","stitle":"VJ23UMG96","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210217/gA1CSed6T_cover.jpg","ptime":"2021-02-17 12:29:16","modelmode":"u"},{"liveInfo":null,"docid":"G1HFUAJT05509RJR","source":"十点一分","title":"扫黄现场！河南一KTV涉黄被查，抓捕时20多名女性正在表演","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1HFUAJT05509RJR.html","commentCount":12,"imgsrc3gtype":"3","stitle":"","digest":"1月29日消息，近日河南平顶山市公安局部署，组织100多名警","imgsrc":"http://dingyue.ws.126.net/2021/0129/ceae67b4j00qnoyu90025d000v900fmp.jpg","ptime":"2021-01-29 18:38:24"},{"liveInfo":null,"docid":"VJ0J61SRC","source":"十点一分","title":"胆子太大了！演员嘲讽春晚套路，煽情小品越看越尴尬","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VJ0J61SRC","commentCount":0,"imgsrc3gtype":"1","stitle":"VJ0J61SRC","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210129/NzThcy5v9_cover.jpg","ptime":"2021-01-29 13:55:02","modelmode":"u"},{"liveInfo":null,"docid":"G1GTRO3105509RJR","source":"十点一分","title":"广东孕妇因孕期拒绝同房，被老公掐脖，被婆婆辱骂“小狗”","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1GTRO3105509RJR.html","commentCount":118,"imgsrc3gtype":"3","stitle":"","digest":"婚姻原本是人们对未来抱有为好的憧憬才共同走到了一起，可太多人","imgsrc":"http://dingyue.ws.126.net/2021/0129/bc872440j00qnoju3001td000v900fmp.jpg","ptime":"2021-01-29 13:22:26"},{"liveInfo":null,"docid":"G1C0606U05509RJR","source":"十点一分","title":"女子自称被已婚男骗当街放喇叭：人渣！玩弄我的身体","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1C0606U05509RJR.html","commentCount":5,"imgsrc3gtype":"3","stitle":"","digest":"近日，重庆一名女子发现自己竟是“小三”。自己的男友早已结婚并","imgsrc":"http://dingyue.ws.126.net/2021/0127/bc79a697j00qnl0kd001vd000v900fmp.jpg","ptime":"2021-01-27 15:50:19"},{"liveInfo":null,"docid":"G1BIQU6305509RJR","source":"十点一分","title":"浙江24岁女生意外去世，父母逼迫企业赔钱给弟弟买房","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1BIQU6305509RJR.html","commentCount":3,"imgsrc3gtype":"3","stitle":"","digest":"1月24日，《杭州和事佬》节目播出，一位24岁女生的不幸遭遇","imgsrc":"http://dingyue.ws.126.net/2021/0127/295bb6e2j00qnkpjo0021d000uz00fhp.jpg","ptime":"2021-01-27 11:33:32"},{"liveInfo":null,"docid":"VA01VOFIH","source":"老梁不郁闷","title":"张碧晨未婚有生育指标吗？孩子怎么才能上男方的户口？","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VA01VOFIH","commentCount":0,"imgsrc3gtype":"1","stitle":"VA01VOFIH","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210122/vTuX5pj1G_cover.jpg","ptime":"2021-01-22 21:37:57","modelmode":"u"},{"imgextra":[{"imgsrc":"http://cms-bucket.ws.126.net/2021/0122/7af98e02j00qnc17g00dkc0009c0070c.jpg"},{"imgsrc":"http://cms-bucket.ws.126.net/2021/0122/eb812534j00qnc17g00inc0009c0070c.jpg"}],"liveInfo":null,"docid":"G0V2K3HG0550AC49","source":"天津卫视","title":"马志明“相声春晚”录制聊传承，称“郭德纲算是我们家的传承人”","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G0V2K3HG0550AC49.html","commentCount":0,"imgsrc3gtype":"2","stitle":"","digest":"近日，2021年天津卫视德云社相声春晚在津完成录制。除了德云","imgsrc":"http://cms-bucket.ws.126.net/2021/0122/fd544ac6j00qnc17h00o9c0009c0070c.jpg","ptime":"2021-01-22 17:02:59"},{"liveInfo":null,"docid":"S1610969002785","source":"网易","title":"网易创作者大会：10位大咖分享干货，内容扶持计划重磅发布","priority":0,"url":"S1610969002785","skipURL":"http://3g.163.com/ntes/special/00340EPA/wapSpecialModule.html?sid=S1610969002785","specialID":"S1610969002785","commentCount":0,"imgsrc3gtype":"3","stitle":"S1610969002785","digest":"","skipType":"special","imgsrc":"http://cms-bucket.ws.126.net/2021/0120/bac14adfj00qn8bjj00dic000s600e3c.jpg","ptime":"2021-01-21 15:48:35","modelmode":"u"}]})'
            };
            dealedData = JSON.parse(list.data.trim().slice(9, -1));
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              resolve({
                data: {
                  res: dealedData.BBM50AKDwangning
                }
              });
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getIndex.apply(this, arguments);
}

function fetchMain(id, videoId) {
  return getIndex(videoId);
}

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ({
  setItem: function setItem(state, _ref) {
    var id = _ref.id,
        item = _ref.item;
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state.items, id, item);
  }
});

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getTitle(vm) {
  var title = vm.$options.title;

  if (title) {
    return typeof title === 'function' ? title.call(vm) : title;
  }
}

var serverTitleMixin = {
  created: function created() {
    var title = getTitle(this);

    if (title) {
      this.$ssrContext.title = "".concat(title);
    }
  }
};
var clientTitleMixin = {
  mounted: function mounted() {
    var title = getTitle(this);

    if (title) {
      document.title = "".concat(title);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ( false ? undefined : clientTitleMixin);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise_auto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);



vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin({
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var asyncData = this.$options.asyncData;

    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next)["catch"](next);
    } else {
      next();
    }
  }
});

var _createApp = Object(_app__WEBPACK_IMPORTED_MODULE_2__["createApp"])(),
    app = _createApp.app,
    router = _createApp.router,
    store = _createApp.store;

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(function () {
  router.beforeResolve(function (to, from, next) {
    var matched = router.getMatchedComponents(to);
    var prevMatched = router.getMatchedComponents(from);
    var diffed = false;
    var activated = matched.filter(function (c, i) {
      return diffed || (diffed = prevMatched[i] !== c);
    });

    if (!activated.length) {
      return next();
    }

    Promise.all(activated.map(function (c) {
      if (c.asyncData) {
        return c.asyncData({
          store: store,
          route: to
        });
      }
    })).then(function () {
      next();
    })["catch"](next);
  });
  app.$mount('#app');
});

/***/ })
],[[30,1,2]]]);