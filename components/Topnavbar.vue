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
                <i class="fa fa-phone pr-2 fa-1x"></i><span>+8809612607772</span
                ><br />
                <i class="fa fa-envelope"></i
                ><span>info@darululoommoniram.com</span><br />
                
                <div class="d-flex pt-3">
                  <p class="btn-lang">বাংলা</p>
                  <p class="btn-lang">English</p>
                  <p class="btn-lang">العربية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
              <NuxtLink class="nav-link" to="/notice">NOTICE BOARD</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">CONTACT</NuxtLink>
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
                            <NuxtLink class="nav-link" to="/members">ALUMNI</NuxtLink>
                        </li> -->
            <!-- <li class="nav-item">
              <NuxtLink class="nav-link" to="/login">LOGIN</NuxtLink>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style></style>
