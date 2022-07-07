<template>
  <div class="navbar">
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/addUser">Add User</router-link> |
        <router-link to="/addCourse">Add Course</router-link> |
        <router-link to="/showUsers">Show Users</router-link> |
        <router-link to="/showCourses">Show Courses</router-link>
    </nav>
  </div>
</template>

<script>
export default {

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:ital,wght@0,400;1,300;1,400&display=swap');
body {
    font-family: Roboto;
}
</style>
