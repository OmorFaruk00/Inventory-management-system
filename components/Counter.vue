<template>
  <div>
    <div class="container p-5">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="counter">
            <span class="counter-value">17</span>
            <h3>Web Designing</h3>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="counter purple">
            <span class="counter-value">16</span>
            <h3>Web Development</h3>
          </div>
        </div>
         <div class="col-md-3 col-sm-6">
          <div class="counter gray">
            <span class="counter-value">17</span>
            <h3>Web Designing</h3>
          </div>
        </div>
         <div class="col-md-3 col-sm-6">
          <div class="counter red">
            <span class="counter-value">17</span>
            <h3>Web Designing</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.counter {
  color: #333;
  font-family: "Poppins", sans-serif;
  text-align: center;
}
.counter .counter-value {
  font-size: 35px;
  font-weight: 700;
  line-height: 110px;
  height: 130px;
  width: 140px;
  margin: 0 auto 10px;
  border: 15px solid #05bcc0;
  border-bottom: none;
  box-shadow: 0 -5px rgba(0, 0, 0, 0.2) inset, 0 -10px rgba(0, 0, 0, 0.1) inset,
    0 -15px rgba(0, 0, 0, 0.05) inset;
  border-radius: 50%;
  display: block;
}
.counter h3 {
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}
.counter.purple .counter-value {
  border-color: #8e4882;
}
.counter.red .counter-value {
  border-color: #f9605d;
}
.counter.gray .counter-value {
  border-color: #64868c;
}
@media screen and (max-width: 990px) {
  .counter {
    margin-bottom: 40px;
  }
}
</style>
<script>
export default {
   
}
</script>
