exports.ids = [22];
exports.modules = {

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/committee/create.vue?vue&type=template&id=72cba614&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg py-5"},[_vm._ssrNode("<div class=\"container\" data-v-72cba614>","</div>",[_vm._ssrNode("<div class=\"form-container\" data-v-72cba614>","</div>",[_vm._ssrNode("<h3 class=\"title\" data-v-72cba614>Create Committee Member</h3> "),_vm._ssrNode("<form class=\"form-horizontal\" data-v-72cba614>","</form>",[_vm._ssrNode("<div class=\"row\" data-v-72cba614>","</div>",[_vm._ssrNode("<div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-72cba614>","</div>",[_vm._ssrNode("<label data-v-72cba614>Committee Type *</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.committee.committee_type),expression:"committee.committee_type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.committee, "committee_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select committee type")]),_vm._v(" "),_c('option',{attrs:{"value":"Majlishe_Shura"}},[_vm._v("Majlishe Shura")]),_vm._v(" "),_c('option',{attrs:{"value":"Majlishe_Alema"}},[_vm._v("Majlishe Alema")])]),_vm._ssrNode(" "+((_vm.errors.committee_type)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.committee_type[0]))+"</h6>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-72cba614>","</div>",[_vm._ssrNode("<label data-v-72cba614>Member Type *</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.committee.member_type),expression:"committee.member_type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.committee, "member_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Member type")]),_vm._v(" "),_c('option',{attrs:{"value":"President"}},[_vm._v("President")]),_vm._v(" "),_c('option',{attrs:{"value":"Co-president"}},[_vm._v("Co-president")]),_vm._v(" "),_c('option',{attrs:{"value":"General Secretary"}},[_vm._v("General Secretary")]),_vm._v(" "),_c('option',{attrs:{"value":"Joint Editor"}},[_vm._v("Joint Editor")]),_vm._v(" "),_c('option',{attrs:{"value":"Treasurer"}},[_vm._v("Treasurer")]),_vm._v(" "),_c('option',{attrs:{"value":"Teacher representative"}},[_vm._v("Teacher representative")]),_vm._v(" "),_c('option',{attrs:{"value":"Member"}},[_vm._v("Member")])]),_vm._ssrNode(" "+((_vm.errors.member_type)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.member_type[0]))+"</h6>"):"<!---->"))],2)]),_vm._ssrNode(" <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>Member Name *</label> <input type=\"text\" placeholder=\"Member Name\""+(_vm._ssrAttr("value",(_vm.committee.member_name)))+" class=\"form-control\" data-v-72cba614> "+((_vm.errors.member_name)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.member_name[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>Profassion *</label> <input type=\"text\" placeholder=\"profession\""+(_vm._ssrAttr("value",(_vm.committee.profession)))+" class=\"form-control\" data-v-72cba614> "+((_vm.errors.profession)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.profession[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>Date Of Birth *</label> <input type=\"date\" placeholder=\"Date Of Birth\""+(_vm._ssrAttr("value",(_vm.committee.date_of_birth)))+" class=\"form-control\" data-v-72cba614> "+((_vm.errors.date_of_birth)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.date_of_birth[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>Personal Phone No *</label> <input type=\"number\" placeholder=\"Phone Number\""+(_vm._ssrAttr("value",(_vm.committee.personal_phone_no)))+" class=\"form-control\" data-v-72cba614> "+((_vm.errors.personal_phone_no)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.personal_phone_no[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>Alternative Phone No</label> <input type=\"number\" placeholder=\"Alternative Phone No\""+(_vm._ssrAttr("value",(_vm.committee.alternative_phone_no)))+" class=\"form-control\" data-v-72cba614></div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>Home Phone No</label> <input type=\"number\" placeholder=\"Home Phone No\""+(_vm._ssrAttr("value",(_vm.committee.home_phone_no)))+" class=\"form-control\" data-v-72cba614></div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>NID No *</label> <input type=\"number\" placeholder=\"NID No\""+(_vm._ssrAttr("value",(_vm.committee.nid_no)))+" class=\"form-control\" data-v-72cba614> "+((_vm.errors.nid_no)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.nid_no[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\" data-v-72cba614><div class=\"form-group\" data-v-72cba614><label data-v-72cba614>Image *</label> <input type=\"file\" placeholder accept=\"image/*\" class=\"form-control\" data-v-72cba614> "+((_vm.errors.image)?("<h6 class=\"text-danger\" data-v-72cba614>"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</h6>"):"<!---->")+"</div></div>")],2),_vm._ssrNode(" <div class=\"d-flex justify-content-end pt-3\" data-v-72cba614><button class=\"btn-submit\" data-v-72cba614>Submit</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/committee/create.vue?vue&type=template&id=72cba614&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/committee/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {},

  data() {
    return {
      errors: [],
      committee: {
        member_name: '',
        profession: '',
        committee_type: '',
        member_type: '',
        date_of_birth: '',
        personal_phone_no: '',
        alternative_phone_no: '',
        home_phone_no: '',
        nid_no: '',
        image: ''
      }
    };
  },

  methods: {
    addCommittee() {
      let formData = new FormData();
      formData.append('committee_type', this.committee.committee_type);
      formData.append('member_type', this.committee.member_type);
      formData.append('member_name', this.committee.member_name);
      formData.append('date_of_birth', this.committee.date_of_birth);
      formData.append('personal_phone_no', this.committee.personal_phone_no);
      formData.append('alternative_phone_no', this.committee.alternative_phone_no);
      formData.append('home_phone_no', this.committee.home_phone_no);
      formData.append('nid_no', this.committee.nid_no);
      formData.append('profession', this.committee.profession);
      formData.append('image', this.committee.image);
      this.$axios.$post("/committee/add", formData).then(res => {
        this.committee = "";
        this.errors = {};
        this.$toaster.success("committee Added Successfully");
        this.$router.push("/dum-ac/committee");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/committee/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var committee_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/committee/create.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  committee_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72cba614",
  "25c1fa5b"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map