<template>
  <div class=" container">
    <h1 class="text-center">OUTDOOR BONSAI</h1>
      <p>As outdoor bonsai grow faster than indoor bonsai, you will see the results of reshaping, wiring and pruning much sooner. Outdoor bonsai also offer more scope for practising the hobby. Some enthusiasts make their own bonsai from garden and nursery plants, and some collect the raw material from the wild. You can also propagate your own plants from seed or cuttings or by layering. <br> <br> Outdoor bonsai can be taken indoors from time to time. In fact, in countries such as China and Japan, it is traditional to use bonsai to decorate the home, but the trees are kept indoors for only short periods. After a day or two they are returned to their outdoor positions. The choice of outdoor bonsai is much wider than of indoor species.</p>
    </div>
  <div class="container mt-5 d-flex ">
    
    <div class="row" >
      <div class="col-md-5 h-100 w-100 " >
        <div class="card text-center  shadow-sm" v-for="product in products" :key="product.id">
            <div class="card-img-top"><img :src="(`https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/All/${product.productImage}`)" :alt="productImage" class=""></div>
            <div class="card-body">
              <h5>{{id}}</h5>
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