<template>
    <div>
        <div class="form-bg mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 mx-auto">
                        <div class="form-content">
                            <div class="form-horizontal">
                                <div class="text-center card-header mb-4 d-flex justify-content-between">
                                    <h4 class="ml-3">Product Update</h4>
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
                                                v-model="product.product_name" />
                                            <p v-if="errors.product_name" v-text="errors.product_name[0]" class="text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Product Code <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="Enter product code"
                                                v-model="product.product_code" />
                                            <p v-if="errors.product_code" v-text="errors.product_code[0]" class="text-danger"></p>
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
                                            <p v-if="errors.category" v-text="errors.category[0]" class="text-danger">
                                            </p>
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
                                            <p v-if="errors.unit" v-text="errors.unit[0]" class="text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Tax</label>
                                            <input class="form-control" type="number" placeholder="enter tax by %"
                                                v-model="product.tax" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Purchase Price<span class="text-danger">
                                                    *</span></label>
                                            <input class="form-control" type="number" placeholder="Enter Purchase Price"
                                                v-model="product.purchase_price" />
                                            <p v-if="errors.purchase_price" v-text="errors.purchase_price[0]"
                                                class="text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Sales Price<span class="text-danger"> *</span></label>
                                            <input class="form-control" type="number" placeholder="Enter sales price"
                                                v-model="product.sales_price" />
                                            <p v-if="errors.sales_price" v-text="errors.sales_price[0]"
                                                class="text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Barcode</label>
                                            <input class="form-control" type="text" placeholder="Enter barcode"
                                                v-model="product.barcode" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Opening Quantity:
                                                <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="number"
                                                placeholder=" Enter Opening Quantity" v-model="product.opening_qty" />
                                            <p v-if="errors.opening_qty" v-text="errors.opening_qty[0]"
                                                class="text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for=""> Alert Qty</label>
                                            <input class="form-control" type="number" placeholder="Enter Alert barcode"
                                                v-model="product.alert_qty" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for=""> Discount</label>
                                            <input class="form-control" type="number" placeholder="Enter Product Discount"
                                                v-model="product.discount" />
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
                                            <input class="form-control" type="text" placeholder=" Enter guarrantee time"
                                                v-model="product.guarantee" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Image</label>
                                            <input type="file" class="form-control" placeholder=""
                                                @change="(e) => (product.new_image = e.target.files[0])" accept="image/*" />
                                            <p v-if="errors.image" v-text="errors.image[0]" class="text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-12">
                                        <div class="form-group float-right">
                                            <img :src="base_url + '/images/product/' + product.image" alt="image"
                                                style="height:80px;width: 150px;" />
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
                                    <button class="btn-submit mr-4" @click="DataUpdate()">
                                        Update
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
            product_list: "",
            name: "",
            errors: {},
            base_url: process.env.url,
            product: {
                name: "",
                code: "",
                brand: "",
                category: "",
                unit: "",
                tax: "",
                purchase_price: "",
                sales_price: "",
                barcode: "",
                opening_qty: "",
                alert_qty: "",
                discount: "",
                warranty: "",
                guarantee: "",
                new_image: "",
                description: "",

            },

        };
    },
    methods: {
        DataGet() {
            this.$axios
                .$get("/product")
                .then((response) => {
                    this.product_list = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        DataEdit() {
            this.$axios
                .$get("/product/" + this.$route.params.id + "/edit")
                .then((response) => {
                    this.product = response;

                })
                .catch((err) => {
                    console.log(err);
                });
        },

        DataUpdate() {            
            let formData = new FormData();
            formData.append('product_name', this.product.product_name)
            formData.append('product_code', this.product.product_code)
            formData.append('brand', this.product.brand)
            formData.append('category', this.product.category)
            formData.append('unit', this.product.unit)
            formData.append('tax', this.product.tax)
            formData.append('purchase_price', this.product.purchase_price)
            formData.append('sales_price', this.product.sales_price)
            formData.append('barcode', this.product.barcode)
            formData.append('opening_qty', this.product.opening_qty)
            formData.append('alert_qty', this.product.alert_qty)
            formData.append('warranty', this.product.warranty)
            formData.append('discount', this.product.discount)
            formData.append('guarantee', this.product.guarantee)
            formData.append('description', this.product.description) 
            if(this.product.new_image){
                formData.append('image', this.product.new_image)
            }           
            
                   

            this.$axios
                .$post("/product-update/"+ this.$route.params.id, formData)
                .then((response) => {
                    this.DataEdit();                
                    this.$swal({
                        title: "Updated",
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