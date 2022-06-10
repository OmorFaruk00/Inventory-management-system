<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Employee List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/employee/employee/create" class="btn-add">Add Employee</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Depertment</th>
                    <th>E-mail</th>
                    <th>Job Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="employee in employees" :key="employee._id">
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.rel_designation.designation }}</td>
                    <td>{{ employee.rel_department.department }}</td>
                    <td>{{ employee.email }}</td>
                    <td>{{ employee.jobtype }}</td>
                    <td>
                      <button v-if="employee.status == 1" class="btn-active" @click="employeeStatus(employee.id)">
                        Active
                      </button>
                      <button v-if="employee.status == 0" class="btn-inactive" @click="employeeStatus(employee.id)">
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="employeeEdit(employee.id)">
                        Edit
                      </button>
                      <button class="btn-delete" @click="employeeDelete(employee.id)">
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
      <div class="modal fade" id="employeeUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                employee Update
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-submit" @click="employeeUpdate()">
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
    this.getEmployee();

  },
  data() {
    return {
      employees: [],
      errors: {},
    };
  },
  methods: {
    getEmployee() {
      this.$axios
        .$get("/employee/show")
        .then((res) => {
          this.employees = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    employeeEdit(id) {
      $("#employeeUpdate").modal("show");
      this.$axios
        .$get("/employee/edit/" + id)
        .then((res) => {
          this.employee = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    employeeUpdate() {
      this.$axios
        .$post("/employee/update/" + this.employee.id, this.employee)
        .then((res) => {
          this.getemployee();
          $("#employeeUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    employeeDelete(id) {
      if (confirm("Are you sure to delete this employee?")) {
        this.$axios
          .$get("/employee/delete/" + id)
          .then((res) => {
            this.getEmployee();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    employeeStatus(id, status) {
      this.$axios
        .$get("/employee/status/" + id)
        .then((res) => {
          this.getEmployee();
          this.$toaster.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>
