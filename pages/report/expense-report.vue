<template>
    <div class="mt-3">
        <div class="body-shadow" id="main-content">
            <p>Sales Report</p>
            <div class="d-flex justify-content-center pb-3">
                <div class="col-sm-12 col-md-4 col-xl-3 mr-2">
                    <div class="input-group form-inline ">
                        <label for="" class="mr-4">Category</label>
                        <select name="" id="" class="form-control" v-model="category">
                            <option value="" selected > - All -</option>
                            <option v-for="(category, index) in category_list" :key="index"
                                                    :value="category.id">
                                                    {{ category.name }}
                                                </option>
                        </select>
                       
                    </div>
                </div>
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
                            <th>Category Name</th>
                            <th>Purpose</th>
                            <th>Description</th>
                            <th>Total</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(report, index) in expense.reports" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>EX{{ report.id }}</td>                            
                            <td>{{ report.date }}</td>
                            <td>{{ report.category_name }}</td>
                            <td>{{ report.purpose }}</td>
                            <td>{{ report.description }}</td>
                            <td>{{ report.amount }}</td>                           
                        </tr>
                        <tr>
                            <td colspan="6" class="text-right">Total</td>
                            <td>{{ expense.total_amount }}</td>
                            
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
        this.CategoryGet();
    },
    data() {
        return {
            expense: '',
            start_date: '',
            end_date: '',
            category: "",
            category_list:'',
            table: false,

        };
    },
    methods: {
    CategoryGet() {
            this.$axios
                .$get("/expense-category")
                .then((response) => {
                    this.category_list = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

    getData() {
            this.$axios
                .$post("/expense-report", { "start_date": this.start_date, "end_date": this.end_date,"category":this.category })
                .then((response) => {
                    this.expense = response;
                    this.table = true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
  

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