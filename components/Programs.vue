<template>
  <section class="bg-white p-5">
    <div class="container">
      <h2 class="title pb-3">OUR PROGRAMS</h2>
      <client-only>
      <carousel
        :autoplay="true"
        :responsive="responsive"
        :dots="false"
        :loop="true"
      >
      
        <slide>
          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
              class="card-img-top"
              alt="Fissure in Sandstone"
            />
            <div class="card-body pb-5">
              <h2 class="card-title">Department of CSE</h2>
              <div class="d-flex justify-content-center">
                  <nuxt-link to="/#" class="bnt-apply ">APPLY NOW</nuxt-link>
              </div>              
            </div>
          </div>
        </slide>        
         <slide>
          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
              class="card-img-top"
              alt="Fissure in Sandstone"
            />
            <div class="card-body pb-5">
              <h2 class="card-title">Department of CSE</h2>
              <div class="d-flex justify-content-center">
                  <nuxt-link to="/#" class="bnt-apply ">APPLY NOW</nuxt-link>
              </div>              
            </div>
          </div>
        </slide>  
         <slide>
          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
              class="card-img-top"
              alt="Fissure in Sandstone"
            />
            <div class="card-body pb-5">
              <h2 class="card-title">Department of CSE</h2>
              <div class="d-flex justify-content-center">
                  <nuxt-link to="/#" class="bnt-apply ">APPLY NOW</nuxt-link>
              </div>              
            </div>
          </div>
        </slide>  
         <slide>
          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
              class="card-img-top"
              alt="Fissure in Sandstone"
            />
            <div class="card-body pb-5">
              <h2 class="card-title">Department of CSE</h2>
              <div class="d-flex justify-content-center">
                  <nuxt-link to="/#" class="bnt-apply ">APPLY NOW</nuxt-link>
              </div>              
            </div>
          </div>
        </slide>  
      </carousel>
      </client-only>
    </div>
  </section>
</template>
<script>
export default {
  name: "CarouselSection",
  components: {},
  data() {
    return {
      responsive: {
        0: { items: 1, nav: false },
        576: { items: 1, nav: false },
        768: { items: 1, nav: false },
        992: { items: 2, nav: false },
        1200: { items: 3, nav: true },
      },
    };
  },
  methods: {},
};
</script>
<style scoped>

.card{
    width: 95%;
    transform: scale(1);
    transition: all 1s ease-in-out 0s;
}
.card:hover{
    transform: scale(1.05);
    
}
.card-body h2{
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    color: #000;
    padding-bottom: 20px;
}
.bnt-apply{
    background: rgb(48, 67, 132);
     padding: 10px 25px;
     border-radius: 8px;     
     color: #fff;
     font-size: 15px;
     float: center;
    
 }
 .bnt-apply:hover{
    background: rgb(24, 35, 72);
     padding: 10px 25px;     
     cursor: pointer;
     color: #fff;
     
 }
</style>
