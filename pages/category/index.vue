<template>
    <div class="body-shadow">
        <div class="pt-2 pr-3 mb-2">
            <div class="row">
                <div class="col col-sm-5 col-xs-12 d-flex">
                    <h4 class="pt-3">Category List</h4>
                    <div class="d-block pt-3 pl-4">
                        <label for=""> Show</label>
                        <select class="mx-2 pr-2" v-model="list" @change="DataGet">
                            <option value="10" selected>10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <label for="">  Entries of {{categorys.total}}</label>
                    </div>
                </div>
                <div class="col-sm-7 col-xs-12 text-right pt-1">
                    <button type="button" class="btn-add" style="border: none" data-toggle="modal" data-target="#Modal">
                        <img src="/images/add.png" alt="" height="30px" />
                    </button>
                </div>
            </div>
        </div>
        <div class="table-responsive" v-if="categorys">
            <table class="table text-center t-body">
                <thead class="t-head">
                    <tr>
                        <th>SL</th>
                        <th width="50%">Name</th>                        
                        <th width="25%">Action</th>
                    </tr>
                </thead>
                <tbody v-for="(category, index) in categorys.data" :key="index">
                    <tr class="t-row">
                        <td>{{ categorys.current_page * list - list + index + 1 }}</td>
                        <td>{{ category.name }}</td>                        
                        <td>
                            <button class="btn" @click="DataEdit(category.id)">
                                <img src="/images/edit.png" />
                            </button>
                            <button class="btn" @click="DataDelete(category.id)">
                                <img src="/images/delete.png" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- pagination         -->
        <vs-pagination v-if="categorys.last_page > 1"  :total-pages="categorys.last_page" @change="DataGet"></vs-pagination>
        <!-- The Modal -->
        <div class="modal fade" id="Modal" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header card-header">
                        <h4 v-if="add" class="modal-title"> Add Category </h4>
                        <h4 v-if="update" class="modal-title">Update Category </h4>
                        <button type="button" class="close" data-dismiss="modal" @click=" name = '';add = true;update = false;errors = '';
                        ">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="">
                                Category Name <span class="text-danger">*</span></label>
                            <input class="form-control" type="text" placeholder="" v-model="name" />
                            <p v-if="errors.name" v-text="errors.name[0]" class="text-danger mt-2"></p>
                        </div>                      
                    </div>
                    <div class="modal-footer card-footer">
                        <button v-if="add" type="button" class="btn-submit" @click="DataStore()">
                            Submit
                        </button>
                        <button v-if="update" type="button" class="btn-submit" @click="DataUpdate()">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Sidebar",
    created() {
        this.DataGet();
    },
    data() {
        return {
            add: true,
            update: false,
            name: "",            
            categorys: "",
            errors: {},
            id: "",
            list: 10,
        };
    },
    methods: {
        DataGet(page = 1) {
            this.$axios
                .$get("/category/" + this.list + "?page=" + page)
                .then((response) => {
                    this.categorys = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        DataStore() {
            this.$axios
                .$post("/category", { name: this.name })
                .then((response) => {
                    this.name = "";
                    this.errors = "";
                    $("#Modal").modal("hide");
                    this.DataGet();
                    this.$swal({
                        title: "Success",
                        position: "top",
                        text: response.message,
                        timer: 2000,
                        type: "success",
                        showConfirmButton: false,
                    });
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                });
        },
        DataEdit(id) {
            this.$axios
                .$get("/category/" + id + "/edit")
                .then((response) => {
                    this.id = response.id;
                    this.name = response.name;
                    $("#Modal").modal("show");
                    this.update = true;
                    this.add = false;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        DataUpdate(id) {
            this.$axios
                .$put("/category/" + this.id, { name: this.name })
                .then((response) => {
                    this.name = "";
                    this.errors = "";
                    this.update = false;
                    this.add = true;                    
                    $("#Modal").modal("hide");
                    this.DataGet();
                    this.$swal({
                        title: "Success",
                        position: "top",
                        text: response.message,
                        timer: 2000,
                        type: "success",
                        showConfirmButton: false,
                    });
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
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
                        .$delete("/category/" + id)
                        .then((res) => {
                            that.DataGet();
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

