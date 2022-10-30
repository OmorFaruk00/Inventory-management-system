<template>
    <div class="p-5">
        <div class="row">
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card p-bg">
                    <div class="d-content">
                        <h6>TOTAL PURCHASE DUE</h6>
                        <h4> {{info.total_parchase_due }} </h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/purches.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card d-bg">
                    <div class="d-content">
                        <h6>TOTAL SALES DUE</h6>
                        <h4>{{info.total_sale_due}}</h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/due.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card s-bg">
                    <div class="d-content">
                        <h6>TOTAL SALES AMOUNT</h6>
                        <h4>{{info.total_sale}}</h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/sales.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card e-bg">
                    <div class="d-content">
                        <h6>TOTAL EXPENSE AMOUNT</h6>
                        <h4>{{info.total_expense}}</h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/expense.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card p-bg">
                    <div class="d-content">
                        <h6>TODAY PURCHASE DUE</h6>
                        <h4>{{ info.today_parchase_due }}</h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/purches.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card d-bg">
                    <div class="d-content">
                        <h6>TODAY SALES DUE</h6>
                        <h4>{{info.today_sale_due}}</h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/due.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card s-bg">
                    <div class="d-content">
                        <h6>TODAY SALES AMOUNT</h6>
                        <h4>{{info.today_sale}}</h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/sales.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="d-flex justify-content-between d-card e-bg">
                    <div class="d-content">
                        <h6>TODAY EXPENSE AMOUNT</h6>
                        <h4>{{info.today_expense}}</h4>
                    </div>
                    <div class="d-icon">
                        <img src="/images/expense.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12 col-md-6 col-xl-3">
                <div class="info-card customer-bg">
                    <div class="d-flex justify-content-between px-4" style="margin-bottom:0px">
                        <div class="info-content pt-4">
                            <h6>Customers</h6>
                            <h4>{{info.total_customer}}</h4>
                        </div>
                        <div class="info-icon">
                            <img src="/images/users.png" alt="">
                        </div>
                    </div>
                    <nuxt-link to="/customer">
                        <div class="customer-show">
                            <p class="text-center text-white">Show <i class="fa fa-arrow-circle-right pl-2"
                                    aria-hidden="true"></i></p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="info-card supplier-bg">
                    <div class="d-flex justify-content-between px-4" style="margin-bottom:0px">
                        <div class="info-content pt-4">
                            <h6>SUPPLIERS</h6>
                            <h4>{{info.total_suppiler}}</h4>
                        </div>
                        <div class="info-icon">
                            <img src="/images/users.png" alt="">
                        </div>
                    </div>
                    <nuxt-link to="/supplier">
                        <div class="supplier-show">
                            <p class="text-center text-white">Show <i class="fa fa-arrow-circle-right pl-2"
                                    aria-hidden="true"></i></p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="info-card purchase-bg">
                    <div class="d-flex justify-content-between px-4" style="margin-bottom:0px">
                        <div class="info-content pt-4">
                            <h6>PURCHASE INVOICE</h6>
                            <h4>50</h4>
                        </div>
                        <div class="info-icon">
                            <img src="/images/show.png" alt="">
                        </div>
                    </div>
                    <nuxt-link to="/purchase">
                        <div class="purchase-show">
                            <p class="text-center text-white">Show <i class="fa fa-arrow-circle-right pl-2"
                                    aria-hidden="true"></i></p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
                <div class="info-card sale-bg">
                    <div class="d-flex justify-content-between px-4" style="margin-bottom:0px">
                        <div class="info-content pt-4">
                            <h6>SALE INVOICE</h6>
                            <h4>{{info.total_sale_invoice}}</h4>
                        </div>
                        <div class="info-icon">
                            <img src="/images/show.png" alt="">
                        </div>
                    </div>
                    <nuxt-link to="/pos">
                        <div class="sale-show">
                            <p class="text-center text-white">Show <i class="fa fa-arrow-circle-right pl-2"
                                    aria-hidden="true"></i></p>
                        </div>
                    </nuxt-link>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    layout: "Sidebar",
    data(){
        return {
            info:'',
        }
    },
    mounted(){
        this.getData();

    },
    methods:{
        getData() {
        this.$axios
            .$get("/dashboard", )
            .then((response) => {
                this.info = response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    },
};
</script>
<style lang="scss" scoped>

.d-card {
    border-radius: 8px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
    padding: 20px;
    margin-bottom: 30px;
}

.d-card:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.p-bg {
    background: linear-gradient(#3D9AE3, #234057);
}

.s-bg {
    background: linear-gradient(#259688, #365854);
}

.d-bg {
    background: linear-gradient(#567892, #526c80);
}

.e-bg {
    background: linear-gradient(#25A0C7, #174958);
}
.d-content h4,
h6 {
    font-weight: 600;
    color: #fff;
}

.d-icon {
    background: #f5f5f5;
    border-radius: 8px;
    // box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    //     rgba(17, 17, 26, 0.05) 0px 8px 32px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.d-icon svg,
img {
    padding: 5px;
    height: 70px;
    width: 70px;
    color: #fff;
}
.customer-show {
    background: linear-gradient(#C21956, #C21956);
    padding: 0px !important;
}

.info-card {    
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;    
    position: relative;
    width: 100%;
    margin-bottom: 40px;    
}
.info-card:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.info-icon img {
    height: 120px;
    width: 120px;
    opacity: 0.5;
}

.info-content h6,
h4 {
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
}
.customer-bg {
    background:  #D81B60;
}
.customer-show {
    background:  #C21956;    
}
.supplier-bg {
    background:  #A614A6;
}
.supplier-show {
    background:  #951195; 
}
.purchase-bg {
    background:  #188EF2;
}
.purchase-show {
    background:  #1378CF; 
}
.sale-bg {
    background:  #218000;
}
.sale-show {
    background:  #1C7302; 
}
</style>