<template>
  <div>
      <h4 class="title pt-4">Form Import List</h4>
    <table class="table table-striped text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Start Sl Number</th>
          <th>End Sl Number</th>
          <th>Number OF Form</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="form in forms" :key="form._id">
          <td>{{ form.id }}</td>
          <td>{{ form.start }}</td>
          <td>{{ form.end }}</td>
          <td>{{ form.count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  layout: "Adm-content",
  data() {
    return {
      forms: "",
    };
  },
  mounted() {
    this.availableForm();
  },

  methods: {
    availableForm() {
      this.$axios.$get("/admission/form-stock").then((response) => {        
        this.forms = response.data;
      });
    },
  },
};
</script>
