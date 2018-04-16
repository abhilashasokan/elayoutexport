<template>
 <div class="form-signin">
        <form id="form" method="post" v-on:submit.prevent="onSubmit">
        <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" name="Email address" class="form-control" placeholder="Email address" v-model="user.email" value="" v-validate="'required|email'"  autofocus="">
        <span v-show="errors.has('Email address')" class="text-danger">{{ errors.first('Email address') }}</span>
        
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" name="Password" class="form-control error" placeholder="Password" v-validate="'required'" v-model="user.password" value="">
        <span v-show="errors.has('Password')" class="text-danger">{{ errors.first('Password') }}</span>
        <!-- <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
        </div> -->
        <button class="btn btn-lg btn-primary btn-block" :disabled="errors.any()">Sign in</button>
        <p class="mt-5 mb-3 text-muted">©  2017-2018</p> 
        </form>
    </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "el-login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      msg: "Login Page"
    };
  },
  methods: {
    resetUser() {
      this.user = {
        email: null,
        password: null
      };
    },
    onSubmit: function() {
      this.signIn();       
    },
    signIn: function() {
      axios
        .post("http://elayoutexport.test/api/login", {
          email: this.user.email,
          password: this.user.password
        })
        .then(
          response => {
            if (localStorage) {
              localStorage.setItem("access_token", response.data.success.token);
              let access_token = localStorage.getItem("access_token");
              if (access_token !== null) {
                window.location = "/#/home";
              }
            } else {
              console.log(
                "No support. Use a fallback such as browser cookies or store on the server."
              );
            }
          },
          error => {
            this.$swal("Invalid data provided");
          }
        );
    }
  }
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
  top: calc(50vh - 260px);
  position: absolute;
  left: calc(50vw - 180px);
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
