<template>
  
     <div class="offset-md-3 col-md-6">
       <div class="social">
         <h4 class="title">Add social link</h4><hr>
                    <div class="form-row" v-for="(social, index) in social" :key="index">
                      <div class="form-group col-md-6 col-lg-6 col-sm-12">
                        <label class="form-label">social Name</label>
                        <input v-model="social.social_name" :name="`social[${index}][social_name]`"
                          type="text" class="form-control" placeholder="" />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-sm-12">
                        <label class="form-label">Url</label>
                        <input v-model="social.social_url" :name="`social[${index}][url]`"
                          type="text" class="form-control" placeholder="" />
                      </div>
                     
                     
                     
                      <div class="form-group col-md-12 col-lg-12 col-sm-12">
                        <div class="d-flex float-right">
                          <button class="btn btn-delete mr-3" @click="remove_social(index)"
                            v-show="index || (!index && social.length > 200)">
                            Remove
                          </button>
                          <button @click="add_social()" type="button" class="btn btn-info d-flex float-right">
                            
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
      
      social: [
        {
          social_name: "",
          social_url: "",
          
        }
      ]
    };
  },
  methods: {
  
    add_social() {

      if (this.social.length <= 5) {

        this
          .social
          .push({            
            social_name: "",
            social_url: "",
          });
      }
    },
    remove_social(index) {
      this
        .social
        .splice(index, 1);
    },

  },
 
};
</script>
<style scoped>
.social {
  padding: 50px; 
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 20px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>