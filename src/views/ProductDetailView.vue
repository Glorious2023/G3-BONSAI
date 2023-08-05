<template>
  <!-- <div class="container" v-if="isLoading">
    <h3>Is Loading......</h3>      
  </div>
  <div v-else class="container">
    <h3>Product {{$route.params.id}}</h3>
    <div>
      <img :src="queryProduct.productImage" :alt="productImage">    
    </div>
    <div>
      <h3>{{queryProduct.productTitle}}</h3>
      <h3>£{{queryProduct.productPrice}}</h3>
      <h3>{{queryProduct.productDescription}}</h3>
      <h3>{{queryProduct.checkoutOptions}}</h3>
    </div>
  </div> -->
  <div v-if="isLoading">
    <h2>Is Loading</h2>
  </div>
  <div v-else>
    <div class="container">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <h2>{{$route.params.id}}</h2>
            <img :src="queryProduct.productImage" class="img-fluid rounded-start" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{queryProduct.productTitle}}</h5>
              <p class="card-text">{{queryProduct.productDescription}}</p>
              <p>{{queryProduct.checkoutOptions}}</p>
              <p class="card-text"><small class="text-body-secondary">£{{queryProduct.productPrice}}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref,onMounted} from 'vue';
  import {useRoute} from 'vue-router';

  const queryProduct = ref ({})
  const isLoading = ref (true)
  const route = useRoute();

  onMounted(async() => {
    const result = await fetch(`https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/${route.params.id}`)
    const response = await result.json();
    queryProduct.value = response;
    isLoading.value = false;


  })
</script>

<style>

</style>