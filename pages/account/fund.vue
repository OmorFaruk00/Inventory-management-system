<template>
  <div class="py-2">
    <h3>Create Fund</h3>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="createFund">
          <div class="form-group">
            <label for="inputAddress2">Fund Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Class Name"
            />
            <span class="text-danger" v-if="error && error.name">{{
              error.name[0]
            }}</span>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Total Cash</label>
            <input
              v-model="total_cash"
              type="number"
              class="form-control"
              id="inputAddress2"
              placeholder="Class Description"
            />

            <span class="text-danger" v-if="error && error.total">{{
              error.total[0]
            }}</span>
          </div>
          <button class="btn btn-info">Make Fund</button>
        </form>
      </div>
    </div>
    <hr />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fund Name</th>
            <th scope="col">Total Cash</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fund, i) in funds" :key="fund.id">
            <th scope="row">{{ ++i }}</th>
            <td>{{ fund.name }}</td>
            <td>{{ fund.total_cash }}</td>
            <td><button class="btn">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button></td>
          </tr>
          <h3 class="text-center" v-if="funds === null">Loading...</h3>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout:'Account-content',
  data() {
    return {
      name: "",
      total_cash: "",
      funds: null,
      error: "",
    };
  },
  created() {
    this.getFund();
  },
  methods: {
    createFund() {
      this.$axios
        .post("/accounts/funds", {
          name: this.name,
          total: this.total_cash,
        })
        .then((response) => {
          this.getFund();
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.error = error.response.data.errors;
          }
          console.log(error);
        });
    },
    getFund() {
      this.$axios
        .get("/accounts/funds")
        .then((response) => {
          this.funds = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
