<template>
    <div>
        <div class="pt-2 pr-3 mb-2">
            <div class="row">
                <div class="col col-sm-5 col-xs-12">
                    <h4 class="pt-3">Brand List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right pt-1">
                    <button type="button" class="btn-add" style="border:none" data-toggle="modal"
                        data-target="#myModal">
                        <img src="images/add.png" alt="" height="30px">
                    </button>

                </div>
            </div>
        </div>
        <div class="pr-3">
            <table class="table table-striped table-bordered text-center t-body">
                <thead class="t-head">
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Image</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td>Mi</td>

                        <td>2300</td>

                        <td>
                            <button class="btn" @click="brandEdit(brand.id)"><img src="images/edit1.png"
                                    height="30px">


                            </button>
                            <button class="btn" @click="brandDelete(brand.id)"><img src="images/delete.png"
                                    height="30px">

                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>



        </div>


        <!-- The Modal -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header card-header">
                        <h4 class="modal-title">Brand Add</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label for=""> Brand Name <span class="text-danger">*</span></label>
                            <input class="form-control" type="text" placeholder="" v-model="brand">
                        </div>
                    </div>

                    <div class="modal-footer card-footer">
                        <button type="submit" class="btn-submit" @click="brandAdd()">Submit</button>
                        <!-- <button v-if="brand=!''" type="submit" class="btn-submit" @click="brandAdd()">Update</button> -->
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
        this.getbrand();

    },
    data() {
        return {
        brand:'',
        errors: {},
        };
    },
    methods: {
        brandAdd(){
            alert(this.brand);
            

        },
        brandUpdate(){
            alert(this.brand);
            

        },
        getbrand() {
            this.$axios
                .$get("/brand/show")
                .then((res) => {
                    this.brands = res;
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        this.auth = false;
                        this.$toaster.error(error.response.data.message);
                    }
                    console.log(error);
                });
        },
        brandEdit(id) {
            $("#brandUpdate").modal("show");
            this.$axios
                .$get("/brand/edit/" + id)
                .then((res) => {
                    this.brand = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        brandUpdate() {
            this.$axios
                .$post("/brand/update/" + this.brand.id, this.brand)
                .then((res) => {
                    this.getbrand();
                    $("#brandUpdate").modal("hide");
                    this.$toaster.success(res.message);
                    this.errors = "";


                })
                .catch((err) => {
                    console.log(err);
                    this.errors = err.response.data.errors;
                });
        },
        brandDelete(id) {
            if (confirm("Are you sure to delete this brand?")) {
                this.$axios
                    .$get("/brand/delete/" + id)
                    .then((res) => {
                        this.getbrand();
                        this.$toaster.error(res.message);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        brandStatus(id) {
            this.$axios
                .$get("/brand/status/" + id)
                .then((res) => {
                    console.log(res);
                    this.getbrand();
                    this.$toaster.success(res.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        },





    },
};
</script>
  <style scoped>
  </style>
  