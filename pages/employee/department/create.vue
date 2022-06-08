<template>
    <div class="form-bg pt-5">
        <div class="container">
            <div class="form-container offset-md-2  col-md-8">
                <h3 class="title">Create Department</h3>
                <form class="form-horizontal"> 
                    <div class="form-group">
                                <label>Type</label>
                                <select class="form-control">
                                    <option disabled selected value="">Select Type</option>
                                    <option value="Academic">Academic</option>
                                    <option value="Non Academic">Non Academic</option>
                                </select>
                            </div>                   
                        <div class="form-group">
                                <label>Department Name </label>
                                <input type="text" class="form-control" placeholder="Department Name " />
                        </div>
                        <div class="form-group">
                                <label>Slug </label>
                                <input type="text" class="form-control" placeholder="Slug" />
                                
                        </div>          
                      


                    
                    <div class="d-flex justify-content-end pt-3">
                        <button class="btn-submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "Emp-content",
};
</script>

