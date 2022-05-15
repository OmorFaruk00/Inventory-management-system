<template>
  <div>
    <div class="top_menu container">
      <div class="row pb-3">
        <div class="col-lg-2 col-md-2 col-sm-12">
          <div class="top-logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12">
          <div class="row d-flex">
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="top-title">
                <h2>দারুল উলূম মনিরাম</h2>
                <h2>دارول أولوم منيرام</h2>
                <h2>DARUL ULOOM MONIRAM</h2>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-end">
              <div class="pt-4 top-icon">
                <img src="images/phone.png" alt="phone"><span>+8809612607772</span
                ><br />
                <img src="images/email.png" alt="email">
                <span>info@darululoommoniram.com</span><br />
                
                <div class="d-flex pt-3">
                  <p class="btn-lang">বাংলা</p>
                  <p class="btn-lang">English</p>
                  <p class="btn-lang">عربي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <nav class="navbar navbar-expand-lg navbar-dark ">
            <div class="container ">               
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/">HOME</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/about">ABOUT US</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/contact">CONTACT</NuxtLink>
                        </li>
                         <li class="nav-item">
                            <NuxtLink class="nav-link" to="/notice">NOTICE BOARD</NuxtLink>
                                                                              
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/blog">BLOG</NuxtLink>
                        </li>
                        <!-- <li class="nav-item">
                            <NuxtLink class="nav-link" to="/event">EVENTS</NuxtLink>
                        </li> -->

                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/gallery">GALLERY</NuxtLink>
                        </li>
                        
                        <!-- <li class="nav-item">
                            <NuxtLink class="nav-link" to="/login">LOGIN</NuxtLink>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
  </div>
</template>
<style scope>
.navbar{
    background: rgb(48, 67, 132);
}
.top-icon img{
  height: 25px;
  width: auto;
  padding-right: 10px;
}

.top-logo img{
    height: 100px;
    margin-top: 25px;

}
.top-title{
    margin-top: 20px;
    
}
.top-title h2{   
    color: rgb(24, 35, 72);
    /* font-size: 20px; */
}
.dropdown-toggle {  
    color: #fff;
}

.dropdown-toggle::after {
    
    cursor: pointer;
    color: #fff;
}
.nav-link{
    font-size: 18px;
    color: #fff !important;
    margin-right: 20px; 
  
}
.nav-item {
    color: #fff;
}
.dropdown-item{
    color: #000;
}
.navbar {
    background:rgb(24, 35, 72);
}
.menu_icon{
    color: rgb(87, 10, 10);
}

.dropdown-item{
    color: rgb(48, 67, 132);
    line-height: 20px;
    font-size: 14px;
    padding: 15px 40px 15px 40px;
}
.top-icon{
    font-size: 15px;
    line-height: 25px;
}
.top-icon i{
    margin-right: 10px;
}
.btn-lang{
    border: 2px solid rgb(24, 35, 72);
    margin-right: 10px;
    padding: 0px 10px;
    color: #000;
    border-radius: 5px;
    cursor: pointer;
}
.btn-lang:hover{
    background:rgb(24, 35, 72);
    color: #fff;

}

/* Header */
.content-block{
    margin-bottom: 10px;;
 
 }
 .content-block h2{
     font-size: 50px;
     text-transform: uppercase;
     margin-bottom: 50px;
 }
 .read-story{
     padding: 15px 40px 15px 40px;
     margin-top: 80px;
     color: white;
 }
 .bnt-apply{
    background: rgb(48, 67, 132);
     padding: 12px 25px;
     border-radius: 8px;     
     color: #fff;
     font-size: 18px;
 }
 .bnt-apply:hover{
    background: rgb(24, 35, 72);
     padding: 12px 25px;     
     cursor: pointer;
     color: #fff;
     
 }


</style>
