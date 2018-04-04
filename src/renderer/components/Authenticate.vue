<template>
<div class="row">
    <div class="col-md-12 mt-50"></div>
    <div class="col-md-6"></div>
    <div class="col-md-4">
      <img src='./../../assets/images/ShipBob-Logomark-Color.png' style="width:60px" class='logo-align-center' />
      <h5>Login using your ShipBob Account</h5>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email"
          v-model="credentials.username"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
      </div>
      <button class="btn btn-primary text-center" @click="submit()">Login</button>
    </div>
  </div>
  </template>
  <script>
  import auth from '../auth'
  export default {
    name: 'login',
    data () {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit () {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }

        auth.login(this, credentials, 'home')
      }
    }

  }
  </script>

<style lang="scss">
  .logo-align-center{
    margin: 0 auto;
    clear:both;
    display:block;
  }
  </style>
  