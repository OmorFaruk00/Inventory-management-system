exports.ids = [36];
exports.modules = {

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/slider/create.vue?vue&type=template&id=d85575e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-5"},[_vm._ssrNode("<div class=\"col-md-6 mx-auto form-shadow p-5\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-end\">","</div>",[_c('nuxt-link',{staticClass:"btn-add",attrs:{"to":"/dum-ac/slider"}},[_vm._v(" Slider List")])],1),_vm._ssrNode(" <form><div class=\"form-group\"><label for>Title</label> <input type=\"text\" placeholder=\"Title\""+(_vm._ssrAttr("value",(_vm.slider.title)))+" class=\"form-control\"> "+((_vm.errors.title)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.title[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\"><label for>Short Description</label> <input type=\"text\" placeholder=\"Short Description\""+(_vm._ssrAttr("value",(_vm.slider.description)))+" class=\"form-control\"> "+((_vm.errors.description)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.description[0]))+"</p>"):"<!---->")+"</div> <div class=\"form-group\"><label for>Image</label> <input required=\"required\" type=\"file\" id=\"slider_image\" name=\"image\" accept=\"image/*\" class=\"form-control\"> "+((_vm.errors.image)?("<p class=\"text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</p>"):"<!---->")+"</div> <div class=\"d-flex justify-content-end\"><button class=\"btn-submit\">\n          Submit\n        </button></div></form>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/slider/create.vue?vue&type=template&id=d85575e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/slider/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      slider: {
        title: "",
        image: "",
        description: "",
        slug: ""
      },
      errors: {}
    };
  },

  methods: {
    addslider() {
      let formData = new FormData();
      formData.append('title', this.slider.title);
      formData.append('description', this.slider.description);
      formData.append('slug', this.slider.slug);
      formData.append('image', this.slider.image);
      this.$axios.$post("/slider/add", formData).then(res => {
        this.slider = "";
        this.errors = {};
        this.$toaster.success("Slider Added Successfully");
        this.$router.push("/dum-ac/slider");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/slider/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var slider_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/slider/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  slider_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4447c8ad"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map