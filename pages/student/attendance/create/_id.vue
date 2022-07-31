<template>
    <div class="mb-5">
        <h2 class="text-center pt-3">Take Attendance</h2>
        <div class="col-md-4 mx-auto mt-4" v-if="course">
            <div class="row p-3">
                <div class="col-md-12 col-sm-12 col-xl-6">
                    <p><strong>Department Name :</strong> {{ course.department[0].department_name }}</p>
                </div>
                <div class="col-md-12 col-sm-12 col-xl-6">
                    <p><strong>Batch :</strong> {{ course.batch[0].batch_name }}</p>
                </div>
                <div class="col-md-12 col-sm-12 col-xl-6">
                    <p><strong>Course Name :</strong> {{ course.course_name }}</p>
                </div>
                <div class="col-md-12 col-sm-12 col-xl-6">
                    <p><strong>Course Code :</strong> {{ course.course_code }}</p>
                </div>
            </div>
        </div>
        <div class=" col-md-6 mx-auto">
            <div class="row p-3">
                <div class="col-sm-12 col-md-12 col-xl-6">
                    <div class="form-group ">
                        <label for="date">Attendance Date *</label>
                        <input type="date" class="form-control select" v-model="date">
                        <h6 v-if="errors.date" v-text="errors.date[0]" class="text-danger mt-1"></h6>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-xl-6">
                    <div class="form-group ">
                        <label for="time">Attendance Time *</label>
                        <input type="time" class="form-control select" v-model="time">
                        <h6 v-if="errors.time" v-text="errors.time[0]" class="text-danger mt-1"></h6>
                    </div>
                </div>
            </div>


        </div>
        <div class="panel-body table-responsive  form-shadow p-5 container ">
            <table class="table table-striped text-center">
                <thead class="table-bg">
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Comments</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in students" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td><strong>{{ student.student_name }}</strong></td>
                        <td><strong>{{ student.roll_no }}</strong></td>
                        <td>
                            <textarea type="text" v-model="comment[index]" class="text-center select" rows="1"
                                cols="20"></textarea>
                        </td>
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" v-model="student_id" :value="student.id"
                                    class="text-center select" :id="index">
                                <label :for="index"></label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-end pt-5">
                <button class="btn-submit" @click.prevent="submitAttendance()">Take Attendance</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'Student-content',
    data() {
        return {
            course_id: '',
            course: '',
            students: '',
            department_id: '',
            department_name: '',
            batch_id: '',
            student_id: [],
            date: '',
            time: '',
            comment: [],
            errors: '',

        }
    }, mounted() {
        this.fetchAttendanceCourse();

    },
    methods: {
        fetchAttendanceCourse() {
            this.$axios.$get("/student/attendance-course/" + this.$route.params.id).then((response) => {
                this.course = response;
                this.department_id = response.department[0].id;
                this.department_name = response.department[0].department_name;
                this.course_id = response.id;
                this.batch_id = response.batch[0].id;
                this.fetchAttendanceStudent();
            }).catch((error) => {
                console.log(error);
            });
        },
        fetchAttendanceStudent() {
            this.$axios.$get("/student/attendance-student/" + this.department_id + '/' + this.batch_id).then((response) => {
                this.students = response;
            }).catch((error) => {
                console.log(error);
            });
        },
        submitAttendance() {
            if (confirm("Are you sure you want to submit this attendance?")) {
                this.$axios
                    .$post("/student/attendance-store", { 'student_id': this.student_id, 'comments': this.comment, 'date': this.date, 'time': this.time, 'batch_id': this.batch_id, 'department_name': this.department_name, 'department_id': this.department_id, 'course_code': this.course.course_code, 'course_name': this.course.course_name, 'course_id': this.course_id })
                    .then((res) => {
                        this.$toaster.success(res.message);

                    })
                    .catch((error) => {
                        if (error.response.status == 200) {
                            this.$toaster.success(error.response.message);
                        }
                        this.errors = error.response.data.errors;
                    });
            }
        }
    }
}
</script>
<style>
.table-bg {

    background: #337ab7;
    color: #fff;
}

.checkbox {
    display: inline-block;
}

.checkbox input[type=checkbox] {
    margin: 0;
    visibility: hidden;
    left: 1px;
    top: 1px;
}

.checkbox label {
    background: linear-gradient(to right, #f5f5f5 0, #f5f5f5 45%, #337ab7 55%, #007177 100%) 0 0;
    background-size: 650px 100%;
    width: 57px;
    height: 35px;
    margin: 0;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 500ms ease;
}

.checkbox label:before {
    content: "A";
    color: #fd1a15;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    line-height: 28px;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    position: absolute;
    left: 3px;
    top: 3px;
    transition: all 150ms ease;
}

.checkbox input[type=checkbox]:checked+label {
    background-position-x: -400px;
}

.checkbox input[type=checkbox]:checked+label:before {
    content: "P";
    color: #007177;
    left: 25px;
}

@media only screen and (max-width:767px) {
    .checkbox {
        margin: 0 0 20px;
    }
}
</style>