<template>
  <div>
    <div class="pt-3 pr-3">
      <div class="row">
        <div class="col col-sm-5 col-xs-12">
          <h4 class="">Products List</h4>
        </div>
        <div class="col-sm-7 col-xs-12">
          <div class="input-group form-group w-50 float-right">
            <input type="search" class="form-control" placeholder="Search" />
            <button class="btn-search">
              <img src="/images/search.png" height="30px" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pr-3">
      <table class="table text-center t-body">
        <thead class="t-head">
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Code</th>
            <th>Image</th>
            <th>Category</th>
            <th>Band</th>
            <th>Qty</th>
            <th>Purchase Price</th>
            <th>Sales Price</th>
            <th>MRP</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mi</td>
            <td>#R211</td>
            <td>image</td>
            <td>Phone</td>
            <td>Mi</td>
            <td>22</td>
            <td>2000</td>
            <td>2300</td>
            <td>2300</td>

            <td>
              <button class="btn" @click="designationEdit(designation.id)">
                <img src="images/edit1.png" height="30px" />
              </button>
              <button
                class="btn"
                @click="designationDelete(designation.id)"
              >
                <img src="images/delete.png" height="30px" />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mi</td>
            <td>#R211</td>
            <td>image</td>
            <td>Phone</td>
            <td>Mi</td>
            <td>22</td>
            <td>2000</td>
            <td>2300</td>
            <td>2300</td>

            <td>
              <button class="btn" @click="designationEdit(designation.id)">
                <img src="images/edit1.png" height="30px" />
              </button>
              <button
                class="btn"
                @click="designationDelete(designation.id)"
              >
                <img src="images/delete.png" height="30px" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  <script>
export default {
  layout: "Sidebar",
  mounted() {
    this.getDesignation();
  },
  data() {
    return {
      auth: true,
      designations: "",
      designation: {
        type: "",
        name: "",
      },
      errors: {},
    };
  },
  methods: {
    getDesignation() {
      this.$axios
        .$get("/designation/show")
        .then((res) => {
          this.designations = res;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.auth = false;
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
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
          this.getDesignation();
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
            this.getDesignation();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    designationStatus(id) {
      this.$axios
        .$get("/designation/status/" + id)
        .then((res) => {
          console.log(res);
          this.getDesignation();
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
  