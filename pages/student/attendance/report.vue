<template>
    <div class="form-bg py-5">
        <div class="col-md-8 offset-md-2" v-if="show">
            <div class="form-shadow p-5">
                <h3 class="title">find report </h3>
                <div class="row">
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Department *</label>
                            <select class="form-control" v-model="report.department" @change="fetchBatch()">
                                <option disabled selected value="">Select Department</option>
                                <option disable v-for="(department, index) in departments" :key="index"
                                    :value="department.id" v-text="department.department_name"></option>

                            </select>
                            <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger">
                            </h6>
                        </div>
                    </div>
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Batch *</label>
                            <input type="text" disabled class="form-control" placeholder="Select Department First"
                                v-if="!batches" />
                            <select class="form-control" v-model="report.batch" required v-else @change="fetchCourse()">
                                <option selected value="">Select Batch</option>
                                <option v-for="batch in batches" :key="batch.id" :value="batch.id"
                                    v-text="batch.batch_name">
                                </option>
                            </select>
                            <h6 v-if="errors.batch" v-text="errors.batch[0]" class="text-danger"></h6>
                        </div>
                    </div>
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Course Name *</label>
                            <input type="text" disabled class="form-control" placeholder="Select Batch First"
                                v-if="!courses" />

                            <select class="form-control" v-model="report.course_name" @change="fetchCourseCode" v-else>
                                <option disabled selected value="">Select Course</option>
                                <option disable v-for="(course, index) in courses" :key="index"
                                    :value="course.course_name" v-text="course.course_name"></option>

                            </select>
                            <h6 v-if="errors.course_name" v-text="errors.course_name[0]" class="text-danger"></h6>
                        </div>
                    </div>
                    <div class="col-md-12 col-xl-6 col-sm-12">
                        <div class="form-group">
                            <label>Course Code *</label>
                            <input type="text" disabled class="form-control" placeholder="Select Course First"
                                v-if="report.course_code == ''" />
                            <input type="text" class="form-control" placeholder="Enter Course Code"
                                v-model="report.course_code" v-else />
                            <h6 v-if="errors.course_code" v-text="errors.course_code[0]" class="text-danger"></h6>
                        </div>
                    </div>

                </div>
                <div class="d-flex justify-content-end pt-3">
                    <button class="btn-submit" @click.prevent="findReport()">Find</button>
                </div>
            </div>
        </div>
        <!-- {{report_list}} -->
        <div v-for="(report, index) in report_list" :key="index">
            <h3>Date:{{ index }}</h3>
            <table class="table table-striped text-center">
                <thead class="bg-dark text-white">
                    <tr>
                        <th>SL</th>
                        <th>Department</th>
                        <th>Batch</th>
                        <th>Course</th>
                        <th>Course Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(reports, index) in report" :key="index">
                        <td>{{ index }}</td>
                        <td>{{ reports }}</td>
                        <!-- <td>{{report.batch[0].batch_name}}</td>
                    <td>{{report.course_name}}</td>
                    <td>{{report.course_code}}</td> -->

                    </tr>

                </tbody>
            </table>

        </div>

        <!-- <table class="table table-striped text-center">
                <thead class="bg-dark text-white">
                    <tr>
                        <th>SL</th>
                        <th>Department</th>
                        <th>Batch</th>
                        <th>Course</th>                        
                        <th>Course Code</th>                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(report,index) in report_list" :key="index">
                    <td>{{index}}</td>
                    <td>{{report}}</td>
                   
                    
                    </tr>
                 
                </tbody>
            </table> -->
    </div>
</template>
<script>
export default {
    layout: "Student-content",
    mounted() {
        this.fetchDepartmentInfo();
    },
    data() {
        return {
            errors: [],
            departments: '',
            department_id: '',
            batches: '',
            courses: '',
            show: true,
            report_list: '',
            report: {
                course_name: '',
                course_code: '',
                description: '',
                department: '',
                batch: '',
                file: '',
            }
        }

    },
    methods: {
        fetchDepartmentInfo() {
            this.$axios.$get('/admission/department').then(response => {
                this.departments = response;
            }).catch((error) => {
                this.$toaster.error("Department Not found");
            });
        },
        fetchBatch() {
            this.$axios.$get("/admission/batch/" + this.report.department).then((response) => {
                this.batches = response.data;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchCourse() {
            this.$axios.$get("/student/course/" + this.report.department).then((response) => {
                this.courses = response;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchCourseCode() {
            this.$axios.$get("/student/course-code/" + this.report.course_name).then((response) => {
                this.report.course_code = response[0].course_code;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },

        findReport() {
            let formData = new FormData();
            formData.append('course_name', this.report.course_name)
            formData.append('course_code', this.report.course_code)
            formData.append('department_id', this.report.department)
            formData.append('batch_id', this.report.batch)
            this.$axios
                .$post("/student/attendance-report", formData)
                .then((response) => {
                    console.log(response);
                    this.show = false;
                    this.report_list = response;
                    // this.errors = {};
                    // this.$toaster.success("report Sheet Added Successfully");
                    // this.$router.push("/student/report-sheet");
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
