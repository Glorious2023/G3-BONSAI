<template>
  <a :class= "['btn','btn-'+ color]" :href="link">{{text}}</a>
</template>

<script>
export default {
     name:'ButtonComponent',
    props:{
        text:String,
        link:String,
        color:String
    }
}
</script>

<style>

</style>