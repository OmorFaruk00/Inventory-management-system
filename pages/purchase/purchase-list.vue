<template>
    <div class="pb-5 body-shadow">
      <div id="main-content">
        <div class="row pr-2 mb-2">
          <div class="col-sm-12 col-md-6 col-xl-6 d-flex">
            <h4 class="">purchase List</h4>
            <div class="d-block pt-1 pl-4">
              <label for=""> Show</label>
              <select class="mx-2 pr-2" v-model="list" @change="getData">
                <option value="10" selected>10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <!-- <label for="">  Entries Of {{ suppliers.total }}</label> -->
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
          <table class="table t-body mb-3">
            <thead class="t-head">
              <tr>
                <th>SL</th>
                <th>Purchase Date</th>
                <th>Supplier Name</th>
                <th>Total</th>
                <th>Paid Payment</th>
                <th>Due</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(purchase, index) in purchase.data" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ purchase.purchase_date }}</td>
                <td>{{ purchase.supplier_name }}</td>
                <td>{{ purchase.total }}</td>
                <td>{{ purchase.paid }}</td>
                <td v-if="purchase.due">{{ purchase.due }}</td>
                <td v-else>0</td>
                <td>
                  <button class="btn" @click="purchaseInfo(purchase.id)">
                    <img src="/images/info.png" height="30px" />
                  </button>
  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <vs-pagination v-if="purchase.last_page > 1" :total-pages="purchase.last_page" @change="getData"></vs-pagination>
  
  
      <div class="modal fade" id="purchaseModal">
        <div class="modal-dialog modal-dialog-top mw-100 w-50">
  
  
          <!-- PDF Content Here -->
          <div class="modal-content border-0">
            <div class="modal-body px-5" v-if="purchase_info" id="print" >
              <div id="body">
                <div class="text-center my-4">
                <!-- <h4>Invoice</h4> -->
                <h4>Daily Shop</h4>
                <p> Bonani,Dhaka-1205 </p>
  
              </div>
              <div class="d-flex justify-content-between" style="line-height:10px">
                <div v-if="purchase_info.supplier != null">
                  <p v-if="purchase_info.supplier.name">Supplier Name : {{ purchase_info.supplier.name }}</p>
                  <p v-if="purchase_info.supplier.email">Email : {{ purchase_info.supplier.email }}</p>
                  <p v-if="purchase_info.supplier.phone">Phone : {{ purchase_info.supplier.phone }}</p>
                  <p v-if="purchase_info.supplier.address">Address : {{ purchase_info.supplier.address }}</p>
                </div>
                <div style="text-align: right">
                  <p>Invoice No : PS{{ purchase_info.id }}</p>
                  <p>Date : {{ purchase_info.purchase_date }}</p>
                </div>
              </div>
              </div>
              <table class="table card-body" >
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
                <tbody>
  
                  <tr v-for="(info, index) in purchase_info.purchase_details" :key="index" class="t-row">
                    <td>{{ index + 1 }} </td>
                    <td>{{ info.product.product_name }}</td>
                    <td>{{ info.product.product_code }}</td>
                    <td>{{ info.product_qty }}</td>
  
                    <td>
                      <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt=""
                          height="15px">{{ info.product_price }}
                      </div>
                    </td>
                    <td>
                      <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt=""
                          height="15px">{{ info.total_amount }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="float-right mt-4 w-25" style="line-height:12px;text-align: right;">
  
                <div class="d-flex justify-content-between">
                  <p>Subtotal : </p>
                  <p><img src="/images/taka.png" alt="" height="15px">{{ purchase_info.subtotal_amount }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p>Discount : </p>
                  <p> <img src="/images/taka.png" alt="" height="15px">{{ purchase_info.discount_amount }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p>Payable :</p>
                  <p><img src="/images/taka.png" alt="" height="15px">{{ purchase_info.payable_amount }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p>Paid : </p>
                  <p><img src="/images/taka.png" alt="" height="15px">{{ purchase_info.paid_amount }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p>Total Due : </p>
                  <p v-if="purchase_info.supplier.previous_due != null"> <img src="/images/taka.png" alt="" height="15px">{{
                      purchase_info.supplier.previous_due
                  }}
                  </p>
                </div>
  
  
              </div>
            </div>
            <!-- Modal footer -->
            <div v-if="button" id="button">
              <div class=" px-4 py-5 float-right">
                <!-- <button class="btn btn-info px-3" @click="generateReport">Download PDF</button> -->
                <button class=" btn btn-info px-3 bg-dark border-0" @click="GeneratePdf()">PDF</button>
                <button class="btn btn-info px-3" @click="PrintInvoice">Print</button>
                <button type="button" class="btn btn-danger px-3" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
  
        </div>
      </div>
  
  
  
    </div>
  
  </template>
  <script>
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
  
  export default {
    layout: "Sidebar",
  
    mounted() {
      this.getData();
    },
    data() {
      return {
        purchase: '',
        search: '',
        list: 10,
        purchase_info: '',
        button: true,
        date: '',
      };
    },
    methods: {
      getData(page = 1) {
        this.$axios
          .$post("/purchase?page=" + page, { "search": this.search, "list": this.list, "date": this.date })
          .then((response) => {
            this.purchase = response;;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      purchaseInfo(id) {
        this.$axios
          .$get("/purchase-info/" + id)
          .then((response) => {
            console.log(response);
            this.purchase_info = response;
            $("#purchaseModal").modal('show');
            // this.button = true;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    //   GeneratePdf() {       
    //     var pdf = new jsPDF('p','mm',[297, 210]);
    //     pdf.html(document.getElementById('print'), {
    //         callback: function (pdf) {
    //             pdf.save('test.pdf');
    //         }
    //     });
    // },
  
      PrintInvoice() {
        window.print();  
      },
  
    },
  };
  </script>
  <style>
  
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