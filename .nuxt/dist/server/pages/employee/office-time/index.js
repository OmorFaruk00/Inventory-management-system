exports.ids = [49];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/office-time/index.vue?vue&type=template&id=b93c88c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg pt-5"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"form-container offset-md-1  col-md-10 p-5\">","</div>",[_vm._ssrNode("<h3 class=\"title\">Manage Office Time</h3> "),_vm._ssrNode("<div class=\"form-horizontal\">","</div>",[_vm._ssrNode("<div class=\"form-group pb-3\">","</div>",[_vm._ssrNode("<label>Select Employee</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.office_time.type),expression:"office_time.type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.office_time, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v("Academic")]),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v("Non Academic")])]),_vm._ssrNode(" "+((_vm.errors.type)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.type[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-3 col-sm-6\"><div class=\"form-group\"><label>Friday</label> <input type=\"tewxt\""+(_vm._ssrAttr("value",(_vm.office_time.from)))+" class=\"form-control\"> "+((_vm.errors.from)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.from[0]))+"</h6>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"col-md-3 col-sm-6\">","</div>",[_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Type</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.office_time.type),expression:"office_time.type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.office_time, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v("Offday")]),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v("Fixed")]),_vm._v(" "),_c('option',{attrs:{"value":""}},[_vm._v("Flexible")])]),_vm._ssrNode(" "+((_vm.errors.type)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.type[0]))+"</h6>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-md-3 col-sm-6\"><div class=\"form-group\"><label>Office Time Start</label> <input type=\"time\""+(_vm._ssrAttr("value",(_vm.office_time.from)))+" class=\"form-control\"> "+((_vm.errors.from)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.from[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-3 col-sm-6\"><div class=\"form-group\"><label>Office Time End</label> <input type=\"time\""+(_vm._ssrAttr("value",(_vm.office_time.from)))+" class=\"form-control\"> "+((_vm.errors.from)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.from[0]))+"</h6>"):"<!---->")+"</div></div>")],2),_vm._ssrNode(" "+((_vm.errors.office_time)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.office_time[0]))+"</h6>"):"<!---->")+" <div class=\"d-flex justify-content-end pt-3\"><button class=\"btn-submit\">Submit</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/employee/office-time/index.vue?vue&type=template&id=b93c88c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/office-time/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var office_timevue_type_script_lang_js_ = ({
  layout: "Emp-content",

  data() {
    return {
      office_time: {
        type: "",
        office_time: ""
      },
      errors: []
    };
  },

  methods: {
    addoffice_time() {
      this.$axios.$post("/office_time/add", this.office_time).then(res => {
        this.office_time = "";
        this.errors = "";
        this.$toaster.success(res.message);
        this.$router.push("/employee/office_time");
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(this.errors);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/employee/office-time/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_office_timevue_type_script_lang_js_ = (office_timevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/employee/office-time/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_office_timevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d9dd4c2"
  
)

/* harmony default export */ var office_time = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map