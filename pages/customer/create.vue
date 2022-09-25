<template>
  <div>
    <div class="form-bg mt-5">
      <div class="container">
        <div class="row">
          <div class="col-8 mx-auto">
            <div class="form-content">
              <div class="form-horizontal">
                <div
                  class="
                    text-center
                    card-header
                    mb-4
                    d-flex
                    justify-content-between
                  "
                >
                  <h4 class="ml-3">Customer Add</h4>
                  <div>
                    <nuxt-link to="/customer" class="text-dark mr-3"
                      ><img src="/images/list.png" alt="list" height="20px" />
                    </nuxt-link>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">
                        Customer Name <span class="text-danger">*</span></label
                      >
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter customer name"
                        v-model="customer.customer_name"
                      />
                      <p
                        v-if="errors.customer_name"
                        v-text="errors.customer_name[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for=""
                        >Category</label
                      >
                      <select class="form-control" v-model="customer.category">
                        <option selected disabled value="">
                          Select category
                        </option>
                        <option
                          v-for="(category, index) in customer_category"
                          :key="index"
                          :value="category.id"
                        >
                          {{ category.name }}
                        </option>
                      </select>
                      <p
                        v-if="errors.category"
                        v-text="errors.category[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for=""
                        >Phone <span class="text-danger">*</span></label
                      >
                      <input
                        class="form-control"
                        type="number"
                        placeholder="Enter phone Number"
                        v-model="customer.phone"
                      />
                      <p
                        v-if="errors.phone"
                        v-text="errors.phone[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Email</label>
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Enter Email Address"
                        v-model="customer.email"
                      />
                      <p
                        v-if="errors.email"
                        v-text="errors.email[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for=""> Card Number</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter Card Number"
                        v-model="customer.card_number"
                      />
                      <p
                        v-if="errors.card_number"
                        v-text="errors.card_number[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Due Limit</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter Due Limit"
                        v-model="customer.due_limit"
                      />
                      <p
                        v-if="errors.due_limit"
                        v-text="errors.due_limit[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Opening Balance</label>
                      <input
                        class="form-control"
                        type="number"
                        placeholder="Enter Opening Balance"
                        v-model="customer.opening_balance"
                      />
                      <p
                        v-if="errors.opening_balance"
                        v-text="errors.opening_balance[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Image</label>
                      <input
                        type="file"
                        class="form-control"
                        placeholder=""
                        @change="(e) => (customer.image = e.target.files[0])"
                        accept="image/*"
                      />
                      <p
                        v-if="errors.image"
                        v-text="errors.image[0]"
                        class="text-danger"
                      ></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 col-xl-12">
                    <div class="form-group">
                      <label for="">Address </label>
                      <textarea
                        class="form-control"
                        type="text"
                        placeholder=" Enter address"
                        v-model="customer.address"
                      >
                      </textarea>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-3 card-footer">
                  <button class="btn-submit mr-3" @click="DataStore()">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
export default {
  layout: "Sidebar",
  created() {
    this.DataGet();
  },
  data() {
    return {
      customer_category: "",
      name: "",
      errors: {},
      customer: {
        customer_name: "",
        category: "",
        phone: "",
        email: "",
        due_limit: "",
        card_number: "",
        opening_balance: "",
        image: "",
        address: "",
      },
    };
  },
  methods: {
    DataGet() {
      this.$axios
        .$get("/customer-category")
        .then((response) => {
          this.customer_category = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    DataStore() {
      let formData = new FormData();
      formData.append("customer_name", this.customer.customer_name);
      formData.append("category", this.customer.category);
      formData.append("phone", this.customer.phone);
      formData.append("email", this.customer.email);
      formData.append("due_limit", this.customer.due_limit);
      formData.append("card_number", this.customer.card_number);
      formData.append("opening_balance", this.customer.opening_balance);
      formData.append("address", this.customer.address);
      formData.append("image", this.customer.image);
     

      this.$axios
        .$post("/customer", formData)
        .then((response) => {
          this.customer = "";
          this.errors = "";
          this.$swal({
            title: "Success",
            position: "center",
            text: response.message,
            timer: 2000,
            type: "success",
            showConfirmButton: false,
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>