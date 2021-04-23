exports.ids = [3,1];
exports.modules = {

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("60f61572", content, true, context)
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./nuxt/components/card.vue?vue&type=template&id=35a491bc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section id=\"VA01VOFIH\" data-param=\"VA01VOFIH\" class=\"m_article list-item js-newlist-app clearfix\"><a target=\"_blank\""+(_vm._ssrAttr("href",_vm.item.url))+"><div class=\"m_article_img\"><div class=\"m_article_mark mark_new\">视频</div> <img"+(_vm._ssrAttr("src",_vm.item.imgsrc))+"></div> <div class=\"m_article_info\"><div class=\"m_article_title\"><span>"+_vm._ssrEscape(_vm._s(_vm.item.title))+"</span></div> <div class=\"m_article_desc clearfix\"><div class=\"m_article_desc_l\"><span class=\"m_article_time\">3天前</span></div> <div class=\"m_article_desc_r\"><div class=\"left_hands_desc\"><span class=\"iconfont\"></span>"+_vm._ssrEscape(_vm._s(_vm.item.commentCount)+"\n            ")+"</div></div></div></div></a></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./nuxt/components/card.vue?vue&type=template&id=35a491bc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./nuxt/components/card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var cardvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./nuxt/components/card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_cardvue_type_script_lang_js_ = (cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./nuxt/components/card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "708caaee"
  
)

/* harmony default export */ var card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".m_article{font-size:.24rem;padding:.2rem 0;border-bottom:1px solid #e5e5e5;margin:0 .22rem}.m_article .m_article_img{float:left;width:2.34rem;height:1.46rem;overflow:hidden;position:relative;margin-right:.2rem}.m_article .m_article_img .m_article_mark{color:#fff;background:#5da3e9;font-size:.28rem;text-align:center;padding:.04rem;position:absolute;display:none;left:0;top:0;width:.6rem;height:.4rem;line-height:.4rem;opacity:.9}.m_article .m_article_img img{width:100%;display:block;min-height:1.4rem}.m_article .m_article_info{overflow:hidden;padding-bottom:4px}.m_article .m_article_info .m_article_title{font-size:.34rem;margin-bottom:.2rem;color:#404040;line-height:.42rem;width:100%;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-webkit-line-break:auto;-webkit-box-orient:vertical}.m_article_desc{line-height:.33rem}.m_article .m_article_desc .m_article_desc_l{float:left}.m_article .m_article_desc .m_article_time{font-size:.24rem;color:#888;display:inline-block}.m_article .m_article_desc .m_article_desc_r{float:right;background-size:contain;background-position:left 0;background-repeat:no-repeat;color:#888;line-height:.37rem}", ""]);

// exports


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("9f10cac8", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "*{margin:0;padding:0}a{text-decoration:none}.container{max-width:1080px;margin:0 auto}", ""]);

