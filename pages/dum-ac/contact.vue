<template>
    <div>
         <div class="panel-body table-responsive">
              <table class="table table-striped  text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>                    
                    <th>Subject</th>
                    <th>Messages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="contact in contacts" :key="contact._id">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.subject }}</td>
                    <td style="width:40%">{{ contact.message }}</td>                 
                  
                  </tr>
                </tbody>
              </table>
            </div>
    </div>
</template>
<script>
export default {
    layout: "Dum-content",
       mounted() {
        this.getContacts();
  },
    data() {
        return {
            contacts: [],
           
        };
    },
   
    methods: {
        getContacts() {
      this.$axios
        .$get("/contact/show")
        .then((res) => {
          this.contacts = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
}


}
</script>