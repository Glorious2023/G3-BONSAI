<template>
    <div class="img-overlay">
        <img src="../assets/images/login.jpg" alt="" class="img-fluid">
    </div>
    <div class="container">
        <form class="row g-3  mt-5">
            <div class="col-md-4">
                <label class="form-label">Username</label>
                <div>
                    <input v-model="username" type="text" class="form-control"  required>
                </div>
            </div>
            <div class="col-12">
                <button v-on:click="register" class="btn btn-primary">Register</button>
            </div>
        </form>
        <div class="mb-5">
            Already Registered?
             <router-link to='/login'>
                <b>Log in</b>
            </router-link>
        </div>
    </div>
    
</template>

<script>
// import axios from 'axios'
export default {
    name:'AccountView',
    data(){
        return{
            username:''
        }
    },
    methods: {
        async register(){
        //   let result = await axios.get('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/RegisterUser',{username:this.username})
        //   console.warn(result)
        //   if(result.status==201){alert("successfull")}
        console.warn("signup",this.username)  
        }
    }
}
</script>

<style>

</style>