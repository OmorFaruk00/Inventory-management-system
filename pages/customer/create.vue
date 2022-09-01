<template>
    <div>
        <div class="form-bg mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 mx-auto">
                        <div class="form-content">
                            <div class="form-horizontal ">
                                <div class="text-center card-header mb-4 d-flex justify-content-between">
                                    <h4 class="ml-3" >Product Add</h4>
                                    <div >
                                        <nuxt-link to="/product" class="text-dark mr-3 "><img src="/images/list.png" alt="list" height="20px">  </nuxt-link>

                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for=""> Product Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Product Code <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
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
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Category<span class="text-danger"> *</span></label>
                                            <select class="form-control">
                                                <option  selected disabled>Select category</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                                <option value="">test</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Unit<span class="text-danger"> *</span></label>
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
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Tax</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>                                  
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Purchase Price<span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>  
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">MRP</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>  
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Sales Price<span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>                             
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Qty <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Opening Quantity: <span class="text-danger"> *</span></label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for=""> Alert Qty</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                   
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Warranty</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="form-group">
                                            <label for="">Guarrantee:</label>
                                            <input class="form-control" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-4">
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
                                <div class="d-flex justify-content-end  mt-3 card-footer">
                                    <button class="btn-submit mr-4 ">Submit</button>
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