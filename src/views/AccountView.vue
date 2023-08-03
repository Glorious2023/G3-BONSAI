<template>
    <div>
        <img src="../assets/images/login.jpg" alt="" class="img-fluid">
    </div>
    <div class="container">
        <form @submit.prevent="handlesubmit" class="row g-3 needs-validation mt-5" novalidate>
            <div class="col-md-4 position-relative">
                <label for="validationTooltipUsername" class="form-label">Username</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                        Please choose a unique and valid username.
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Register</button>
            </div>
        </form>
    </div>
    <div class="container">
        <form @submit.prevent="handlesubmit" class="row g-3 needs-validation mt-5" novalidate>
            <div class="col-md-4 position-relative">
                <label for="validationTooltipUsername" class="form-label">Username</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                        Please choose a unique and valid username.
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Login</button>
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
        handlesubmit(){
           const data ={
                username:this.username
           };
           axios.post('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/RegisterUser',data)
            .then(
            res => {
                console.log(res)
                }
            )
            .catch(
            err => {
                console.log(err)
                }
            )
        }
        
    }
}
</script>

<style>

</style>