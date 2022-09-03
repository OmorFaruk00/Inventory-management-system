<template>
  
    
      <div class="body-shadow">
        
        <div class="pt-2 pr-3 mb-2">
            <div class="row">
                <div class="col col-sm-5 col-xs-12 d-flex">
                    <h4 class="pt-3">Employee List</h4>
                    <div class="d-block pt-3 pl-4">
                        <label for=""> Show</label>
                        <select class="mx-2 pr-2" v-model="list" @change="getEmployee">
                            <option value="10" selected>10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <label for=""> Total entries {{employees.total}}</label>
                    </div>
                </div>
                <div class="col-sm-7 col-xs-12 text-right pt-1">
                    <nuxt-link to="/employee/employee/create" type="button" class="btn-add">
                        <img src="/images/add.png" alt="" height="30px" />
                    </nuxt-link>
                </div>
            </div>
        </div>
           
            <div class="mr-3">
              <table class="table t-body">
                <thead class="t-head">
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Depertment</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="employees">
                  <tr v-for="(employee, index) in employees.data" :key="index" class="t-row">
                    <td>{{ employees.current_page * list - list + index + 1 }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.rel_designation.designation }}</td>
                    <td>{{ employee.rel_department.department }}</td>
                    <td>{{ employee.email }}</td>
                    <td>{{ employee.personal_phone_no }}</td>
                    <td><img :src="'http://localhost:8000/images/emp/' + employee.profile_photo" alt="image"
                        style="height:80px;width: 100px;" /></td>
                    <td>
                      <button v-if="employee.status == 1" class="btn" @click="employeeStatus(employee.id)">
                       <img src="/images/active.png" alt="">
                      </button>
                      <button v-if="employee.status == 0" class="btn" @click="employeeStatus(employee.id)">
                        <img src="/images/inactive.png" alt="">
                      </button>
                    </td>
                    <td class="pt-3">
                      <nuxt-link :to="`/employee/employee/update/${employee.id}`" class="btn"
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
        <vs-pagination :total-pages="employees.last_page" @change="getEmployee"></vs-pagination>
         
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
      list:10,
      errors: {},
    };
  },
  methods: {
    getEmployee(page = 1) {
      this.$axios
        .$get("/employee/show-paginate/"+this.list+"?page=" + page)
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
      if (confirm("Are you sure to delete this employee?")) {
        this.$axios
          .$get("/employee/delete/" + id)
          .then((res) => {
            this.getEmployee();
            this.$toaster.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    employeeStatus(id, status) {
      this.$axios
        .$get("/employee/status/" + id)
        .then((res) => {
          this.getEmployee();
          this.$toaster.success(res.message);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.$toaster.error(error.response.data.message);
          }
          console.log(error);
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
  