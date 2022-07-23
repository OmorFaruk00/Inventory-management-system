exports.ids = [5];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/admissionInActiveBatch/index.vue?vue&type=template&id=6880a0da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex justify-content-between pt-5\">","</div>",[_vm._ssrNode("<div class=\"title\">\n            Admission In Active Batch\n        </div> "),_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/admission/admissionInActiveBatch/create"}},[_vm._v("Admission")])],1)],2),_vm._ssrNode(" <div><div><div class=\"panel-body table-responsive\"><table class=\"table table-striped text-center\"><thead><tr><th>Department</th> <th>Batch Number</th> <th>Shift</th> <th>Group</th> <th>No. Of Seat</th> <th>Available Seat</th> <th>Session</th> <th>Class Start Date</th> <th>Last Date Of Admission</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.activeBatchs),function(batch){return ("<tr><td>"+_vm._ssrEscape(_vm._s(batch.department.department_name))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.batch_name))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.shift))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.group))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.no_of_seat))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.no_of_seat))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.session))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.class_start_date))+"</td> <td>"+_vm._ssrEscape(_vm._s(batch.last_data_of_admission))+"</td></tr>")}))+"</tbody></table></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/admissionInActiveBatch/index.vue?vue&type=template&id=6880a0da&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/admissionInActiveBatch/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var admissionInActiveBatchvue_type_script_lang_js_ = ({
  layout: 'Adm-content',

  data() {
    return {
      activeBatchs: ''
    };
  },

  mounted() {
    this.getbatch();
  },

  methods: {
    getbatch() {
      this.$axios.$get("admission/batch-show").then(res => {
        console.log(res);
        this.activeBatchs = res;
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/admissionInActiveBatch/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admission_admissionInActiveBatchvue_type_script_lang_js_ = (admissionInActiveBatchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/admissionInActiveBatch/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admission_admissionInActiveBatchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b7a540a4"
  
)

/* harmony default export */ var admissionInActiveBatch = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map