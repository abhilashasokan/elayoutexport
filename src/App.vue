<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>
<script>
if (localStorage) {
  //localStorage.setItem('access_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2NmQ1MGZiOTkxYjg0ZjgyYmFiMTc5ZTVhZWUzOGM3MDI4MjYzOGZhNzkzMzY2YzNjNTZlZTk2ZTI2MDEyMmMyNmRkZTNmYjQzYzYwMmJiIn0.eyJhdWQiOiIxIiwianRpIjoiNjY2ZDUwZmI5OTFiODRmODJiYWIxNzllNWFlZTM4YzcwMjgyNjM4ZmE3OTMzNjZjM2M1NmVlOTZlMjYwMTIyYzI2ZGRlM2ZiNDNjNjAyYmIiLCJpYXQiOjE1MjM4NjAwMzAsIm5iZiI6MTUyMzg2MDAzMCwiZXhwIjoxNTU1Mzk2MDMwLCJzdWIiOiIxMyIsInNjb3BlcyI6W119.arTOxY43WpDYu_Pg9kMDu6xD8FFlTkkVmPSjHEAsJUE0GgkpGlXmvhSK5xrRc1IKOMVn5U9AlJK_AqUndcY_efhq6UktZXMJyLn2GBK_EWbV0_3J2MPDgM-4qRLidy9FpqIQxy5LdfFDQJMnKqmshcGuEFdUHkRZ01zqNrf9lBCc-MgewlUdIc-xc34VwGZvW6Bh-3fX61-Nlyw6_WEFtkhL8OXj5izbDZkjrtTs6-sqwFCM6WRqnomhQv0RDYCPclFr3gYjgZ1hXkU-ucJIMnZKdzZSjsaSprDdGs0Kxb4m-Cf0noGuLqxH8CMNxdFi0q97WPxreyGognsgWjrKO8dK4vksxwQQJP4IH2OahBOK5q39QRqvX21_pzoKLkvs4D8DMqOLbrhwqji7jNcsvIL1J-ZeVMpMwO9vQMNHXoNto9o60wr6Aw3BuHvX-xC_wH8FKX4ZAO5qompWlAYRjB3Av2FNbfu6Ded_9KFTR9Pu5VqDzETgNcR6byS4BAvaPnXh1naDruU6oo2NktgjCnQPsIBzTLfL6DqH0gG1S74sJEdY_k1bCIatZQq6F7JvGXigEr6lx_yzRjiaHH-PThz6zcOUEbQeXJtrILpUSzKxpRfML0I0C7GIHcZCqcuacIOkF7gSFe4x_Tg0MJOR6PEklIxlM2cBN_w1yqt1JF4');
  let access_token = localStorage.getItem('access_token');
  if ( access_token === null ){
    window.location = '/#/login'
  }
} else {
  console.log("No support. Use a fallback such as browser cookies or store on the server.");
}

export default {
  name: 'App'
}
</script>
<style>
  @import './assets/css/theme.css'
</style>
