<template>
    <div>
        <div class="row">
            <div class="col-md-7 col-sm-12">
                <div class="w-50 pull-right mt-5">
                    <div class="input-group form-group  w-100">
                        <input type="search" class="form-control border-0" placeholder="Search Name/Code/Barcode/Price"
                            v-model="search">
                        <button class="btn-search" @click="searchProduct(search)">
                            <img src="/images/search.png" height="30px" />
                        </button>
                    </div>
                </div>

                <div class="table-responsive mt-4">
                    <table class="table text-center t-body">
                        <thead class="table-body">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Code</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="t-row" v-for="(product, index) in products" :key="index">
                                <td>{{ product.name }}</td>
                                <td>{{ product.code }}</td>
                                <td><input type="number" style="width:60px" class="form-control"
                                        @click="updateQty(product)" v-model="product.qty" @keyup="updateQty(product)">
                                </td>
                                <td><img class="mb-1" src="/images/taka.png" alt="" height="13px">{{ product.price }}
                                </td>
                                <td><img class="mb-1" src="/images/taka.png" alt="" height="13px">{{ product.amount }}
                                </td>

                                <td>
                                    <a href="#" class=" float-right" @click="removeProduct(product)"><img
                                            src="/images/remove.png" height="18px">
                                    </a>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-md-5 mt-5">
                <div class="form-group  px-5 ">
                    <select class="form-control border-0" v-model="customer">
                        <option selected disabled value="">Walk-in customer</option>
                        <option v-for="(customer, index) in customers" :key="index" :value="customer.id">
                            {{ customer.name }}
                        </option>
                    </select>
                </div>
                <div class="body-shadow my-3 mx-5 p-5">

                    <div class="d-flex justify-content-between mb-2">
                        <h5>Total Qty </h5>
                        <h5> {{ total_qty }}</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <h5>Subtotal </h5>
                        <h5> <img class="mb-1" src="/images/taka.png" alt="" height="16px"> {{ subtotal }}</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <h5>Discount </h5>
                        <h5> <img class="mb-1" src="/images/taka.png" alt="" height="16px">{{ discount }}</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <h5>Grand Total </h5>
                        <h5> <img class="mb-1" src="/images/taka.png" alt="" height="16px">{{ grand_total }}</h5>
                    </div>

                    <div class="form-group">
                        <label for="" class="h5">Note</label>
                        <textarea type="text" class="form-control" v-model="note"></textarea>

                    </div>
                    <button class="btn-submit w-100 mt-3" @click="ReturnSubmit()">Submit</button>


                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    layout: 'Sidebar',
    data() {
        return {
            customer: '',
            customers: '',
            search: '300',
            products: [],
            total_qty: 0,
            subtotal: 0,
            discount: 0,
            grand_total: 0,
            note: '',
        }
    },
    mounted() {
        this.getCustomer();

    },
    methods: {
        searchProduct(search) {
            this.$axios
                .$get("/return-product/" + search)
                .then((response) => {
                    if (response.status == 404) {
                        this.$swal({
                            title: "error",
                            position: "top",
                            text: response.message,
                            timer: 2000,
                            type: "error",
                            showConfirmButton: false,
                        });
                    } else {
                        response.forEach((item, index) => {
                            this.products.push({ "id": item.id, "name": item.name, "code": item.code, "price": item.price, "qty": 1, "amount": item.price, "discount": item.discount });
                        });
                        this.total();
                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updateQty(product) {
            product.amount = product.qty * product.price;
            this.total();
        },
        removeProduct(product) {
            let remove = this.products.findIndex(function (item) {
                return item.id === product.id;
            });
            this.products.splice(remove, 1);
            this.total();
        },
        total() {
            let total = 0;
            let discount = 0;
            let qty = 0;

            this.products.forEach(item => {
                total = parseFloat(total) + parseFloat(item.amount);
                discount = Math.ceil(discount + item.qty * (item.price) * item.discount / 100);
                qty = (qty + parseInt(item.qty));

            });

            this.total_qty = qty;
            this.subtotal = Math.ceil(total);
            this.discount = Math.ceil(parseFloat(discount));
            this.grand_total = parseInt(total) - parseInt(discount);

        },
        getCustomer() {
            this.$axios
                .$get("/customer")
                .then((response) => {
                    this.customers = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        ReturnSubmit() {
            this.$axios
                .$post("/product-return", { customer_id: this.customer, product: this.products, total_qty: this.total_qty, discount: this.discount, subtotal: this.subtotal, grand_total: this.grand_total, note: this.note })
                .then((response) => {
                    this.products = []; this.customer = ""; this.discount = ""; this.subtotal = ""; this.grand_total = "", this.total_qty = "";

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
    }

}
</script>

<style lang="scss" scoped>
.btn-search {
    border: none;
    background: #e8eaec;
    border-radius: 0px 0px 0px 0px;
}

.btn-search:hover {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px rgba(0, 0, 0, 0.15), 5px 5px rgba(0, 0, 0, 0.1);
    outline: none;
    color: #313133 !important;
    text-decoration: none;
}

.table-body {
    color: #fff;
    background-color: #337ab7;
}

.table-bordered {
    border: 1px solid #f4f4f4;
}
</style>