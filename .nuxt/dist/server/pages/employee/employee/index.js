exports.ids = [46];
exports.modules = {

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/employee/index.vue?vue&type=template&id=5f193880&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-5f193880>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5f193880>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-5f193880>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-5f193880>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-5f193880>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5f193880>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-5f193880><h6 class=\"title\" data-v-5f193880>Employee List</h6></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-5f193880>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/employee/employee/create"}},[_vm._v("Add Employee")])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"panel-body table-responsive\" data-v-5f193880>","</div>",[_vm._ssrNode("<table class=\"table table-striped text-center\" data-v-5f193880>","</table>",[_vm._ssrNode("<thead data-v-5f193880><tr data-v-5f193880><th data-v-5f193880>Name</th> <th data-v-5f193880>Designation</th> <th data-v-5f193880>Depertment</th> <th data-v-5f193880>E-mail</th> <th data-v-5f193880>Job Type</th> <th data-v-5f193880>Image</th> <th data-v-5f193880>Status</th> <th data-v-5f193880>Action</th></tr></thead> "),_vm._ssrNode("<tbody data-v-5f193880>","</tbody>",_vm._l((_vm.employees),function(employee){return _vm._ssrNode("<tr data-v-5f193880>","</tr>",[_vm._ssrNode("<td data-v-5f193880>"+_vm._ssrEscape(_vm._s(employee.name))+"</td> <td data-v-5f193880>"+_vm._ssrEscape(_vm._s(employee.rel_designation.designation))+"</td> <td data-v-5f193880>"+_vm._ssrEscape(_vm._s(employee.rel_department.department))+"</td> <td data-v-5f193880>"+_vm._ssrEscape(_vm._s(employee.email))+"</td> <td data-v-5f193880>"+_vm._ssrEscape(_vm._s(employee.jobtype))+"</td> <td data-v-5f193880><img"+(_vm._ssrAttr("src",'http://localhost:8000/images/emp/' + employee.profile_photo))+" alt=\"image\" style=\"height:80px\" data-v-5f193880></td> <td data-v-5f193880>"+((employee.status == 1)?("<button class=\"btn-active\" data-v-5f193880>\n                      Active\n                    </button>"):"<!---->")+" "+((employee.status == 0)?("<button class=\"btn-inactive\" data-v-5f193880>\n                      Inactive\n                    </button>"):"<!---->")+"</td> "),_vm._ssrNode("<td class=\"pt-3\" data-v-5f193880>","</td>",[_c('nuxt-link',{staticClass:"btn-edit",attrs:{"to":("/employee/employee/update/" + (employee.id))}},[_vm._v("Edit")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"btn-details",attrs:{"to":("/employee/employee/detail/" + (employee.id))}},[_vm._v("Details")])],2)],2)}),0)],2)])],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/employee/employee/index.vue?vue&type=template&id=5f193880&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employee/employee/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var employeevue_type_script_lang_js_ = ({
  layout: "Emp-content",

  mounted() {
    this.getEmployee();
  },

  data() {
    return {
      employees: [],
      errors: {}
    };
  },

  methods: {
    getEmployee() {
      this.$axios.$get("/employee/show").then(res => {
        this.employees = res;
      }).catch(err => {
        console.log(err);
      });
    },

    employeeDelete(id) {
      if (confirm("Are you sure to delete this employee?")) {
        this.$axios.$get("/employee/delete/" + id).then(res => {
          this.getEmployee();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    employeeStatus(id, status) {
      this.$axios.$get("/employee/status/" + id).then(res => {
        this.getEmployee();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/employee/employee/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_employeevue_type_script_lang_js_ = (employeevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/employee/employee/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_employeevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f193880",
  "86574d7a"
  
)

/* harmony default export */ var employee = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map