<template>
    <div class="form-bg py-5">
        <div class="col-md-6 offset-md-3">
            <div class="form-shadow p-5">
                <h3 class="title">Create lesson</h3>
                {{department_id}}
                <form class="">
                    <div class="row">
                         <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Course Name *</label>
                                <input type="text" class="form-control" placeholder="Enter Course Name"
                                    v-model="lesson.course_name" />
                                <h6 v-if="errors.course_name" v-text="errors.course_name[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>
                         <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Course Code *</label>
                                <input type="text" class="form-control" placeholder="Enter Course Code"
                                    v-model="lesson.course_code" />
                                <h6 v-if="errors.course_code" v-text="errors.course_code[0]"
                                    class="text-danger"></h6>
                            </div>
                        </div>
                        
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Department *</label>
                                <select class="form-control" v-model="lesson.department" @change="fetchBatch">
                                    <option disabled selected value="">Select Department</option>
                                    <option disable v-for="(department, index) in departments" :key="index"
                                        :value="department.id" v-text="department.department_name"></option>

                                </select>
                                <h6 v-if="errors.department" v-text="errors.department[0]" class="text-danger">
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Batch *</label>
                               
                                            <select class="form-control" v-model="lesson.batch" required 
                                                >
                                                <option selected value="">Select Batch</option>
                                                <option v-for="batch in batches" :key="batch.id" :value="batch.id"
                                                    v-text="batch.batch_name">
                                                </option>
                                            </select>
                                <h6 v-if="errors.batch" v-text="errors.batch[0]" class="text-danger"></h6>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label>Description *</label>
                                <input type="text" class="form-control" placeholder="Enter Description "
                                    v-model="lesson.description" />
                                <h6 v-if="errors.description" v-text="errors.description[0]" class="text-danger"></h6>
                            </div>
                        </div>                      

                        <div class="col-md-6 col-xl-6 col-sm-12">
                            <div class="form-group">
                                <label class="">File *</label>
                                <input type="file" class="form-control" placeholder=""
                                    @change="(e) => (lesson.new_file = e.target.files[0])" accept="image/*" />
                                <h6 v-if="errors.new_file" v-text="errors.new_file[0]" class="text-danger"></h6>
                            </div>
                        </div>

                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click.prevent="updatelesson()">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Student-content",
    mounted() {
        this.fetchDepartmentInfo();
        this.fetchlessonInfo();      
        

    },
    data() {
        return {
            errors: [],
            departments: '',           
            batches:'',
            lesson: {
                course_name:'',
                course_code:'',
                description: '',                
                department: '',
                batch: '',
                new_file: '',

            }
        }

    },
    methods: {
          fetchlessonInfo() {
            this.$axios.$get('lessonplan/edit/'+this.$route.params.id).then(response => {
                this.lesson = response;
                 this.fetchBatch() ;
            }).catch((error) => {
                console.log(error);
            });
        },
        fetchDepartmentInfo() {
            this.$axios.$get('/admission/department').then(response => {
                this.departments = response;          
            }).catch((error) => {
                this.$toaster.error("Department Not found");
            });

        },
        fetchBatch() {
            this.$axios.$get("/admission/batch/"+this.lesson.department).then((response) => {
                this.batches = response.data;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });

        },

        updatelesson() {

            let formData = new FormData();
            formData.append('course_name', this.lesson.course_name)
            formData.append('course_code', this.lesson.course_code)
            formData.append('department', this.lesson.department)
            formData.append('batch', this.lesson.batch)            
            formData.append('description', this.lesson.description)
              if(this.lesson.new_file){
                formData.append('new_file', this.lesson.new_file)
            }            
            // formData.append('file', this.lesson.file)

            this.$axios
                .$post("/lessonplan/update/"+this.$route.params.id, formData)
                .then((res) => {                    
                    this.errors = {};
                    this.$toaster.success("lesson Update Successfully");
                    this.$router.push("/student/lesson-plan");
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
