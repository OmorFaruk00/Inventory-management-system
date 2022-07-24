<template>
  <div>
    <div class="col-md-6 col-12 mx-auto mt-3">
      <div class="card">
        <div class="card-header">
          <h4 title="create-role">Create Role</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="inputAddress2">Role Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Role Name"
            />
            <span class="text-danger" v-if="error && error.name">{{
              error.name[0]
            }}</span>
          </div>
          <div class="form-check" v-for="prm in permissions" :key="prm.i">
            <input
              v-model="permission"
              class="form-check-input"
              type="checkbox"
              :id="prm.name"
              :name="prm.name"
              :value="prm.name"
            />
            <label :for="prm.name" class="form-check-label">
              {{ prm.name }}
            </label>
          </div>
          <button class="btn btn-secondary" @click="createRole">Make</button>
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
          <tr v-for="(role, i) in roles" :key="role.id">
            <th scope="row">{{ ++i }}</th>
            <td>{{ role.name }}</td>
          </tr>
        </tbody>
      </table>
      <h3 class="text-center" v-if="!loading && roles === null">
        No Role Found...
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
      roles: null,
      error: "",
      loading: false,
      permissions: null,
      permission:[],
    };
  },
  mounted() {
    this.getRoles();
    this.getPermissions();
  },
  methods: {
    createRole() {
      this.loading = true;
      this.$axios
        .post(`setting/role`, {
          name: this.name,
          permissions: this.permission,
        })
        .then((response) => {
           this.$toaster.success(response.data.message);
          this.getRoles();
        })
        .catch((error) => {
           this.$toaster.error(error.response.data.message);
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getPermissions() {
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
    getRoles() {
      this.loading = true;
      this.$axios
        .get("/setting/roles")
        .then((response) => {
          this.roles = response.data;
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
