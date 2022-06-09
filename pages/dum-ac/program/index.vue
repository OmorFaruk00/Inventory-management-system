<template>
  <div>
    <div class="pt-5">
      <div class="row">
        <div class="mx-auto col-md-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col col-sm-5 col-xs-12">
                  <h4 class="title">Program List</h4>
                </div>
                <div class="col-sm-7 col-xs-12 text-right">
                  <nuxt-link to="/dum-ac/program/create" class="btn-add"
                    >Add program</nuxt-link
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
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="program in programs" :key="program._id">
                    <td>{{ program.id }}</td>
                    <td>{{ program.title }}</td>                    
                    <td><img :src="'http://localhost:8000/images/dum/'+program.image" alt="image" style="height:80px"/></td>
                    <td>
                      <button
                        v-if="program.status == 1"
                        class="btn-active"
                        @click="programStatus(program.id,program.status)"
                      >
                        Active
                      </button>
                      <button
                        v-if="program.status == 0"
                        class="btn-inactive"
                        @click="programStatus(program.id,program.status)"
                      >
                        Inactive
                      </button>
                    </td>
                    <td>
                      <button class="btn-edit" @click="programEdit(program.id)">Edit</button>
                      <button
                        class="btn-delete"
                        @click="deleteprogram(program.id)"
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
<div class="modal fade" id="programUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">program Update</h5>
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
            v-model="program.title"
          />
          <p
            v-if="errors.title"
            v-text="errors.title[0]"
            class="text-danger"
          ></p>
        </div>              
          <div class="form-group">
          <label for="" class="">Image</label>
          <input
            required
            type="file"
            id="program_image"
            class=""
            name="image"
            @change="(e) => (program.image = e.target.files[0])"            
            accept="image/*"
          />
          <p
            v-if="errors.image"
            v-text="errors.image[0]"
            class="text-danger"
          ></p>
        </div>        
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
        <button type="button" class="btn btn-submit" @click="programUpdate()">Update</button>
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
    this.getprogram();
  },
  data() {
    return {
      programs: [],
          program: {        
        title: "",
        description: "",
        image:"",
        slug: "",        
      },
      errors: {},
    };
  },
  methods: {
    getprogram() {
      this.$axios
        .$get("/program/show")
        .then((res) => {
          this.programs = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    programEdit(id){
       $("#programUpdate").modal("show");
       this.$axios
        .$get("/program/edit/" + id)
        .then((res) => {            
            this.program = res;
        
        })
        .catch((err) => {
          console.log(err);
        });

    },
    programUpdate(){
        let formData = new FormData();
        formData.append('title', this.program.title)
        formData.append('description', this.program.description)        
        formData.append('image', this.program.image)
      this.$axios
        .$post("/program/update/" + this.program.id ,formData )
        .then((res) => {          
          this.getprogram();
          $("#programUpdate").modal("hide");
          this.$toaster.success(res.message);
          this.errors="";
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
    deleteprogram(id) {
        if(confirm("Are you sure to delete this program?")){
           this.$axios
        .$get("/program/delete/" + id)
        .then((res) => {
          this.getprogram();
          this.$toaster.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
        }
    
    },
    programStatus(id,status) {    
      this.$axios
        .$get("/program/status/" + id + "/" + status)
        .then((res) => {
          this.getprogram();
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
