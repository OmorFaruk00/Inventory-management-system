<template>
    <div>
      <Topnav />
      <div class="d-flex " id="wrapper">
        <div id="sidebar-wrapper" class="">
          <div class="list-group sidebar">
            <nuxt-link class="sidebar-item" to="/dashboard"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Dashboard</nuxt-link>
            <nuxt-link class="sidebar-item" to="/employee/employee"><svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>Employee</nuxt-link>
            <!-- <nuxt-link class="sidebar-item" to="/employee/office-time"><img src="/images/time.png" alt="" /> Manage Office Time</nuxt-link> -->
            <nuxt-link class="sidebar-item" to="/employee/department"><img src="/images/dept.png" alt="" /> Department
            </nuxt-link>
            <nuxt-link class="sidebar-item" to="/employee/designation"><svg xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>Designation</nuxt-link>
            <nuxt-link class="sidebar-item" to="/brand"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>Brand</nuxt-link>
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
  export default {};
  </script>
  <style scoped>
    #wrapper{
      display: flex;
    }
  .sidebar {
    line-height: 50px;
   
  
  }
  
  .sidebar-item {
    font-size: 15px;
    color: #000;
    margin: 5px 0px;
  }
  
  .sidebar-item svg,
  img {
    height: 35px;
    padding: 10px;
    background: #fff;
    color: #000;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 10px;
  }
  
  .nuxt-link-exact-active {
    background: #fff !important;
  }
  
  .nuxt-link-exact-active svg,
  .nuxt-link-exact-active img {
    /* background:#00c6ff; */
    background: linear-gradient(#00c6ff, #596cff);
    color: #fff;
  } 
    
    #sidebar-wrapper {
      min-height: 100vh;
      margin-left: -15rem;
      -webkit-transition: margin 0.25s ease-out;
      -moz-transition: margin 0.25s ease-out;
      -o-transition: margin 0.25s ease-out;
      transition: margin 0.25s ease-out;
      padding-top: 50px;
      background: #f6f6f6;
      position: fixed;
     
     
     
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
      padding-left: 250px;
      
    }
    #menu-toggle   #page-content-wrapper {
      /* min-width: 100vw; */
      padding-left: 0px;
      
    }
    #wrapper.toggled #page-content-wrapper {
         padding-left: 0px;
      }
    
    #wrapper.toggled #sidebar-wrapper {
      margin-left: 0;
      padding-left: 0px;
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
    @media only screen and (max-width: 780px){
      #page-content-wrapper {
        padding-left: 0px;
        
      }
      #wrapper.toggled #page-content-wrapper {
         padding-left: 250px;
      }
    }
  </style>
  