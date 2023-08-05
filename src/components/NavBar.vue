<template>
  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid ">
    <span class="navbar-brand" href="#">G3-BONSAI</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to='/' class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to='/about' class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to='/account' class="nav-link">Account</router-link>
        </li>
        <li class="nav-item">
          <router-link to='/indoorBonsai' class="nav-link">IndoorBonsai</router-link>
        </li>
        <li class="nav-item">
          <router-link to='/outdoorBonsai' class="nav-link">OutdoorBonsai</router-link>
        </li>
        <li class="nav-item">
          <router-link to='/bonsaiCare' class="nav-link">BonsaiCare</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <div>
          <router-link to='/basket' class="nav-link">
            <Shopp/>
        </router-link>
        </div>
      </form>
    </div>
  </div>
</nav>
<router-view/>
</template>

<script>
import Shopp from '@/components/Shopp.vue'
export default {
    name:'NavBarComponent',
    components:{
      Shopp
    }
}
</script>

<style scoped>
img{
  width: 50px;
  height: 50px;
}
</style>