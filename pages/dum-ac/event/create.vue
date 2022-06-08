<template>
  <div class="pt-5">
    <div class="col-md-6 mx-auto form-shadow p-5">
      <div class="d-flex justify-content-end">
        <nuxt-link to="/dum-ac/event" class="btn-add"> Event List</nuxt-link>
      </div>
      <form>
        <div class="form-group">
          <label for="" class="">Title</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Title"
            v-model="event.title"
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
            v-model="event.description"
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
            v-model="event.slug"
          />
          <p v-if="errors.slug" v-text="errors.slug[0]" class="text-danger"></p>
        </div>
        <!-- {{$auth.user.name}} -->

        <div class="d-flex justify-content-end">
          <button class="btn-submit" @click.prevent="addevent()">
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
      event: {
        title: "",
        description: "",
        slug: "",
        created_by: this.$auth.user.name,
      },
      errors: {},
    };
  },
  methods: {
    addevent() {        
      this.$axios
        .$post("/event/add", this.event)
        .then((res) => {           
          this.event = "";
          this.errors = {};
          this.$toaster.success(res.message);  
          this.$router.push("/dum-ac/event");        
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
