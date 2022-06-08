<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/dum-ac/notice" class="btn-add"> Notice List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Title"
            v-model="notice.title"
          />
          <p
            v-if="errors.title"
            v-text="errors.title[0]"
            class="text-danger"
          ></p>
        </div>
        <div class="form-group">
          <label for="" class="">Description</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Description"
            v-model="notice.description"
          />
          <p
            v-if="errors.description"
            v-text="errors.description[0]"
            class="text-danger"
          ></p>
        </div>
        <div class="form-group">
          <label for="" class="">Slug</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Slug"
            v-model="notice.slug"
          />
          <p v-if="errors.slug" v-text="errors.slug[0]" class="text-danger"></p>
        </div>
        <!-- {{$auth.user.name}} -->

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addNotice()">
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
      notice: {
        title: "",
        description: "",
        slug: "",
        created_by: this.$auth.user.name,
      },
      errors: {},
    };
  },
  methods: {
    addNotice() {
      this.$axios
        .$post("/notice/add", this.notice)
        .then((res) => {
          this.notice = "";
          this.errors = {};
          this.$toaster.success("Notice Added Successfully");
          this.$router.push("/dum-ac/notice");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
