<template>
    
  <section class="our-mission">
    <div class="container">
        <h2 class="title pb-5">Our Mission</h2>
      <div class="mission-body">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="mission-img">
              <img src="/images/slider1.jpg" class="img-fluid" alt="..." />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="mission">
              <!-- <h3>Our Mission</h3> -->
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                vitae deleniti ex? Vero omnis ea, debitis magni quam tempora
                temporibus voluptatum modi harum voluptatibus recusandae
                voluptatem vel. Culpa adipisci in cupiditate, libero sint,
                rerum, minus sunt officiis dicta odio velit expedita vero enim
                id nisi molestiae ut neque cumque quas!minus sunt officiis dicta odio velit expedita vero enim
                id nisi molestiae ut neque cumque quas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name:'Mission',
}
</script>
                    

<style scoped>
.our-mission {  
  background: rgb(233, 229, 229);
  padding: 80px 0px;
}
.mission-body {
  box-shadow: 5px 5px 10px #dacccc85, -5px -5px 10px rgb(214, 209, 209);
  padding: 50px;  
  background: #fff;
  border-radius: 20px;
}
.mission {
  color: #f39c12;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
  text-align: center;  
  padding: 25px 10px;
  margin: 0 auto;
  border-radius: 30% 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}
.mission:before,
.mission:after {
  content: "";
  height: 100%;
  width: 100%;
  border: 5px solid #0e0e0d;
  border-right: none;
  border-bottom: none;
  border-radius: 10px;
  position: absolute;
  left: -12px;
  top: -12px;
  z-index: -1;
}
.mission:after {
  transform: rotate(180deg);
  left: auto;
  right: -12px;
  top: auto;
  bottom: -12px;
}
.mission h3 {
  font-size: 26px;  
  color: #000;
}
.mission p {
  font-size: 16px;
  padding: 20px 40px 40px 40px;
  color: rgb(65, 61, 61);
  line-height: 22px; 
  text-align: justify; 
}
.mission-img {
  width: 100%;
  height: 100%;
}
.mission-img img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 920px) {
  .mission-img {
    padding-bottom: 50px !important;
  }
}
@media only screen and (max-width: 490px) {
  .mission h3 {
    font-size: 16px;
  }
  .mission p {
    font-size: 14px;
  }
  .mission-body {
    padding: 10px;
  }
  .our-mission {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>