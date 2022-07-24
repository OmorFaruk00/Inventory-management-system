<template>
  <div>
      <div class="col-md-6 col-12 mx-auto mt-3">
        <div class="card">
          <div class="card-header">
             <h4 title="create-permission">Create Permission</h4>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="inputAddress2">Permission Name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Permission Name"
              />
              <span class="text-danger" v-if="error && error.name">{{
                error.name[0]
              }}</span>
            </div>
            <button class="btn btn-secondary" @click="createPermission">Make</button>
          </div>
        </div>
      </div>
    <hr />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Role Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(permission, i) in permissions" :key="permission.id">
            <th scope="row">{{ ++i }}</th>
            <td>{{ permission.name }}</td>
          </tr>
        </tbody>
      </table>
      <h3 class="text-center" v-if="!loading && permissions === null">
        No permission Found...
      </h3>
      <h3 class="text-center" v-if="loading === true">Loading...</h3>
    </div>
  </div>
</template>

<script>
export default {
  layout: "Setting-content",
  data() {
    return {
      name: "",
      permissions: null,
      error: "",
      loading: false,
    };
  },
  mounted() {
    this.getpermissions();
  },
  methods: {
    createPermission() {
      this.loading = true;
      this.$axios
        .post(`setting/permission`, {
          name: this.name,
        })
        .then((response) => {
           this.$toaster.success(response.data.message);
          this.getpermissions();
        })
        .catch((error) => {
           this.$toaster.error(error.response.data.message);
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getpermissions() {
      this.loading = true;
      this.$axios
        .get("/setting/permissions")
        .then((response) => {
          this.permissions = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style></style>
