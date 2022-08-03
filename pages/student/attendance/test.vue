<template>
    <div>
        <div class="container">
            <h4 class="pt-3 text-center font-weight-bold">Student Attendance</h4>
            <div class="row pt-3">
                <div class="col-md-6 col-xl-4 col-sm-12">
                    <select name="department_id" v-model="department_id" class="form-control select" required
                        @change="fetchBatch">
                        <option value="" disabled selected>Select Department</option>
                        <option disable v-for="(department, index) in departments" :key="index" :value="department.id"
                            v-text="department.department_name"></option>
                    </select>
                </div>
                <div class="col-md-6 col-xl-4 col-sm-12">
                    <input type="text" disabled class="form-control select" placeholder="Select Department first"
                        v-if="!batches" />
                    <select class="form-control select" v-model="batch_id" required v-else @change="fetchCourse">
                        <option selected value="">Select Batch</option>
                        <option v-for="batch in batches" :key="batch.id" :value="batch.id" v-text="batch.batch_name">
                        </option>
                    </select>
                </div>
                <div class="col-md-12 col-xl-4 col-sm-12">
                    <div class="form-group">
                        <input type="text" disabled class="form-control select" placeholder="Select Batch first"
                            v-if="!courses" />

                        <select class="form-control select" v-model="course_code" @change="fetchStudent" v-else>
                            <option disabled selected value="">Select Course</option>
                            <option disable v-for="(course, index) in courses" :key="index" :value="course.course_code"
                                v-text="course.course_name"></option>

                        </select>
                        <!-- <h6 v-if="errors.course_name" v-text="errors.course_name[0]"
                                    class="text-danger"></h6> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="panel-body table-responsive  form-shadow p-5 container mt-5" v-if="student">
            <table class="table table-striped text-center">
                <thead class="bg-dark text-white">
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in student" :key="index">
                        <td>{{ index + 1 }}</td>
                        <!-- <td v-model="name">{{student.student_name}}</td> -->
                        <td><input type="text" v-model="student.student_name" disabled class="text-center select"></td>
                        <td><input type="text" v-model="student.roll_no" disabled class="text-center select"></td>

                        <td>
                            <input type="checkbox" v-model="name[index + 0]" false-value="a" true-value="p"  class="text-center select">
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-end pt-3">
                <button class="btn-submit" @click.prevent="takeAttendance()">Take Attendance</button>
            </div>
        </div>
        <!-- <div v-else>
                        <h4>No Student Fount</h4>
                    </div> -->
    </div>
</template>
<script>
export default {
    layout: "Student-content",
    data() {
        return {
            student: [{
                // department_id: "",
                // batch_id: "",
                // course_code:'',
                student_name: '',

            }],
            department_id: 1,
            batch_id: 1,
            course_code: 1,
            departments: "",
            batches: "",
            courses: '',
            students: '',
            name: [],


        };
    },
    mounted() {
        this.fetchDepartmentInfo();
        // this.fetchCourse();
        this.fetchStudent();
    },
    methods: {
        fetchDepartmentInfo() {
            this.$axios
                .$get("/admission/department")
                .then((response) => {
                    this.departments = response;
                })
                .catch((error) => {
                    this.$toaster.error("Department Not found");
                });
        },
        fetchBatch() {
            this.$axios
                .$get("/admission/batch/" + this.department_id)
                .then((response) => {
                    this.batches = response.data;
                })
                .catch((error) => {
                    this.$toaster.error("Batch Not found");
                });
        },
        fetchCourse() {
            this.$axios.$get("/student/course/" + this.department_id).then((response) => {
                this.courses = response;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });
        },
        fetchStudent() {
            this.$axios
                .$get("/admission/department-wise-student/" + this.department_id + '/' + this.batch_id)
                .then((response) => {
                    this.student = response;
                    // this.name[1] = response.student_name;
                })
                .catch((error) => {
                    this.$toaster.error("Student Not found");
                });
        },

        takeAttendance() {
            console.log(this.name);

        }
    },
};
</script>
<style>
</style>