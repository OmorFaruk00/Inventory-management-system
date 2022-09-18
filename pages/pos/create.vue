<template>
  <div>
    <div class="row">
      <div class=" col-12 col-xl-4 mt-3">
        <div class="d-flex justify-content-between mb-2">
          <div class="form-group w-50">
            <select class="form-control border-0" v-model="brand" @change="searchProduct('search_by_brand',brand)">
              <option selected disabled value="">Select Customer Type</option>
              <option v-for="(brand, index) in product_list.brand" :key="index" :value="brand.id">
                {{ brand.name }}
              </option>
            </select>
          </div>
          <div>
            <button class="mr-3 btn-add">Add Customer</button>
          </div>
        </div>
        <div class="mr-3">
          <table class="table card-body">
            <thead class="t-head">
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td>Mi</td>
                <td>Mi</td>
                <td>22</td>
                <td>2300</td>
                <td>
                  <button class="btn float-right"><img src="/images/remove.png" height="18px">
                  </button>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td>Mi</td>
                <td>Mi</td>
                <td>22</td>
                <td>2300</td>
                <td>
                  <button class="btn float-right"><img src="/images/remove.png" height="18px">
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {{selected}} <br>
          {{cart}}<br>
          {{cartItems}} 
          

        </div>
      </div>
      <div class=" col-12 col-xl-8 mt-3 ">
        <div class="pr-2 mb-2">
          <div class="row">
            <div class="col-sm-12 col-xl-3">
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
        <div class="row">
          <div class="col-xl-2 col-md-4 col-6 mb-4" v-for="(product, index) in products.data" :key="index">
            <a href="#" class="btn-pos" @click="addToCart(product.id)">
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
  </div>
</template>
<script>
export default {
  layout: "Sidebar",
  mounted() {
    this.getCategoryBrand();
    this.DataGet();
  },
  data() {
    return {
      products: "",
      brand: "",
      category: "",
      search: '',
      product_list: "",
      list: 18,
      search: null,
      type: null,
      item: null,
      base_url: process.env.url,
      cart: [],
      cartItems: {
        'id' : 0,
        'qty': 0
      },
      qty: '',
      selected: []

    };
  },
  methods: {
    addToCart(ids) {
      let selectedProduct = this.products.data.find((product) => {
        if (product.id === ids) {
          this.selected = product;
          if(this.cart.includes(ids))
          {
            for (let i in (this.cartItems)) {
              console.log(i)
              // if(item.id === ids)
              // {
              //   item.qty = item.qty+1
              // }
            }
            this.cart.push(ids);

          }else{
            this.cart.push(ids);
            this.cartItems.id = ids 
            this.cartItems.qty = 1 
          }





        }
      });
      // console.log(selectedProduct);
      // console.log(this.products.data);

      // if(selectedProduct){
      //        this.selectedProduct = selectedProduct;

      // }

      // this.cart.push(id);






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
    getCategoryBrand() {
      this.$axios
        .$get("/product")
        .then((response) => {
          this.product_list = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
};
</script>
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
<style scoped>
.pos-body {
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 }

 .card-body {
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
   height: 130px;
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
   bottom: 75px;
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

 @media only screen and (max-width: 768px) {
   .scroll-div {
     position: absolute;

   }

 }
</style>
  