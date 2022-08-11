<template>
  <section class="col-md-9 mx-auto py-5">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12 col-xl-6 col-sm-12">
            <div class="form-group">
              <label>Department *</label>
              <select
                class="form-control"
                v-model="department"
                @change="fetchBatch()"
              >
                <option disabled selected value="">Select Department</option>
                <option
                  disable
                  v-for="(dpt, index) in departments"
                  :key="index"
                  :value="dpt.id"
                  v-text="dpt.department_name"
                ></option>
              </select>
              <h6
                v-if="error && error.department"
                v-text="error.department[0]"
                class="text-danger"
              ></h6>
            </div>
          </div>
          <div class="col-md-12 col-xl-6 col-sm-12">
            <div class="form-group">
              <label>Batch *</label>
              <input
                type="text"
                disabled
                class="form-control"
                placeholder="Select Department first"
                v-if="!batches"
              />
              <select
                class="form-control"
                v-model="batch_id"
                required
                @change="getRoll"
                v-else
              >
                <option selected value="">Select Batch</option>
                <option
                  v-for="batch in batches"
                  :key="batch.id"
                  :value="batch.id"
                  v-text="batch.batch_name"
                ></option>
              </select>
              <h6
                v-if="error && error.batch_id"
                v-text="error.batch_id[0]"
                class="text-danger"
              ></h6>
            </div>
          </div>
          <div class="col-md-12 col-xl-6 col-sm-12">
            <div class="form-group">
              <label>Roll *</label>
              <input
                type="text"
                disabled
                class="form-control"
                placeholder="Select Batch first"
                v-if="!students"
              />
              <select
                class="form-control"
                v-model="roll"
                required
                v-else
                @change="getStatement"
              >
                <option selected value="">Select Batch</option>
                <option
                  v-for="student in students"
                  :key="student.id"
                  :value="student.id"
                  v-text="`${student.student_name}|${student.roll_no}`"
                ></option>
              </select>
              <h6
                v-if="error && error.roll"
                v-text="error.roll[0]"
                class="text-danger"
              ></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-if="statement">
      <div class="card-body">
        <h4 class="card-title">Statement</h4>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Payment Type</th>
                <th>Purpose Type</th>
                <th>Amount</th>
                <th>Discount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in statement.total" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.rel_fee_type.name }}</td>
                <td>{{ item.transactionable.trans_type }}</td>
                <td>
                  {{
                    item.transactionable.trans_type +
                      "|" +
                      item.transactionable.trans_type ===
                    "LILHA"
                      ? item.transactionable.lilha_pay
                      : item.transactionable.amount
                  }}
                </td>
                <td>{{item.scholarship}}</td>
                <td>
                  {{ item.amount }}
                  <span v-if="item.transactionable.trans_type"
                    >({{ item.transactionable.trans_type }})</span
                  >
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <h6>Total Fee</h6>
                  <h6>Total Paid</h6>
                  <h6>Total schoralship</h6>
                  <h6>Current Due</h6>
                </td>

                <td colspan="4" align="right">
                  <h6>{{ statement.summary.total_fee }} tk</h6>

                  <h6>{{ statement.summary.total_paid }} tk</h6>

                  <h6>
                    {{
                      statement.summary.total_scholarship
                        ? statement.summary.total_scholarship
                        : "0"
                    }}
                    tk
                  </h6>
                  <h6>{{ statement.summary.current_due }} tk</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "Account-content",
  data() {
    return {
      statement: null,
      departments: "",
      batches: null,
      students: null,
      department: "",
      batch_id: "",
      roll: "",
      error: "",
    };
  },
  created() {
    this.getDepartment();
  },
  methods: {
    getDepartment() {
      this.$axios.get("/admission/department-show").then((res) => {
        this.departments = res.data;
      });
    },
    fetchBatch() {
      this.$axios
        .$get("/admission/batch/" + this.department)
        .then((response) => {
          this.batches = response.data;
        })
        .catch((error) => {
          this.$toaster.error("Batch Not found");
        });
    },
    getRoll() {
      this.$axios
        .$get(`student/attendance-student/${this.department}/${this.batch_id}`)
        .then((response) => {
          this.students = response;
        });
    },
    getStatement() {
      this.$axios.get(`/accounts/statement/${this.roll}`).then((response) => {
        this.statement = response.data;
      });
    },
  },
};
</script>

<style></style>
