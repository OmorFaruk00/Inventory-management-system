exports.ids = [54];
exports.modules = {

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/social/create.vue?vue&type=template&id=92ea89c6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg pt-5"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"form-container offset-md-2  col-md-8\">","</div>",[_vm._ssrNode("<h3 class=\"title\">Create social</h3> "),_vm._ssrNode("<div class=\"form-horizontal\">","</div>",[_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label>Social Name</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.social.social_name),expression:"social.social_name"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.social, "social_name", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"","selected":"","disabled":""}},[_vm._v("Select Type")]),_vm._v(" "),_c('option',{attrs:{"value":"Facebook"}},[_vm._v("Facebook")]),_vm._v(" "),_c('option',{attrs:{"value":"Instagram"}},[_vm._v("Instagram")]),_vm._v(" "),_c('option',{attrs:{"value":"LinkedIn"}},[_vm._v("LinkedIn")]),_vm._v(" "),_c('option',{attrs:{"value":"Twitter"}},[_vm._v("Twitter")]),_vm._v(" "),_c('option',{attrs:{"value":"WhatsApp"}},[_vm._v("WhatsApp")])]),_vm._ssrNode(" "+((_vm.errors.social_name)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.social_name[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\"><label>Social Link</label> <input social_name=\"text\" placeholder=\"Social Link \""+(_vm._ssrAttr("value",(_vm.social.social_url)))+" class=\"form-control\"></div> "+((_vm.errors.social_url)?("<h6 class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.social_url[0]))+"</h6>"):"<!---->")+" <div class=\"d-flex justify-content-end pt-3\"><button class=\"btn-submit\">Submit</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/social/create.vue?vue&type=template&id=92ea89c6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/social/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: "Profile-content",

  data() {
    return {
      social: {
        social_name: "",
        social_url: ""
      },
      errors: []
    };
  },

  methods: {
    addsocial() {
      this.$axios.$post("/social/add", this.social).then(res => {
        this.social = "";
        this.errors = "";
        this.$toaster.success(res.message);
        this.$router.push("/profile/social");
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(this.errors);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/social/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var social_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/social/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  social_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "31b4c4c9"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map