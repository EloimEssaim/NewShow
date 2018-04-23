<template>
  <div class = "info-container">
    <div class = "user-avatar">
    </div>
    <div class = "photo-info">
      <div class = "photo-author">
        {{photoAuthor}}
      </div>
      <div class = "photo-time">
        {{photoTime}}
      </div>
    </div>
    <div class = "like-count">
      {{photoLike}}
    </div>
  </div>

</template>


<script>
  export default{
    name:'PhotoComment',
    data:function(){
      return{
        photoAuthor:"珑珑",
        photoTime:"今天12：10",
        photoLike:5789
      }
    }

  }

</script>

<style scoped>
  .info-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 6rem;
    width: 100%;
  }

  .user-avatar{
    border-radius: 50%;
    background-color: rgb(116,160,190);
    width:3.5rem;
    height: 3.5rem;
    margin-left:4rem;

  }

  .photo-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left:1rem;
  }

  .photo-author{
    color:rgb(116,160,190)
  }

  .photo-time{
    color:rgb(189,205,213);

  }

  .like-count{
    color:rgb(116,160,190);
    margin-left: 57rem;
  }



</style>
