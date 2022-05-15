<template>
  <div class="contact-page">
    <div class="contact">
      <h2 class="title">Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
        cumque!
      </p>
    </div>
    <div class="container"> 
        <div class="pb-5 d-flex justify-content-center">
          <div class="contactbox blue">
            <div class="service-icon">
              <span><i class="fa fa-home"></i></span>
            </div>
            <h3 class="box-title">Our Campus</h3>
            <div class="description">
              <h6>Address:  Dhaka-1212. Bangladesh.</h6>
              <h6>Mobile: 55040891-7</h6>
              <h6>E-mail: admission@.net.bd</h6>
              <h6>Website: https://admission.ac</h6>
            </div>            
          </div>
        </div>           
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14603.47178525886!2d90.4009235!3d23.7877163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73a5f6509b2106b6!2sDIU%20-%20Dhaka%20International%20University!5e0!3m2!1sen!2sbd!4v1645009193106!5m2!1sen!2sbd"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>


    <section>    
    <div class="container">        
            <div class="d-flex justify-content-center p-5">
                <div class="form-container">
                    <div class="form-icon">
                        <i class="fa fa-envelope-open"></i>
                    </div>
                    <form class="form-horizontal">
                        <h3 class="form-title">Contact Us</h3>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input class="form-control" type="text" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-book"></i></span>
                            <input class="form-control" type="text" placeholder="Subject">
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-envelope"></i></span>
                            <input class="form-control" type="email" placeholder="Email Address">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" cols="120" placeholder="Message"></textarea>
                        </div>
                        <button class="btn signin">Send Message <i class="fa fa-long-arrow-alt-right"></i></button>
                    </form>
                </div>
            </div>       
    </div>

      
    </section>
  </div>
</template>
<style scoped>
.contact {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/images/slider4.jpg");
  background-size: cover;
  height: 200px !important;
  background-position: bottom;
  margin-bottom: 80px;
}
.contact h2 {
  text-align: center;
  padding-top: 40px;
  font-size: 45px;
  color: #fff;
}
.contact p {
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  color: #fff;
}
.contactbox {
  color: #00ce9e;
  font-family: "Poppins", sans-serif;
  text-align: center;
  padding: 0 25px 50px;
  position: relative;
  z-index: 1;
  width: 80%;
}
.contactbox:before,
.contactbox:after {
  content: "";
  background-color: #fff;
  border: 10px solid #00ce9e;
  border-radius: 50px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.contactbox:after {
  border-style: dotted;
  border-radius: 0;
  border-top: none;
  border-bottom: none;
  top: 35%;
  bottom: 55px;
}
.contactbox .service-icon {
  color: #fff;
  background: #00ce9e;
  font-size: 35px;
  line-height: 62px;
  height: 80px;
  width: 80px;
  margin: 0 auto 40px;
  border-radius: 50%;
  border: 10px solid #fff;
  position: relative;
}
.contactbox .service-icon:before {
  content: "";
  background-color: #00ce9e;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  position: absolute;
  top: 50%;
  left: -20px;
  right: -20px;
  bottom: -20px;
  z-index: -1;
}
.box-title {
  font-size: 28px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 10px;
  color: #00a7bc;;
  padding-bottom: 20px;
}
.description h6{
    padding-bottom: 10px;
    /* text-align: left; */
}
.contactbox .description {
  color: #777;
  font-size: 13px;
  line-height: 30px;
  margin: 0;
  text-align:center;
}
.contactbox.blue {
  color: #a8c897;
}
.contactbox.blue:before,
.contactbox.blue:after {
  border-color: #00a7bc;
}
.contactbox.blue .service-icon,
.contactbox.blue .service-icon:before {
  background-color: #00a7bc;
}

.form-container{
    font-family: 'Roboto', sans-serif;
    padding: 40px 40px 0 0;
    position: relative;
    /* width: 70%; */
}
.form-container .form-icon{
    color: #E6145E;
    background-color: #fff;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
    height: 80px;
    width: 80px;
    border: 3px solid #E6145E;
    border-radius: 50% 50% 50% 0;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}
.form-container .form-horizontal{
    background: linear-gradient(#e7e7e7 25px,rgba(255,255,255,0.97) 25px);
    padding: 40px 20px 20px;
    box-shadow: 0 0 20px -5px rgba(0,0,0,0.3);
    border-radius: 15px;
}
.form-container .form-title{
    color: #222;
    font-size: 27px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    margin: 0 0 20px;
}
.form-container .form-title:after{
    content: '';
    background-color: #E6145E;
    height: 3px;
    width: 110px;
    margin: 10px 0 0;
    display: block;
    clear: both;
}
.form-horizontal .form-group{
    background-color: rgba(255,255,255,0.15);
    margin: 0 0 15px;
    border-bottom: 2px solid #e7e7e7;
}
.form-horizontal .input-icon{
    color: #b5b5b5;
    font-size: 20px;
    text-align: center;
    line-height: 35px;
    height: 35px;
    width: 30px;
    margin: 0 0 0 4px;
    vertical-align: top;
    display: inline-block;
}
.form-horizontal .form-control{
    color: #222;
    background-color: transparent;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    width: calc(100% - 40px);
    height: 33px;
    padding: 3px 10px 0 0;
    box-shadow: none;
    border: none;
    border-radius: 0;
    display: inline-block;
    transition: all 0.3s;
}
.form-horizontal textarea.form-control{
    height: auto;
    width: 100%;
}
.form-horizontal .form-control:focus{
    box-shadow: none;
    border: none;
}
.form-horizontal .form-control::placeholder{
    color: #b5b5b5;
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
}
.form-horizontal .btn{
    color: #d1d1d1;
    background-color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 15px 7px 20px;
    margin: 0 auto;
    border: 2px solid #e7e7e7;
    border-radius: 20px;
    display: block;
    transition: all 0.3s ease 0s;
}
.form-horizontal .btn:hover,
.form-horizontal .btn:focus{
    color: #E6145E;
    background-color: #fff;
    border: 2px solid #E6145E;
}
.form-horizontal .btn i{ transition: all 0.3s ease 0s; }
.form-horizontal .btn:hover i{
    color: #E6145E;
    transform: translateX(3px);
}

@media only screen and (max-width: 990px) {
  .contactbox {
    margin: 0 0 30px;
  }
}



@media screen and (max-width: 479px) {
  
  
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 16cc88ddcb95fef58ff39d7bb2af0821c2844c6a
