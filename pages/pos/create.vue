<template>
  <div>
    <div class="row">

      <div class=" col-sm-12 col-md-6 col-xl-6 mt-3">
        <div class="d-flex justify-content-between mb-2">
          <div class="form-group w-50">
            <select class="form-control border-0" v-model="brand" @change="searchProduct('search_by_brand',brand)">              
              <option selected disabled value="">Select Customer Type</option>              
              <option v-for="(customer, index) in customers" :key="index" :value="customer.id">
                {{ customer.name }}
              </option>
            </select>
          </div>
          <div>
            <button type="button" class="mr-3 btn-add" data-toggle="modal" data-target="#exampleModalCenter">Add Customer</button>
          </div>
        </div>
        <div class="">
          <table class="table card-body" >
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

              <tr v-for="(cartItem,index) in cart" :key="index" class="t-row" >
                <td width="50px">{{index +1}} </td>
                <td width="160px">{{cartItem.data.product_name}}</td>
                <td width="160px">{{cartItem.data.product_code}}</td>
                <td width="100px">
                  <input type="number" style="width:60px" class="form-control" @click="updateQty(cartItem)"
                    @keyup="updateQty(cartItem)" v-model="cart[index].qty">
                </td>
                <td width="110px">
                  <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt=""
                      height="15px">{{cartItem.data.sales_price}}</div>
                </td>
                <td width="110px">
                  <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt="" height="15px">{{cartItem.amount}}
                  </div>
                </td>
                <td >
                  <a href="#" class=" float-right" @click="removeCart(cartItem)"><img src="/images/remove.png"
                      height="18px">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="card-body t-row">

            <div class="d-flex mb-3">
              <span class="pr-5 mt-2 mr-2 font-weight-bold">Vat</span> <input type="text" class="form-control mr-3">
              <span class="pr-4 mt-2 font-weight-bold">Discount</span> <input type="text" class="form-control mr-3">
              <span class="pr-4 mt-2 font-weight-bold">Subtotal</span> <input type="text" class="form-control"
                v-model="subtotal">
            </div>
            <div class="d-flex">
              <span class="pr-3 font-weight-bold">Previous Due</span> <input type="text" class="form-control mr-3">
              <span class="pr-4 font-weight-bold">Payable Amount</span> <input type="text" class="form-control mr-3" v-model="payable">
              <span class="pr-4 font-weight-bold">Paid Amount</span> <input type="text" class="form-control">
            </div>
            <div class="row px-3 pt-4">
              <div colspan="3" class="btn-list col-6" @click="test">               
                  <h6 class="font-weight-bolder text-center py-2">List</h6>                
              </div>
              <div colspan="3" class="btn-cart col-6">                
                  <h6 class="font-weight-bolder text-center py-2">Save</h6>               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" col-sm-12 col-md-6 col-xl-6 mt-3 ">
        <div class="pr-2 mb-2">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-xl-3">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="category"
                  @click="searchProduct('search_by_category',category)">
                  <option selected disabled value="">Search By Category</option>
                  <option v-for="(category, index) in product_list.category" :key="index" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-xl-3">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="brand" @change="searchProduct('search_by_brand',brand)">
                  <option selected disabled value="">Search By Brand</option>
                  <option v-for="(brand, index) in product_list.brand" :key="index" :value="brand.id">
                    {{ brand.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-xl-6">
              <div class="input-group form-group  w-100">
                <input type="search" class="form-control border-0" placeholder="Search Name/Code/Barcode/Price"
                  v-model="search" @keyup="searchProduct('search_by_global',search)">
                <button class="btn-search">
                  <img src="/images/search.png" height="30px" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-3 col-xl-3 mb-4" v-for="(product, index) in products.data" :key="index">
            <a href="#" class="btn-pos" @click="addToCart(product)">
              <div class="pos">
                <div class="pos-image ">
                  <img :src="base_url + '/images/product/' + product.image" alt="image" class="w-100 h-100" />
                </div>
                <div v-if="product.discount!=null">
                  <p class="p-discount"><span v-if="product.discount">-</span>{{product.discount}}</p>
                </div>
                <div class="pos-content">
                  <p class="p-name">{{product.product_name}}</p>
                  <p class="p-price"><span class="p-name">Price </span> <img class="mb-1" src="/images/taka.png" alt=""
                      height="13px">{{product.sales_price}} </p>

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
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered mw-100 w-50" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <Customer />
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
        <button type="button" class="btn-submit">Submit</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
export default {
  layout: "Sidebar",
  mounted() {
    this.getCustomer();
    this.DataGet();
  },
  data() {
    return {
      products: "",
      brand: "",
      category: "",
      search: '',
      product_list: "",
      list: 16,
      search: null,
      type: null,
      item: null,
      base_url: process.env.url,
      cart: [],
      subtotal: '',
      payable:'',
      customers:''


    };
  },
  methods: {
    test() {
      alert('sdfsdfas');
    },
    addToCart(product) {
      let cart = this.cart.find(function (item) {
        return item.data.id === product.id;
      });
      if (cart) {
        let Items = this.cart.findIndex(function (item) {
          return item.data.id === product.id;
        });
        if (this.cart[Items].qty > product.stock.available_quantity) {
          this.$swal({
            title: "error",
            position: "middle",
            text: 'Qty not available',
            // timer: 2000,
            type: "error",
            // showConfirmButton: false,
          });
        } else {
          this.cart[Items].qty += 1;
          this.cart[Items].amount = this.cart[Items].qty * product.sales_price;
          this.total();
        }

      } else {
        this.cart.push({ "data": product, "qty": 1, "amount": product.sales_price });
        this.total();
      }

    },
    updateQty(product) {
      product.amount = product.qty * product.data.sales_price;
      this.total();

    },
    total() {
      let total = 0;
      this.cart.forEach(item => {
        total = parseInt(total) + parseInt(item.amount);
      })
      this.subtotal = total;
      this.payable = total;
     

    },
    removeCart(product) {
      let remove = this.cart.findIndex(function (item) {
        return item.data.id === product.data.id;
      });
      this.cart.splice(remove, 1);
      this.total();
    },

    searchProduct(type, item) {
      this.type = type;
      this.item = item;
      this.DataGet();
    },
    DataGet(page = 1) {
      this.$axios
        .$post("/product-search?page=" + page, { "type": this.type, "item": this.item, "search": this.search, "list": this.list })
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

  },
};
</script>
<style scoped>
tbody {
  display:block; 
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
  cursor: pointer;
  background: linear-gradient(#4B0082, #6500B0);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
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
  