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
                            <nuxt-link to="/dum-ac/program/create" class="btn-add">Add Program</nuxt-link>

                            
                        </div>
                    </div>
                </div>
                <div class="panel-body table-responsive">
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Images</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>                                   
                                    Michael Holz
                                </td>
                                <td>Jun 15,2020</td>
                                <td><button class="btn-active">Active</button></td>
                                <td>
                                    <button class="btn-edit">Edit</button>
                                    <button class="btn-delete">Delete</button>
                                    

                                    <!-- <ul class="action-list">
                                        <li><a href="#" class=""><img src="/images/pencil.png" alt=""></a></li>
                                        <li><a href="#" class=""><img src="/images/delete.png" alt=""></a></li>
                                    </ul> -->
                                </td>
                            </tr>
                          
                            
                           
                        </tbody>
                    </table>
                </div>
               
            </div>
        </div>
    </div>
</div>

    </div>
</template>
<script>
export default {
  layout:"Dum-sidebar"
}
</script>
<style scoped>


</style>