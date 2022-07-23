exports.ids = [62];
exports.modules = {

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/student/syllabus/update/_id.vue?vue&type=template&id=605e0b7a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg py-5"},[_vm._ssrNode("<div class=\"col-md-6 offset-md-3\" data-v-605e0b7a>","</div>",[_vm._ssrNode("<div class=\"form-container\" data-v-605e0b7a>","</div>",[_vm._ssrNode("<h3 class=\"title\" data-v-605e0b7a>Update Syllabus</h3> "),_vm._ssrNode("<form class=\"form-horizontal\" data-v-605e0b7a>","</form>",[_vm._ssrNode("<div class=\"row\" data-v-605e0b7a>","</div>",[_vm._ssrNode("<div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-605e0b7a>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-605e0b7a>","</div>",[_vm._ssrNode("<label data-v-605e0b7a>Department Name*</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.syllabus.department),expression:"syllabus.department"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.syllabus, "department", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Department Name")]),_vm._v(" "),_vm._l((_vm.departments),function(department,index){return _c('option',{key:index,attrs:{"disable":""},domProps:{"value":department.department_name,"textContent":_vm._s(department.department_name)}})})],2),_vm._ssrNode(" "+((_vm.errors.department)?("<h6 class=\"text-danger\" data-v-605e0b7a>"+_vm._ssrEscape(_vm._s(_vm.errors.department[0]))+"</h6>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-605e0b7a>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-605e0b7a>","</div>",[_vm._ssrNode("<label data-v-605e0b7a>Publish Status*</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.syllabus.status),expression:"syllabus.status"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.syllabus, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":"","value":""}},[_vm._v("Select Status")]),_vm._v(" "),_c('option',{attrs:{"value":"draft"}},[_vm._v("Draft")]),_vm._v(" "),_c('option',{attrs:{"value":"published"}},[_vm._v("Published")])]),_vm._ssrNode(" "+((_vm.errors.status)?("<h6 class=\"text-danger\" data-v-605e0b7a>"+_vm._ssrEscape(_vm._s(_vm.errors.status[0]))+"</h6>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-605e0b7a><div class=\"form-group\" data-v-605e0b7a><label data-v-605e0b7a>Description *</label> <input type=\"text\" placeholder=\"Enter Description \""+(_vm._ssrAttr("value",(_vm.syllabus.description)))+" class=\"form-control\" data-v-605e0b7a> "+((_vm.errors.description)?("<h6 class=\"text-danger\" data-v-605e0b7a>"+_vm._ssrEscape(_vm._s(_vm.errors.description[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-605e0b7a><div class=\"form-group\" data-v-605e0b7a><label data-v-605e0b7a>Short Description *</label> <input type=\"text\" placeholder=\"Enter Short Description\""+(_vm._ssrAttr("value",(_vm.syllabus.short_description)))+" class=\"form-control\" data-v-605e0b7a> "+((_vm.errors.short_description)?("<h6 class=\"text-danger\" data-v-605e0b7a>"+_vm._ssrEscape(_vm._s(_vm.errors.short_description[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-605e0b7a><div class=\"form-group\" data-v-605e0b7a><label data-v-605e0b7a>File*</label> <input type=\"file\" placeholder accept=\"image/*\" class=\"form-control\" data-v-605e0b7a> "+((_vm.errors.file)?("<h6 class=\"text-danger\" data-v-605e0b7a>"+_vm._ssrEscape(_vm._s(_vm.errors.file[0]))+"</h6>"):"<!---->")+"</div> <img"+(_vm._ssrAttr("src",_vm.base_url+'/images/syllabus/' + _vm.syllabus.file))+" alt=\"image\" style=\"height:80px\" data-v-605e0b7a></div>")],2),_vm._ssrNode(" <div class=\"d-flex justify-content-end pt-3\" data-v-605e0b7a><button class=\"btn-submit\" data-v-605e0b7a>Submit</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/student/syllabus/update/_id.vue?vue&type=template&id=605e0b7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/student/syllabus/update/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: "Student-content",

  mounted() {
    this.fetchDepartmentInfo();
    this.fetchSyllabusInfo();
  },

  data() {
    return {
      errors: [],
      departments: '',
      base_url: "http://localhost:8000",
      syllabus: {
        description: '',
        short_description: '',
        department: '',
        status: '',
        file: ''
      }
    };
  },

  methods: {
    fetchDepartmentInfo() {
      this.$axios.$get('/admission/department').then(response => {
        this.departments = response;
      }).catch(error => {
        this.$toaster.error("Department Not found");
      });
    },

    fetchSyllabusInfo() {
      this.$axios.$get('syllabus/edit/' + this.$route.params.id).then(response => {
        this.syllabus = response;
      }).catch(error => {
        console.log(error);
      });
    },

    updateSyllabus() {
      let formData = new FormData();
      formData.append('department', this.syllabus.department);
      formData.append('status', this.syllabus.status);
      formData.append('description', this.syllabus.description);
      formData.append('short_description', this.syllabus.short_description);

      if (this.syllabus.new_file) {
        formData.append('file', this.syllabus.new_file);
      }

      this.$axios.$post("/syllabus/update/" + this.$route.params.id, formData).then(res => {
        this.syllabus = "";
        this.errors = {};
        this.$toaster.success(res.message);
        this.$router.push("/student/syllabus");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/student/syllabus/update/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var update_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/student/syllabus/update/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  update_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "605e0b7a",
  "68e3f5ca"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map