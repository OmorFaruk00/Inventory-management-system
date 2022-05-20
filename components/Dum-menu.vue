<template>
    <div >
        <nav class="navbar navbar-expand-lg topnav">
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
    </div>
</template>
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
<style scoped>
.sidebar{
  text-align: center;
  line-height: 50px; 
  
}
.sidebar-item{
  font-size: 18px;
  color: #000;  
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
  background: #f2f2f2;
}


#menu-toggle {
  background: #337ab7;
  border: none;

}

#menu-toggle:hover {
  background: #21537f; 

}

#menu-toggle img {
  height: 20px;
  

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
   background-color: rgb(10, 94, 118);  
  
}

#page-content-wrapper {
  background-color: #fff;
  
}
</style>

