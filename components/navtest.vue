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
                <p>Language</p>
                <div class="d-flex">
                  <p class="btn-lang">Bangla</p>
                  <p class="btn-lang">English</p>
                  <p class="btn-lang">Arabic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- <a class="navbar-brand" to="#">Navbar</a> -->
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
              <NuxtLink class="nav-link" to="/">হোম</NuxtLink>
              <!-- <a class="nav-link" to="/">HOME</a> -->
            </li>
            <!-- <li class="nav-item">
              <NuxtLink class="nav-link" to="/">পরিচিতি</NuxtLink>
             
            </li> -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                পরিচিতি
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NuxtLink class="dropdown-item" to="#"
                  >এক নাজরে মাদরাসা</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="#"
                  >অধ্যক্ষের বাণী ও সংক্ষিপ্ত জীবনবৃত্তান্ত</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="#">বৈশিষ্ট্য</NuxtLink>
                <NuxtLink class="dropdown-item" to="#"
                  >প্রতিষ্ঠার পরিকল্পনা</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="#"
                  >প্রতিষ্ঠার লক্ষ্য</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="#">গভর্নিং বডি</NuxtLink>
                <NuxtLink class="dropdown-item" to="#">প্রকমপ্লেক্স</NuxtLink>
                <NuxtLink class="dropdown-item" to="#"
                  >শিক্ষকমন্ডলীর তথ্যবলী</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="#"
                  >কর্মকর্তা ও কর্মচারী</NuxtLink
                >
              </div>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">একাডেমিক</NuxtLink>
              <!-- <a class="nav-link" to="/blog">BLOG</a> -->
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">ভর্তি</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">প্রকাশনা</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/register">আবাসন</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/gallery">লাইব্রেরি</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">লগইন</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style></style>
