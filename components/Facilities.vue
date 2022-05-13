<template>
  <section class="facility">
    <div class="container">
      <h2 class="title pb-5">OUR FACILITIES</h2>
      <client-only>
        <carousel
          :autoplay="true"
          :responsive="responsive"
          :dots="false"
          :loop="true"
        >
          <!-- <carousel> -->
          <slide>
            <div class="card">
              <div class="card-body pb-5">
                <h2>Academic Session</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur corrupti asperiores corporis adipisci eos unde
                  maiores quas vitae sed ipsam quod consectetur nihil, delectus
                  fugit deleniti nostrum et quis voluptatibus excepturi odio
                  nesciunt possimus. Id pariatur illum qui culpa? Provident eos
                  sequi, molestias veritatis quas eligendi at optio fugit nulla.
                </p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="card">
              <div class="card-body pb-5">
                <h2>Health Service</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur corrupti asperiores corporis adipisci eos unde
                  maiores quas vitae sed ipsam quod consectetur nihil, delectus
                  fugit deleniti nostrum et quis voluptatibus excepturi odio
                  nesciunt possimus. Id pariatur illum qui culpa? Provident eos
                  sequi, molestias veritatis quas eligendi at optio fugit nulla.
                </p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="card">
              <div class="card-body pb-5">
                <h2>Accommodation</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur corrupti asperiores corporis adipisci eos unde
                  maiores quas vitae sed ipsam quod consectetur nihil, delectus
                  fugit deleniti nostrum et quis voluptatibus excepturi odio
                  nesciunt possimus. Id pariatur illum qui culpa? Provident eos
                  sequi, molestias veritatis quas eligendi at optio fugit nulla.
                </p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="card">
              <div class="card-body pb-5">
                <h2>Student’s Welfare</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur corrupti asperiores corporis adipisci eos unde
                  maiores quas vitae sed ipsam quod consectetur nihil, delectus
                  fugit deleniti nostrum et quis voluptatibus excepturi odio
                  nesciunt possimus. Id pariatur illum qui culpa? Provident eos
                  sequi, molestias veritatis quas eligendi at optio fugit nulla.
                </p>
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
        1200: { items: 2, nav: true },
      },
    };
  },
  methods: {},
};
</script>
<style scoped>
.facility {
  padding: 80px;
  background-image:url("/images/bg3.png");
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  
}
.card p {
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
}
.card {
  width: 95%;
  transform: scale(1);
  transition: all 1s ease-in-out 0s;
}
.card:hover {
  transform: scale(1.05);
}
.card-body h2 {
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  color: rgb(35, 34, 34);
  padding-bottom: 10px;
}
.owl-theme .owl-nav {
  font-size: 50px !important;
}
</style>
