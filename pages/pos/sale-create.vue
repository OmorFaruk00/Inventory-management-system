<template>
  <div>
    <div class="row">

      <div class=" col-sm-12 col-md-6 col-xl-6 mt-3">
        <div class="d-flex mb-2">
          <div class="form-group w-100">
            <select class="form-control border-0" v-model="customer" @change="searchCustomerDue(customer)">
              <option selected disabled value="">Walk-in Customer</option>
              <option v-for="(customer, index) in customers" :key="index" :value="customer.id">
                {{ customer.name }}
              </option>
            </select>
          </div>
          <div>
            <button type="button" class="border-0" data-toggle="modal" data-target="#exampleModalCenter" style=""><img
                src="/images/add.png" alt="" height="35px"></button>
          </div>
        </div>
        <div class="">
          <table class="table card-body">
            <thead class="t-head">
              <tr>
                <th width="50px">Sl</th>
                <th width="160px">Product Name</th>
                <th width="160px">Product Code</th>
                <th width="100px">Qty</th>
                <th width="110px">Price</th>
                <th width="110px">Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="(cartItem, index) in cart" :key="index" class="t-row">
                <td width="50px">{{ index + 1 }} </td>
                <td width="160px">{{ cartItem.name }}</td>
                <td width="160px">{{ cartItem.code }}</td>
                <td width="100px">
                  <input type="number" style="width:60px" class="form-control" @click="updateQty(cartItem)"
                    @keyup="updateQty(cartItem)" v-model="cart[index].qty">
                </td>
                <td width="110px">
                  <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt="" height="15px">{{ cartItem.price }}
                  </div>
                </td>
                <td width="110px">
                  <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt="" height="15px">{{ cartItem.amount
                  }}
                  </div>
                </td>
                <td>
                  <a href="#" class=" float-right" @click="removeCart(cartItem)"><img src="/images/remove.png"
                      height="18px">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="card-body t-row">
            <div class="d-flex mb-3">
              <span class="pr-5 mt-2 mr-2 font-weight-bold">Vat </span> <input type="text" class="form-control mr-3"
                placeholder="By %" @keyup.enter="VatCalculate" v-model="vat">
              <span class="pr-4 mt-2 font-weight-bold">Discount</span> <input type="text" class="form-control mr-3"
                v-model="discount">
              <span class="pr-4 mt-2 font-weight-bold">Subtotal</span> <input type="text" class="form-control" readonly
                v-model="subtotal">
            </div>
            <div class="d-flex">
              <span class="pr-3 font-weight-bold">Previous Due</span> <input type="text" class="form-control mr-3"
                readonly v-model="previous_due">
              <span class="pr-4 font-weight-bold">Payable Amount</span> <input type="text" class="form-control mr-3"
                readonly v-model="payable">
              <span class="pr-4 font-weight-bold">Paid Amount</span> <input type="text" class="form-control"
                v-model="paid_amount">
            </div>
            <div class="row px-3 pt-4">
              <div colspan="3" class="btn-list col-6">
                <h6 class="font-weight-bolder text-center py-2" @click="reloadPage">Reset</h6>
              </div>
              <div colspan="3" class="btn-cart col-6">
                <h6 class="font-weight-bolder text-center py-2" @click="CartSubmit">Pay</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" col-sm-12 col-md-6 col-xl-6 mt-3 ">
        <div class="pr-2 mb-2">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="category" @click="DataGet">
                  <option selected disabled value="">Search By Category</option>
                  <option v-for="(category, index) in product_info.category" :key="index" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="brand" @change="DataGet">
                  <option selected disabled value="">Search By Brand</option>
                  <option v-for="(brand, index) in product_info.brand" :key="index" :value="brand.id">
                    {{ brand.name }}
                  </option>
                </select>
              </div>
            </div>
        
          </div>
        </div>
        <div class="">
              <div class="input-group form-group ">
                <input type="search" class="form-control border-0" placeholder="Search Name/Code/Barcode/Price"
                  v-model="search" @keyup="DataGet">
                <button class="btn-search">
                  <img src="/images/search.png" height="30px" />
                </button>
              </div>
            </div>
        <div class="row ">
          <div class="col-md-3 col-xl-3 mb-4" v-for="(product, index) in products.data" :key="index">
            <a href="#" class="btn-pos"
              @click="addToCart(product.id, product.name, product.code, product.price, product.available_quantity, product.discount)">
              <div class="pos">
                <div class="pos-image " v-if="product.image!=null">
                  <img :src="base_url + '/images/product/' + product.image" alt="image" class="w-100 h-100" />
                </div>
                <div class="pos-image " v-else>
                  <img src="/images/no-image.png" alt="image" class="w-100 h-100" />
                </div>
                <div >
                  <p v-if="product.discount !=0" class="p-discount"><span >-</span>{{ product.discount }}%</p>
                </div>
                <div class="pos-content">
                  <p class="p-name">{{ product.name }}</p>
                  <p class="p-price"> <img class="mb-1" src="/images/taka.png" alt=""
                      height="14px">{{ product.price }} </p>

                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <vs-pagination v-if="products.last_page > 1" :total-pages="products.last_page" @change="DataGet">
          </vs-pagination>
        </div>
      </div>

    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered mw-100 w-25" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add Customer</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Customer />
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
    this.getCustomer();
    this.DataGet();
    this.GetProductInfo();
  },
  data() {
    return {
      products: "",
      brand: "",
      category: "",
      search: '',
      product_info: "",
      list: 12,
      search: null,
      base_url: process.env.url,
      cart: [],
      subtotal: '',
      payable: 0,
      customers: [],
      customer: '',
      previous_due: 0,
      discount: '',
      vat: '',
      paid_amount: '',
      errors: '',

    };
  },
  methods: {
    GetProductInfo() {
      this.$axios
        .$get("/product")
        .then((response) => {
          this.product_info = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    DataGet(page = 1) {
      this.$axios
        .$post("/product-search?page=" + page, { "brand": this.brand, "category": this.category, "search": this.search, "list": this.list })
        .then((response) => {
          this.products = response;
        })
        .catch((error) => {
          console.log(error);
        });
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

    addToCart(id, name, code, price, available_qty, discount) {
      let cart = this.cart.find(function (item) {
        return item.id === id;
      });
      if (cart) {
        let Items = this.cart.findIndex(function (item) {
          return item.id === id;
        });
        if (this.cart[Items].qty >= available_qty) {
          this.$swal({
            title: "error",
            position: "center",
            text: 'Qty not available',
            // timer: 2000,
            type: "error",
            // showConfirmButton: false,
          });
        } else {
          this.cart[Items].qty += 1;
          this.cart[Items].amount = this.cart[Items].qty * price;
          this.total();

        }

      } else {
        this.cart.push({ "id": id, "name": name, "code": code, "price": price, "available_qty": available_qty, "qty": 1, "amount": price, "discount": discount });
        this.total();
      }
    },

    updateQty(product) {
      if (product.qty >= product.available_qty) {
        this.$swal({
          title: "error",
          position: "center",
          text: 'Qty not available',
          // timer: 2000,
          type: "error",
          // showConfirmButton: false,
        });
      } else {
        product.amount = product.qty * product.price;
        this.total();

      }


    },

    total() {
      let total = 0;
      let discount = 0;

      this.cart.forEach(item => {
        total = parseFloat(total) + parseFloat(item.amount);
        discount = Math.ceil(discount + item.qty * (item.price) * item.discount / 100);

      })

      this.subtotal = Math.ceil(parseInt(total) - parseInt(discount));
      this.discount = Math.ceil(parseFloat(discount));
      this.payable = parseInt(this.subtotal) + parseInt(this.previous_due);

    },

    VatCalculate() {
      let subtotal = this.subtotal - this.discount;
      let vat = Math.ceil((subtotal * this.vat) / 100);
      this.subtotal = parseInt(this.subtotal) + parseInt(vat);
      this.payable = parseInt(this.subtotal) + parseInt(this.previous_due);

    },

    removeCart(product) {
      let remove = this.cart.findIndex(function (item) {
        return item.id === product.id;
      });
      this.cart.splice(remove, 1);
      this.total();
    },

    searchCustomerDue(id) {
      let due = this.customers.find(function (item) {
        return item.id === id;
      });
      let pre_due = due.previous_due;
      if (pre_due != null) {
        this.previous_due = pre_due;
        this.total();

      }
    },

    CartSubmit() {
      if (this.paid_amount == '') {
        this.$toaster.error('The paid amount field is required');
      }
      this.$axios
        .$post("/create-invoice", { customer: this.customer, cart: this.cart, vat: this.vat, discount: this.discount, subtotal: this.subtotal, payable: this.payable, paid_amount: this.paid_amount })
        .then((response) => {
          this.cart = []; this.customer = ""; this.vat = ""; this.discount = ""; this.subtotal = ""; this.payable = ""; this.paid_amount = "";

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
    reloadPage() {
      this.cart=[],this.customer='',this.payable='',this.vat='',this.subtotal='',this.discount='',this.previous_due='';
      // window.location.reload();
    }

  },
};
</script>
<style scoped>
.btn-submit {
  /* background: #000 !important; */
  margin-right: 0px !important;
}

tbody {
  display: block;
  height: 50vh;
  overflow-y: scroll;
}

tr {
  display: table;
  width: 100%;

}

.btn-cart {
  background: linear-gradient(#2C3E50, #4CA1AF);
  color: #fff;
  cursor: pointer;

}

.btn-cart:hover {
  background: linear-gradient(#27394b, #104b54);
}

.btn-list {
  color: rgb(170, 20, 20);
  background: linear-gradient(#618b8b, #40a2b1);
}

.btn-list:hover {
  background: linear-gradient(#27394b, #104b54);
}

.pos-body {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.card-body {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
}

.pos {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
}

.btn-pos {
  text-decoration: none;
  color: #000;
}

.pos:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.pos-image img {
  border-radius: 15px 15px 0px 0px;
}

.pos-image {
  position: relative;
  height: 120px;
}

.pos-content {
  padding: 15px 5px 2px 10px;
  /* line-height: 5px; */
  text-transform: capitalize;
  /* height: 90px; */
}

.p-name {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 2px;
}

.p-price {  
  font-size: 13px;
  font-weight: 600;  
}


.p-discount {
  position: absolute;
  bottom: 80px;
  right: 20px;
  color: #fff;
  border-radius: 10px;
  padding: 0px 8px !important;
  margin: 0px !important;
  font-size: 12px;
  font-weight: 600;
  border: none;  
  background: linear-gradient(#4B0082, #6500B0);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}
</style>

