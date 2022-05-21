<template>
  <div>
    <Topnav />
    <div class="d-flex" id="wrapper">
      
      <div class=" " id="sidebar-wrapper">        
        <div class="list-group sidebar">
          <nuxt-link class="sidebar-item" to="/student">Dashboard</nuxt-link>
          <nuxt-link class="sidebar-item" to="##">Student</nuxt-link>
          <nuxt-link class="sidebar-item" to="#">Transcript</nuxt-link>
          <!-- <nuxt-link class="sidebar-item" to="/#">Event</nuxt-link> -->
          <!-- <nuxt-link class="sidebar-item" to="/#">Program</nuxt-link> -->

        </div>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">

        <div class="container-fluid">
          <router-view />

        </div>
      </div>
      <!-- /#page-content-wrapper -->

    </div>
  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {

 

}
</script>
<style scoped>
.sidebar {
  text-align: center;
  line-height: 50px;

}

.sidebar-item {
  font-size: 18px;
  color: #000;
  /* padding: 0px 50px; */
}

.user {
  height: 30px;
  padding-right: 30px;
}

.cms-title {
  padding-left: 50px;
  color: #fff;
  font-weight: bolder;
}
.topnav{
  background: #337ab7;
}
.nuxt-link-exact-active {
  background: #fff !important;
  /* background: #fff !important; */
  color: #000;
  margin: 0px 50px;
  border-radius: 10px;
  
}


#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  padding-top: 58px;
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
  background-color: #fff;

}
</style>

