<template>
  <div>
    <div class="form-bg mt-5">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="form-content">
              <div class="form-horizontal">
                <div class="text-center card-header mb-4 d-flex justify-content-between">
                  <h4 class="ml-3">Update Customer</h4>
                  <div>
                    <nuxt-link to="/customer" class="text-dark mr-3"><img src="/images/list.png" alt="list"
                        height="20px" />
                    </nuxt-link>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">
                        Name <span class="text-danger">*</span></label>
                      <input class="form-control" type="text" placeholder="Enter name" v-model="customer.name" />
                      <p v-if="errors.name" v-text="errors.name[0]" class="text-danger"></p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Category</label>
                      <select class="form-control" v-model="customer.category_id">
                        <option selected disabled value="">
                          Select category
                        </option>
                        <option v-for="(category, index) in customer_category" :key="index" :value="category.id">
                          {{ category.name }}
                        </option>
                      </select>
                      <p v-if="errors.category" v-text="errors.category[0]" class="text-danger"></p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Phone <span class="text-danger">*</span></label>
                      <input class="form-control" type="number" placeholder="Enter phone Number"
                        v-model="customer.phone" />
                      <p v-if="errors.phone" v-text="errors.phone[0]" class="text-danger"></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Email</label>
                      <input class="form-control" type="email" placeholder="Enter Email Address"
                        v-model="customer.email" />
                      <p v-if="errors.email" v-text="errors.email[0]" class="text-danger"></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for=""> Card Number</label>
                      <input class="form-control" type="number" placeholder="Enter Card Number"
                        v-model="customer.card_number" />
                      <p v-if="errors.card_number" v-text="errors.card_number[0]" class="text-danger"></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Due Limit</label>
                      <input class="form-control" type="number" placeholder="Enter Due Limit"
                        v-model="customer.due_limit" />
                      <p v-if="errors.due_limit" v-text="errors.due_limit[0]" class="text-danger"></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Opening Balance</label>
                      <input class="form-control" type="number" placeholder="Enter Opening Balance"
                        v-model="customer.current_balance" />
                      <p v-if="errors.current_balance" v-text="errors.current_balance[0]" class="text-danger"></p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="form-group">
                      <label for="">Image</label>
                      <input type="file" class="form-control" placeholder="" @change="
                        (e) => (customer.new_image = e.target.files[0])
                      " accept="new_image/*" />
                      <p v-if="errors.new_image" v-text="errors.new_image[0]" class="text-danger"></p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-12">
                    <div class="form-group float-right">
                      <img :src="base_url + '/images/customer/' + customer.image" alt="image"
                        style="height: 100px; width: 150px" />
                    </div>
                  </div>
                  <div class="col-12 col-md-12 col-xl-12">
                    <div class="form-group">
                      <label for="">Address </label>
                      <textarea class="form-control" type="text" placeholder=" Enter address"
                        v-model="customer.address">
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
    this.DataEdit();
  },
  data() {
    return {
      customer_category: "",
      base_url: process.env.url,
      name: "",
      errors: {},
      customer: {
        name: "",
        category_id: "",
        phone: "",
        email: "",
        due_limit: "",
        card_number: "",
        current_balance: "",
        new_image: "",
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
    DataEdit() {
      this.$axios
        .$get("/customer/" + this.$route.params.id + "/edit")
        .then((response) => {
          this.customer = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    DataStore() {
      let formData = new FormData();
      formData.append("name", this.customer.name);
      formData.append("category_id", this.customer.category_id);
      formData.append("phone", this.customer.phone);
      formData.append("email", this.customer.email);
      formData.append("due_limit", this.customer.due_limit);
      formData.append("card_number", this.customer.card_number);
      formData.append("opening_balance", this.customer.current_balance);
      formData.append("address", this.customer.address);
      if (this.customer.new_image) {
        formData.append("image", this.customer.new_image);
      }

      this.$axios
        .$post("/customer-update/" + this.$route.params.id, formData)
        .then((response) => {
          this.DataEdit();
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
