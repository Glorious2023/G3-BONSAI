<template>
<div>
   <Carousel/>
</div>
   
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  name: 'HomeView',
  components: {
    Carousel
  }
}
</script>
<style scoped>
 img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
