exports.ids = [40];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/department/create.vue?vue&type=template&id=2082e557&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg pt-5"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"form-container offset-md-2  col-md-8\">","</div>",[_vm._ssrNode("<h3 class=\"title\">Create Department</h3> "),_vm._ssrNode("<div class=\"form-horizontal\">","</div>",[_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Type</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.department.type),expression:"department.type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.department, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":"Academic"}},[_vm._v("Academic")]),_vm._v(" "),_c('option',{attrs:{"value":"Non Academic"}},[_vm._v("Non Academic")])]),_vm._ssrNode(" "+((_vm.errors.type)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.type[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\"><label>Department Name </label> <input type=\"text\" placeholder=\"Department Name \""+(_vm._ssrAttr("value",(_vm.department.department)))+" class=\"form-control\"></div> "+((_vm.errors.department)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.department[0]))+"</h6>"):"<!---->")+" <div class=\"d-flex justify-content-end pt-3\"><button class=\"btn-submit\">Submit</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/employee/department/create.vue?vue&type=template&id=2082e557&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/department/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: "Emp-content",

  data() {
    return {
      department: {
        type: "",
        department: ""
      },
      errors: []
    };
  },

  methods: {
    addDepartment() {
      this.$axios.$post("/department/add", this.department).then(res => {
        this.department = "";
        this.errors = "";
        this.$toaster.success(res.message);
        this.$router.push("/employee/department");
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(this.errors);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/employee/department/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var department_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/employee/department/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  department_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a43e9592"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map