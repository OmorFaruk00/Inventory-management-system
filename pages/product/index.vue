<template>
  <div class="body-shadow">
    <div class="pt-2 pr-3 mb-2">
      <div class="row">
        <div class="col col-sm-5 col-xs-12 d-flex">
          <h4 class="pt-3">Product List</h4>
          <div class="d-block pt-3 pl-4">
            <label for=""> Show</label>
            <select class="mx-2 pr-2" v-model="list" @change="DataGet">
              <option value="10" selected>10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <label for=""> Total entries {{ products.total }}</label>
          </div>
        </div>
        <div class="col-sm-7 col-xs-12">
          <div class="input-group form-group w-50 float-right">
            <input type="search" class="form-control" placeholder="Search" />
            <button class="btn-search">
              <img src="/images/search.png" height="30px" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pr-3" v-if="products">
      <table class="table text-center t-body">
        <thead class="t-head">
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Code</th>
            <th>Category</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="(product, index) in products.data" :key="index">
          <tr class="t-row">
            <td>{{ products.current_page * list - list + index + 1 }}</td>
            <td>{{ product.product_name }}</td>
            <td>{{ product.product_code }}</td>
            <td>{{ product.category.name }}</td>
            <td>{{ product.unit.name }}</td>
            <td>{{ product.sales_price }}</td>
            <td><img :src=" base_url+'/images/product/' + product.image" alt="image"
                        style="height:80px;width: 100px;" /></td>
                    
            <td>
              <nuxt-link :to="`product/update/${product.id}`" class="btn" >
                <img src="images/edit.png" />
              </nuxt-link>
              <button class="btn" @click="DataDelete(product.id)">
                <img src="images/delete.png" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- pagination         -->
    <vs-pagination :total-pages="products.last_page" @change="DataGet"></vs-pagination>
   
 
  </div>
</template>
<script>
export default {
  layout: "Sidebar",
  mounted() {
    this.DataGet();
  },
  data() {
    return {
      add: true,
      update: false,
      name: "",
      products: "",
      errors: {},
      id: "",
      list: 10,
      base_url: process.env.url,
    };
  },
  methods: {
    DataGet(page = 1) {
      this.$axios
        .$get("/product/" + this.list + "?page=" + page)
        .then((response) => {
          this.products = response;
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
.vs-pagination>li.vs-pagination--active a {
  background: #f5f5f5 !important;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
