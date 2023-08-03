<template>
  <div>
    <h1 class="text-center">INDOOR BONSAI</h1>
    <p>Indoor bonsai have become extremely popular in recent years. They make excellent gifts because they are different and say something about you. Most of them are tropical or semi-tropical species. They usually require lots of light and fairly constant temperature and humidity. The secret is not to forget to water them!</p>
  </div>
 <div class="container mt-5 d-flex ">
    <div class="row" >
      <div class="col-md-5 h-100 w-100 " >
        <div class="card text-center  shadow-sm" v-for="product in products" :key="product.id">
            <div class="card-img-top">
              <img :src="product.productImage" :alt="productImage" class="">
            </div>
            <div class="card-body">
              <h5>{{product.productTitle}}</h5>
              <p>{{product.productPrice}}</p>
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