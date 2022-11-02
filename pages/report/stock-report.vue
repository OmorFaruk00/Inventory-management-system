<template>
    <div class="mt-3">
        <div class="body-shadow" id="main-content">
            <p>Stock Report</p>
            <div class="d-flex justify-content-center pb-3">
                <div class="col-sm-12 col-md-4 col-xl-3 mr-2">
                    <div class="input-group form-inline ">
                        <label for="" class="mr-4">Brand</label>
                        <select name="" id="" class="form-control" v-model="brand">
                            <option value="" selected> - All -</option>
                            <option v-for="(brand, index) in brand_list" :key="index" :value="brand.id">
                                {{ brand.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-xl-3 mr-2">
                    <div class="input-group form-inline ">
                        <label for="" class="mr-4">Category</label>
                        <select name="" id="" class="form-control" v-model="category">
                            <option value="" selected> - All -</option>
                            <option v-for="(category, index) in category_list" :key="index" :value="category.id">
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <button class=" btn-show " @click="getData()">Show</button>
            </div>
        </div>
        <div class="body-shadow" v-if="table">
            <div class=" d-flex justify-content-between">
                <h6 id="title">Stock Report Records</h6>
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
                            <th>Product Code</th>
                            <th>Product name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Unit Price</th>
                            <th>Sales Price</th>
                            <th>Current Stock</th>
                            <th> Stock Value</th>                            

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(report, index) in stock.reports" :key="index">
                            <td>{{ index + 1 }}</td>                            
                            <td>{{ report.product_name }}</td>
                            <td>{{ report.product_code }}</td>
                            <td>{{ report.brand }}</td>
                            <td>{{ report.category }}</td>
                            <td>{{ report.unit_price }}</td>
                            <td>{{ report.sales_price }}</td>
                            <td>{{ report.current_stock }}</td>
                            <td>{{ report.stock_value}}</td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right">Total</td>
                            <td>{{ stock.total_unit_price }}</td>
                            <td>{{ stock.total_sales_price }}</td>
                            <td>{{ stock.total_stock }}</td>
                            <td>{{ stock.total_stock_value }}</td>
                            

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
        this.BrandGet();
        this. getData();
    },
    data() {
        return {
            stock: '',
            category: "",
            brand: "",
            category_list: '',
            brand_list: '',
            table: false,

        };
    },
    methods: {
        CategoryGet() {
            this.$axios
                .$get("/category")
                .then((response) => {
                    this.category_list = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        BrandGet() {
            this.$axios
                .$get("/brand")
                .then((response) => {
                    this.brand_list = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        getData() {
            this.$axios
                .$post("/stock-report", { "brand": this.brand, "category": this.category })
                .then((response) => {
                    this.stock = response;
                    this.table = true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },


        ExportDataToPdf() {
            const doc = new jsPDF()
            doc.autoTable({ html: '#report' })
            doc.save('stock-report.pdf')
        },

        ExportDataToExcel() {
            let data = document.getElementById('report');
            var fp = XLSX.utils.table_to_book(data, { sheet: 'omor' });
            XLSX.write(fp, {
                bookType: 'xlsx',
                type: 'base64'
            });
            XLSX.writeFile(fp, 'stock-report.xlsx')
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