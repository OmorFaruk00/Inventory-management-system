<template>
  <div>

    <div class="row">



      <div class=" col-12 col-xl-4 mt-3">
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
        </div>
      </div>
      <div class=" col-12 col-xl-8 mt-3 ">
        <div class="pr-2 mb-2">       
          <div class="row">
            <div class="col-sm-12 col-xl-3">
              <div class="form-group  ">
                <select class="form-control" v-model="category"
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
                <select class="form-control" v-model="brand" @change="searchProduct('search_by_brand',brand)">
                  <option selected disabled value="">Search By Brand</option>
                  <option v-for="(brand, index) in product_list.brand" :key="index" :value="brand.id">
                    {{ brand.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-xl-6">
              <div class="input-group form-group  w-100">
                <input type="search" class="form-control" placeholder="Search Name/Code/Barcode/Price" v-model="search" @keyup="searchProduct('search_by_global',search)">
                <button class="btn-search">
                  <img src="/images/search.png" height="30px" />
                </button>
              </div>
            </div>
          </div>        
      </div>    
        <div class="row">

          <div class="col-xl-2 col-md-4 col-6 mb-4" v-for="(product, index) in products.data" :key="index">
            <div class="pos">
              <div class="pos-image ">
                <img :src="base_url + '/images/product/' + product.image" alt="image"
                  class="w-100 h-100" />
              </div>
              <div class="p-price">
                <p> <img src="/images/taka.png" alt="taka" height="12px" width="18px">{{product.sales_price}}</p>
              </div>
              <div v-if="product.discount!=null">
                <p class="p-detail">{{product.discount}}</p>
              </div>
              <div class="pos-content">
                <p class="p-name">{{product.product_name}}</p>
                <!-- <p class="">{{product.sales_price}}</p> -->
              </div>
            </div>
          </div>
          <div class="">
            <vs-pagination v-if="products.last_page > 1" :total-pages="products.last_page" @change="DataGet"></vs-pagination>
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
    this.getCategoryBrand();   
    this.DataGet();
  },
  data() {
    return {      
      products: "",   
      brand: "",
      category: "",
      search:'',
      product_list: "",         
      list:18,
      search:null,
      type:null,
      item:null,    
      base_url: process.env.url,
      
    };
  },
  methods: {
    searchProduct(type,item){
      this.type = type;
      this.item = item;
      this.DataGet();
    },
    DataGet(page=1) {        
      this.$axios
        .$post("/product-search?page="+page, { "type": this.type, "item":this.item,"search":this.search,"list":this.list})
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
  .vs-pagination > li > a {
    background: #e8eaec!important;
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
    
    /* .search{
      position: relative;
      border-radius: 20px !important;
    }
    .btn-search{
    background: #bebed6;    
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    color:#fff;
    border:none;   
    margin-right: 10px;
    position: absolute;
    top:0px;
    right: -8px;
    border-radius: 0px 20px 20px 0px ;
    height: 100%; 
    
} */
  .pos-body {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  }
  
  .card-body {
    /* border: 1px solid #6666; */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  }
  
  .pos {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
  
  
  }
  
  .pos:hover {
    border: 1px solid #00c6ff;
    cursor: pointer;
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
    line-height: 15px;
    /* height: 80px; */
    text-transform: capitalize;
  }
  
  .p-name {
    font-size: 12px;
    font-weight: 600;
  
  }
  
  .p-brand{
        font-size: 12px;
        font-weight: 600;
        color: gray;
      }
  .p-price p {
    position: absolute;
    bottom: 60px;
    left: 25px;
    color: #fff;
    border-radius: 10px;
    padding: 0px 8px !important;
    margin: 0px !important;
    font-size: 12px;
    font-weight: 600;
    /* background: linear-gradient(#355c0e,#5c66af); */
    background: linear-gradient(#00c6ff, #5c66af);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  
  .p-detail {
    position: absolute;
    bottom: 60px;
    right: 25px;
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
  
  /* .scroll-div {
      width: 100vw;
    
      height: 100vh;
      overflow-y: scroll;
      position: fixed;
      background: #f9f9f9;
     
    }
     */
  /* .scroll-div::-webkit-scrollbar {
      display: none;
    }
     */
  @media only screen and (max-width: 768px) {
    .scroll-div {
      position: absolute;
  
    }
  
  }
  </style>
  