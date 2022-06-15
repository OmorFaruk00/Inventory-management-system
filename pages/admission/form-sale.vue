<template>
   <div class="form-bg pt-5">
        <div class="container">
            <div class="form-container offset-md-2  col-md-8">                
                <div class="form-horizontal">
                   
                   <div v-if="!show">
                        <div class="form-group">
                        <label>Form  Number</label>
                        <input type="text" class="form-control" v-model="form_number"
                           />
                    </div>               
                
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit" @click="searchForm()">Search</button>
                    </div>
                   </div>
                    <h2>{{form_info}}</h2>

                </div>
            </div>
        </div>
    </div>
    

</template>

<script>
export default {
    layout: 'Adm-content',
    data() {
        return{
                  form_number:'',
                   std_name:'',
                   dept_id:'',
                   batch_id:'',
                   roll:'',
                   reg_code:'',
                   department_list:'',
                   batch_list:'',
                   receipt_no:'',
                   error:'',
                   batch_name:'',
                   department_name: null,
                   form_info: '',
                   show:false,   

        }

       

    },
    methods: {
        searchForm() {
            this.$axios.$get('/admission/form-search/' + this.form_number).then(response => {
                console.log(response.data);
                this.form_info = response.data;
                this.show = true;
            }).catch(error => {
                this.error = error.response.data.errors;
            });
        },
}
}
</script>