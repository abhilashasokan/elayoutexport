<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>
<script>
if (localStorage) {
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
