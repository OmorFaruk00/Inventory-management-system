exports.ids = [7];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/batch/index.vue?vue&type=template&id=c2e9bab6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-c2e9bab6>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-c2e9bab6>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-c2e9bab6>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-c2e9bab6>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-c2e9bab6>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-c2e9bab6>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-c2e9bab6><h6 class=\"title\" data-v-c2e9bab6>batch List</h6></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-c2e9bab6>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/admission/batch/create"}},[_vm._v("Add batch")])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"panel-body table-responsive\" data-v-c2e9bab6>","</div>",[_vm._ssrNode("<table class=\"table table-striped text-center\" data-v-c2e9bab6>","</table>",[_vm._ssrNode("<thead data-v-c2e9bab6><tr data-v-c2e9bab6><th data-v-c2e9bab6>Sl</th> <th data-v-c2e9bab6>Department </th> <th data-v-c2e9bab6>Group / Shift</th> <th data-v-c2e9bab6>Batch Name</th> <th data-v-c2e9bab6>No. Of Seat</th> <th data-v-c2e9bab6>Year/Season</th> <th data-v-c2e9bab6>Class Start Date</th> <th data-v-c2e9bab6>Admission Start Date</th> <th data-v-c2e9bab6>Last Date Of Admission</th> <th data-v-c2e9bab6>Status</th> <th style=\"width:200px\" data-v-c2e9bab6>Action</th></tr></thead> "),_vm._ssrNode("<tbody data-v-c2e9bab6>","</tbody>",_vm._l((_vm.batchs),function(batch){return _vm._ssrNode("<tr data-v-c2e9bab6>","</tr>",[_vm._ssrNode("<td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.id))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.department.department_name))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.group)+"/"+_vm._s(batch.shift))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.batch_name))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.no_of_seat))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.year)+"/"+_vm._s(batch.session))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.class_start_date))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.admission_start_date))+"</td> <td data-v-c2e9bab6>"+_vm._ssrEscape(_vm._s(batch.last_data_of_admission))+"</td> <td data-v-c2e9bab6>"+((batch.status == 1)?("<button class=\"btn-active\" data-v-c2e9bab6>\n                                            Active\n                                        </button>"):"<!---->")+" "+((batch.status == 0)?("<button class=\"btn-inactive\" data-v-c2e9bab6>\n                                            Inactive\n                                        </button>"):"<!---->")+"</td> "),_vm._ssrNode("<td data-v-c2e9bab6>","</td>",[_c('nuxt-link',{staticClass:"btn-edit mr-3",staticStyle:{"padding":"7px 15px"},attrs:{"to":("/admission/batch/update/" + (batch.id))}},[_vm._v("\n                                            Edit\n                                        ")]),_vm._ssrNode(" <button class=\"btn-delete \" data-v-c2e9bab6>\n                                            Delete\n                                        </button>")],2)],2)}),0)],2)])],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admission/batch/index.vue?vue&type=template&id=c2e9bab6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admission/batch/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var batchvue_type_script_lang_js_ = ({
  layout: "Adm-content",

  mounted() {
    this.getbatch();
  },

  data() {
    return {
      batchs: [],
      errors: {}
    };
  },

  methods: {
    getbatch() {
      this.$axios.$get("admission/batch-show").then(res => {
        console.log(res);
        this.batchs = res;
      }).catch(err => {
        console.log(err);
      });
    },

    batchDelete(id) {
      if (confirm("Are you sure to delete this batch?")) {
        this.$axios.$get("admission/batch-delete/" + id).then(res => {
          this.getbatch();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    batchStatus(id, status) {
      this.$axios.$get("admission/batch-status/" + id).then(res => {
        this.getbatch();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admission/batch/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admission_batchvue_type_script_lang_js_ = (batchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admission/batch/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admission_batchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c2e9bab6",
  "65125608"
  
)

/* harmony default export */ var batch = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map