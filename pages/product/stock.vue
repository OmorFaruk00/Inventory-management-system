<template>
    <div class="pb-5">
      <div class="body-shadow">
        <div class="row pr-2 mb-2">
          <div class="col col-sm-12 col-xl-4 d-flex">
            <h4 class="pt-3">Stock List</h4>
            <div class="d-block pt-3 pl-4">
              <label for=""> Show</label>
              <select class="mx-2 pr-2" v-model="list" @change="DataGet">
                <option value="10" selected>10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <label for="">  Entries of {{ products.total }}</label>
            </div>
          </div>
          <div class="col-sm-12 col-xl-8 pt-2">
            <div class="row">
              <div class="col-sm-12 col-xl-3">
                <div class="form-group  ">
                  <select class="form-control border-0" v-model="category" @click="searchProduct('category',category)">
                    <option selected disabled value="">Search By Category</option>
                    <option v-for="(category, index) in product_list.category" :key="index" :value="category.id">
                      {{ category.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-sm-12 col-xl-3">
                <div class="form-group  ">
                  <select class="form-control border-0" v-model="brand" @change="searchProduct('brand',brand)">
                    <option selected disabled value="">Search By Brand</option>
                    <option v-for="(brand, index) in product_list.brand" :key="index" :value="brand.id">
                      {{ brand.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-sm-12 col-xl-6">
                <div class="input-group form-group  w-100">
                  <input type="search" class="form-control border-0" placeholder="Search Name/Code/Barcode" v-model="search"
                    @keyup="searchProduct('global',search)">
                  <button class="btn-search">
                    <img src="/images/search.png" height="30px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-responsive" v-if="products">
          <table class="table t-body">
            <thead class="t-head">
              <tr>
                <th>SL</th>
                <th>Product Name</th>
                <th>Product Code</th>                            
                <th>Brand</th>                            
                <th>Category</th>                            
                <th>Available Qty</th>
                <th> Purchased Qty</th>
                <th> Sold Qty</th>
                <th> Wastage Qty</th>     
              </tr>
            </thead>
            <tbody v-for="(product, index) in products.data" :key="index">
              <tr class="t-row">
                <td>{{ products.current_page * list - list + index + 1 }}</td>
               <td>{{ product.name }}</td>
                <td>{{ product.code }}</td>                            
                <td>{{ product.brand}}</td>                            
                <td>{{ product.category}}</td>                            
                <td >
                    <div  v-if="product.alert_qty>=product.available_quantity" class="text-danger font-weight-bold">
                        {{ product.stock.available_quantity}}
                    </div>
                    <div v-else>
                        {{ product.available_quantity}}
                    </div>                   
                </td>
                <td>{{ product.purchased_qty }}</td>
                <td>{{ product.sold_quantity }}</td>
                <td>{{ product.wastage_quantity }}</td>           
              </tr>
            </tbody>
          </table>
        </div>
        <!-- pagination         -->
        <vs-pagination v-if="products.last_page > 1" :total-pages="products.last_page" @change="DataGet"></vs-pagination>
      </div>  
    </div>
  </template>
  <script>
  export default {
    layout: "Sidebar",
    created() {
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
        list: 10,
        search: null,
        type: null,
        item: null,
        base_url: process.env.url,
  
      };
    },
    methods: {
      searchProduct(type, item) {
        this.type = type;
        this.item = item;
        this.DataGet();
      },
      DataGet(page = 1) {
        this.$axios
          .$post("/product-stock?page=" + page, { "type": this.type, "item": this.item, "search": this.search, "list": this.list })
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
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1
  }
  
  .vs-pagination>li.vs-pagination--active a {
    // background: rgb(185, 44, 44) !important;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  </style>
  