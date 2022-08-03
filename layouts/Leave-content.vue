<template>
  <div>
    <Topnav />
    <div class="d-flex" id="wrapper">
      <div class="" id="sidebar-wrapper">
        <div class="list-group sidebar">
          <nuxt-link class="sidebar-item" to="/leave"><img src="/images/dashboard.png" alt="" />Dashboard</nuxt-link>
         
          <nuxt-link class="sidebar-item" to="/leave/application_form"><img src="/images/leave.png" alt="" /> Leave Aplication Form</nuxt-link>
        
        </div>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid ">
          <router-view />
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {};
</script>
<style scoped>
.main{
  overflow: scroll;
}
  
.sidebar {
  line-height: 50px;
  
}

.sidebar-item {
  font-size: 15px;
  color: #000;  
}

.sidebar-item svg,
img {
  height: 20px;
  padding-right: 10px;
  padding-left: 20px;
}



.nuxt-link-exact-active {
  background: #fff !important;
  color: #000;  
}

#sidebar-wrapper {
  min-height: 100vh;
  padding-top: 50px;  
  background: #f6f6f6;
  
 

}

#menu-toggle {
  background: #fff;
  border: none;
}

#menu-toggle:hover {
  background: #21537f;
}

#menu-toggle img {
  height: 15px;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.bg-light {
  background-color: rgb(10, 94, 118);
}

#page-content-wrapper {
  background-color: #fff !important;
 
}
</style>
