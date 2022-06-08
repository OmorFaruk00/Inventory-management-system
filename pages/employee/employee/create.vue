<template>
    <div class="form-bg pt-5">
        <div class="container">
            <div class="form-container">
                <h3 class="title">Create Employee</h3>
                <form class="form-horizontal">
                    <div class="row">
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control" placeholder="User Name" />
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Email ID</label>
                                <input type="email" class="form-control" placeholder="Email Address" />
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Password</label>
                                <input type="email" class="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="email" class="form-control" placeholder="Confirm Password" />
                            </div>
                        </div>
                    </div>


                    <h4 class="sub-title">Personal Information</h4>
                    <div class="row">

                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Date Of Birth *</label>
                                <input type="text" class="form-control" placeholder="Date Of Birth" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Personal Phone No *</label>
                                <input type="text" class="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Alternative Phone No</label>
                                <input type="text" class="form-control" placeholder="Alternative Phone No" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Home Phone No</label>
                                <input type="text" class="form-control" placeholder="Home Phone No" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>NID No *</label>
                                <input type="text" class="form-control" placeholder="NID No" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Private E-mail *</label>
                                <input type="text" class="form-control" placeholder="Private E-mail " />
                            </div>
                        </div>
                    </div>

                    <h4 class="sub-title">Office Information</h4>
                    <div class="row">
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Date Of Joining *</label>
                                <input type="date" class="form-control" placeholder="" />
                            </div>
                        </div>
                      
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Department *</label>
                                <select class="form-control">
                                    <option disabled selected value="">Select Department</option>
                                    <option value="paris">Paris</option>
                                    <option value="new york">New York</option>
                                </select>
                            </div>
                        </div>
                         <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Merit *</label>
                                <select class="form-control">
                                    <option disabled selected  value="">Select Merit</option>
                                    <option value="paris">Paris</option>
                                    <option value="new york">New York</option>
                                </select>
                            </div>
                        </div>
                         <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Designation *</label>
                                <select class="form-control">
                                    <option disabled selected  value="">Select Designation </option>
                                    <option value="paris">Paris</option>
                                    <option value="new york">New York</option>
                                </select>
                            </div>
                        </div>
                         <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Job Type*</label>
                                <select class="form-control">
                                    <option disabled selected  value="">Job Type</option>
                                    <option value="paris">Paris</option>
                                    <option value="new york">New York</option>
                                </select>
                            </div>
                        </div>
                         <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Image *</label>
                                <input type="file" class="form-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn signup">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Emp-content",
};
</script>
