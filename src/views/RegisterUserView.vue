<template>
    <div class="register-user-view">
        <label for="username">Username
            <input type="text" v-model="username">
        </label>
        <label for="password">Password
          <input type="text" v-model="password">
        </label>
        <label for="email">Email
          <input type="text" v-model="email">
        </label>
        <button type="submit" @click="submitClicked">Register</button>
    </div>
</template>

<script>
import { API_URL } from '../api';
export default {
  data() {
    return {
      username: '',
      password: '',
      email: ''
    };
  },
  methods: {
    async submitClicked() {
      const body = {username: this.username, password: this.password, email: this.email};
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      console.log(res);
    }
  }
};
</script>

<style scoped>
.register-user-view {
  display: flex;
  flex-direction: column;
}

</style>