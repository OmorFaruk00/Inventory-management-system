<template>
  <div class="pb-5 body-shadow">
    <div id="main-content">
      <div class="row pr-2 mb-2">
        <div class="col-sm-12 col-md-6 col-xl-6 d-flex">
          <h4 class="">Sales List</h4>
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

        <div class="col-sm-12 col-md-6 col-xl-6 pr-4">
          <div class="d-flex">
            <div class="input-group form-group w-50 mr-5">
              <input
                type="date"
                class="form-control"
                v-model="date"
                @change="getData"
              />
            </div>
            <div class="input-group form-group w-50">
              <input
                type="search"
                class="form-control"
                placeholder="Search"
                v-model="search"
                @keyup="getData"
              />
              <button class="btn-search">
                <img src="/images/search.png" height="30px" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table t-body mb-3">
          <thead class="t-head">
            <tr>
              <th>SL</th>
              <th>Sale Date</th>
              <th>Customar Name</th>
              <th>Total</th>
              <th>Paid Payment</th>
              <th>Due</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sale, index) in sales.data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ sale.sale_date }}</td>
              <td>{{ sale.customer_name }}</td>
              <td>{{ sale.total }}</td>
              <td>{{ sale.paid }}</td>
              <td v-if="sale.total>sale.paid">-{{ sale.due }}</td>
              <td v-else>+{{ sale.paid-sale.total }}</td>
              <td>
                <button class="btn" @click="salesInfo(sale.id)">
                  <img src="/images/info.png" height="30px" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <vs-pagination
      v-if="sales.last_page > 1"
      :total-pages="sales.last_page"
      @change="getData"
    ></vs-pagination>

    <div class="modal fade" id="salesModal">
      <div class="modal-dialog modal-dialog-top mw-100 w-50">
        <!-- PDF Content Here -->
        <div class="modal-content border-0" id="print">
          <div class="modal-body px-5" v-if="sales_info">
            <div class="text-center my-4" style="line-height: 10px">
              <!-- <h4>Invoice</h4> -->
              <h4>Daily Shop</h4>
              <p>Bonani,Dhaka-1205</p>
              <p><strong>Phone : </strong>011361532</p>
              <p><strong>Email : </strong>dailyshop@gmail.com</p>
            </div>
            <div
              class="d-flex justify-content-between"
              style="line-height: 10px"
            >
              <div v-if="sales_info.customer != null">
                <p v-if="sales_info.customer.name">
                  Customer Name : {{ sales_info.customer.name }}
                </p>
                <p v-if="sales_info.customer.email">
                  Email : {{ sales_info.customer.email }}
                </p>
                <p v-if="sales_info.customer.phone">
                  Phone : {{ sales_info.customer.phone }}
                </p>
                <p v-if="sales_info.customer.address">
                  Address : {{ sales_info.customer.address }}
                </p>
              </div>
              <div style="text-align: right">
                <p>Invoice No : POS{{ sales_info.id }}</p>
                <p>Date : {{ sales_info.sale_date }}</p>
              </div>
            </div>
            <table class="table card-body">
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
                <tr
                  v-for="(info, index) in sales_info.sale_details"
                  :key="index"
                  class="t-row"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ info.product.product_name }}</td>
                  <td>{{ info.product.product_code }}</td>
                  <td>{{ info.product_qty }}</td>

                  <td>
                    <div class="d-flex">
                      <img
                        class="mt-1"
                        src="/images/taka.png"
                        alt=""
                        height="15px"
                      />{{ info.product_price }}
                    </div>
                  </td>
                  <td>
                    <div class="d-flex">
                      <img
                        class="mt-1"
                        src="/images/taka.png"
                        alt=""
                        height="15px"
                      />{{ info.total_amount }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="float-right mt-4 w-25"
              style="line-height: 12px; text-align: right"
            >
              <div class="d-flex justify-content-between">
                <p>Subtotal :</p>
                <p>
                  <img src="/images/taka.png" alt="" height="15px" />{{
                    sales_info.subtotal_amount
                  }}
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Discount :</p>
                <p>
                  <img src="/images/taka.png" alt="" height="15px" />{{
                    sales_info.discount_amount
                  }}
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Payable :</p>
                <p>
                  <img src="/images/taka.png" alt="" height="15px" />{{
                    sales_info.payable_amount
                  }}
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Paid :</p>
                <p>
                  <img src="/images/taka.png" alt="" height="15px" />{{
                    sales_info.paid_amount
                  }}
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Previous Due :</p>
                <p v-if="sales_info.customer">
                  <img src="/images/taka.png" alt="" height="15px" />{{
                    sales_info.payable_amount - sales_info.subtotal_amount
                  }}
                </p>
                <p v-else>
                  <img src="/images/taka.png" alt="" height="15px" />{{ 0 }}
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Current Due :</p>
                <p v-if="sales_info.customer">
                  <img src="/images/taka.png" alt="" height="15px" />{{
                    sales_info.customer.previous_due
                  }}
                </p>
                <p v-else>
                  <img src="/images/taka.png" alt="" height="15px" />{{ 0 }}
                </p>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div v-if="button" id="button">
            <div class="px-4 py-5 float-right">
              <!-- <button class="btn btn-info px-3" @click="generateReport">Download PDF</button> -->
              <button class="btn btn-info px-3" @click="PrintInvoice">
                Print
              </button>
              <button
                type="button"
                class="btn btn-danger px-3"
                data-dismiss="modal"
              >
                Close
              </button>
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
      sales: "",
      search: "",
      list: 10,
      sales_info: "",
      button: true,
      date: "",
    };
  },
  methods: {
    getData(page = 1) {
      this.$axios
        .$post("/sales?page=" + page, {
          search: this.search,
          list: this.list,
          date: this.date,
        })
        .then((response) => {
          this.sales = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    salesInfo(id) {
      this.$axios
        .$get("/sales-info/" + id)
        .then((response) => {          
          this.sales_info = response;
          $("#salesModal").modal("show");
         
        })
        .catch((error) => {
          console.log(error);
        });
    },
 
    PrintInvoice() {
      window.print();
    },
  },
};
</script>
