<template>
    <div>
        <div class="form-bg mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-6 mx-auto">
                        <div class="form-content">
                            <div class="form-horizontal">
                                <div class="text-center card-header mb-4 d-flex justify-content-between">
                                    <h4 class="ml-4"> Add Expense</h4>
                                    <div>
                                        <nuxt-link to="/expense/expense-list" class="text-dark mr-3"><img src="/images/list.png"
                                                alt="list" height="20px" />
                                        </nuxt-link>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="">
                                        <div class="form-group">
                                            <label for="">
                                                Category <span class="text-danger">*</span></label>
                                                <select class="form-control" v-model="expense.category_id">
                                                <option selected disabled value="">Select Category</option>
                                                <option v-for="(category, index) in category_list" :key="index"
                                                    :value="category.id">
                                                    {{ category.name }}
                                                </option>
                                            </select>
                                            <p v-if="errors.category_id" v-text="errors.category_id[0]"
                                                class="text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <label for="">
                                                Purpose <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" placeholder=""
                                                v-model="expense.purpose" />
                                            <p v-if="errors.purpose" v-text="errors.purpose[0]"
                                                class="text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <label for="">
                                                Amount<span class="text-danger">*</span></label>
                                            <input class="form-control" type="number" placeholder=""
                                                v-model="expense.amount" />
                                            <p v-if="errors.amount" v-text="errors.amount[0]"
                                                class="text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <label for="">
                                                Description</label>
                                            <textarea class="form-control" type="text" placeholder=""
                                                v-model="expense.description" ></textarea>
                                            <p v-if="errors.description" v-text="errors.description[0]"
                                                class="text-danger"></p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div class="d-flex justify-content-end card-footer">
                                    <button class="btn-submit mr-4" @click="DataStore()">
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
            category_list: "",
            name: "",
            errors: {},
            expense: {
                category_id: "",
                amount:"",
                purpose:"",
                description:""
            },
        };
    },
    methods: {
        DataGet() {
            this.$axios
                .$get("/expense-category")
                .then((response) => {
                    this.category_list = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        DataStore() {
            this.$axios
                .$post("/expense",this.expense)
                .then((response) => {
                    this.expense = "";
                    this.errors ="";
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
