<template>
    <div class="pt-5">
        <div class="col-md-6 mx-auto form-shadow p-5">
        <div class="d-flex justify-content-end">
            <nuxt-link to="/dum-ac/event" class="btn-add"> Event List</nuxt-link>
        </div>
        <form>            
            <div class="form-group">
                <label for="" class="">Title</label>
                <input type="text" class="form-control" id="name" placeholder="Title">
            </div>
            <div class="form-group">
                <label for="" class="">Description</label>
                <input type="text" class="form-control" id="name" placeholder="desc">
            </div>
            <div class="form-group">
                <label for="" class="">Image</label>
                <input type="file" class="form-control" id="name" placeholder="Image">
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn-submit">Submit</button>
            </div>
            
        </form>
    </div>

    </div>
</template>
<script>
export default {
    layout:"Dum-content"
}
</script>