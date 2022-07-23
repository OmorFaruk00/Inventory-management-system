exports.ids = [41];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/department/index.vue?vue&type=template&id=82bb5ee8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-82bb5ee8><h4 class=\"title\" data-v-82bb5ee8>Department List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-82bb5ee8>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/employee/department/create"}},[_vm._v("Add Department")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-82bb5ee8><table class=\"table table-striped text-center\" data-v-82bb5ee8><thead data-v-82bb5ee8><tr data-v-82bb5ee8><th data-v-82bb5ee8>Type</th> <th data-v-82bb5ee8>Department Name</th> <th data-v-82bb5ee8>Status</th> <th data-v-82bb5ee8>Action</th></tr></thead> <tbody data-v-82bb5ee8>"+(_vm._ssrList((_vm.departments),function(department){return ("<tr data-v-82bb5ee8><td data-v-82bb5ee8>"+_vm._ssrEscape(_vm._s(department.type))+"</td> <td data-v-82bb5ee8>"+_vm._ssrEscape(_vm._s(department.department))+"</td> <td data-v-82bb5ee8>"+((department.status == 1)?("<button class=\"btn-active\" data-v-82bb5ee8>\n                      Active\n                    </button>"):"<!---->")+" "+((department.status == 0)?("<button class=\"btn-inactive\" data-v-82bb5ee8>\n                      Inactive\n                    </button>"):"<!---->")+"</td> <td data-v-82bb5ee8><button class=\"btn-edit\" data-v-82bb5ee8>\n                      Edit\n                    </button> <button class=\"btn-delete\" data-v-82bb5ee8>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"departmentUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"modal-content\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"modal-header\" data-v-82bb5ee8><h5 class=\"title\" data-v-82bb5ee8>\n              Department Update\n            </h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-82bb5ee8><span aria-hidden=\"true\" data-v-82bb5ee8>×</span></button></div> "),_vm._ssrNode("<div class=\"modal-body\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"form-horizontal\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-82bb5ee8>","</div>",[_vm._ssrNode("<label data-v-82bb5ee8>Type</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.department.type),expression:"department.type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.department, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":"Academic"}},[_vm._v("Academic")]),_vm._v(" "),_c('option',{attrs:{"value":"Non Academic"}},[_vm._v("Non Academic")])]),_vm._ssrNode(" "+((_vm.errors.type)?("<h6 class=\"text-danger\" data-v-82bb5ee8>"+_vm._ssrEscape(_vm._s(_vm.errors.type[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\" data-v-82bb5ee8><label data-v-82bb5ee8>Department Name </label> <input type=\"text\" placeholder=\"Department Name \""+(_vm._ssrAttr("value",(_vm.department.department)))+" class=\"form-control\" data-v-82bb5ee8></div> "+((_vm.errors.department)?("<h6 class=\"text-danger\" data-v-82bb5ee8>"+_vm._ssrEscape(_vm._s(_vm.errors.department[0]))+"</h6>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"modal-footer\" data-v-82bb5ee8><button type=\"button\" class=\"btn-submit\" data-v-82bb5ee8>\n              Update\n            </button></div>")],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/employee/department/index.vue?vue&type=template&id=82bb5ee8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/department/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var departmentvue_type_script_lang_js_ = ({
  layout: "Emp-content",

  mounted() {
    this.getDepartment();
  },

  data() {
    return {
      departments: '',
      department: {
        type: "",
        name: ''
      },
      errors: {}
    };
  },

  methods: {
    getDepartment() {
      this.$axios.$get("/department/show").then(res => {
        this.departments = res;
      }).catch(err => {
        console.log(err);
      });
    },

    departmentEdit(id) {
      $("#departmentUpdate").modal("show");
      this.$axios.$get("/department/edit/" + id).then(res => {
        this.department = res;
      }).catch(err => {
        console.log(err);
      });
    },

    departmentUpdate() {
      this.$axios.$post("/department/update/" + this.department.id, this.department).then(res => {
        this.getDepartment();
        $("#departmentUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    departmentDelete(id) {
      if (confirm("Are you sure to delete this department?")) {
        this.$axios.$get("/department/delete/" + id).then(res => {
          this.getDepartment();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    departmentStatus(id) {
      this.$axios.$get("/department/status/" + id).then(res => {
        console.log(res);
        this.getDepartment();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/employee/department/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_departmentvue_type_script_lang_js_ = (departmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/employee/department/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_departmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "82bb5ee8",
  "18603b32"
  
)

/* harmony default export */ var department = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map