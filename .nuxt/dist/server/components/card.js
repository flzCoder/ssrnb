exports.ids = [1];
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


/***/ })

};;
//# sourceMappingURL=card.js.map