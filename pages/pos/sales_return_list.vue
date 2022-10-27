<template>
    <div class="pb-5 body-shadow">
      <div id="main-content">
        <div class="row pr-2 mb-2">
          <div class="col-sm-12 col-md-6 col-xl-6 d-flex">
            <h4 class="">Sales Return List</h4>
            <div class="d-block pt-1 pl-4">
              <label for=""> Show</label>
              <select class="mx-2 pr-2" v-model="list" @change="getData">
                <option value="10" selected>10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <!-- <label for="">  Entries Of {{ customers.total }}</label> -->
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-6 pr-4 ">
          <div class="d-flex">
            <div class="input-group form-group w-50 mr-5 ">
              <input type="date" class="form-control" v-model="date" @change="getData" />
            </div>
            <div class="input-group form-group w-50 ">
              <input type="search" class="form-control" placeholder="Search" v-model="search" @keyup="getData" />
              <button class="btn-search">
                <img src="/images/search.png" height="30px" />
              </button>
            </div>
          </div>
        </div>
        </div>
     
      <div class="pr-3 table-responsive">
        <table class="table text-center t-body mb-3">
          <thead class="t-head">
            <tr>
              <th>SL</th>
              <th>Return Date</th>              
              <th>Customar Name</th>             
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sale,index) in sales_return.data" :key="index">
                <td>{{index+1}}</td>
                <td>{{sale.return_date}}</td>               
              <td>{{sale.customer_name}}</td>             
              <td>{{sale.total}}</td>
              <td>
                <button class="btn" @click="sales_returnInfo(sale.id)">
                  <img src="/images/info.png" height="30px" />
                </button>
  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      <vs-pagination v-if="sales_return.last_page > 1" :total-pages="sales_return.last_page" @change="getData"></vs-pagination>
  
      
      <div class="modal fade" id="sales_returnModal">
        <div class="modal-dialog modal-dialog-top mw-100 w-50">
  
              
               <!-- PDF Content Here -->          
          <div class="modal-content border-0" id="print">
            <div class="modal-body px-5"  v-if="sales_return_info">
              <div class="text-center my-4">
                <!-- <h4>Invoice</h4> -->
                <h4>Daily Shop</h4>
                <p> Bonani,Dhaka-1205 </p>
             
              </div>
              <div class="d-flex justify-content-between" style="line-height:10px">
                <div v-if="sales_return_info.customer != null">
                  <p v-if="sales_return_info.customer.name">Customer Name : {{sales_return_info.customer.name}}</p>
                  <p v-if="sales_return_info.customer.email">Email : {{sales_return_info.customer.email}}</p>
                  <p v-if="sales_return_info.customer.phone">Phone : {{sales_return_info.customer.phone}}</p>
                  <p v-if="sales_return_info.customer.address">Address : {{sales_return_info.customer.address}}</p>
                </div>
                <div style="text-align: right">
                  <!-- <p>Invoice No : POS{{sales_return_info.id}}</p> -->
                  <p>Date : {{sales_return_info.return_date}}</p>
                </div>
              </div>
              <div class="pr-3 table-responsive">
               <table class="table t-body mb-3">
                <thead class="t-head">
                  <tr>
                    <th>Sl</th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody v-if="sales_return_info.return_info">              
  
                  <tr v-for="(info,index) in sales_return_info.return_info" :key="index" class="t-row">
                    <td>{{index +1}} </td>
                    <td>{{info.name}}</td>
                    <td>{{info.code}}</td>
                    <td>{{info.qty}}</td>
  
                    <td>
                      <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt=""
                          height="15px">{{info.price}}
                      </div>
                    </td>
                    <td>
                      <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt=""
                          height="15px">{{info.amount}}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="float-right mt-4 w-25" style="line-height:12px;text-align: right;">
                <div class="d-flex justify-content-between">
                    <p>Total Qty : </p>
                    <p> {{ sales_return_info.total_qty}}</p>

                </div>
                <div class="d-flex justify-content-between">
                    <p>Subtotal : </p>
                    <p> <img src="/images/taka.png" alt="" height="15px"></img>{{ sales_return_info.subtotal}}</p>

                </div>
                <div class="d-flex justify-content-between">
                    <p>Discount : </p>
                    <p> <img src="/images/taka.png" alt="" height="15px"></img>{{ sales_return_info.discount}}</p>

                </div>
                <div class="d-flex justify-content-between">
                    <p>Total :</p>
                    <p> <img src="/images/taka.png" alt="" height="15px">{{ sales_return_info.grand_total}}</p>

                </div>              
                          
              </div>
            </div>
            <!-- Modal footer -->
           <div v-if="button" id="button">
            <div class=" px-4 py-5 float-right" >
              <!-- <button class="btn btn-info px-3" @click="generateReport">Download PDF</button> -->
              <button class="btn btn-info px-3" @click="PrintInvoice">Print</button>
              <button type="button" class="btn btn-danger px-3" data-dismiss="modal" >Close</button>
            </div> 
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
      this.getData();
    },
    data() {
      return {
        sales_return: '',
        search: '',
        list: 10,
        sales_return_info: '',
        button:true,
        date:'',
      };
    },
    methods: {
      getData(page = 1) {
        this.$axios
          .$post("/return-list?page=" + page, { "search": this.search, "list": this.list,"date":this.date })
          .then((response) => {
            this.sales_return = response;
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      sales_returnInfo(id) {
        this.$axios
          .$get("/return-info/" + id)
          .then((response) => {
            console.log(response);
            this.sales_return_info = response;
            $("#sales_returnModal").modal('show');
            // this.button = true;
          })
          .catch((error) => {
            console.log(error);
          });
      },
   
      PrintInvoice(){
        window.print();
  
  
  
      },
  
    },
  };
  </script>
  <style>
    @media print{
      #sidebar-wrapper, #main-content,#button{
        display: none !important;
      }
  
      #print{
        position: fixed;
        left: 0;
        top: 0;      
        width: 100% !important;
        
      }
  
    }
  </style>
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