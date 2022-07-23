exports.ids = [12];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/form-import.vue?vue&type=template&id=1e3748d1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg pt-5"},[_vm._ssrNode("<div class=\"container\"><div class=\"form-shadow p-5 offset-md-2  col-md-8\"><div class=\"form-horizontal\"><div class=\"form-group\"><label>Start Sl No</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.start)))+" class=\"form-control\"> "+((_vm.errors.start)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.start[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group\"><label>End Sl No</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.end)))+" class=\"form-control\"> "+((_vm.errors.end)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.end[0]))+"</h6>"):"<!---->")+"</div> <div class=\"form-group\"><label>Number of Form</label> <input type=\"text\" readonly=\"readonly\""+(_vm._ssrAttr("value",(_vm.form.count)))+" class=\"form-control\"></div> <div class=\"d-flex justify-content-end pt-3\"><button class=\"btn-submit\">Submit</button></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/form-import.vue?vue&type=template&id=1e3748d1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/form-import.vue?vue&type=script&lang=js&
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
/* harmony default export */ var form_importvue_type_script_lang_js_ = ({
  layout: "Adm-content",
  data: function () {
    return {
      form: {
        start: '',
        end: '',
        count: ''
      },
      errors: {}
    };
  },
  methods: {
    slStart() {
      var start = this.form.start;
      var end = this.form.end;
      this.form.count = end - start + 1;
    },

    slEnd() {
      var start = this.form.start;
      var end = this.form.end;
      this.form.count = end - start + 1;
    },

    importForm() {
      this.$axios.$post('/admission/form-import', this.form).then(response => {
        this.$toaster.success(response.message);
        this.form = '', this.errors = '';
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.$toast.error(error.response.data.message);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/form-import.vue?vue&type=script&lang=js&
 /* harmony default export */ var admission_form_importvue_type_script_lang_js_ = (form_importvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/form-import.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admission_form_importvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1b292099"
  
)

/* harmony default export */ var form_import = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=form-import.js.map