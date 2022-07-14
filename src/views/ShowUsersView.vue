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
  </div>
</template>

<script>
import { API_URL } from '../api';
export default {
  async created() {
    const res = await fetch(`${API_URL}/users`);
    this.users = await res.json();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
  },
};
</script>

<style>

</style>