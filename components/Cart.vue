<template>
   
        <div class=" col-sm-12 col-md-6 col-xl-5 mt-3">
        <div class="d-flex justify-content-between mb-2">
          <div class="form-group w-50">
            <select class="form-control border-0" v-model="brand" >
              <option selected disabled value="">Select Customer Type</option>
             
            </select>
          </div>
          <div>
            <button class="mr-3 btn-add">Add Customer</button>
          </div>
        </div>
        <div class="mr-3">
          <table class="table card-body">
            <thead class="t-head">
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cartItem,index) in cart" :key="index" class="t-row" >
                <td>{{index +1}} </td>
                <td>{{cartItem.data.product_name}}</td>
                <td>
                  <input type="number" style="width:60px" class="form-control" @click="updateQty(cartItem)"
                    @keyup="updateQty(cartItem)" v-model="cart[index].qty">
                </td>
                <td>
                  <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt=""
                      height="15px">{{cartItem.data.sales_price}}</div>
                </td>
                <td>
                  <div class="d-flex"><img class="mt-1" src="/images/taka.png" alt=""
                      height="15px">{{cartItem.amount}}</div>
                </td>
                <td>
                  <a href="#" class=" float-right" @click="removeCart(cartItem)"><img src="/images/remove.png" height="18px">
                  </a>
                </td>
              </tr> 
              <tr class="t-row">
                <td colspan="6">
                  <div class="d-flex">
                    <span class="pr-5 mt-2 mr-2 font-weight-bold">Vat</span> <input type="text" class="form-control mr-3">
                    <span class="pr-4 mt-2 font-weight-bold">Discount</span> <input type="text" class="form-control mr-3">
                    <span class="pr-4 mt-2 font-weight-bold">Subtotal</span> <input type="text" class="form-control" v-model="subtotal">
                  </div>                  
                </td>              
            </tr> 
          
            <tr class="t-row">
                <td colspan="6">
                  <div class="d-flex">
                    <span class="pr-3 font-weight-bold">Previous Due</span> <input type="text" class="form-control mr-3">
                    <span class="pr-4 font-weight-bold">Payable Amount</span> <input type="text" class="form-control mr-3">
                    <span class="pr-4 font-weight-bold">Paid Amount</span> <input type="text" class="form-control">
                  </div>                  
                </td>              
            </tr>
            <tr>
              <td colspan="3"><button class="" width="100%">List</button></td>
              <td colspan="3"><button class="">List</button></td>
            </tr>   
                      
            </tbody>
          
          </table>
        </div>
        {{Cart}}
      </div>

    
</template>

<script>
    export default {
        props:{
          Cart: {
            type: [Array, Object],
            required: true
        }
        },
        data() {
        return {
          cart:this.Cart 
        }
    },
        methods:{
            // addToCart(product){
            //     console.log(product);
            // }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>