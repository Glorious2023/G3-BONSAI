<template>
<div class="container">
  <h1 class="text-center">BONSAI CARE</h1>
  <p>We stock a very comprehensive range of bonsai tools, soils and sundries. Our range of tools include the high quality Japanese tools, and the cheaper budget tools from China. Soils and growing medium include our own special bonsai mix, and all the Japanese ones such as Akadama, Kanuma, Huega etc. <br> <br> If you want the very best tools, then the Japanese branded ones are the thing for you. If you are not that fussy about brand names and just want the basic tools that do the job, then the Chinese tools are perfectly adequate. Our online shop shows most of the tools we stock, but if you need a special tool or one in a very large size, please contact us direct. We usually have it in stock.</p>
</div>
  <div class="container mt-5 d-flex ">
    <div class="row" >
      <div class="col-md-5 h-100 w-100 " >
        <div class="card text-center  shadow-sm" v-for="product in products" :key="product.id">
            <div class="card-img-top">
              <img :src="product.productImage" alt="" class="">
            </div>
            <div class="card-body">
              <h5>{{product.productTitle}}</h5>
              <p>£{{product.productPrice}}</p>
              <p>{{error}}</p>
              <RouterLink :to="`/products/${product.id}`">
                <button class="btn btn-primary">More info</button>
              </RouterLink>


            </div>
        </div>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'OutdoorBonsaiView',
    data() {
        return{
            products:[],
            error:''
        }
    },
    async mounted(){
      try{
        const result = await fetch('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/All')
        const data = await result.json()
        this.products = data

      }catch(error){
        this.error = error
      }
    }
}
</script>

<style>

</style>