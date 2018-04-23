<template>
  <div class = "photo-container">
    <div class = "photo">

    </div>
  </div>
</template>


<script>
  export default{
  	name:'Photo'
  }
</script>


<style scoped>
  .photo-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:4rem;
  }

  .photo{
    background-color: rgb(234,240,244);
    width: 35rem;
    height: 25rem;
  }
</style>
