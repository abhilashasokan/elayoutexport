<template>
  <div> 
	<app-header></app-header>
    <div class="container-fluid">
      <div class="row">
      	<nav class="col-md-2 d-none d-md-block bg-light sidebar">
      	<app-sidebar></app-sidebar>
      </nav>
      <app-content></app-content> 
      </div>
    </div>       
  </div>
</template>

<script>

import Header from '@/components/partials/header'
import SideBar from '@/components/partials/sidebar'
import CS_Content from '@/components/contents/content'
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
	'app-header': Header,
	'app-sidebar' : SideBar,	
	'app-content' : CS_Content
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
