exports.ids = [56];
exports.modules = {

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/training/create.vue?vue&type=template&id=88c99a28&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"offset-md-3 col-md-6"},[_vm._ssrNode("<div class=\"training\" data-v-88c99a28><h4 class=\"title\" data-v-88c99a28>Add Training</h4> <hr data-v-88c99a28> <div class=\"form-row\" data-v-88c99a28><div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-88c99a28><label class=\"form-label\" data-v-88c99a28>Training Name</label> <input type=\"text\" placeholder=\"Enter Training Name\""+(_vm._ssrAttr("value",(_vm.training.training_name)))+" class=\"form-control\" data-v-88c99a28> "+((_vm.errors.training_name)?("<h6 class=\"text-danger\" data-v-88c99a28>"+_vm._ssrEscape(_vm._s(_vm.errors.training_name[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-88c99a28><label class=\"form-label\" data-v-88c99a28>Duration</label> <input type=\"text\" placeholder=\"Enter Duration\""+(_vm._ssrAttr("value",(_vm.training.duration)))+" class=\"form-control\" data-v-88c99a28> "+((_vm.errors.duration)?("<h6 class=\"text-danger\" data-v-88c99a28>"+_vm._ssrEscape(_vm._s(_vm.errors.duration[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-88c99a28><label class=\"form-label\" data-v-88c99a28>Training Year</label> <input type=\"text\" placeholder=\"Ex-yyyy-mm-dd\""+(_vm._ssrAttr("value",(_vm.training.training_year)))+" class=\"form-control\" data-v-88c99a28> "+((_vm.errors.training_year)?("<h6 class=\"text-danger\" data-v-88c99a28>"+_vm._ssrEscape(_vm._s(_vm.errors.training_year[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group col-md-6 col-lg-6 col-sm-12\" data-v-88c99a28><label class=\"form-label\" data-v-88c99a28>Institute Name</label> <input type=\"text\" placeholder=\"Enter Institute Name\""+(_vm._ssrAttr("value",(_vm.training.institute_name)))+" class=\"form-control\" data-v-88c99a28> "+((_vm.errors.institute_name)?("<h6 class=\"text-danger\" data-v-88c99a28>"+_vm._ssrEscape(_vm._s(_vm.errors.institute_name[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"d-flex justify-content-end\" data-v-88c99a28><button class=\"btn-submit btn-lg\" data-v-88c99a28>Submit</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/training/create.vue?vue&type=template&id=88c99a28&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/training/create.vue?vue&type=script&lang=js&
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
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  layout: "Profile-content",

  data() {
    return {
      trainings: '',
      training: {
        training_name: "",
        duration: "",
        training_year: "",
        institute_name: ""
      },
      errors: ''
    };
  },

  methods: {
    addtraining() {
      this.$axios.$post("/training/add", this.training).then(res => {
        this.$router.push("/profile/training");
        this.training = "", this.errors = "", this.$toaster.success(res.message);
        this.gettraining();
      }).catch(err => {
        this.errors = err.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/training/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var training_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/training/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  training_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "88c99a28",
  "51ea147c"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("64ce2ca0", content, true, context)
};

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_88c99a28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_88c99a28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_88c99a28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_88c99a28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_88c99a28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".training[data-v-88c99a28]{padding:50px;border-radius:5px;background-color:#fff;margin-bottom:20px;margin-top:50px;box-shadow:0 3px 8px rgba(0,0,0,.24)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=create.js.map