exports.ids = [23];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/committee/index.vue?vue&type=template&id=0f121724&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pt-5\" data-v-0f121724>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-0f121724>","</div>",[_vm._ssrNode("<div class=\"mx-auto col-md-12\" data-v-0f121724>","</div>",[_vm._ssrNode("<div class=\"panel\" data-v-0f121724>","</div>",[_vm._ssrNode("<div class=\"panel-heading\" data-v-0f121724>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-0f121724>","</div>",[_vm._ssrNode("<div class=\"col col-sm-5 col-xs-12\" data-v-0f121724><h6 class=\"title\" data-v-0f121724>Committee Member List</h6></div> "),_vm._ssrNode("<div class=\"col-sm-7 col-xs-12 text-right\" data-v-0f121724>","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/committee/create"}},[_vm._v("Add committee")])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"panel-body table-responsive\" data-v-0f121724>","</div>",[_vm._ssrNode("<table class=\"table table-striped text-center\" data-v-0f121724>","</table>",[_vm._ssrNode("<thead data-v-0f121724><tr data-v-0f121724><th data-v-0f121724>Committee Type</th> <th data-v-0f121724>Member Name</th> <th data-v-0f121724>Member Type</th> <th data-v-0f121724>Profession</th> <th data-v-0f121724>Phone Number</th> <th data-v-0f121724>Image</th> <th data-v-0f121724>Status</th> <th data-v-0f121724>Action</th></tr></thead> "),_vm._ssrNode("<tbody data-v-0f121724>","</tbody>",_vm._l((_vm.committees),function(committee){return _vm._ssrNode("<tr data-v-0f121724>","</tr>",[_vm._ssrNode("<td data-v-0f121724>"+_vm._ssrEscape(_vm._s(committee.committee_type))+"</td> <td data-v-0f121724>"+_vm._ssrEscape(_vm._s(committee.member_name))+"</td> <td data-v-0f121724>"+_vm._ssrEscape(_vm._s(committee.member_type))+"</td> <td data-v-0f121724>"+_vm._ssrEscape(_vm._s(committee.profession))+"</td> <td data-v-0f121724>"+_vm._ssrEscape(_vm._s(committee.personal_phone_no))+"</td> <td data-v-0f121724><img"+(_vm._ssrAttr("src",_vm.base_url+'/images/dum/' + committee.image))+" alt=\"image\" style=\"height:80px\" data-v-0f121724></td> <td data-v-0f121724>"+((committee.status == 1)?("<button class=\"btn-active\" data-v-0f121724>\n                      Active\n                    </button>"):"<!---->")+" "+((committee.status == 0)?("<button class=\"btn-inactive\" data-v-0f121724>\n                      Inactive\n                    </button>"):"<!---->")+"</td> "),_vm._ssrNode("<td data-v-0f121724>","</td>",[_c('nuxt-link',{staticClass:"btn-edit",attrs:{"to":("/dum-ac/committee/update/" + (committee.id))}},[_vm._v("Edit")]),_vm._ssrNode(" <button class=\"btn-delete\" data-v-0f121724>Delete</button>")],2)],2)}),0)],2)])],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/committee/index.vue?vue&type=template&id=0f121724&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/committee/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var committeevue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {
    this.getCommittee();
  },

  data() {
    return {
      committees: [],
      errors: {},
      base_url: "http://localhost:8000"
    };
  },

  methods: {
    getCommittee() {
      this.$axios.$get("/committee/show").then(res => {
        this.committees = res;
      }).catch(err => {
        console.log(err);
      });
    },

    committeeDelete(id) {
      if (confirm("Are you sure to delete this committee?")) {
        this.$axios.$get("/committee/delete/" + id).then(res => {
          this.getCommittee();
          this.$toaster.error(res.message);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    committeeStatus(id) {
      this.$axios.$get("/committee/status/" + id).then(res => {
        this.getCommittee();
        this.$toaster.success(res.message);
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/committee/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dum_ac_committeevue_type_script_lang_js_ = (committeevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/committee/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dum_ac_committeevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f121724",
  "84412e7a"
  
)

/* harmony default export */ var committee = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map