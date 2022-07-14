<template>
  <div class="login-user-view">
    <h1>Login</h1>
    <h3>Fake Login</h3>
    <div class="fake-login">
      <label for="username">Username<input v-model="enteredUsername" type="text" name="username"></label>
      <label for="password">Password<input v-model="enteredPassword" type="text" name="password"></label>
      <div class="login-response">{{ loginResponse }}</div>
      <button type="submit" @click="login">"Login"</button>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      enteredUsername: '',
      enteredPassword: '',
      loginResponse: 'login response',
    };
  },
  methods: {
    async login() {
      this.loginResponse = '';
      if (this.isMissingFields()) return;
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
    },
    isMissingFields() {
      return this.enteredUsername.trim() === '' || this.enteredPassword.trim() === '';
      
    }
  }
};
</script>

<style>

</style>