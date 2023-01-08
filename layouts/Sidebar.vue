<template>
  <div>
    <Topnav />
    <div class="d-flex " id="wrapper">
      <div id="sidebar-wrapper" class="">
        <div class="list-group sidebar">
          <nuxt-link class="sidebar-item" to="/dashboard"><img src="/images/dash.png" alt="">
            Dashboard</nuxt-link>

          <div class="sidebar-menu" @click.prevent="product = !product">
            <a><img src="/images/product.png" alt="" />
              Product Manage
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="product" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/product/create"><img src="/images/add1.png" alt="" />Add Product
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/product"><img src="/images/list.png" alt="" />Product lists
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/product/stock"><img src="/images/stock.png" alt="" />Stock Product
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/brand"><img src="/images/brand.png" alt="" />Brand</nuxt-link>
            <nuxt-link class="sidebar-item" to="/category"><img src="/images/category.png" alt="" />Category
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/unit"><img src="/images/unit.png" alt="" />Units</nuxt-link>
          </div>


          <div class="sidebar-menu" @click.prevent="pos = !pos">
            <a><img src="/images/pos.png" alt="" />
              Point of Seles
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="pos" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/pos/sale-create"><img src="/images/add1.png" alt="" />Sale Create
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/pos/sale-list"><img src="/images/list.png" alt="" />Sale lists</nuxt-link>

            <nuxt-link class="sidebar-item" to="/pos/sales_return"><img src="/images/return.png" alt="" /> Sales Return
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/pos/sales_return_list"><img src="/images/list.png" alt="" /> Sales
              Return List
            </nuxt-link>
          </div>


          <div class="sidebar-menu" @click.prevent="purchase = !purchase">
            <a><img src="/images/pur.png" alt="" />
              Purchase
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="purchase" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/purchase/create"><img src="/images/add1.png" alt="" />New Purchase
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/purchase/purchase-list"><img src="/images/list.png" alt="" />Purchase
              lists</nuxt-link>

            <nuxt-link class="sidebar-item" to="/purchase/purchase-return"><img src="/images/return.png" alt="" />
              Purchase Return
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/purchase/purchase-return-list"><img src="/images/list.png" alt="" />
              purchase Return List
            </nuxt-link>
          </div>


          <div class="sidebar-menu" @click.prevent="supplier = !supplier">
            <a><img src="/images/supplier.png" alt="" />
              Suppliers
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="supplier" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/supplier/create"><img src="/images/add1.png" alt="" />New Suppiler
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/supplier/supplier-list"><img src="/images/list.png" alt="" />Supplier
              List</nuxt-link>
          </div>


          <div class="sidebar-menu" @click.prevent="expense = !expense">
            <a><img src="/images/minus.png" alt="" />
              Expense
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="expense" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/expense/create"><img src="/images/add1.png" alt="" />New Expense
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/expense/expense-list"><img src="/images/list.png" alt="" />Expense List
            </nuxt-link>

            <nuxt-link class="sidebar-item" to="/expense/category"><img src="/images/category.png" alt="" /> Category
            </nuxt-link>
          </div>


          <div class="sidebar-menu" @click.prevent="report = !report">
            <a><img src="/images/reportbar.png" alt="" />
              Report
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="report" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/report/profit-loss-report"><img src="/images/report.png"
                alt="" />Profit & Loss Report
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/report/sales-report"><img src="/images/report.png" alt="" />Sales
              Report
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/report/sales-return-report"><img src="/images/report.png"
                alt="" />Sales Return Report
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/report/expense-report"><img src="/images/report.png" alt="" />Expense
              Report
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/report/stock-report"><img src="/images/report.png" alt="" />Stock
              Report
            </nuxt-link>
          </div>


          <div class="sidebar-menu" @click.prevent="customer = !customer">
            <a><img src="/images/customer.png" alt="" />
              Customer Manage
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="customer" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/customer/create"><img src="/images/add1.png" alt="" />Add Customer
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/customer"><img src="/images/list.png" alt="" />Customer lists
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/customer/category"><img src="/images/category.png" alt="" />Customer
              Category</nuxt-link>
          </div>


          <div class="sidebar-menu" @click.prevent="employee = !employee">
            <a><img src="/images/supplier.png" alt="" />
              Employee Manage
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor"
                class="bi bi-chevron-down float-right mt-2 mr-4 font-weight-bolder" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
          </div>
          <div v-if="employee" class="dropdown_item">
            <nuxt-link class="sidebar-item" to="/employee/employee-add"><img src="/images/add1.png" alt="" />Add
              Employee
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/employee/employee-list"><img src="/images/list.png" alt="" />Employee
              lists
            </nuxt-link>
            <!-- <nuxt-link class="sidebar-item" to="/employee/office-time"><img src="/images/time.png" alt="" /> Manage Office Time</nuxt-link> -->
            <nuxt-link class="sidebar-item" to="/employee/department"><img src="/images/dept.png" alt="" /> Department
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/employee/designation"><svg xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>Designation</nuxt-link>
          </div>
        </div>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {
  data() {
    return {
      product: false,
      pos: false,
      customer: false,
      employee: false,
      expense: false,
      report: false,
      supplier: false,
      purchase: false,
    }
  }

};
</script>
<style scoped>
.dropdown_item a {
  border: none;
  padding-left: 45px;
  line-height: 40px;
  color: #000;
  display: block;
  font-size: 14px;
  cursor: pointer;
  margin-left: -20px;

}

#wrapper {
  display: flex;
}

.sidebar {
  line-height: 40px;


}

.sidebar-menu:hover {
  background: #fff !important;
  cursor: pointer;

}

.sidebar-menu svg {
  padding-top: 5px !important;

}

.sidebar-item {
  font-size: 15px;
  color: #000;
  margin: 5px 0px;
}

.sidebar-item:hover {
  background: #fff !important;

}

.sidebar-item svg,
img {
  height: 15px;
  /* padding: 10px; */
  /* background: #fff; */
  color: #000;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* border-radius: 10px; */
  margin-left: 20px;
  margin-right: 10px;
}

.nuxt-link-exact-active {
  background: #fff !important;
}

.nuxt-link-exact-active svg,
.nuxt-link-exact-active img {
  /* background:#00c6ff; */
  /* background: linear-gradient(#00c6ff, #596cff); */
  color: #fff;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  padding-top: 50px;
  background: #f6f6f6;
  position: fixed;



}

#menu-toggle {
  background: #fff;
  border: none;
}

#menu-toggle:hover {
  background: #21537f;
}

#menu-toggle img {
  height: 15px;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
  height: 100vh;
  padding-left: 250px;
  /* background: #f2f2f2; */

}

#menu-toggle #page-content-wrapper {
  /* min-width: 100vw; */
  padding-left: 0px;

}

#wrapper.toggled #page-content-wrapper {
  padding-left: 0px;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
  padding-left: 0px;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

@media only screen and (max-width: 780px) {
  #page-content-wrapper {
    padding-left: 0px;

  }

  #wrapper.toggled #page-content-wrapper {
    padding-left: 250px;
  }
}
</style>
