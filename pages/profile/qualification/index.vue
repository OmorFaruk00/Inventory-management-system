<template>
  
     <div class="offset-md-3 col-md-6">
       <div class="qualification">
         <h4 class="title">Add qualification</h4><hr>
                    <div class="form-row" v-for="(qualification, index) in qualification" :key="index">
                      <div class="form-group col-md-6 col-lg-6 col-sm-12">
                        <label class="form-label">Degree Name</label>
                        <input v-model="qualification.degree_name" :name="`qualification[${index}][degree_name]`"
                          type="text" class="form-control" placeholder="" />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-sm-12">
                        <label class="form-label">Subject Name</label>
                        <input v-model="qualification.subject_name" :name="`qualification[${index}][subject_name]`"
                          type="text" class="form-control" placeholder="" />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-sm-12">
                        <label class="form-label">Passing Year</label>
                        <input v-model="qualification.passing_year" :name="`qualification[${index}][passing_year]`"
                          type="text" class="form-control" placeholder="" />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-sm-12">
                        <label class="form-label">Institute Name</label>
                        <input v-model="qualification.institute_name" :name="`qualification[${index}][institute_name]`" type="text"
                          class="form-control" placeholder="" />
                      </div>
                     
                     
                      <div class="form-group col-md-12 col-lg-12 col-sm-12">
                        <div class="d-flex float-right">
                          <button class=" btn btn-delete mr-3" @click="remove_qualification(index)"
                            v-show="index || (!index && qualification.length > 200)">
                            Remove
                          </button>
                          <button @click="add_qualification()" type="button" class="btn btn-info d-flex float-right">
                            
                            Add
                          </button>
                        </div>
                      </div>                      
                    </div>

                    <button class="btn-submit btn-lg">Submit</button>
                  </div>

     </div>
   
  
</template>
<script>
export default {
  layout:"Profile-content",
  data() {
    return {
      
      qualification: [
        {
          degree_name: "",
          subject_name: "",
          passing_year: "",
          institute_name: "",
          
        }
      ]
    };
  },
  methods: {
  
    add_qualification() {

      if (this.qualification.length <= 6) {

        this
          .qualification
          .push({
            degree_name: "",
            subject_name: "",
            passing_year: "",
            institute_name: "",
            
          });
      }
    },
    remove_qualification(index) {
      this
        .qualification
        .splice(index, 1);
    },

 



  },
 
};
</script>
<style scoped>
.qualification {
  padding: 50px; 
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 20px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>