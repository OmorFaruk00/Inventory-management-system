<template>
    <div class="mt-3">
        <div class="body-shadow" id="main-content">
            <p>Profit Report</p>
            <div class="d-flex justify-content-center pb-3">
                <div class="col-sm-12 col-md-4 col-xl-3 mr-2">
                    <div class="input-group form-inline ">
                        <label for="" class="mr-4">Form date</label>
                        <div class="input-group-prepend">
                            <div class="input-group-text"><img src="/images/calender.png" height="15px" alt=""></div>
                        </div>
                        <input type="date" class="form-control" v-model="start_date">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-xl-3 mx-5">
                    <div class="input-group form-inline ">
                        <label for="" class="mr-4">To date</label>
                        <div class="input-group-prepend">
                            <div class="input-group-text"><img src="/images/calender.png" height="15px" alt=""></div>
                        </div>
                        <input type="date" class="form-control" v-model="end_date">
                    </div>
                </div>
               
                <button class=" btn-show " @click="getData()">Show</button>
            </div>
        </div>
        <div class="body-shadow" v-if="table">
            <div class=" d-flex justify-content-between">
                <h6 id="title">Profit Report Records</h6>
                <div id="button">
                    <button class="btn-export" @click="ExportDataToExcel()">Excel</button>
                    <button class="btn-export" @click="ExportDataToPdf()">Pdf</button>
                    <button class="btn-export" @click="ExportDataPrint()">Print</button>
                </div>
            </div>
            <div class="table-responsive" id="print">
                <table class="table table-bordered display" id="report" style="width:100%">
                    <thead class="table-body">
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Sales Quantity</th>
                            <th>Sales Price	</th>
                            <th>Purchase Price	</th>
                            <th>Gross Profit</th>
                                                
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(report, index) in profit" :key="index">
                            <td>{{ index + 1 }}</td>                            
                            <td>{{ report.product_name }}</td>
                            <td>{{ report.sale_qty }}</td>
                            <td>{{ report.sales_price }}</td>
                            <td>{{ report.purchase_price }}</td>
                            <td>{{ report.gross_profit }}</td>                            
                        </tr> 
                        <tr>
                            <td colspan="2" class="text-right">Total</td>
                            <td>{{total_qty}}</td>
                            <td>{{total_sale_price}}</td>
                            <td>{{total_purchase_price}}</td>
                            <td>{{total_profit}}</td>
                        </tr>                      
                    </tbody>
                </table>
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
        // this. getData();
    },
    data() {
        return {
            profit: '',
            start_date:'2022-10-01',
            end_date:'2022-11-02',          
            table: false,
            total_sale_price:'',
            total_purchase_price:'',
            total_profit:'',
            total_qty:'',

        };
    },
    methods: {
      

        getData() {
            var sale = 0;
            var purchase = 0;
            var qty = 0;
            var profit = 0;
            this.$axios
                .$post("/profit-loss-report", { "start_date": this.start_date, "end_date": this.end_date})
                .then((response) => {
                    this.profit = response.data;                    
                    this.table = true;
                    response.data.forEach((val)=> {
                        this.total_qty = qty += val.sale_qty;
                        this.total_sale_price = sale += val.sales_price;
                        this.total_purchase_price = purchase += val.purchase_price;
                        this.total_profit = profit += val.gross_profit;
                        })
                })
                .catch((error) => {
                    console.log(error);
                });
        },


        ExportDataToPdf() {
            const doc = new jsPDF()
            doc.autoTable({ html: '#report' })
            doc.save('profit-report.pdf')
        },

        ExportDataToExcel() {
            let data = document.getElementById('report');
            var fp = XLSX.utils.table_to_book(data, { sheet: 'omor' });
            XLSX.write(fp, {
                bookType: 'xlsx',
                type: 'base64'
            });
            XLSX.writeFile(fp, 'profit-report.xlsx')
        },

        ExportDataPrint() {
            window.print();
        }

    }
}
</script>

<style>
th,
td {
    padding: 5px !important
}
</style>