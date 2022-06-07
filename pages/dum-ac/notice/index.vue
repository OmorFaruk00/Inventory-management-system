<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Notice List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/dum-ac/notice/create" class="btn-add"
                    >Add Notice</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="panel-body table-responsive">
              <table class="table table-striped  text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <!-- <th>Slug</th> -->
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="notice in notices" :key="notice._id">
                    <td>{{ notice.id }}</td>
                    <td>{{ notice.title }}</td>
                    <td>{{ notice.description }}</td>
                    <!-- <td>{{ notice.slug }}</td> -->
                    <td>
                      <button
                        v-if="notice.status == 1"
                        class="btn-active"
                        @click="noticeStatus(notice.id,notice.status)"
                      >
                        Active
                      </button>
                      <button
                        v-if="notice.status == 0"
                        class="btn-inactive"
                        @click="noticeStatus(notice.id,notice.status)"
                      >
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="noticeEdit(notice.id)">Edit</button>
                      <button
                        class="btn-delete"
                        @click="deleteNotice(notice.id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
<div class="modal fade" id="NoticeUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Notice Update</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <div class="form-group">
          <label for="" class="">Title</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Title"
            v-model="notice.title"
          />
          <p
            v-if="errors.title"
            v-text="errors.title[0]"
            class="text-danger"
          ></p>
        </div>
        <div class="form-group">
          <label for="" class="">Description</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Description"
            v-model="notice.description"
          />
          <p
            v-if="errors.description"
            v-text="errors.description[0]"
            class="text-danger"
          ></p>
        </div>        
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
        <button type="button" class="btn btn-submit" @click="noticeUpdate()">Update</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Dum-content",
  mounted() {
    // this.$axios.$get("/sanctum/csrf-cookie");
    this.getNotice();
  },
  data() {
    return {
      notices: [],
           notice: {
        id: "",
        title: "",
        description: "",
        slug: "",
        
      },
      errors: {},
    };
  },
  methods: {
    getNotice() {
      this.$axios
        .$get("/notice/show")
        .then((res) => {
          this.notices = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    noticeEdit(id){
       $("#NoticeUpdate").modal("show");
       this.$axios
        .$get("/notice/edit/" + id)
        .then((res) => {            
            this.notice = res;
        
        })
        .catch((err) => {
          console.log(err);
        });

    },
    noticeUpdate(){
      this.$axios
        .$post("/notice/update/" + this.notice.id , this.notice)
        .then((res) => {          
          this.getNotice();
          $("#NoticeUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors="";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deleteNotice(id) {
        if(confirm("Are you sure to delete this notice?")){
           this.$axios
        .$get("/notice/delete/" + id)
        .then((res) => {
          this.getNotice();
          this.$toaster.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
        }
    
    },
    noticeStatus(id,status) {    
      this.$axios
        .$get("/notice/status/" + id + "/" + status)
        .then((res) => {
          this.getNotice();
          this.$toaster.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },   
        
    







  }
};
</script>
<style scoped></style>
