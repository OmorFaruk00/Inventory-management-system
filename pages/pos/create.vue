<template>
  <div>

    <div class="row">



      <div class=" col-12 col-xl-4 mt-3">
        <div class="mr-3">
          <table class="table card-body">
            <thead class="t-head">
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td>Mi</td>
                <td>Mi</td>
                <td>22</td>
                <td>2300</td>
                <td>
                  <button class="btn float-right"><img src="/images/remove.png" height="18px">
                  </button>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td>Mi</td>
                <td>Mi</td>
                <td>22</td>
                <td>2300</td>
                <td>
                  <button class="btn float-right"><img src="/images/remove.png" height="18px">
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class=" col-12 col-xl-8 mt-3 ">
        <div class="mb-3 d-flex justify-content-between">
          <div class="d-flex">
            <div class="form-group mr-5">
              <select class="form-control pr-5">
                <option selected disabled>Search By Category</option>
                <option value="">Search</option>
                <option value="">Search </option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control pr-5">
                <option selected disabled>Search By Brand</option>
                <option value="">Search</option>
                <option value="">Search </option>
              </select>
            </div>
          </div>
          <div class="input-group form-group w-50">
            <input type="search" class="form-control search" placeholder="Search">
            <button class="btn-search"><img src="/images/search1.png" height="25px"></button>
          </div>
        </div>
        <div class="row">

          <div class="col-xl-2 col-md-4 col-6 mb-3">
            <div class="pos">
              <div class="pos-image ">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                  class="w-100 h-100" />
              </div>
              <div class="p-price">
                <p>$600</p>
              </div>
              <div class="">
                <button class="p-detail">-20%</button>
              </div>
              <div class="pos-content">
                <p class="p-name">product name</p>
                <!-- <p class="p-brand">Brand name</p> -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Sidebar",

}
</script>

  <style scoped>
    /* .search{
      position: relative;
      border-radius: 20px !important;
    }
    .btn-search{
    background: #bebed6;    
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    color:#fff;
    border:none;   
    margin-right: 10px;
    position: absolute;
    top:0px;
    right: -8px;
    border-radius: 0px 20px 20px 0px ;
    height: 100%; 
    
} */
  .pos-body {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  }
  
  .card-body {
    /* border: 1px solid #6666; */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  }
  
  .pos {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
  
  
  }
  
  .pos:hover {
    border: 1px solid #00c6ff;
    cursor: pointer;
  }
  
  .pos-image img {
    border-radius: 15px 15px 0px 0px;
  
  }
  
  .pos-image {
    position: relative;
    height: 130px;
  
  }
  
  .pos-content {
    padding: 15px 10px 5px 10px;
    line-height: 15px;
    /* height: 80px; */
    text-transform: capitalize;
  }
  
  .p-name {
    font-size: 12px;
    font-weight: 600;
  
  }
  
  .p-brand{
        font-size: 12px;
        font-weight: 600;
        color: gray;
      }
  .p-price p {
    position: absolute;
    bottom: 60px;
    left: 25px;
    color: #fff;
    border-radius: 10px;
    padding: 0px 8px !important;
    margin: 0px !important;
    font-size: 12px;
    font-weight: 600;
    /* background: linear-gradient(#355c0e,#5c66af); */
    background: linear-gradient(#00c6ff, #5c66af);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  
  .p-detail {
    position: absolute;
    bottom: 60px;
    right: 25px;
    color: #fff;
    border-radius: 10px;
    padding: 0px 8px !important;
    margin: 0px !important;
    font-size: 12px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background: linear-gradient(#4B0082, #6500B0);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  
  /* .scroll-div {
      width: 100vw;
    
      height: 100vh;
      overflow-y: scroll;
      position: fixed;
      background: #f9f9f9;
     
    }
     */
  /* .scroll-div::-webkit-scrollbar {
      display: none;
    }
     */
  @media only screen and (max-width: 768px) {
    .scroll-div {
      position: absolute;
  
    }
  
  }
  </style>
  