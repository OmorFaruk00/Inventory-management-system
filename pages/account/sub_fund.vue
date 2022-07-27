<template>
  <div class="py-2">
    <h3>Create Sub Fund</h3>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="createSubFund">
          <div class="form-group">
            <label for="inputState" class="form-label">Fund</label>
            <select id="inputState" class="form-control" v-model="fund">
              <option selected disabled value="">Choose Fund</option>
              <option v-for="fund in funds" :value="fund.id" :key="fund.id">
                {{ fund.name }}
              </option>
            </select>
            <span class="text-danger" v-if="error && error.fund_id">{{
              error.fund_id[0]
            }}</span>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Sub-Fund Name</label>
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
          <button class="btn btn-info">Make</button>
        </form>
      </div>
    </div>
    <hr />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sub-Fund Name</th>
            <th scope="col">Fund Name</th>
            <th scope="col">Fund Ammount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sfund, i) in sub_funds" :key="sfund.id">
            <th scope="row">{{ ++i }}</th>
            <td>{{ sfund.name }}</td>
            <td>{{ sfund.rel_fund.name }}</td>
            <td>{{ sfund.rel_fund.total_cash }}</td>
            <td>delete</td>
          </tr>
          <h3 class="text-center" v-if="sub_funds === null">Loading...</h3>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "Account-content",
  data() {
    return {
      name: "",
      total_cash: "",
      fund: "",
      funds: null,
      sub_funds: null,
      error: "",
    };
  },
  created() {
    this.getFund();
    this.getSubFund();
  },
  methods: {
    createSubFund() {
      this.$axios
        .post("/accounts/sub-fund", {
          ...this._data,
          fund_id: this.fund,
          total: this.total_cash,
        })
        .then((response) => {
          this.getSubFund();
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
    getSubFund() {
      this.$axios
        .get("/accounts/sub-fund")
        .then((response) => {
          this.sub_funds = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
