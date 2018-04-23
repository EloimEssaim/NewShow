<template>
  <div class = "header">
    <div class = "header-logo">
      LOGO
    </div>
    <div class = "header-nav">
      <div class = "nav-item" a href="">
        时间轴
      </div>
      <div class = "nav-item" a href="">
        相册
      </div>
      <div class = "nav-item" a href="">
        最佳
      </div>
    </div>
    <div class = "header-user">

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
    height: 5rem;
    position: fixed;
    left: 0;
    top:0;
    background-color: rgb(210,224,233);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

  .header-logo{
    color:rgb(74,119,146);
    font-size: 2rem;
  }

  .header-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    color:rgb(74,119,146);
    margin-left:40rem;
    height: 100%;
  }

  .nav-item{
    display: flex;
    box-sizing: border-box;
    padding:1rem;
    height: 100%;
    width: 5rem;
    align-items: center;
    justify-content: center;

  }

  .nav-item:hover{
    background-color: rgb(116,160,190);
    color: #ffffff;
  }

  .header-user{
    border-radius: 50%;
    background-color: rgb(116,160,190);
    width: 3.5rem;
    height: 3.5rem;
    margin-left: 2rem;
  }
</style>
