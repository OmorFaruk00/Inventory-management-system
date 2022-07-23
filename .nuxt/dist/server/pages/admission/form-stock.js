exports.ids = [14];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/form-stock.vue?vue&type=template&id=dd1476e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<h4 class=\"title pt-4\">Form Import List</h4> <table class=\"table table-striped text-center\"><thead><tr><th>ID</th> <th>Start Sl Number</th> <th>End Sl Number</th> <th>Number OF Form</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.forms),function(form){return ("<tr><td>"+_vm._ssrEscape(_vm._s(form.id))+"</td> <td>"+_vm._ssrEscape(_vm._s(form.start))+"</td> <td>"+_vm._ssrEscape(_vm._s(form.end))+"</td> <td>"+_vm._ssrEscape(_vm._s(form.count))+"</td></tr>")}))+"</tbody></table>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/form-stock.vue?vue&type=template&id=dd1476e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/form-stock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var form_stockvue_type_script_lang_js_ = ({
  layout: "Adm-content",

  data() {
    return {
      forms: ""
    };
  },

  mounted() {
    this.availableForm();
  },

  methods: {
    availableForm() {
      this.$axios.$get("/admission/form-stock").then(response => {
        this.forms = response.data;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/form-stock.vue?vue&type=script&lang=js&
 /* harmony default export */ var admission_form_stockvue_type_script_lang_js_ = (form_stockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/form-stock.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admission_form_stockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37cace52"
  
)

/* harmony default export */ var form_stock = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=form-stock.js.map