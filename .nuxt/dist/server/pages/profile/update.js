exports.ids = [58];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/update.vue?vue&type=template&id=ea3146b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"offset-md-3 col-md-6 form-shadow mt-5"},[_vm._ssrNode("<div class=\"p-5\"><h4 class=\"title\">Update Profile Info</h4> <hr> <div class=\"row\"><div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>Name*</label> <input type=\"text\" placeholder=\"Enter Name\""+(_vm._ssrAttr("value",(_vm.user.name)))+" class=\"form-control\"> "+((_vm.errors.name)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.name[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>Date Of Birth *</label> <input type=\"date\" placeholder=\"Date Of Birth\""+(_vm._ssrAttr("value",(_vm.user.date_of_birth)))+" class=\"form-control\"> "+((_vm.errors.date_of_birth)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.date_of_birth[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>Personal Phone No *</label> <input type=\"text\" placeholder=\"Phone Number\""+(_vm._ssrAttr("value",(_vm.user.personal_phone_no)))+" class=\"form-control\"> "+((_vm.errors.personal_phone_no)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.personal_phone_no[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>Alternative Phone No</label> <input type=\"text\" placeholder=\"Alternative Phone No\""+(_vm._ssrAttr("value",(_vm.user.alternative_phone_no)))+" class=\"form-control\"></div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>Home Phone No</label> <input type=\"text\" placeholder=\"Home Phone No\""+(_vm._ssrAttr("value",(_vm.user.home_phone_no)))+" class=\"form-control\"></div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>Parents Phone No</label> <input type=\"text\" placeholder=\"Parents Phone No\""+(_vm._ssrAttr("value",(_vm.user.parent_phone_no)))+" class=\"form-control\"></div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>NID No *</label> <input type=\"text\" placeholder=\"NID No\""+(_vm._ssrAttr("value",(_vm.user.nid_no)))+" class=\"form-control\"> "+((_vm.errors.nid_no)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.nid_no[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-6 col-xl-6 col-sm-12\"><div class=\"form-group\"><label>Image </label> <input type=\"file\" placeholder accept=\"image/*\" class=\"form-control\"> "+((_vm.errors.image)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</h6>"):"<!---->")+"</div></div> <div class=\"col-md-12 col-xl-12 col-sm-12\"><div class=\"form-group\"><label>Abour Me</label> <textarea type=\"text\" placeholder class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.user.about))+"</textarea></div></div></div> <div class=\"d-flex justify-content-end pt-3\"><button class=\"btn-submit\">Update</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/update.vue?vue&type=template&id=ea3146b0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/update.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var updatevue_type_script_lang_js_ = ({
  layout: "Profile-content",

  mounted() {
    this.getUser();
  },

  data() {
    return {
      user: {
        name: '',
        date_of_birth: '',
        personal_phone_no: '',
        alternative_phone_no: '',
        home_phone_no: '',
        parent_phone_no: '',
        nid_no: '',
        update_image: '',
        about: ''
      },
      errors: ""
    };
  },

  methods: {
    getUser() {
      this.$axios.get('/profile').then(response => {
        this.user = response.data;
      });
    },

    updateProfile() {
      let formData = new FormData();
      formData.append('name', this.user.name);
      formData.append('date_of_birth', this.user.date_of_birth);
      formData.append('personal_phone_no', this.user.personal_phone_no);
      formData.append('alternative_phone_no', this.user.alternative_phone_no);
      formData.append('home_phone_no', this.user.home_phone_no);
      formData.append('parent_phone_no', this.user.parent_phone_no);
      formData.append('nid_no', this.user.nid_no);
      formData.append('about', this.user.about);

      if (this.user.update_image) {
        formData.append('image', this.user.update_image);
      }

      this.$axios.$post("/profile-update", formData).then(res => {
        this.errors = {};
        this.$toaster.success("Profile Update Successfully");
        this.$router.push("/profile");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/update.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_updatevue_type_script_lang_js_ = (updatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/update.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_updatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64499aee"
  
)

/* harmony default export */ var update = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=update.js.map