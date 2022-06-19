<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">tution List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/dum-ac/tution/create" class="btn-add"
                    >Add tution</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name Of Program</th>
                    <th>Duration</th>
                    <th>Total Fee</th>                    
                    <th>Status</th>
                    <th style="width:200px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tution in tutions" :key="tution.id">
                    <td>{{ tution.id }}</td>
                    <td>{{ tution.name_of_program}}</td>
                    <td>{{ tution.duration }}</td>
                    <td>{{ tution.total_fee }}</td>
                    <td>
                      <button
                        v-if="tution.status == 1"
                        class="btn-active"
                        @click="tutionStatus(tution.id)"
                      >
                        Active
                      </button>
                      <button
                        v-if="tution.status == 0"
                        class="btn-inactive"
                        @click="tutionStatus(tution.id)"
                      >
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn-edit"
                        @click="tutionEdit(tution.id)"
                      >
                        Edit
                      </button>
                      <button
                        class="btn-delete"
                        @click="deletetution(tution.id)"
                      >
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
        id="tutionUpdate"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                tution Update
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
              <div class="form-group">
                <label for="" class="">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Title"
                  v-model="tution.title"
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
                  v-model="tution.description"
                />
                <p
                  v-if="errors.description"
                  v-text="errors.description[0]"
                  class="text-danger"
                ></p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-submit"
                @click="tutionUpdate()"
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
  layout: "Dum-content",
  mounted() {
    this.getTution();
  },
  data() {
    return {
      tutions: [],
      tution: {
        title: "",
        description: "",
      },
      errors: {},
    };
  },
  methods: {
    getTution() {
      this.$axios
        .$get("/tution/show")
        .then((res) => {
            console.log(res);
          this.tutions = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tutionEdit(id) {
      $("#tutionUpdate").modal("show");
      this.$axios
        .$get("/tution/edit/" + id)
        .then((res) => {
          this.tution = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tutionUpdate() {
      this.$axios
        .$post("/tution/update/" + this.tution.id, this.tution)
        .then((res) => {
          this.getTution();
          $("#tutionUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deletetution(id) {
      if (confirm("Are you sure to delete this tution?")) {
        this.$axios
          .$get("/tution/delete/" + id)
          .then((res) => {
            this.getTution();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    tutionStatus(id) {
      this.$axios
        .$get("/tution/status/" + id )
        .then((res) => {
          this.getTution();
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
