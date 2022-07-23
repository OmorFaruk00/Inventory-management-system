exports.ids = [13];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/form-sale.vue?vue&type=template&id=c9608e92&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg pt-5"},[_vm._ssrNode("<div class=\"container\" data-v-c9608e92>","</div>",[_vm._ssrNode("<div class=\"form-shadow offset-md-2 col-md-8 p-5\" data-v-c9608e92>","</div>",[_vm._ssrNode("<div data-v-c9608e92>","</div>",[_vm._ssrNode(((!_vm.show)?("<div data-v-c9608e92><div class=\"form-group\" data-v-c9608e92><label data-v-c9608e92>Form Number</label> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.form_number)))+" class=\"form-control\" data-v-c9608e92></div> <div class=\"d-flex justify-content-end pt-3\" data-v-c9608e92><button class=\"btn-submit\" data-v-c9608e92>Search</button></div></div>"):"<!---->")+" "),(_vm.show)?_vm._ssrNode("<div data-v-c9608e92>","</div>",[_vm._ssrNode("<div class=\"form-group focused\" data-v-c9608e92><label for data-v-c9608e92>Name of Student</label> <input type=\"text\" placeholder id name=\"std_name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.student_name)))+" class=\"form-control\" data-v-c9608e92> "+((_vm.error.student_name)?("<h6 class=\"text-danger\" data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.error.student_name[0]))+"</h6>"):"<!---->")+" <small id class=\"form-text text-danger\" data-v-c9608e92> </small></div> "),_vm._ssrNode("<div class=\"form-group focused\" data-v-c9608e92>","</div>",[_vm._ssrNode("<label for=\"_id\" data-v-c9608e92>Department</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.department),expression:"department"}],staticClass:"form-control",attrs:{"required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.department=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.getBatch]}},[_c('option',{attrs:{"selected":"","value":""}},[_vm._v("Select depertment")]),_vm._v(" "),_vm._l((_vm.department_list),function(dpt){return _c('option',{key:dpt.id,domProps:{"value":dpt.id,"textContent":_vm._s(dpt.department_name)}})})],2),_vm._ssrNode(" "+((_vm.error.department)?("<h6 class=\"text-danger\" data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.error.department[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group focused\" data-v-c9608e92>","</div>",[_vm._ssrNode("<label for data-v-c9608e92>Batch</label> "),(!_vm.batch_list)?_vm._ssrNode("<input type=\"text\" disabled=\"disabled\" placeholder=\"Select Department first\" class=\"form-control\" data-v-c9608e92>","</input>"):_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.batch),expression:"batch"}],staticClass:"form-control",attrs:{"required":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.batch=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"selected":"","value":""}},[_vm._v("Select Batch")]),_vm._v(" "),_vm._l((_vm.batch_list),function(batch){return _c('option',{key:batch.id,domProps:{"value":batch.id,"textContent":_vm._s(batch.batch_name)}})})],2),_vm._ssrNode(" "+((_vm.error.batch)?("<h6 class=\"text-danger\" data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.error.batch[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"d-flex justify-content-end\" data-v-c9608e92><button type=\"submit\" class=\"btn-submit mr-4\" data-v-c9608e92>\n              Submit\n            </button> <button type=\"reset\" class=\" btn-reset mr-3\" data-v-c9608e92>\n              Reset\n            </button> "+((_vm.receipt_no)?("<button type=\"button\" class=\" btn-print\" data-v-c9608e92>Print Recieve\n            </button>"):"<!---->")+"</div>")],2):_vm._e()],2)])]),_vm._ssrNode(" "+((_vm.form_info)?("<div class=\"form_info container pt-5\" data-v-c9608e92><table class=\"table table-striped text-center\" data-v-c9608e92><thead data-v-c9608e92><tr data-v-c9608e92><th data-v-c9608e92>Form Number</th> <th data-v-c9608e92>Student Name</th> <th data-v-c9608e92>Department</th> <th data-v-c9608e92>Batch</th> <th data-v-c9608e92>Sale Date</th></tr></thead> <tbody data-v-c9608e92><tr data-v-c9608e92><td data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.form_info.form_number))+"</td> <td data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.form_info.name_of_student))+"</td> <td data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.form_info.department.department_name))+"</td> <td data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.form_info.batch.batch_name))+"</td> <td data-v-c9608e92>"+_vm._ssrEscape(_vm._s(_vm.form_info.sale_date))+"</td></tr></tbody></table></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/form-sale.vue?vue&type=template&id=c9608e92&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/form-sale.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var form_salevue_type_script_lang_js_ = ({
  layout: "Adm-content",

  data() {
    return {
      form_number: "",
      student_name: "",
      department: "",
      department_list: "",
      batch: "",
      roll: "",
      reg_code: "",
      department: "",
      batch_list: "",
      receipt_no: "",
      error: "",
      department_name: null,
      form_info: "",
      show: false
    };
  },

  mounted() {
    this.getDepartment();
  },

  methods: {
    searchForm() {
      this.$axios.$get("/admission/form-search/" + this.form_number).then(response => {
        this.form_info = "";
        this.show = true;
      }).catch(error => {
        if (error.response.status == 302) {
          this.$toaster.error("Form not Available");
          this.form_info = error.response.data.form_info; // return false;
          // this.$router.push(`print-receive/${this.form_number}`);
        }

        console.log(error);
        this.error = error.response.data.errors;
      });
    },

    getDepartment() {
      this.$axios.$get("/admission/department").then(response => {
        this.department_list = response;
      }).catch(error => {
        this.errors = error.response.message.errors;
      });
    },

    getBatch() {
      this.$axios.$get("/admission/batch/" + this.department).then(response => {
        console.log(response);
        this.batch_list = response.data;
      }).catch(error => {
        this.error = error.response.data.errors;
      });
    },

    form_sales() {
      let form = {
        student_name: this.student_name,
        department: this.department,
        batch: this.batch
      };
      this.$axios.$post("/admission/form-sales/" + this.form_number, form).then(response => {
        this.$toaster.success(response.message);
        this.student_name = "";
        this.department = "";
        this.batch = "";
        this.receipt_no = response.receipt_no;
      }).catch(error => {
        this.error = error.response.data.errors;
      });
    },

    print_recieve() {
      this.$axios.$get("/admission/print-receive/" + this.form_number, {
        responseType: "blob"
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "admission_slip.pdf");
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        this.error = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/form-sale.vue?vue&type=script&lang=js&
 /* harmony default export */ var admission_form_salevue_type_script_lang_js_ = (form_salevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/form-sale.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admission_form_salevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c9608e92",
  "51a9d33b"
  
)

/* harmony default export */ var form_sale = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("77a68bcc", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_sale_vue_vue_type_style_index_0_id_c9608e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_sale_vue_vue_type_style_index_0_id_c9608e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_sale_vue_vue_type_style_index_0_id_c9608e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_sale_vue_vue_type_style_index_0_id_c9608e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_sale_vue_vue_type_style_index_0_id_c9608e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=form-sale.js.map