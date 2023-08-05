<template>
  <div class="container">
        <form class="row g-3 needs-validation mt-5" novalidate>
            <div class="col-md-4 position-relative">
                <label for="validationTooltipUsername" class="form-label">Username</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" required>
                </div>
            </div>
            <div class="col-12">
                <button v-on:click="login" class="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'AccountView',
    data(){
        return{
            username:''
        }
    },
    methods: {
        async login(){
          let result = await axios.get(`https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/ClientIdForUser?username=${this.username}`,{username:this.username})
          console.warn(result)
          if(result.status==200 && result.data.lenght>0){
              localStorage.setItem("user-info",JSON.stringify(result.data))
              this.$router.push({name:'home'})
          }  
        }
    }
}
</script>

<style>

</style>