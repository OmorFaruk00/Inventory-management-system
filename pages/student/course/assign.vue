<template>
    <div>
        <div class="pt-5">
            <div class="row">
                <div class="mx-auto col-md-12">
                    <div class="panel">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col col-sm-5 col-xs-12">
                                    <h6 class="title">course List</h6>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body table-responsive">
                            <table class="table table-striped table-bordered text-center">
                                <thead class="bg-dark text-white">
                                    <tr>
                                        <th>Sl</th>
                                        <th>Department</th>
                                        <th>Batch</th>
                                        <th>Course Name</th>
                                        <th>Course Code</th>
                                        <th>Course Teacher</th>
                                        <th v-if="$auth.user.permission.includes('Assign-course')">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(course, index) in courses" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ course.department[0].department_name }}</td>
                                        <td>{{ course.batch[0].batch_name }}</td>
                                        <td>{{ course.course_name }}</td>
                                        <td>{{ course.course_code }}</td>

                                        <td v-if="course.assigned_by_id != null">{{ course.teacher[0].name }}</td>
                                        <td v-else>Not Assigned</td>
                                        <td v-if="$auth.user.permission.includes('Assign-course')">
                                            <button class="btn-edit" 
                                                @click="assignCourseTeacher(course.id)" >Assign</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- The Modal -->
        <div class="modal fade" id="assignModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Assign Course Teacher</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal body -->
                    <div class="form-group p-4">
                        <label>Assign</label>
                        <select class="form-control" v-model="assign">
                            <option disabled selected value="">Select Teacher</option>
                            <option disable v-for="(teacher, index) in teachers" :key="index" :value="teacher.id"
                                v-text="teacher.name"></option>
                        </select>
                        <!-- <h6 v-if="errors.assign" v-text="errors.assign[0]" class="text-danger">
                                </h6> -->
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn-submit" @click="SubmitCourseTeacher">Assign</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'Student-content',
    data() {
        return {
            courses: '',
            teachers: '',
            assign: '',
            course_id: ''

        }
    },
    mounted() {
        this.fetchcourseInfo();
        this.fetchTeacher();

    },
    methods: {
        fetchcourseInfo() {
            this.$axios.$get('/student/course-show').then(response => {
                this.courses = response;
                console.log("course", response);
            }).catch((error) => {
                console.log(error);
            });


        },
        fetchTeacher() {
            this.$axios.$get("/employee/show").then((response) => {
                this.teachers = response;
            }).catch((error) => {
                this.$toaster.error("Employee Not found");
            });

        },
        assignCourseTeacher($id) {
            $('#assignModal').modal('show');
            this.course_id = $id;

        },
        SubmitCourseTeacher() {
            this.$axios.$get("/student/assign-course-teacher/" + this.course_id + "/" + this.assign).then((response) => {
                this.$toaster.success(response.message);
                this.fetchcourseInfo();
                $('#assignModal').modal('hide');
            }).catch((error) => {
                if (error.response.status == 401) {
                    this.auth = false;
                    this.$toaster.error(error.response.data.message);
                }
                console.log(error);
            });

        }


    }

}
</script>