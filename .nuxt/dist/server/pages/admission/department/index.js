exports.ids = [10];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/department/index.vue?vue&type=template&id=4fba34ee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-4fba34ee>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-4fba34ee>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-4fba34ee>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-4fba34ee>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-4fba34ee>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-4fba34ee>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-4fba34ee><h4 class=\"title\" data-v-4fba34ee>department List</h4></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-4fba34ee>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/admission/department/create"}},[_vm._v("Add department")])],1)],2)]),_vm._ssrNode(" <div class=\"panel-body table-responsive\" data-v-4fba34ee><table class=\"table table-striped text-center\" data-v-4fba34ee><thead data-v-4fba34ee><tr data-v-4fba34ee><th data-v-4fba34ee>ID</th> <th data-v-4fba34ee>Department name</th> <th data-v-4fba34ee>Status</th> <th style=\"width:200px\" data-v-4fba34ee>Action</th></tr></thead> <tbody data-v-4fba34ee>"+(_vm._ssrList((_vm.departments),function(department){return ("<tr data-v-4fba34ee><td data-v-4fba34ee>"+_vm._ssrEscape(_vm._s(department.id))+"</td> <td data-v-4fba34ee>"+_vm._ssrEscape(_vm._s(department.department_name))+"</td> <td data-v-4fba34ee>"+((department.status == 1)?("<button class=\"btn-active\" data-v-4fba34ee>\n                      Active\n                    </button>"):"<!---->")+" "+((department.status == 0)?("<button class=\"btn-inactive\" data-v-4fba34ee>\n                      Inactive\n                    </button>"):"<!---->")+"</td> <td data-v-4fba34ee><button class=\"btn-edit\" data-v-4fba34ee>\n                      Edit\n                    </button> <button class=\"btn-delete\" data-v-4fba34ee>\n                      Delete\n                    </button></td></tr>")}))+"</tbody></table></div>")],2)])]),_vm._ssrNode(" <div id=\"departmentUpdate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" class=\"modal fade\" data-v-4fba34ee><div role=\"document\" class=\"modal-dialog modal-dialog-centered\" data-v-4fba34ee><div class=\"modal-content\" data-v-4fba34ee><div class=\"modal-header\" data-v-4fba34ee><h5 id=\"exampleModalLongTitle\" class=\"modal-title\" data-v-4fba34ee>\n              Department Update\n            </h5> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-4fba34ee><span aria-hidden=\"true\" data-v-4fba34ee>×</span></button></div> <div class=\"modal-body\" data-v-4fba34ee><div class=\"form-group\" data-v-4fba34ee><label for data-v-4fba34ee>Department Name</label> <input type=\"text\" id=\"name\" placeholder=\"Title\""+(_vm._ssrAttr("value",(_vm.department.department_name)))+" class=\"form-control\" data-v-4fba34ee> "+((_vm.errors.title)?("<p class=\"text-danger\" data-v-4fba34ee>"+_vm._ssrEscape(_vm._s(_vm.errors.title[0]))+"</p>"):"<!---->")+"</div></div> <div class=\"modal-footer\" data-v-4fba34ee><button type=\"button\" class=\"btn-submit\" data-v-4fba34ee>\n              Update\n            </button></div></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/department/index.vue?vue&type=template&id=4fba34ee&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/department/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: "Adm-content",

  mounted() {
    this.getdepartment();
  },

  data() {
    return {
      departments: [],
      department: {
        department_name: ""
      },
      errors: {}
    };
  },

  methods: {
    getdepartment() {
      this.$axios.$get("/admission/department-show").then(res => {
        this.departments = res;
      }).catch(err => {
        console.log(err);
      });
    },

    departmentEdit(id) {
      $("#departmentUpdate").modal("show");
      this.$axios.$get("/admission/department-edit/" + id).then(res => {
        this.department = res;
      }).catch(err => {
        console.log(err);
      });
    },

    departmentUpdate() {
      this.$axios.$post("/admission/department-update/" + this.department.id, this.department).then(res => {
        this.getdepartment();
        $("#departmentUpdate").modal("hide");
        this.$toaster.success(res.message);
        this.errors = "";
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    },

    deletedepartment(id) {
      if (confirm("Are you sure to delete this department?")) {
        this.$axios.$get("/admission/department-delete/" + id).then(res => {
          this.getdepartment();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    departmentStatus(id) {
      this.$axios.$get("/admission/department-status/" + id).then(res => {
        this.getdepartment();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/department/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admission_departmentvue_type_script_lang_js_ = (departmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/department/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admission_departmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4fba34ee",
  "1127fb9a"
  
)

/* harmony default export */ var department = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map