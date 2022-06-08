<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Designation List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/employee/designation/create" class="btn-add"
                    >Add Designation</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead>
                  <tr>
                    <th>Designation Name</th>                     
                    <th>Type</th>                                       
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="designation in designations" :key="designation._id">                    
                    <td>{{ designation.title }}</td>
                    <td>{{ designation.description }}</td>                    
                    <td>
                      <button
                        v-if="designation.status == 1"
                        class="btn-active"
                        @click="designationStatus(designation.id, designation.status)"
                      >
                        Active
                      </button>
                      <button
                        v-if="designation.status == 0"
                        class="btn-inactive"
                        @click="designationStatus(designation.id, designation.status)"
                      >
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="designationEdit(designation.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="designationDelete(designation.id)">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="designationUpdate"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                designation Update
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-submit"
                @click="designationUpdate()"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Emp-content",
  mounted() {
    
  },
  data() {
    return {
    
      errors: {},
    };
  },
  methods: {
    getdesignation() {
      this.$axios
        .$get("/designation/show")
        .then((res) => {
          this.designations = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    designationEdit(id) {
      $("#designationUpdate").modal("show");
      this.$axios
        .$get("/designation/edit/" + id)
        .then((res) => {
          this.designation = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    designationUpdate() {
      this.$axios
        .$post("/designation/update/" + this.designation.id, this.designation)
        .then((res) => {
          this.getdesignation();
          $("#designationUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    designationDelete(id) {
      if (confirm("Are you sure to delete this designation?")) {
        this.$axios
          .$get("/designation/delete/" + id)
          .then((res) => {
            this.getdesignation();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    designationStatus(id, status) {
      this.$axios
        .$get("/designation/status/" + id + "/" + status)
        .then((res) => {
          this.getdesignation();
          this.$toaster.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>
