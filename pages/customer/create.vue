<template>
  <div>
    <div class="form-bg mt-5">
      <div class="container">
        <div class="row">
          <div class="col-8 mx-auto">
            <div class="form-content">
              <div class="form-horizontal">
                <div class="
                    text-center
                    card-header
                    mb-4
                    d-flex
                    justify-content-between
                  ">
                  <h4 class="ml-3">Customer Add</h4>
                  <div>
                    <nuxt-link to="/customer" class="text-dark mr-3"><img src="/images/list.png" alt="list"
                        height="20px" />
                    </nuxt-link>
                  </div>
                </div>
             <Customer />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Customer from '../../components/Customer.vue';
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
    components: { Customer }
};
</script>

<style lang="scss" scoped>


</style>