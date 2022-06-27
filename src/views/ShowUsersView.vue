<template>
  <div class="show-users-view">
    Show Users View
    <div class="users">
      <div class="user" v-for="user in users" :key="user.id">
        <div>Username: {{ user.username }}</div>
        <div>ID: {{ user.id }}</div>
        <hr>
      </div>
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
      users: []
    };
  }
};
</script>

<style>

</style>