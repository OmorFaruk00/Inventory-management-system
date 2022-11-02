<template>
  
    
    <div class="body-shadow">
      
      <div class="pt-2 pr-3 mb-2">
          <div class="row">
              <div class="col-sm-12 col-md-6 col-xl-6 d-flex">
                  <h4 class="pt-3">Employee List</h4>
                  <div class="d-block pt-3 pl-4">
                      <label for=""> Show</label>
                      <select class="mx-2 pr-2" v-model="list" @change="getEmployee">
                          <option value="10" selected>10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                      </select>
                      <label for=""> Entries </label>
                  </div>
              </div>
              <div class="col-sm-12 col-md-6 col-xl-6  pt-1 d-flex justify-content-end">
                <div class="input-group form-group  w-50">
                <input type="search" class="form-control border-0" placeholder="Search By     Name/Phone" v-model="search"
                @keyup="getEmployee()">
                <button class="btn-search">
                  <img src="/images/search.png" height="30px" />
                </button>
              </div>
              </div>
          </div>
      </div>     
         
          <div class="mr-3 mb-3">
            <table class="table t-body">
              <thead class="t-head">
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                  <th>Depertment</th>
                  <th>Designation</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="employees">
                <tr v-for="(employee, index) in employees.data" :key="index" class="t-row">
                  <td>{{ employees.current_page * list - list + index + 1 }}</td>
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.email }}</td>
                  <td>{{ employee.personal_phone_no }}</td>
                  <td>{{ employee.designation.name }}</td>
                  <td>{{ employee.department.name}}</td>
            
                  <td><img :src="base_url + '/images/employee/' + employee.image" alt="image"
                  style="height:50px;width: 80px;" /></td>
                  <td>
                    <button v-if="employee.status == 1" class="btn" @click="employeeStatus(employee.id)">
                     <img src="/images/active.png" alt="">
                    </button>
                    <button v-if="employee.status == 0" class="btn" @click="employeeStatus(employee.id)">
                      <img src="/images/inactive.png" alt="">
                    </button>
                  </td>
                  <td class="pt-3">
                    <nuxt-link :to="`/employee/employee-update/${employee.id}`" class="btn"
                    ><img src="/images/edit.png" alt="">
                    </nuxt-link>
                    <nuxt-link :to="`/employee/employee/detail/${employee.id}`" class="btn"
                     ><img src="/images/info.png" alt=""></nuxt-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>            
                <!-- pagination         -->
      <vs-pagination v-if="employees.last_page > 1" :total-pages="employees.last_page" @change="getEmployee"></vs-pagination>
     
      </div>
    




</template>
<script>
export default {
layout: "Sidebar",
mounted() {
  this.getEmployee();

},
data() {
  return {      
    employees: '',
    search:'',
    list:10,
    errors: {},
    base_url: process.env.url,
  };
},
methods: {
    searchEmployee() {
      this.type = type;
      this.item = item;
      this. getEmployee();
    },
  
  getEmployee(page = 1) {
    this.$axios
      .$post("/employee-get/?page=" + page, {'search':this.search, "list":this.list})
      .then((response) => {
        this.employees = response;
        
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.auth = false;
          this.$toaster.error(error.response.data.message);
        }
        console.log(error);
      });
  },
  employeeDelete(id) {
    let that = this;
      this.$swal({
        title: "Are you sure.",
        text: "You want to delete this item?",
        type: "question",
        position: "center",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#C32A27",
        confirmButtonText: "Yes, Delete!",
      }).then(function (result) {
        if (result.value == true) {
          that.$axios
            .$delete("/employee/" + id)
            .then((res) => {
              that.getEmployee();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  },
  employeeStatus(id) {
    let that = this;
      this.$swal({
        title: "Are you sure.",
        text: "You want to Change this Status?",
        type: "question",
        position: "center",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#C32A27",
        confirmButtonText: "Yes, Change!",
      }).then(function (result) {
        if (result.value == true) {
          that.$axios
            .$get("/employee-status/" + id)
            .then((res) => {
              that.getEmployee();
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
