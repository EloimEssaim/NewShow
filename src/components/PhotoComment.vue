<template>
  <div class = "comment-container">
    <div class = "user-avatar">

    </div>
    <div class = "comment">
      <div class = "comment-info">
        <div class = "comment-author">
          {{commentAuthor}}
        </div>
        <div class = "comment-time">
          {{commentTime}}
        </div>
      </div>
      <div class = "comment-content">
        {{commentContent}}
      </div>
    </div>
  </div>
</template>


<script>
  export default{
  	name:'PhotoComment',
  	data:function(){
  		return{
  			commentAuthor:"郑伟",
        commentTime:"今天12：20",
        commentContent:"这张照片真好看"
      }
    }

  }

</script>

<style scoped>
  .comment-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 6rem;
  }

  .user-avatar{
    border-radius: 50%;
    background-color: rgb(116,160,190);
    width:3.5rem;
    height: 3.5rem;
    margin-left:4rem;

  }

  .comment{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left:1rem;
  }

  .comment-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .comment-author{
    color:rgb(116,160,190)
  }

  .comment-time{
    color:rgb(189,205,213);
    margin-left:1rem;

  }

  .comment-content{
    color:rgb(116,160,190)
  }


</style>
