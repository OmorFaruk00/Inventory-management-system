<template>
  <div>
    <footer id="rs-footer" class="bg3 rs-footer" style="background-image: url(https://diu.ac/front/images/bg/counter-bg.jpg">
    <div class="container">
        <!-- Footer Address -->
        <!-- <div>
            <div class="row footer-contact-desc">
                <div class="col-md-4">
                    <div class="contact-inner">
                        <i class="fa fa-map-marker"></i>
                        <h4 class="contact-title">Address</h4>
                        <p class="contact-desc">
                            House # 4, Road # 1, Block - F, <br>
                            Banani, Dhaka-1213, Bangladesh.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-inner">
                        <i class="fa fa-phone"></i>
                        <h4 class="contact-title">Phone Number</h4>
                        <p class="contact-desc">
                            <a class="contact-desc" href="tel:01611348344">+88 01611348344</a><br>
                            <a class="contact-desc" href="tel:01939851061">+88 01939851061</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-inner">
                        <i class="fa fa-map-marker"></i>
                        <h4 class="contact-title">Email Address</h4>
                        <p class="contact-desc">
                            <a class="contact-desc" href="mail:inf@diu-bd.net">inf@diu-bd.net</a> <br>
                            <a class="contact-desc" href="mail:info@diu.net.bd">info@diu.net.bd</a>
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>

    <!-- Footer Top -->
    <div class="footer-top">
        <div class="container">
            <div class="row p-5">
                <div class="col-lg-4 col-md-4">
                    <div class="about-widget">
                        <img src="/images/logo.png" alt="Footer Logo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure necessitatibus nemo doloribus fuga molestiae animi exercitationem, tempora ratione quas. </p>

                        <p class="margin-remove">is an
                            institution that promotes eastern culture and values, and meaningfully blends eastern and
                            western thoughts and innovation.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4">
                    <h5 class="text-white">Useful Links</h5>
                    <ul class="useful-widget text-white">
                        <li class="active"><a href="#"><i class="fa fa-angle-right pr-2" aria-hidden="true"></i>Lorem ipsum dolor sit</a>                                                                               
                        </li>
                        <li><a href="#"><i class="fa fa-angle-right pr-2" aria-hidden="true"></i>Lorem ipsum dolor sit</a>
                        </li>
                        <li><a href="3"><i class="fa fa-angle-right pr-2" aria-hidden="true"></i>Lorem ipsum dolor sit</a>
                        </li>
                        <li><a href="#"><i class="fa fa-angle-right pr-2" aria-hidden="true"></i>Lorem ipsum dolor sit</a>
                        </li>
                        <li><a href="#"><i class="fa fa-angle-right pr-2" aria-hidden="true"></i>Lorem ipsum dolor sit</a></li> 
                         <li><a href="#"><i class="fa fa-angle-right pr-2" aria-hidden="true"></i>Lorem ipsum dolor sit</a></li>                                                                 
                                
                        
                    </ul>
                </div>

                <div class="col-lg-4 col-md-4">
                    <h5 class="text-white">OUR SITEMAP</h5>
                    
                      <ul>
                        <li class="footer-item">
                            <i class="fa fa-angle-right" aria-hidden="true"></i><NuxtLink class="footer-link" to="/">HOME</NuxtLink>
                        </li>
                        <li class="footer-item">
                            <i class="fa fa-angle-right" aria-hidden="true"></i><NuxtLink class="footer-link" to="/about">ABOUT US</NuxtLink>
                        </li>
                        <li class="footer-item">
                            <i class="fa fa-angle-right" aria-hidden="true"></i><NuxtLink class="footer-link" to="/contact">CONTACT</NuxtLink>
                        </li>
                        <li class="footer-item">
                            <i class="fa fa-angle-right" aria-hidden="true"></i><NuxtLink class="footer-link" to="/blog">BLOG</NuxtLink>
                        </li>
                        <!-- <li class="footer-item">
                            <NuxtLink class="footer-link" to="/event">EVENTS</NuxtLink>
                        </li> -->

                        <li class="footer-item">
                            <i class="fa fa-angle-right" aria-hidden="true"></i><NuxtLink class="footer-link" to="/gallery">GALLERY</NuxtLink>
                        </li>
                        <!-- <li class="footer-item">
                            <NuxtLink class="footer-link" to="/members">ALUMNI</NuxtLink>
                        </li> -->
                        <li class="footer-item">
                            <i class="fa fa-angle-right" aria-hidden="true"></i><NuxtLink class="footer-link" to="/login">LOGIN</NuxtLink>
                        </li>
                    </ul>
                </div>

               

            </div>

            <!-- <Footer-social-media/> -->

        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom pb-3">
        <div class="container">
            <div class="copyright">
                
                <p class="text-center text-white ">
                    © 2022  All rights
                    Reserved. | Developed & Powered by:
                    <!-- <a href="#" target="_blank">IT-Team, DIU</a> -->
                </p>
            </div>
        </div>
    </div>
</footer>
  </div>
</template>
<style scoped>
.about-widget p{
    color: #fff;
    font-size: 15px;
    padding-top: 10px;
    line-height: 20px;

}
.useful-widget li a{
    color: #fff !important;
    font-size: 15px;
    line-height: 30px;
    padding-top: 10px;
}
.useful-widget li a:hover{
    color: rgb(77, 33, 199) !important;
    cursor: pointer;
}
.footer-link {
    color: #fff !important;
    padding-top: 10px;
    line-height: 30px;
}
.footer-link:hover {
    color: rgb(77, 33, 199) !important;
    cursor: pointer;
    
}
.footer-item i{
    color: #fff !important;
    padding-top: 10px;
    font-size: 15px;
    padding-right: 8px;
    

}

@media (max-width: 991px) {
    .footer-wrapper .foooter-container .footer-middle .contact-footer {
        margin-bottom: 30px;
    }
    .footer-wrapper .foooter-container .footer-middle .links-footer {
        margin-bottom: 30px;
    }
}

@media (max-width: 767px) {
    .footer-wrapper .foooter-container .footer-middle .contact-footer {
        text-align: center;
    }
    .footer-wrapper .foooter-container .footer-middle .contact-footer .logo-footer {
        width: 100%;
    }
    .footer-wrapper .foooter-container .footer-middle .links-footer {
        text-align: center;
    }
    .footer-wrapper .foooter-container .footer-middle .links-footer h6 {
        margin-top: 20px;
    }
}

.footer-wrapper .foooter-container .footer-bottom {
    padding: 30px 0;
}

.footer-wrapper .foooter-container .footer-bottom p {
    color: #9f9f9f;
}
</style>