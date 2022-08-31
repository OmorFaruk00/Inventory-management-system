<template>
    <div>
  
  
  
      <div class="row pt-2">
        <div class="col col-sm-5 col-xs-12">
          <h4 class="title">Product List</h4>
        </div>
        <!-- <div class="col-sm-7 col-xs-12 text-right">
                      <nuxt-link to="/employee/employee/create" class="btn-add"
                        v-if="$auth.user.permission.includes('Employee-add')">Add Employee</nuxt-link>
                    </div> -->
      </div>
  
      <div class="row">
        <div class=" col-12 col-xl-8">
          <div class="mid-content">
            <table class="table table-striped table-bordered text-center t-body">
              <thead class="t-head">
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Image</th>                
                  <th>Band</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1 </td>
                  <td>Mi</td>
                  <td>#R211</td>
                  <td>image</td>                
                  <td>Mi</td>
                  <td>22</td>
                  <td>2300</td>
                  <td>
                    <button class="btn-edit"><img src="images/add.png"
                        height="25px">
  
  
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          
        </div>
  
  
        <div class=" col-12 col-xl-4">
          <div class="mr-3">
            <table class="table ">
              <thead class="t-head">
                <tr>
                  <th>SL</th>
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
                    <button class="btn-edit float-right"><img src="images/remove.png"
                        height="20px">
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
                    <button class="btn-edit float-right"><img src="images/remove.png"
                        height="20px">
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
  
    .scroll-div {
      width: 100vw;
      /* right: 0;    */
      height: 100vh;
      overflow-y: scroll;
      position: fixed;
      background: #f9f9f9;
      /* padding-right: 1100px; */
    }
    
    .scroll-div::-webkit-scrollbar {
      display: none;
    }
    
    @media only screen and (max-width: 768px) {
      .scroll-div {
        position: absolute;
    
      }
    
    }
    </style>
    