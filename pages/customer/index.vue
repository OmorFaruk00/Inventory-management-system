<template>
  <div class="pb-5">
    <div class="body-shadow">
      <div class="row pr-2 mb-2">
        <div class="col col-sm-12 col-md-6 col-xl-6 d-flex">
          <h4 class="pt-3">Customer List</h4>
          <div class="d-block pt-3 pl-4">
            <label for=""> Show</label>
            <select class="mx-2 pr-2" v-model="list" @change="DataGet">
              <option value="10" selected>10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <label for="">  Entries of {{ customers.total }}</label>
          </div>
        </div>
        <div class="col-sm-12 col-xl-6 pt-2">
          
          <div class="row">
            <div class="col-sm-12 col-md-6 col-xl-4">
              <div class="form-group  ">
                <select class="form-control border-0" v-model="category" @click="searchcustomer('category',category)">
                  <option selected disabled value="">Search By Category</option>
                  <option v-for="(category, index) in category_list" :key="index" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>           
            <div class="col-sm-12 col-md-6 col-xl-8">
              <div class="input-group form-group  w-100">
                <input type="search" class="form-control border-0" placeholder="Search Name/Phone/Address" v-model="search"
                  @keyup="searchcustomer('global',search)">
                <button class="btn-search">
                  <img src="/images/search.png" height="30px" />
                </button>
              </div>
            </div>          
        </div>
        </div>
      </div>
      <div class="table-responsive" v-if="customers">
        <table class="table t-body">
          <thead class="t-head">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Category</th>              
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="(customer, index) in customers.data" :key="index">
            <tr class="t-row">
              <td>{{ customers.current_page * list - list + index + 1 }}</td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.phone }}</td>
              <td>{{ customer.email}}</td>
              <td>{{ customer.category}}</td>              
              <td v-if="customer.image"><img :src="base_url + '/images/customer/' + customer.image" alt="image"
                  style="height:50px;width: 80px;" />
              </td>
              <td v-else>No Image</td>
              <td>
                
                <nuxt-link :to="`customer/update/${customer.id}`" class="btn">
                  <img src="images/edit.png" />
                </nuxt-link>
                <button class="btn" @click="DataDelete(customer.id)">
                  <img src="images/delete.png" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- pagination         -->
      <vs-pagination v-if="customers.last_page > 1" :total-pages="customers.last_page" @change="DataGet"></vs-pagination>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Sidebar",
  created() {
    this.getCategory();
    this.DataGet();
  },
  data() {
    return {
      customers: "",
      brand: "",
      category: "",
      search: '',
      category_list: "",
      list: 10,
      search: null,
      type: null,
      item: null,
      base_url: process.env.url,

    };
  },
  methods: {
    searchcustomer(type, item) {
      this.type = type;
      this.item = item;
      this.DataGet();
    },
    DataGet(page = 1) {
      this.$axios
        .$post("/customer-search?page=" + page, { "type": this.type, "item": this.item, "search": this.search, "list": this.list })
        .then((response) => {
          this.customers = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCategory() {
      this.$axios
        .$get("/customer-category")
        .then((response) => {
          this.category_list = response;
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
            .$delete("/customer/" + id)
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