// exports


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./nuxt/pages/index.vue?vue&type=template&id=274ac106&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},_vm._l((_vm.dealedData.BBM50AKDwangning),function(item,i){return _c('card',{key:i,attrs:{"item":item}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./nuxt/pages/index.vue?vue&type=template&id=274ac106&

// EXTERNAL MODULE: ./nuxt/components/card.vue + 4 modules
var card = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./nuxt/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  components: {
    card: card["default"]
  },

  async asyncData({
    app,
    params
  }) {
    // const newlist = await app.$axios.get(
    //   'https://3g.163.com/touch/reconstruct/article/list/BBM50AKDwangning/20-10.html'
    // )
    const newlist = {
      data: 'artiList({"BBM50AKDwangning":[{"liveInfo":null,"docid":"G31P0T0F05509RJR","source":"十点一分","title":"网曝18岁女生被闺蜜诱骗到酒店，随后遭黑人性侵","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G31P0T0F05509RJR.html","commentCount":36296,"imgsrc3gtype":"3","stitle":"","digest":"某女性（18岁）交了个黑人男友（22岁），也不知道是什么情况","imgsrc":"http://dingyue.ws.126.net/2021/0217/ac2f8679j00qonowo001hd000u000f0p.jpg","ptime":"2021-02-17 12:40:38"},{"liveInfo":null,"docid":"VJ23UMG96","source":"十点一分","title":"网曝18岁女生被闺蜜诱骗到酒店，随后遭黑人性侵","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VJ23UMG96","commentCount":0,"imgsrc3gtype":"1","stitle":"VJ23UMG96","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210217/gA1CSed6T_cover.jpg","ptime":"2021-02-17 12:29:16","modelmode":"u"},{"liveInfo":null,"docid":"G1HFUAJT05509RJR","source":"十点一分","title":"扫黄现场！河南一KTV涉黄被查，抓捕时20多名女性正在表演","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1HFUAJT05509RJR.html","commentCount":12,"imgsrc3gtype":"3","stitle":"","digest":"1月29日消息，近日河南平顶山市公安局部署，组织100多名警","imgsrc":"http://dingyue.ws.126.net/2021/0129/ceae67b4j00qnoyu90025d000v900fmp.jpg","ptime":"2021-01-29 18:38:24"},{"liveInfo":null,"docid":"VJ0J61SRC","source":"十点一分","title":"胆子太大了！演员嘲讽春晚套路，煽情小品越看越尴尬","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VJ0J61SRC","commentCount":0,"imgsrc3gtype":"1","stitle":"VJ0J61SRC","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210129/NzThcy5v9_cover.jpg","ptime":"2021-01-29 13:55:02","modelmode":"u"},{"liveInfo":null,"docid":"G1GTRO3105509RJR","source":"十点一分","title":"广东孕妇因孕期拒绝同房，被老公掐脖，被婆婆辱骂“小狗”","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1GTRO3105509RJR.html","commentCount":118,"imgsrc3gtype":"3","stitle":"","digest":"婚姻原本是人们对未来抱有为好的憧憬才共同走到了一起，可太多人","imgsrc":"http://dingyue.ws.126.net/2021/0129/bc872440j00qnoju3001td000v900fmp.jpg","ptime":"2021-01-29 13:22:26"},{"liveInfo":null,"docid":"G1C0606U05509RJR","source":"十点一分","title":"女子自称被已婚男骗当街放喇叭：人渣！玩弄我的身体","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1C0606U05509RJR.html","commentCount":5,"imgsrc3gtype":"3","stitle":"","digest":"近日，重庆一名女子发现自己竟是“小三”。自己的男友早已结婚并","imgsrc":"http://dingyue.ws.126.net/2021/0127/bc79a697j00qnl0kd001vd000v900fmp.jpg","ptime":"2021-01-27 15:50:19"},{"liveInfo":null,"docid":"G1BIQU6305509RJR","source":"十点一分","title":"浙江24岁女生意外去世，父母逼迫企业赔钱给弟弟买房","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1BIQU6305509RJR.html","commentCount":3,"imgsrc3gtype":"3","stitle":"","digest":"1月24日，《杭州和事佬》节目播出，一位24岁女生的不幸遭遇","imgsrc":"http://dingyue.ws.126.net/2021/0127/295bb6e2j00qnkpjo0021d000uz00fhp.jpg","ptime":"2021-01-27 11:33:32"},{"liveInfo":null,"docid":"VA01VOFIH","source":"老梁不郁闷","title":"张碧晨未婚有生育指标吗？孩子怎么才能上男方的户口？","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VA01VOFIH","commentCount":0,"imgsrc3gtype":"1","stitle":"VA01VOFIH","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210122/vTuX5pj1G_cover.jpg","ptime":"2021-01-22 21:37:57","modelmode":"u"},{"imgextra":[{"imgsrc":"http://cms-bucket.ws.126.net/2021/0122/7af98e02j00qnc17g00dkc0009c0070c.jpg"},{"imgsrc":"http://cms-bucket.ws.126.net/2021/0122/eb812534j00qnc17g00inc0009c0070c.jpg"}],"liveInfo":null,"docid":"G0V2K3HG0550AC49","source":"天津卫视","title":"马志明“相声春晚”录制聊传承，称“郭德纲算是我们家的传承人”","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G0V2K3HG0550AC49.html","commentCount":0,"imgsrc3gtype":"2","stitle":"","digest":"近日，2021年天津卫视德云社相声春晚在津完成录制。除了德云","imgsrc":"http://cms-bucket.ws.126.net/2021/0122/fd544ac6j00qnc17h00o9c0009c0070c.jpg","ptime":"2021-01-22 17:02:59"},{"liveInfo":null,"docid":"S1610969002785","source":"网易","title":"网易创作者大会：10位大咖分享干货，内容扶持计划重磅发布","priority":0,"url":"S1610969002785","skipURL":"http://3g.163.com/ntes/special/00340EPA/wapSpecialModule.html?sid=S1610969002785","specialID":"S1610969002785","commentCount":0,"imgsrc3gtype":"3","stitle":"S1610969002785","digest":"","skipType":"special","imgsrc":"http://cms-bucket.ws.126.net/2021/0120/bac14adfj00qn8bjj00dic000s600e3c.jpg","ptime":"2021-01-21 15:48:35","modelmode":"u"}]})'
    };
    const dealedData = JSON.parse(newlist.data.trim().slice(9, -1));
    return {
      dealedData
    };
  },

  middleware: async ctx => {// console.log('pages middleware');
  }
});
// CONCATENATED MODULE: ./nuxt/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var nuxt_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./nuxt/pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nuxt_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1841becc"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Card: __webpack_require__(23).default})


/***/ })

};;
//# sourceMappingURL=index.js.map