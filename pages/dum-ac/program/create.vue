<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/dum-ac/program" class="btn-add"> program List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            v-model="program.title"
          />
          <p
            v-if="errors.title"
            v-text="errors.title[0]"
            class="text-danger"
          ></p>
        </div>       
        <div class="form-group">
          <label for="" class="">Slug</label>
          <input
            type="text"
            class="form-control"
            placeholder="Slug"
            v-model="program.slug"
          />
          <p v-if="errors.slug" v-text="errors.slug[0]" class="text-danger"></p>
        </div>
        <div class="form-group">
          <label for="" class="">Image</label>
          <input
            required
            type="file"
            id="program_image"
            class=""
            name="image"
            @change="(e) => (program.image = e.target.files[0])"            
            accept="image/*"
          />
          <p
            v-if="errors.image"
            v-text="errors.image[0]"
            class="text-danger"
          ></p>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addprogram()">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Dum-content",
  data() {
    return {
      program: {
        title: "",        
        image: "",
        slug: "",        
      },
      errors: {},
    };
  },
  methods: {
    addprogram() {
        let formData = new FormData();
        formData.append('title', this.program.title)       
        formData.append('slug', this.program.slug)
        formData.append('image', this.program.image)
      this.$axios
        .$post("/program/add", formData)
        .then((res) => {            
          this.program = "";
          this.errors = {};
          this.$toaster.success("program Added Successfully");         
        })
        .catch((error) => {            
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
