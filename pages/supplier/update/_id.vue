<template>
    <div>
        <div class="form-bg mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="form-content">
                            <div class="form-horizontal">
                                <div class="text-center card-header mb-4 d-flex justify-content-between">
                                    <h4 class="ml-4"> Update Supplier</h4>
                                    <div>
                                        <nuxt-link to="/supplier/supplier-list" class="text-dark mr-3"><img
                                                src="/images/list.png" alt="list" height="20px" />
                                        </nuxt-link>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="">
                                        <div class="form-group">
                                            <label for="">
                                                Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" placeholder=""
                                                v-model="supplier.name" />
                                            <p v-if="errors.name" v-text="errors.name[0]" class="text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <label for="">
                                                Phone<span class="text-danger">*</span></label>
                                            <input class="form-control" type="number" placeholder=""
                                                v-model="supplier.phone" />
                                            <p v-if="errors.phone" v-text="errors.phone[0]" class="text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <label for="">
                                                email</label>
                                            <input class="form-control" type="text" placeholder=""
                                                v-model="supplier.email">
                                            <p v-if="errors.email" v-text="errors.email[0]" class="text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <label for="">
                                                Openning Balance</label>
                                            <input class="form-control" type="text" placeholder=""
                                                v-model="supplier.opening_balance">
                                            <p v-if="errors.opening_balance" v-text="errors.opening_balance[0]"
                                                class="text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <label for="">
                                                Address</label>
                                            <textarea class="form-control" type="text" placeholder=""
                                                v-model="supplier.address"></textarea>
                                            <p v-if="errors.address" v-text="errors.address[0]" class="text-danger"></p>
                                        </div>

                                    </div>
                                </div>

                                <div class="d-flex justify-content-end card-footer">
                                    <button class="btn-submit mr-4" @click="DataUpdate()">
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

    data() {
        return {

            errors: {},
            supplier: {
                category_id: "",
                phone: "",
                name: "",
                email: "",
                opening_balance: "",
                addess: "",
            },
        };
    },
    created() {        
        this.DataEdit();
    },
    methods: {
        DataEdit() {
            this.$axios
                .$get("/supplier/" + this.$route.params.id + "/edit")
                .then((response) => {
                    this.supplier = response;                  
                    
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        

        DataUpdate() {
            this.$axios
                .$put("/supplier/"+this.$route.params.id, this.supplier)
                .then((response) => {                    
                    this.errors = "";
                    this.$swal({
                        title: "Success",
                        position: "top",
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
