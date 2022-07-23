exports.ids = [25];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/contact.vue?vue&type=template&id=7d8e6697&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"panel-body table-responsive\"><table class=\"table table-striped  text-center\"><thead><tr><th>ID</th> <th>Name</th> <th>Email</th> <th>Subject</th> <th>Messages</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.contacts),function(contact){return ("<tr><td>"+_vm._ssrEscape(_vm._s(contact.id))+"</td> <td>"+_vm._ssrEscape(_vm._s(contact.name))+"</td> <td>"+_vm._ssrEscape(_vm._s(contact.email))+"</td> <td>"+_vm._ssrEscape(_vm._s(contact.subject))+"</td> <td style=\"width:40%\">"+_vm._ssrEscape(_vm._s(contact.message))+"</td></tr>")}))+"</tbody></table></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/contact.vue?vue&type=template&id=7d8e6697&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {
    this.getContacts();
  },

  data() {
    return {
      contacts: []
    };
  },

  methods: {
    getContacts() {
      this.$axios.$get("/contact/show").then(res => {
        this.contacts = res;
      }).catch(err => {
        console.log(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var dum_ac_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dum_ac_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "07866423"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map