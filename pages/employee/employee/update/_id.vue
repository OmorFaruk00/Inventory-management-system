<template>
    <div class="form-bg py-5">
        <div class="container">
            <div class="form-container">
                <h3 class="title">Update Employee</h3>
                <form class="form-horizontal">
                    <div class="row">
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Employee Name *</label>
                                <input type="text" class="form-control" placeholder="User Name"
                                    v-model="employee.name" />
                                <h6 v-if="errors.name" v-text="errors.name[0]" class="text-danger"></h6>
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Email ID *</label>
                                <input type="email" class="form-control" placeholder="Email Address"
                                    v-model="employee.email" />
                                <h6 v-if="errors.email" v-text="errors.email[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <!-- <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Password*</label>
                                <input type="password" class="form-control" placeholder="" id="showpassword"
                                    v-model="employee.password" />
                                <h6 v-if="errors.password" v-text="errors.password[0]" class="text-danger"></h6>


                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control" placeholder=""
                                    v-model="employee.password_confirmation" />
                                <h6 v-if="errors.password_confirmation" v-text="errors.password_confirmation[0]"
                                    class="text-danger"></h6>


                            </div>
                        </div> -->
                    </div>


                    <h4 class="sub-title">Personal Information</h4>
                    <div class="row">

                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Date Of Birth *</label>
                                <input type="date" class="form-control" placeholder="Date Of Birth"
                                    v-model="employee.date_of_birth" />
                                <h6 v-if="errors.date_of_birth" v-text="errors.date_of_birth[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Personal Phone No *</label>
                                <input type="text" class="form-control" placeholder="Phone Number"
                                    v-model="employee.personal_phone_no" />
                                <h6 v-if="errors.personal_phone_no" v-text="errors.personal_phone_no[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Alternative Phone No</label>
                                <input type="text" class="form-control" placeholder="Alternative Phone No"
                                    v-model="employee.alternative_phone_no" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Home Phone No</label>
                                <input type="text" class="form-control" placeholder="Home Phone No"
                                    v-model="employee.home_phone_no" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>NID No *</label>
                                <input type="text" class="form-control" placeholder="NID No"
                                    v-model="employee.nid_no" />
                                <h6 v-if="errors.nid_no" v-text="errors.nid_no[0]" class="text-danger"></h6>
                            </div>
                        </div>

                    </div>

                    <h4 class="sub-title">Office Information</h4>
                    <div class="row">
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Date Of Joining *</label>
                                <input type="date" class="form-control" placeholder=""
                                    v-model="employee.date_of_join" />
                                <h6 v-if="errors.date_of_join" v-text="errors.date_of_join[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Department *</label>
                                <select class="form-control" v-model="employee.department_id">
                                    <option disabled selected value="">Select Department</option>
                                    <option v-for="department in departments" :key="department._id"
                                        :value="department.id">{{ department.department }}</option>
                                </select>
                                <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Merit </label>
                                <select class="form-control" v-model="employee.merit">
                                    <option disabled selected value="">Select Merit</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>

                                </select>

                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Designation *</label>
                                <select class="form-control" v-model="employee.designation_id">
                                    <option disabled selected value="">Select Designation </option>
                                    <option v-for="designation in designations" :key="designation._id"
                                        :value="designation.id">{{ designation.designation }}</option>

                                </select>
                                <h6 v-if="errors.designation" v-text="errors.designation[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Job Type*</label>
                                <select class="form-control" v-model="employee.jobtype">
                                    <option disabled selected value="">Job Type</option>
                                    <option value="full time">Full Time</option>
                                    <option value="part time">Part Time</option>
                                </select>
                                <h6 v-if="errors.jobtype" v-text="errors.jobtype[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-4 col-sm-12">
                            <div class="form-group">
                                <label>Image *</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (employee.image = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.image" v-text="errors.image[0]" class="text-danger"></h6>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="updateEmployee()">Update Account</button>
                    </div>
                    <!-- <p class="text-danger">{{ employee }}</p> -->
                </form>
                
                

            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Emp-content",
    mounted() {
        this.employeeEdit() ;
        this.getDesignation();
        this.getDepartment();

    },
    
    data() {
        return {
            designations: [],
            departments: [],
            errors: [],
            employee: {
                name: '',
                email: '',
                // password: '',
                // password_confirmation: '',
                date_of_birth: '',
                personal_phone_no: '',
                alternative_phone_no: '',
                home_phone_no: '',
                nid_no: '',
                date_of_join: '',
                department_id: '',
                designation_id: '',
                jobtype: '',
                merit: '',

            }
        }

    },
    methods: {
          employeeEdit() {      
      this.$axios
        .$get("/employee/edit/" +this.$route.params.id)
        .then((res) => {
            
            console.log(res);
          this.employee = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
        getDesignation() {
            this.$axios
                .$get("/designation/show")
                .then((res) => {
                    this.designations = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getDepartment() {
            this.$axios
                .$get("/department/show")
                .then((res) => {
                    this.departments = res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateEmployee() {
            console.log(this.employee);


            let formData = new FormData();
            formData.append('name', this.employee.name)
            formData.append('email', this.employee.email)
            // formData.append('password', this.employee.password)
            // formData.append('password_confirmation', this.employee.password_confirmation)
            formData.append('date_of_birth', this.employee.date_of_birth)
            formData.append('personal_phone_no', this.employee.personal_phone_no)
            formData.append('alternative_phone_no', this.employee.alternative_phone_no)
            formData.append('home_phone_no', this.employee.home_phone_no)
            formData.append('nid_no', this.employee.nid_no)
            formData.append('date_of_join', this.employee.date_of_join)
            formData.append('department', this.employee.department_id)
            formData.append('designation', this.employee.designation_id)
            formData.append('jobtype', this.employee.jobtype)
            formData.append('merit', this.employee.merit)
            formData.append('image', this.employee.image)


            this.$axios
                .$post("/employee/update/" + this.$route.params.id, formData)
                .then((res) => {
                    this.employee = "";
                    this.errors = {};
                    this.$toaster.success(res.message);
                      this.$router.push("/employee/employee");       
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },





    },


};

</script>
<style scoped>
</style>
