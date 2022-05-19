<template>
  <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right " id="sidebar-wrapper">
      <!-- <div class="sidebar-heading">Therichpost </div> -->
      <div class="list-group list-group-flush text-center">
        <nuxt-link class="list-group-item list-group-item-action bg-light" to="/dum-ac">Dashboard</nuxt-link>
        <nuxt-link class="list-group-item list-group-item-action bg-light" to="/dum-ac/slider">Slider</nuxt-link>
        <nuxt-link class="list-group-item list-group-item-action bg-light" to="/dum-ac/notice">Notice</nuxt-link>
        <nuxt-link class="list-group-item list-group-item-action bg-light" to="/dum-ac/notice">Event</nuxt-link>
        <nuxt-link class="list-group-item list-group-item-action bg-light" to="/dum-ac/notice">Program</nuxt-link>

      </div>
    </div>
    <!-- /#sidebar-wrapper -->
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-primary" id="menu-toggle"> <img src="/images/menu.png" alt="">
        </button>
        <h4 class="cms-title">Central Management System | Darul Uloom Moniram</h4>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <img src="/images/user.png" alt="user" class="user">
              <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
            </li>
          </ul>
        </div>
      </nav>
      <div class="container-fluid">
        <Nuxt />
        
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->
</template>
<style scoped>
body {
  overflow-x: hidden;
}
.user{
  height: 30px;
  padding-right: 30px;
}
.cms-title{
  padding-left: 50px;
  color: #337ab7;
  font-weight: bolder;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  padding-top: 58px;
}


#menu-toggle {
  background: #337ab7;
  border: none;
  

}

#menu-toggle:hover {
  background: #21537f;;
  /* color: #fff; */

}

#menu-toggle img {
  height: 30px;

}

/* .nuxt-link-exact-active {
  background: #337ab7 !important;
  color: #fff;
  
} */

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
  /* background-color: hsl(60, 20%, 90%)!important; */
   background-color: rgb(10, 94, 118) ;
   /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
   /* border: none; */
   /* padding: 20px; */
  
}

#page-content-wrapper {
  background-color: #fff;
  
}
</style>

<script>
export default {

  mounted() {
    //toggle sidebar
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  },

}
</script>