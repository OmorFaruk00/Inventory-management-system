exports.ids = [16];
exports.modules = {

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/print-receive/_id.vue?vue&type=template&id=320f133f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"html\" data-v-320f133f><div style=\"width: 100%\" data-v-320f133f><div style=\"width: 33%;border-right: 1px dotted #000;float: left;\" data-v-320f133f><table class=\"b-none\" data-v-320f133f><tr data-v-320f133f><td colspan=\"2\" class=\"bb-none br-none\" style=\"padding-left: 13px\" data-v-320f133f>Receipt No.\n                            \n                        </td> <td class=\"tr w-40 bb-none\" data-v-320f133f>Copy of Accounts</td></tr> <tr data-v-320f133f><th colspan=\"3\" class=\"f-12 bt-none\" data-v-320f133f>\n\n                            Export Import Bank of Bangladesh Limited\n\n                        </th></tr></table></div> <div style=\"width: 33%;border-right: 1px dotted #000;float: left;\" data-v-320f133f><table class=\"b-none\" data-v-320f133f><tr data-v-320f133f><td colspan=\"2\" class=\"bb-none br-none\" style=\"padding-left: 13px\" data-v-320f133f>Receipt No.\n                            \n                        </td> <td class=\"tr w-40 bb-none\" data-v-320f133f>Copy of Accounts</td></tr> <tr data-v-320f133f><th colspan=\"3\" class=\"f-12 bt-none\" data-v-320f133f>\n\n                            Export Import Bank of Bangladesh Limited\n\n                        </th></tr></table></div> <div style=\"width: 33%;float: left;margin-left: 5px\" data-v-320f133f><table class=\"b-none\" data-v-320f133f><tr data-v-320f133f><td colspan=\"2\" class=\"bb-none br-none\" style=\"padding-left: 13px\" data-v-320f133f>Receipt No.\n                            \n                        </td> <td class=\"tr w-40 bb-none\" data-v-320f133f>Copy of Accounts</td></tr> <tr data-v-320f133f><th colspan=\"3\" class=\"f-12 bt-none\" data-v-320f133f>\n\n                            Export Import Bank of Bangladesh Limited\n\n                        </th></tr></table></div></div></div> <button class=\"example\" data-v-320f133f>Download</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/print-receive/_id.vue?vue&type=template&id=320f133f&scoped=true&

// EXTERNAL MODULE: external "html2canvas"
var external_html2canvas_ = __webpack_require__(56);
var external_html2canvas_default = /*#__PURE__*/__webpack_require__.n(external_html2canvas_);

// EXTERNAL MODULE: external "jspdf"
var external_jspdf_ = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/print-receive/_id.vue?vue&type=script&lang=js&
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


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'Adm-content',
  methods: {
    download() {
      window.html2canvas = external_html2canvas_default.a;
      var doc = new external_jspdf_["jsPDF"]('p', 'pt', 'a4');
      doc.html(document.querySelector("#html"), {
        callback: function (pdf) {
          pdf.save("print.pdf");
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/print-receive/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var print_receive_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/print-receive/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  print_receive_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "320f133f",
  "017832f9"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("746d66a3", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_320f133f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_320f133f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_320f133f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_320f133f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_320f133f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table[data-v-320f133f]{border-collapse:collapse;width:100%}table[data-v-320f133f],td[data-v-320f133f],th[data-v-320f133f]{border:1px solid #000;font-size:9px!important;padding:1px 5px}.b-none[data-v-320f133f]{border:2px solid #fff}.bt-none[data-v-320f133f]{border-top:2px solid #fff}.bb-none[data-v-320f133f]{border-bottom:2px solid #fff}.br-none[data-v-320f133f]{border-right:2px solid #fff}.bl-none[data-v-320f133f]{border-left:2px solid #fff}.tc[data-v-320f133f]{text-align:center}.tr[data-v-320f133f]{text-align:right}.w-1[data-v-320f133f]{width:1%}.w-10[data-v-320f133f]{width:10%}.w-15[data-v-320f133f]{width:15%}.w-40[data-v-320f133f]{width:40%}.mt-1[data-v-320f133f]{margin-top:2px}.mt-5[data-v-320f133f]{margin-top:5px}.mt-8[data-v-320f133f]{margin-top:16px}.mt-15[data-v-320f133f]{margin-top:30px}.f-12[data-v-320f133f]{font-size:12px!important}.f-19[data-v-320f133f]{font-size:14px!important}.p-0[data-v-320f133f]{padding:0!important}.bank_one[data-v-320f133f]{left:11%}.bank_one[data-v-320f133f],.bank_two[data-v-320f133f]{position:absolute;top:15%;transform:translate(50%,-50%)}.bank_two[data-v-320f133f]{left:41%}.bank_three[data-v-320f133f]{position:absolute;top:15%;left:71%;transform:translate(50%,-50%)}.bank_section_one[data-v-320f133f]{left:11%}.bank_section_one[data-v-320f133f],.bank_section_two[data-v-320f133f]{position:absolute;top:52%;transform:translate(50%,-50%)}.bank_section_two[data-v-320f133f]{left:41%}.bank_section_three[data-v-320f133f]{position:absolute;top:52%;left:71%;transform:translate(50%,-50%)}.diu_one[data-v-320f133f]{left:12%}.diu_one[data-v-320f133f],.diu_two[data-v-320f133f]{position:absolute;top:30%;transform:translate(50%,-50%)}.diu_two[data-v-320f133f]{left:42%}.diu_three[data-v-320f133f]{position:absolute;top:30%;left:72%;transform:translate(50%,-50%)}.diu_section_one[data-v-320f133f]{left:12%}.diu_section_one[data-v-320f133f],.diu_section_two[data-v-320f133f]{position:absolute;top:68%;transform:translate(50%,-50%)}.diu_section_two[data-v-320f133f]{left:42%}.diu_section_three[data-v-320f133f]{position:absolute;top:68%;left:72%;transform:translate(50%,-50%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_id.js.map