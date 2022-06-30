<template>
  <div class="show-users-view">
    Show Users View
    <div class="users">
      <div class="user" v-for="user in users" :key="user.id">
        <div>ID: {{ user.id }}</div>
        <div>Username: {{ user.username }}</div>
        <div>Email: {{ user.email }}</div>
        <hr>
      </div>
    </div>
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
  async created() {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    this.users = data;
  },
  data() {
    return {
      users: [],
      enteredUsername: '',
      enteredPassword: '',
      loginResponse: 'login response',
    };
  },
  methods: {
    async login() {
      console.log('login');
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
    }
  },
};
</script>

<style>

</style>