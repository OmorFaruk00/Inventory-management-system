exports.ids = [43];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/designation/index.vue?vue&type=template&id=7a00ffa8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-7a00ffa8><h4 class=\"title\" data-v-7a00ffa8>designation List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-7a00ffa8>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/employee/designation/create"}},[_vm._v("Add designation")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-7a00ffa8><table class=\"table table-striped text-center\" data-v-7a00ffa8><thead data-v-7a00ffa8><tr data-v-7a00ffa8><th data-v-7a00ffa8>Type</th> <th data-v-7a00ffa8>designation Name</th> <th data-v-7a00ffa8>Status</th> <th data-v-7a00ffa8>Action</th></tr></thead> <tbody data-v-7a00ffa8>"+(_vm._ssrList((_vm.designations),function(designation){return ("<tr data-v-7a00ffa8><td data-v-7a00ffa8>"+_vm._ssrEscape(_vm._s(designation.type))+"</td> <td data-v-7a00ffa8>"+_vm._ssrEscape(_vm._s(designation.designation))+"</td> <td data-v-7a00ffa8>"+((designation.status == 1)?("<button class=\"btn-active\" data-v-7a00ffa8>\n                      Active\n                    </button>"):"<!---->")+" "+((designation.status == 0)?("<button class=\"btn-inactive\" data-v-7a00ffa8>\n                      Inactive\n                    </button>"):"<!---->")+"</td> <td data-v-7a00ffa8><button class=\"btn-edit\" data-v-7a00ffa8>\n                      Edit\n                    </button> <button class=\"btn-delete\" data-v-7a00ffa8>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"designationUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"modal-content\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"modal-header\" data-v-7a00ffa8><h5 class=\"title\" data-v-7a00ffa8>\n              designation Update\n            </h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-7a00ffa8><span aria-hidden=\"true\" data-v-7a00ffa8>×</span></button></div> "),_vm._ssrNode("<div class=\"modal-body\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"form-horizontal\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-7a00ffa8>","</div>",[_vm._ssrNode("<label data-v-7a00ffa8>Type</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.designation.type),expression:"designation.type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.designation, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":"Academic"}},[_vm._v("Academic")]),_vm._v(" "),_c('option',{attrs:{"value":"Non Academic"}},[_vm._v("Non Academic")])]),_vm._ssrNode(" "+((_vm.errors.type)?("<h6 class=\"text-danger\" data-v-7a00ffa8>"+_vm._ssrEscape(_vm._s(_vm.errors.type[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\" data-v-7a00ffa8><label data-v-7a00ffa8>designation Name </label> <input type=\"text\" placeholder=\"designation Name \""+(_vm._ssrAttr("value",(_vm.designation.designation)))+" class=\"form-control\" data-v-7a00ffa8></div> "+((_vm.errors.designation)?("<h6 class=\"text-danger\" data-v-7a00ffa8>"+_vm._ssrEscape(_vm._s(_vm.errors.designation[0]))+"</h6>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"modal-footer\" data-v-7a00ffa8><button type=\"button\" class=\"btn-submit\" data-v-7a00ffa8>\n              Update\n            </button></div>")],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/employee/designation/index.vue?vue&type=template&id=7a00ffa8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/designation/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var designationvue_type_script_lang_js_ = ({
  layout: "Emp-content",

  mounted() {
    this.getDesignation();
  },

  data() {
    return {
      designations: '',
      designation: {
        type: "",
        name: ''
      },
      errors: {}
    };
  },

  methods: {
    getDesignation() {
      this.$axios.$get("/designation/show").then(res => {
        this.designations = res;
      }).catch(err => {
        console.log(err);
      });
    },

    designationEdit(id) {
      $("#designationUpdate").modal("show");
      this.$axios.$get("/designation/edit/" + id).then(res => {
        this.designation = res;
      }).catch(err => {
        console.log(err);
      });
    },

    designationUpdate() {
      this.$axios.$post("/designation/update/" + this.designation.id, this.designation).then(res => {
        this.getDesignation();
        $("#designationUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    designationDelete(id) {
      if (confirm("Are you sure to delete this designation?")) {
        this.$axios.$get("/designation/delete/" + id).then(res => {
          this.getDesignation();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    designationStatus(id) {
      this.$axios.$get("/designation/status/" + id).then(res => {
        console.log(res);
        this.getDesignation();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/employee/designation/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_designationvue_type_script_lang_js_ = (designationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/employee/designation/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_designationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a00ffa8",
  "a529d1d0"
  
)

/* harmony default export */ var designation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map