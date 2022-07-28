<template>
  <div class="login-user-view">
    <h1>Login</h1>
    <h3>Fake Login</h3>
    <div class="fake-login">
      <label for="username">Username<input v-model="enteredUsername" type="text" name="username"></label>
      <label for="password">Password<input v-model="enteredPassword" type="text" name="password"></label>
      <div class="login-response">{{ loginResponse }}</div>
      <button type="submit" @click="submitLogin">"Login"</button>
      <button class="button2" type="submit" @click="submitLogout">"Logout"</button>
    </div>
  </div>  
</template>

<script>
var loggedIn = false;
export default {
  data() {
    return {
      enteredUsername: '',
      enteredPassword: '',
      loginResponse: 'login response',
    };
  },
  methods: {
    async submitLogin() {
      this.loginResponse = '';
      if (this.isMissingFields()) {
        this.loginResponse = "You're missing a field."
        return ;
      }
       else if (loggedIn) {
        this.loginResponse = "You're already logged in!"
        return ;
      }
      const body = {username: this.enteredUsername, password: this.enteredPassword};
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const isSuccess = (await res.json()).success;
      this.loginResponse = isSuccess ? 'Success!' : 'Failure';
      if (this.loginResponse == 'Success!') {
        loggedIn = true;
      }
    },
    isMissingFields() {
      return this.enteredUsername.trim() === '' || this.enteredPassword.trim() === '';
      
    },
    async submitLogout() {
      if (loggedIn == true) {
        loggedIn = false;
        this.loginResponse = "Logged Out";
      }
      else {
        this.loginResponse = "You never logged in!";
      }
    }
  }
};
</script>

<style>

</style>