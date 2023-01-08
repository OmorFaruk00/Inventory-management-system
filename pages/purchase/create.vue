<template>
  <div>
    <div class="row">

      <div class=" col-sm-12 col-md-6 col-xl-6 mt-3">
        <div class="d-flex mb-2">
          <div class="form-group w-50">
            <select class="form-control border-0" v-model="supplier" @change="SearchSupplierDue(supplier)">
              <option selected disabled value="">Select Supplier</option>
              <option v-for="(supplier, index) in suppliers" :key="index" :value="supplier.id">
                {{ supplier.name }}
              </option>
            </select>
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
                v-model="discount" @keyup.enter="DiscountCalculate" >
              <span class="pr-4 mt-2 font-weight-bold">Subtotal</span> <input type="text" class="form-control" readonly
                v-model="subtotal">
            </div>            
            <div class="d-flex">
              <span class="pr-3 font-weight-bold">Previous Due</span> <input type="text" class="form-control mr-3"
                readonly v-model="Previous_due">
              <span class="pr-4 font-weight-bold">Payable Amount</span> <input type="text" class="form-control mr-3"
                readonly v-model="payable">
              <span class="pr-4 font-weight-bold">Paid Amount</span> <input type="text" class="form-control"
                v-model="paid_amount">
            </div>
            <div class="row px-3 pt-4">
              <div colspan="3" class="btn-list col-6">
                <h6 class="font-weight-bolder text-center py-2">List</h6>
              </div>
              <div colspan="3" class="btn-cart col-6">
                <h6 class="font-weight-bolder text-center py-2" @click="CartSubmit">Save</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" col-sm-12 col-md-3 col-xl-6 mt-3 ">
        <div class="pr-2 mb-2">
          <div class="row">
            <div class="col-sm-12 col-md-4 col-xl-3">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="category" @click="DataGet">
                  <option selected disabled value="">Search By Category</option>
                  <option v-for="(category, index) in product_info.category" :key="index" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-md-3 col-xl-3">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="brand" @change="DataGet">
                  <option selected disabled value="">Search By Brand</option>
                  <option v-for="(brand, index) in product_info.brand" :key="index" :value="brand.id">
                    {{ brand.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="input-group form-group  w-100">
                <input type="search" class="form-control border-0" placeholder="Search Name/Code/Barcode/Price"
                  v-model="search" @keyup="DataGet">
                <button class="btn-search">
                  <img src="/images/search.png" height="30px" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-3 col-xl-3 mb-4" v-for="(product, index) in products.data" :key="index">
            <a href="#" class="btn-pos"
              @click="addToCart(product.id, product.name, product.code, product.purchase_price,  product.discount)">
              <div class="pos">
                <div class="pos-image" >
                  <img :src="base_url + '/images/product/' + product.image" alt="image" class="w-100 h-100" />
                </div> 
                           
                <div class="pos-content">
                  <p class="p-name">{{ product.name }}</p>
                  <p class="p-price"><span class="p-name">Price </span> <img class="mb-1" src="/images/taka.png" alt=""
                      height="13px">{{ product.purchase_price }} </p>

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
   
  </div>
</template>
<script>
export default {
  layout: "Sidebar",
  created() {
    this.GetSupplier();
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
      list: 16,
      search: null,
      base_url: process.env.url,
      cart: [],
      subtotal: '',
      payable: 0,
      suppliers: [],
      supplier: '',
      Previous_due: 0,
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

    GetSupplier() {
      this.$axios
        .$get("/supplier")
        .then((response) => {
          this.suppliers = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addToCart(id, name, code, price, discount) {
      let cart = this.cart.find(function (item) {
        return item.id === id;
      });
      if (cart) {
        let Items = this.cart.findIndex(function (item) {
          return item.id === id;
        });        
          this.cart[Items].qty += 1;
          this.cart[Items].amount = this.cart[Items].qty * price;
          this.total();        

      } else {
        this.cart.push({ "id": id, "name": name, "code": code, "price": price,  "qty": 1, "amount": price, "discount": discount });
        this.total();
      }
    },

    updateQty(product) {     
        product.amount = product.qty * product.price;
        this.total();

    },

    total() {
      let total = 0;
      this.cart.forEach(item => {
        total = parseFloat(total) + parseFloat(item.amount);     

      })
      this.subtotal = parseInt(total);      
      this.payable = parseInt(this.subtotal) + parseInt(this.Previous_due);

    },
     DiscountCalculate(){
      this.payable = this.payable - this.discount;
     

    },

    VatCalculate() {
      let subtotal = this.subtotal - this.discount;
      let vat = Math.ceil((subtotal * this.vat) / 100);
      this.subtotal = parseInt(this.subtotal) + parseInt(vat);
      this.payable = parseInt(this.subtotal) + parseInt(this.Previous_due);

    },

    removeCart(product) {
      let remove = this.cart.findIndex(function (item) {
        return item.id === product.id;
      });
      this.cart.splice(remove, 1);
      this.total();
    },

    SearchSupplierDue(id) {
      let due = this.suppliers.find(function (item) {
        return item.id === id;
      });
      let pre_due = due.previous_due;
      if (pre_due != null) {
        this.Previous_due = pre_due;
        this.total();

      }
    },

    CartSubmit() {
      if (this.paid_amount == '') {
        this.$toaster.error('The paid amount field is required');
      }
      this.$axios
        .$post("/purchase-invoice", { supplier: this.supplier, cart: this.cart, vat: this.vat, discount: this.discount, subtotal: this.subtotal, payable: this.payable, paid_amount: this.paid_amount })
        .then((response) => {
          // this.cart = []; this.supplier = ""; this.vat = ""; this.discount = ""; this.subtotal = ""; this.payable = ""; this.paid_amount = "";

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
  color: #fff;
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
  height: 90px;
}

.pos-content {
  padding: 15px 10px 5px 10px;
  line-height: 5px;
  text-transform: capitalize;
}

.p-name {
  font-size: 14px;
  font-weight: 600;
}

.p-price {
  font-size: 13px;
  font-weight: 400;
}

.p-brand {
  font-size: 12px;
  font-weight: 600;
  color: gray;
}


</style>

<style lang="scss" >
.vs-pagination>li>a {
  background: #e8eaec !important;
  margin-left: 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1;

}

.vs-pagination>li.vs-pagination--active a {
  // background: rgb(185, 44, 44) !important;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
  