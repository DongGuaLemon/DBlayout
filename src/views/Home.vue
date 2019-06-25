<template>
    <div class="home">
        <ul class="bg-bubbles">
            <li v-for="(item,index) in bubbles" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bubbles:[
                {title:'創立資料庫'},
                {title:'資料庫名稱'},
                {title:'資料庫TITLE'},
                {title:'資料檔案上傳'},
                {title:'開始使用'},
                {title:'查詢刪除新增'}],
        }
    },
    
}
</script>
<style scoped>
.home{
  width: 100%;
}
.bg-bubbles{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100px;
    position: fixed; 
    top: 40%;
    left: 50%;
} 
li{
    position: absolute;
    width: 140px;
    height: 100px;
    background-color: #00A0E9;
    border: solid 1px ;
    border-radius: 5px;
    list-style:none;
    animation: square 3s;
    transition-timing-function: linear;
    animation-fill-mode:both;
}
li::after{
    animation: line 3s;
    transition-timing-function: linear;
    animation-fill-mode:both;
}
 li:nth-child(1)::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgb(10, 10, 10);
        top: 50%;
        left: 100%;
        z-index : -1;
        animation-delay: 5s
  }
li:nth-child(1) {
    left:-42%;
    animation-duration: 2s;
  }
  li:nth-child(2)::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgb(10, 10, 10);
        top: 50%;
        left: 100%;
        z-index : -1;
        animation-delay: 5.5s
  }
li:nth-child(2) {
    left:-27%;
    animation-delay: .2s;
    animation-duration: 3s;
  }
li:nth-child(3) {  
    left:-12%; 
    animation-delay: .3s;
    animation-duration: 4s;
}
 li:nth-child(3)::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgb(10, 10, 10);
        top: 50%;
        left: 100%;
        z-index : -1;
        animation-delay: 6s
  }
li:nth-child(4) {
    left:3%;
    animation-duration: 5s;
    animation-delay: .4s;
    background-color: rgba(‎0, 123, 255, 0.3);
}
 li:nth-child(4)::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgb(10, 10, 10);
        top: 50%;
        left: 100%;
        z-index : -1;
        animation-delay: 6.5s
  }
li:nth-child(5) {
    left:18%;
    animation-duration:6s;
    animation-delay: .5s;
    background-color: rgba(‎0, 123, 255, 0.3);
}
 li:nth-child(5)::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgb(10, 10, 10);
        top: 50%;
        left: 100%;
        z-index : -1;
        animation-delay: 7s
  }
li:nth-child(6) {
    left:33%;
    animation-duration: 7s;
    animation-delay: .6s;
    background-color: rgba(‎0, 123, 255, 0.3);
}
@keyframes square {
      0% {
        opacity: 0;
        transform: translateY(-1000px) rotate(185deg);
      }
      25% {
        opacity: 0.25;
        transform: translateY(-500px) rotate(90deg)
      }
      50% {
        opacity: 0.75;
        transform: translateY(100px) rotate(45deg);
      }
      100% {
        opacity: 1;
        transform: translateY(0px) rotate(0deg);
      }
    }
@keyframes line{
    0% {
        opacity: 0;   
      }
      50% {
        opacity: 0.75;      
      }
      100% {
        opacity: 1;
      }
}
</style>
