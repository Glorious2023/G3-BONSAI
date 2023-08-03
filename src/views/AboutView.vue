<template>
  <div class="about">
    <div class="card text-bg-dark">
      <img src="../assets/images/g37.jpg" class="card-img img-fluid" alt="...">
      <div class="card-img-overlay">
        <h1 class="card-title text-dark text-center">Welcome to G3 BONSAI</h1>
        
        <h3 class="card-text">G3-Bonsai is a community built by enthusiasts and experts from around the world. We introduce you to the fascinating and living art of Bonsai, and help you get started!</h3>
        <h3 class="card-text">Bonsai trees are small, potted trees that are well-known parts of the Japanese culture. The living art of Bonsai represents peace and tranquility, as well as long-lasting determination and patience. A "bon" is a flat tray or shallow pot, and "sai" means plant or planting. In this part of the website we share inspirational photos and videos of the living art of Bonsai.</h3>
      </div>
      <h4 class="text-center">motto: Giving you the best design and quality</h4>
    </div>
     <div class="container">
      <h2>Contact G3-BONSAI</h2>
      <Button text="facebook" link="https://facebook.com" color="outline-primary"/>
      <br>
      <br>
      <Button text="Whatsapp" link="https://whatsapp.com" color="outline-success"/>
      <br>
      <br>
      <p>+2348145735203</p>
      <p>+2349033175498</p>
      <p>ogwucheabraham08@gmail.com</p>
      <p><b>Address:</b> Ambassador Ajonye Foundatio, Opposite Abglo-Top,GRA, Otukpo, Benue state.</p>
    </div>
  </div>
</template>
<script>
import Button from '../components/Button.vue'
export default {
  name:'AboutView',
  components:{
    Button
  }
}
</script>
