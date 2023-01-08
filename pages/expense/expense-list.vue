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
                            <input type="search" class="form-control" placeholder="Search" v-model="search"
                                @keyup="getData" />
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
                            <th>Expense Date</th>
                            <th>Category</th>
                            <th>Purpose</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(expense, index) in expenses.data" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ expense.date }}</td>
                            <td>{{ expense.category }}</td>
                            <td>{{ expense.purpose }}</td>
                            <td>{{ expense.amount }}</td>
                            <td>{{ expense.description }}</td>

                            <td>
                                <nuxt-link :to="`update/${expense.id}`" class="btn">
                                    <img src="/images/edit.png" />
                                </nuxt-link>
                                <button class="btn" @click="DataDelete(expense.id)">
                                    <img src="/images/delete.png" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <vs-pagination v-if="expenses.last_page > 1" :total-pages="expenses.last_page" @change="getData">
        </vs-pagination>
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
            expenses: '',
            search: '',
            list: 10,
            button: true,
            date: '',
        };
    },
    methods: {
        getData(page = 1) {
            this.$axios
                .$post("/expense-list?page=" + page, { "search": this.search, "list": this.list, "date": this.date })
                .then((response) => {
                    this.expenses = response;
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        DataDelete(id) {
            let that = this;
            this.$swal({
                title: "Are you sure.",
                text: "You want to delete this item?",
                type: "question",
                position: "top",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#C32A27",
                confirmButtonText: "Yes, Delete!",
            }).then(function (result) {
                if (result.value == true) {
                    that.$axios
                        .$delete("/expense/" + id)
                        .then((res) => {
                            that.getData();
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            });
        },


    },
};
</script>
<style>
@media print {

    #sidebar-wrapper,
    #main-content,
    #button {
        display: none !important;
    }

    #print {
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