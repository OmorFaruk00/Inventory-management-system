<template>
  <div class="pb-5">
    <div class="body-shadow">
      <div class="row pr-2 mb-2">
        <div class="col col-sm-12 col-xl-4 d-flex">
          <h4 class="pt-3">Product List</h4>
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
                <select class="form-control border-0" v-model="category" @change="DataGet()">
                  <option selected disabled value="">Search By Category</option>
                  <option v-for="(category, index) in product_list.category" :key="index" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-xl-3">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="brand" @change="DataGet()">
                  <option selected disabled value="">Search By Brand</option>
                  <option v-for="(brand, index) in product_list.brand" :key="index" :value="brand.id">
                    {{ brand.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-xl-6">
              <div class="input-group form-group  w-100">
                <input type="search" class="form-control border-0" placeholder="Search Name/Code/Barcode/Price" v-model="search"
                  @keyup="DataGet()">
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
              <th>Name</th>
              <th>Code</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="(product, index) in products.data" :key="index">
            <tr class="t-row">
              <td>{{ products.current_page * list - list + index + 1 }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.code }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.brand }}</td>
              <td>{{ product.unit}}</td>
              <td>{{ product.price }}</td>
              <td><img :src="base_url + '/images/product/' + product.image" alt="image"
                  style="height:50px;width: 80px;" /></td>
              <td>
                <nuxt-link :to="`product/update/${product.id}`" class="btn">
                  <img src="/images/edit.png" />
                </nuxt-link>
                <button class="btn" @click="DataDelete(product.id)">
                  <img src="/images/delete.png" />
                </button>
              </td>
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
      base_url: process.env.url,

    };
  },
  methods: {  
    DataGet(page = 1) {
      this.$axios
        .$post("/product-search?page=" + page, { "brand": this.brand, "category": this.category, "search": this.search, "list": this.list })
        .then((response) => {
          console.log(response);
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
    DataDelete(id) {
      let that = this;
      this.$swal({
        title: "Are you sure.",
        text: "You want to delete this item?",
        type: "question",
        position: "top",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#C32A27",
        confirmButtonText: "Yes, Delete!",
      }).then(function (result) {
        if (result.value == true) {
          that.$axios
            .$delete("/product/" + id)
            .then((res) => {
              that.DataGet();
            })
            .catch((error) => {
              console.log(error);
            });
        }
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
