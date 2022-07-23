exports.ids = [61];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/student/syllabus/index.vue?vue&type=template&id=7785f857&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\">","</div>",[_vm._ssrNode("<div class=\"panel\">","</div>",[_vm._ssrNode("<div class=\"panel-heading\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\"><h6 class=\"title\">Syllabus List</h6></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\">","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/student/syllabus/create"}},[_vm._v("Add Syllabus")])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"panel-body table-responsive\">","</div>",[_vm._ssrNode("<table class=\"table table-striped text-center\">","</table>",[_vm._ssrNode("<thead class=\"bg-dark text-white\"><tr><th>Sl</th> <th>Department</th> <th>Description</th> <th style=\"width:200px\">Action</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.syllabuss),function(syllabus,index){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td>"+_vm._ssrEscape(_vm._s(index + 1))+"</td> <td>"+_vm._ssrEscape(_vm._s(syllabus.department))+"</td> <td>"+_vm._ssrEscape(_vm._s(syllabus.description))+"</td> "),_vm._ssrNode("<td>","</td>",[_c('nuxt-link',{staticClass:"btn-edit py-2 mr-3",attrs:{"to":("/student/syllabus/update/" + (syllabus.id))}},[_vm._v("Edit")]),_vm._ssrNode(" <button class=\"btn-delete\">Delete</button>")],2)],2)}),0)],2)])],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/student/syllabus/index.vue?vue&type=template&id=7785f857&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/student/syllabus/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var syllabusvue_type_script_lang_js_ = ({
  layout: 'Student-content',

  data() {
    return {
      syllabuss: '',
      base_url: "http://localhost:8000"
    };
  },

  mounted() {
    this.fetchSyllbusInfo();
  },

  methods: {
    fetchSyllbusInfo() {
      this.$axios.$get('/syllabus/show').then(response => {
        this.syllabuss = response;
      }).catch(error => {
        tconsole.log(error);
      });
    },

    syllabusDelete($id) {
      this.$axios.$get('/syllabus/delete/' + $id).then(response => {
        this.$toaster.success(response.message);
        this.$router.push("/student/syllabus");
        this.fetchSyllbusInfo();
      }).catch(error => {
        tconsole.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/student/syllabus/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var student_syllabusvue_type_script_lang_js_ = (syllabusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/student/syllabus/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  student_syllabusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e00c780a"
  
)

/* harmony default export */ var syllabus = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map