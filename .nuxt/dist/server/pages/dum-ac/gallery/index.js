exports.ids = [30];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/gallery/index.vue?vue&type=template&id=f7832110&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-bg py-5"},[_vm._ssrNode("<div class=\"container\" data-v-f7832110>","</div>",[_vm._ssrNode("<div class=\"form-shadow col-md-6 mx-auto p-4\" data-v-f7832110>","</div>",[_vm._ssrNode("<h3 class=\"title\" data-v-f7832110>Add Image</h3> "),_vm._ssrNode("<form data-v-f7832110>","</form>",[_vm._ssrNode("<div class=\"form-group\" data-v-f7832110>","</div>",[_vm._ssrNode("<label data-v-f7832110>Gallery Type <span class=\"text-success\" data-v-f7832110>*</span></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.gallery.gallery_type),expression:"gallery.gallery_type"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.gallery, "gallery_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"disabled":"","selected":"","value":""}},[_vm._v("Select Gallery Type")]),_vm._v(" "),_c('option',{attrs:{"value":"academic"}},[_vm._v("Academic")]),_vm._v(" "),_c('option',{attrs:{"value":"event"}},[_vm._v("Event")]),_vm._v(" "),_c('option',{attrs:{"value":"tour"}},[_vm._v("Tour")])]),_vm._ssrNode(" "+((_vm.errors.gallery_type)?("<h6 class=\"text-danger mt-2\" data-v-f7832110>"+_vm._ssrEscape(_vm._s(_vm.errors.gallery_type[0]))+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"form-group\" data-v-f7832110><label for data-v-f7832110>Image <span class=\"text-success\" data-v-f7832110>*</span></label> <br data-v-f7832110> <input type=\"file\" id=\"file_input\" name=\"gallery[]\" multiple=\"multiple\" accept=\"image/*\" class=\"form-control\" data-v-f7832110> "+((_vm.errors.image)?("<h6 class=\"text-danger mt-2\" data-v-f7832110>"+_vm._ssrEscape(_vm._s(_vm.errors.image[0]))+"</h6>"):"<!---->")+"</div> <div class=\"d-flex justify-content-end pt-3\" data-v-f7832110><button class=\"btn-submit\" data-v-f7832110>Submit</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dum-ac/gallery/index.vue?vue&type=template&id=f7832110&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dum-ac/gallery/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  layout: "Dum-content",

  mounted() {},

  data() {
    return {
      errors: [],
      gallery: {
        gallery_type: '',
        image: ''
      }
    };
  },

  methods: {
    addGallery() {
      let formData = new FormData();

      for (let x in this.gallery.image) {
        if (this.gallery.image[x] instanceof File) {
          var FileSize = this.gallery.image[x].size / 1024 / 1024; // in MiB

          if (FileSize > 1) {
            alert('File max size must be 1024KB');
            formData.delete('gallery');
            $("#file_input").val('');
            return false;
          }

          formData.append('image[]', this.gallery.image[x]);
        }
      }

      formData.append('gallery_type', this.gallery.gallery_type);
      this.$axios.$post("/gallery/add", formData).then(res => {
        this.gallery = "";
        this.errors = {};
        this.$toaster.success(res.message);
        this.$router.push("/dum-ac/gallery");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dum-ac/gallery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dum_ac_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dum-ac/gallery/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dum_ac_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f7832110",
  "49668118"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map