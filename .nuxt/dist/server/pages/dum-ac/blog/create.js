exports.ids = [20];
exports.modules = {

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/blog/create.vue?vue&type=template&id=133ee4fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-5"},[_vm._ssrNode("<div class=\"col-md-6 mx-auto form-shadow p-5\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-end\">","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/blog"}},[_vm._v(" Blog List")])],1),_vm._ssrNode(" <form><div class=\"form-group\"><label for>Title</label> <input type=\"text\" placeholder=\"Title\""+(_vm._ssrAttr("value",(_vm.blog.title)))+" class=\"form-control\"> "+((_vm.errors.title)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.title[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\"><label for>Short Description</label> <input type=\"text\" placeholder=\"Short Description\""+(_vm._ssrAttr("value",(_vm.blog.description)))+" class=\"form-control\"> "+((_vm.errors.description)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.description[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\"><label for>Image</label> <input required=\"required\" type=\"file\" id=\"blog_image\" name=\"image\" accept=\"image/*\" class=\"form-control\"> "+((_vm.errors.image)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</p>"):"<!---->")+"</div> <div class=\"d-flex justify-content-end\"><button class=\"btn-submit\">\n          Submit\n        </button></div></form>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/blog/create.vue?vue&type=template&id=133ee4fa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/blog/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  data() {
    return {
      blog: {
        title: "",
        image: "",
        description: ""
      },
      errors: {}
    };
  },

  methods: {
    addblog() {
      let formData = new FormData();
      formData.append('title', this.blog.title);
      formData.append('description', this.blog.description);
      formData.append('image', this.blog.image);
      this.$axios.$post("/blog/add", formData).then(res => {
        this.blog = "";
        this.errors = {};
        this.$toaster.success("Blog Added Successfully");
        this.$router.push("/dum-ac/blog");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/blog/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/blog/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c35363e8"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map