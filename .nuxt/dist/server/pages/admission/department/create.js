exports.ids = [9];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/department/create.vue?vue&type=template&id=77bc9b17&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-5"},[_vm._ssrNode("<div class=\"col-md-6 mx-auto form-shadow p-5\"><div class=\"d-flex justify-content-end\"></div> <form><div class=\"form-group\"><label for>Department Name</label> <input type=\"text\" id=\"name\" placeholder=\"Enter Department Name\""+(_vm._ssrAttr("value",(_vm.department.department_name)))+" class=\"form-control\"> "+((_vm.errors.department_name)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.department_name[0]))+"</p>"):"<!---->")+"</div> <div class=\"d-flex justify-content-end\"><button class=\"btn-submit\">\n          Submit\n        </button></div></form></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/department/create.vue?vue&type=template&id=77bc9b17&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/department/create.vue?vue&type=script&lang=js&
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
  layout: "Adm-content",

  data() {
    return {
      department: {
        department_name: ""
      },
      errors: {}
    };
  },

  methods: {
    adddepartment() {
      this.$axios.$post("/admission/department-add", this.department).then(res => {
        this.department = "";
        this.errors = {};
        this.$toaster.success(res.message);
        this.$router.push("/admission/department");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/department/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var department_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/department/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  department_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b8bc264"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map