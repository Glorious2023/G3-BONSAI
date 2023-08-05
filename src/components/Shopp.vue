<template>
  <img v-on:click="mounted" src="../assets/images/shopping-cart.png" class="" alt="">
</template>

<script>
export default {
    name:'ShoppComponent',
     mounted(){
    let user = localStorage.getItem('user-info')
    if(user){
      this.$router.push({name:'account'})
      }
  }
}
</script>

<style>

</style>