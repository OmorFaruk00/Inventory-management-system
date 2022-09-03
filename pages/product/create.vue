<template>
    <div>
        <div class="form-bg mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 mx-auto">
                        <div class="form-content">
                            <div class="form-horizontal">
                                <div class="text-center card-header mb-4 d-flex justify-content-between">
                                    <h4 class="ml-3">Product Add</h4>
                                    <div>
                                        <nuxt-link to="/product" class="text-dark mr-3"><img src="/images/list.png"
                                                alt="list" height="20px" />
                                        </nuxt-link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">
                                                Product Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" placeholder="Enter product name"
                                                v-model="product.name" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Product Code <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="Enter product code"
                                                v-model="product.code" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Brand</label>
                                            <select class="form-control" v-model="product.brand">
                                                <option selected disabled value="">Select brand</option>
                                                <option v-for="(brand, index) in product_list.brand" :key="index"
                                                    :value="brand.id">
                                                    {{ brand.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Category<span class="text-danger"> *</span></label>
                                            <select class="form-control" v-model="product.category">
                                                <option selected disabled value="">
                                                    Select category
                                                </option>
                                                <option v-for="(category, index) in product_list.category" :key="index"
                                                    :value="category.id">
                                                    {{ category.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="unit">Unit<span class="text-danger"> *</span></label>
                                            <select class="form-control" v-model="product.unit">
                                                <option selected disabled value="">Select unit</option>
                                                <option v-for="(unit, index) in product_list.unit" :key="index"
                                                    :value="unit.id">
                                                    {{ unit.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Tax%</label>
                                            <input class="form-control" type="text" placeholder="enter tax by %"
                                                v-model="product.tax" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Purchase Price<span class="text-danger">
                                                    *</span></label>
                                            <input class="form-control" type="number" placeholder="Enter Purchase Price"
                                                v-model="product.purchase_price" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">MRP</label>
                                            <input class="form-control" type="text" placeholder="Enter mrp"
                                                v-model="product.mrp" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Sales Price<span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="Enter sales price"
                                                v-model="product.sales_price" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Qty <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="Enter Qty"
                                                v-model="product.qty" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Opening Quantity:
                                                <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text"
                                                placeholder=" Enter Opening Quantity" v-model="product.opening_qty" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for=""> Alert Qty</label>
                                            <input class="form-control" type="text" placeholder="Enter Alert Qty"
                                                v-model="product.alert_qty" />
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Warranty</label>
                                            <input class="form-control" type="text" placeholder=" Enter Warranty time"
                                                v-model="product.warranty" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Guarrantee:</label>
                                            <input class="form-control" type="text" placeholder=" Enter Guarrantee time"
                                                v-model="product.guarrentee" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Image</label>
                                            <input class="form-control" type="file" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-xl-12">
                                        <div class="form-group">
                                            <label for="">Description</label>
                                            <textarea class="form-control" type="text" placeholder=" Enter Description"
                                                v-model="product.description">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end mt-3 card-footer">
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
            product_list: "",
            name: "",
            errors: {},
            product: {
                name: "",
                code: "",
                brand: "",
                category: "",
                unit: "",
                tax: "",
                purchase_price: "",
                mrp: "",
                sales_price: "",
                qty: "",
                opening_qty: "",
                alert_qty: "",
                warranty: "",
                guarrentee: "",
                image: "",
                description: "",
            },
        };
    },
    methods: {
        DataGet() {
            this.$axios
                .$get("/product/create")
                .then((response) => {
                    this.product_list = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        DataStore() {
            this.$axios;
            console.log(this.product);
            // .$post("/brand", { name: this.name })
            // .then((response) => {
            //   this.name = "";
            //   this.errors = "";
            //   $("#Modal").modal("hide");
            //   this.DataGet();
            //   this.$swal({
            //     title: "Success",
            //     position: "top",
            //     text: response.message,
            //     timer: 2000,
            //     type: "success",
            //     showConfirmButton: false,
            //   });
            // })
            // .catch((error) => {
            //   this.errors = error.response.data.errors;
            //   console.log(this.errors);
            // });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>