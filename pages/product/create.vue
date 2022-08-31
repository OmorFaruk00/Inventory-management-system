<template>
    <div>
        <div class="form-bg mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="form-content">
                            <div class="form-horizontal ">
                                <h3 class="text-center py-3">Create Product</h3>
                                <div class="row">
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for=""> Product Name</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Product Code</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Brand</label>
                                            <select class="form-control">
                                                <option  selected disabled>Select brand</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Category</label>
                                            <select class="form-control">
                                                <option  selected disabled>Select category</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Unit</label>
                                            <select class="form-control">
                                                <option  selected disabled>Select unit</option>
                                                <option value="">Palettes</option>
                                                <option value="">Koil</option>
                                                <option value="">Box</option>
                                                <option value="">Gallon</option>
                                                <option value="">Junes 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Tax</label>
                                            <select class="form-control">
                                                <option  selected disabled>Select tex</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Sales Price</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Purchase Price</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">MRP</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Qty</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Stock Alert</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="form-group">
                                            <label for="">Image</label>
                                            <input class="form-control" type="file" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-xl-12">
                                        <div class="form-group">
                                            <label for="">Description</label>
                                            <textarea class="form-control" type="text" placeholder=""> </textarea>
                                        </div>
                                    </div>





                                </div>


                                <div class="d-flex justify-content-end mr-5 mt-3">
                                    <button class="btn-submit ">Submit</button>
                                </div>

                            </div>
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

}
</script>

<style lang="scss" scoped>
</style>