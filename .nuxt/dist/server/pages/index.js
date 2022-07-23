exports.ids = [50];
exports.modules = {

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=d24e1ef8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg"},[_vm._ssrNode("<div data-v-d24e1ef8><div class=\"welcome\" data-v-d24e1ef8><h1 aria-label=\"welcome\" data-v-d24e1ef8></h1></div> <div class=\"d-flex justify-content-end h-100\" data-v-d24e1ef8><div class=\"login\" data-v-d24e1ef8><div class=\"login-logo \" data-v-d24e1ef8><img src=\"/images/logo.png\" alt data-v-d24e1ef8></div> <div class=\"login-header\" data-v-d24e1ef8><h2 data-v-d24e1ef8>Central Management System | Darul Uloom Moniram</h2></div> <div class=\"login-header\" data-v-d24e1ef8><h3 data-v-d24e1ef8>Sign In</h3> <div class=\"d-flex justify-content-end social_icon\" data-v-d24e1ef8></div></div> <div class=\"card-body\" data-v-d24e1ef8>"+((_vm.login_error)?("<div class=\"alert alert-danger\" data-v-d24e1ef8><strong data-v-d24e1ef8>"+_vm._ssrEscape(_vm._s(_vm.login_error)+"!")+"</strong></div>"):"<!---->")+" <div class=\"input-group form-group pb-2\" data-v-d24e1ef8><div class=\"input-group-prepend\" data-v-d24e1ef8><span class=\"input-group-text\" data-v-d24e1ef8><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-5 w-5\" data-v-d24e1ef8><path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z\" clip-rule=\"evenodd\" data-v-d24e1ef8></path></svg></span></div> <input type=\"text\" placeholder=\"username\" autocomplete"+(_vm._ssrAttr("value",(_vm.login.email)))+" class=\"form-control\" data-v-d24e1ef8></div> "+((_vm.errors.email)?("<p class=\"text-danger\" data-v-d24e1ef8>"+_vm._ssrEscape(_vm._s(_vm.errors.email[0]))+"</p>"):"<!---->")+" <div class=\"input-group form-group pb-3\" data-v-d24e1ef8><div class=\"input-group-prepend\" data-v-d24e1ef8><span class=\"input-group-text\" data-v-d24e1ef8><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-5 w-5\" data-v-d24e1ef8><path fill-rule=\"evenodd\" d=\"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z\" clip-rule=\"evenodd\" data-v-d24e1ef8></path></svg></span></div> <input type=\"password\" placeholder=\"password\""+(_vm._ssrAttr("value",(_vm.login.password)))+" class=\"form-control\" data-v-d24e1ef8></div> "+((_vm.errors.password)?("<p class=\"text-danger\" data-v-d24e1ef8>"+_vm._ssrEscape(_vm._s(_vm.errors.password[0]))+"</p>"):"<!---->")+" <div class=\"row\" data-v-d24e1ef8><div class=\"col-sm-12 col-md-6 col-xl-6\" data-v-d24e1ef8><div class=\"remember\" data-v-d24e1ef8><input type=\"checkbox\" class=\"text-white\" data-v-d24e1ef8>Remember Me\n\t\t\t\t\t\t\t</div></div> <div class=\"col-sm-12 col-md-6 col-xl-6\" data-v-d24e1ef8><div class=\"forgot\" data-v-d24e1ef8><a href=\"#\" class=\"text-danger\" data-v-d24e1ef8>Forgot your password?</a></div></div></div> <div class=\"form-group py-4\" data-v-d24e1ef8><button class=\"btn float-right login_btn\" data-v-d24e1ef8>Login</button></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=d24e1ef8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  auth: false,

  mounted() {},

  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      errors: [],
      login_error: ''
    };
  },

  methods: {
    async userLogin() {
      await this.$auth.loginWith('laravelSanctum', {
        data: this.login
      }).then(res => {
        if (res.status == 203) {
          this.login_error = res.data.message;
        }

        this.$toaster.success("Login Successful");
        this.$router.push('/app');
      }).catch(error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d24e1ef8",
  "731eeaa3"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("644496b0", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d24e1ef8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d24e1ef8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d24e1ef8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d24e1ef8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d24e1ef8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg[data-v-d24e1ef8]{background:linear-gradient(180deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.2)),url(http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg);background-size:cover;background-repeat:no-repeat;height:100vh}.welcome[data-v-d24e1ef8]{top:50%;left:40%;transform:translate(-50%,-50%);color:red!important;position:absolute;font-size:80px}.login-logo[data-v-d24e1ef8]{display:flex;justify-content:center}.login-logo img[data-v-d24e1ef8]{height:100px;border-radius:50px}.login[data-v-d24e1ef8]{padding-top:5%;height:100vh;margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0,0,0,.5)!important}.social_icon span[data-v-d24e1ef8]{font-size:60px;margin-left:10px;color:#ffc312}.social_icon span[data-v-d24e1ef8]:hover{color:#fff;cursor:pointer}.login-header h2[data-v-d24e1ef8]{color:#fff;text-align:center;font-size:25px;padding:50px 20px}.login-header h3[data-v-d24e1ef8]{color:#fff;padding-left:20px}.social_icon[data-v-d24e1ef8]{position:absolute;right:20px;top:-45px}.input-group-prepend span[data-v-d24e1ef8]{width:50px;background-color:#ffc312;color:#000;border:0!important}input[data-v-d24e1ef8]:focus{outline:0 0 0 0!important;box-shadow:0 0 0 0!important}.remember[data-v-d24e1ef8]{color:#fff}.remember input[data-v-d24e1ef8]{width:20px;height:20px;margin-left:15px;margin-right:5px}.login_btn[data-v-d24e1ef8]{color:#000;background-color:#ffc312;width:100px}.login_btn[data-v-d24e1ef8]:hover{color:#000;background-color:#fff}.links[data-v-d24e1ef8]{color:#fff}.links a[data-v-d24e1ef8]{margin-left:4px}body[data-v-d24e1ef8]{display:flex;justify-content:center;align-items:center;height:100vh;background:#3f81b3 url(https://source.unsplash.com/DSwBHyWKiVw/1280x720) no-repeat 50%;background-size:cover;overflow:hidden}h1[data-v-d24e1ef8]{position:relative;font-family:\"Roboto\",Arial,sans-serif;font-size:calc(10px + 10vw);font-weight:700;color:#f5f5f5;letter-spacing:.02em;text-transform:uppercase;perspective:500px}h1[data-v-d24e1ef8]:after,h1[data-v-d24e1ef8]:before{content:attr(aria-label);position:absolute;top:0;left:0;transform:translate(-50%,-50%);text-shadow:.01em .01em .01em rgba(0,0,0,.3)}h1[data-v-d24e1ef8]:before{-webkit-animation:floatAbove-data-v-d24e1ef8 3.5s ease-in-out infinite;animation:floatAbove-data-v-d24e1ef8 3.5s ease-in-out infinite;-webkit-clip-path:polygon(0 0,100% 0,100% 50%,0 50%);clip-path:polygon(0 0,100% 0,100% 50%,0 50%)}h1[data-v-d24e1ef8]:after{opacity:.65;filter:blur(.02em);transform:translate(-50%,-50%) rotateX(21deg);-webkit-animation:floatBelow-data-v-d24e1ef8 3.5s ease-in-out infinite;animation:floatBelow-data-v-d24e1ef8 3.5s ease-in-out infinite;-webkit-clip-path:polygon(0 50%,100% 50%,100% 100%,0 100%);clip-path:polygon(0 50%,100% 50%,100% 100%,0 100%)}@-webkit-keyframes floatAbove-data-v-d24e1ef8{50%{transform:translate(-50%,-60%);-webkit-clip-path:polygon(0 0,100% 0,100% 60%,0 60%);clip-path:polygon(0 0,100% 0,100% 60%,0 60%)}}@keyframes floatAbove-data-v-d24e1ef8{50%{transform:translate(-50%,-60%);-webkit-clip-path:polygon(0 0,100% 0,100% 60%,0 60%);clip-path:polygon(0 0,100% 0,100% 60%,0 60%)}}@-webkit-keyframes floatBelow-data-v-d24e1ef8{50%{transform:translate(-50%,-60%) rotateX(10deg);-webkit-clip-path:polygon(0 60%,100% 60%,100% 100%,0 100%);clip-path:polygon(0 60%,100% 60%,100% 100%,0 100%)}}@keyframes floatBelow-data-v-d24e1ef8{50%{transform:translate(-50%,-60%) rotateX(10deg);-webkit-clip-path:polygon(0 60%,100% 60%,100% 100%,0 100%);clip-path:polygon(0 60%,100% 60%,100% 100%,0 100%)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map