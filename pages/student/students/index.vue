<template>
  <div>
    <div class="pt-3">
      <div class="table-responsive overflow-scroll">
        <table class="table table-striped text-center">
          <thead class="bg-dark text-white">
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Reg No</th>
              <th>Department</th>
              <th>batch</th>
              <!-- <th style="width:250px">Action</th> -->
            </tr>
          </thead>
          <tbody v-if="students">
            <tr v-for="(student, index) in students" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ student.student_name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.roll_no }}</td>
              <td>{{ student.reg_code }}</td>
              <td>{{ student.department[0].department_name }}</td>
              <td>{{ student.batch[0].batch_name }}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-12">
          Showing <span v-html="meta.from || 0"></span> to
          <span v-html="meta.to || 0"></span>
          of
          <span v-html="meta.total"></span> entries
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12" v-if="!loading">
          <nav aria-label="Page navigation example" class="my-3 mx-2">
            <ul class="pagination pagination-sm justify-content-end">
              <li class="page-item" :class="meta.current_page > 1 ? '' : 'disabled'">
                <a class="page-link" href="javaScript:void(0)" @click="paginatePreview" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item" v-for="(row, index) in meta.last_page" :key="index"
                :class="row == meta.current_page ? 'active' : ''">
                <a class="page-link" href="javaScript:void(0)" @click="paginatePageWise(row)" v-text="row"></a>
              </li>
              <li class="page-item" :class="meta.last_page > meta.current_page ? '' : 'disabled'">
                <a class="page-link" href="javaScript:void(0)" @click="paginateNext" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
</style>
<script>
export default {
  layout: 'Student-content',
  data() {
    return {
      students: "",
      links: '',
      meta: '',
      page: '',

    };
  },
  mounted() {
    this.getStudent();

  },

  methods: {
    getStudent() {
      return this.$axios.$get("/student/show?page=" + this.page)
        .then(response => {
          this.students = response.data;
          this.links = response.data.links;
          this.meta = response
        })
        .catch(error => {
          this.$toast.error(error.response.data.error, {
            icon: "error_outline"
          });
        })
    },
    paginatePreview() {
      let page_number = parseInt(this.meta.current_page - 1);
      this.page = page_number;
      this.getStudent();
    },

    paginateNext() {
      let page_number = parseInt(this.meta.current_page + 1);
      this.page = page_number;
      this.getStudent();

    },

    paginatePageWise(row) {
      window.scrollTo(0, 0);
      this.page = row;
      this.getStudent();
    },


  }


};
</script>

