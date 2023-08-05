<template>
  <div class="container form-box">
    <form>
      <div class="table">
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        <tr>{{}}</tr>
        <h5>Price:£</h5>
        <div class="container">
          <button class="btn btn-outline-warning">PlaceOrder</button>
        <button class="btn btn-outline-warning d-block">UpdateBasket</button>
        </div>
      </table>
      
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name:'BasketView'
}
</script>

<style scoped>
    .container{
        width: 100px;
        height: 200%;
    }
</style>