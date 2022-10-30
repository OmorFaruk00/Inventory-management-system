<template>

    <div class="mt-3">
        <div class="body-shadow" id="main-content">
            <p >Sales Report</p>
            <div class="d-flex justify-content-center pb-3" >
                <div class="col-sm-12 col-md-4 col-xl-3 mr-5">
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
        <div class="body-shadow" v-show="table">
            <div class=" d-flex justify-content-between" >
                <h6 id="title">Sale Records Table</h6>
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
                            <th>Invoice Number</th>
                            <th>Sale Date</th>
                            <th>Customar Name</th>
                            <th>Total</th>
                            <th>Paid Payment</th>
                            <th>Due</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(report, index) in report.reports" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>POS{{ report.id }}</td>
                            <td>{{ report.sale_date }}</td>
                            <td>{{ report.customer_name }}</td>
                            <td>{{ report.total }}</td>
                            <td>{{ report.paid }}</td>
                            <td v-if="report.due">{{ report.due }}</td>
                            <td v-else>0</td>

                        </tr>
                        <tr>
                            <td colspan="4" class="text-right">Total</td>

                            <td>{{ report.grand_total }}</td>
                            <td>{{ report.total_paid }}</td>
                            <td>{{ report.total_due }}</td>

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

    // 


    mounted() {
        this.getData();

    },
    data() {
        return {
            report: '',
            start_date: '2022-10-01',
            end_date: '2022-10-30',
            table:false,


        };
    },
    methods: {
        ExportDataToPdf() {
            const doc = new jsPDF()
            doc.autoTable({ html: '#report' })
            doc.save('sales-report.pdf')
        },

        ExportDataToExcel() {
            let data = document.getElementById('report');
            var fp = XLSX.utils.table_to_book(data, { sheet: 'omor' });
            XLSX.write(fp, {
                bookType: 'xlsx',
                type: 'base64'
            });
            XLSX.writeFile(fp, 'sales-report.xlsx')
        },
        ExportDataPrint(){
            window.print();
       

        },


        getData() {
            this.$axios
                .$post("/sales-report", { "start_date": this.start_date, "end_date": this.end_date })
                .then((response) => {
                    this.report = response;
                    this.table = true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }

}
</script>

<style>
th,
td {
    padding: 5px !important
}

</style>