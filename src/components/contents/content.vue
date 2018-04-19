<template>
     <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
       <router-view></router-view>
    </main>
</template>
<script> 
export default {
  name: 'el-content', 
  data () {
    return {
      msg: 'Content page'
    }
  }
}
</script>