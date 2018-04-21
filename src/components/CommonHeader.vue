<template>
  <div class = "header">
    <div class = "header-logo">
      <div class = "header-button-container">

      </div>
      <div class = "header-user">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonHeader',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width: 100%;
    height: 10rem;
    position: fixed;
    left: 0;
    top:0;
    background-color: rgb(210,224,233);
  }
</style>
