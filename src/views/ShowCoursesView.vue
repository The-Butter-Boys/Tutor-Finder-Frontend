<template>
  <div class="show-courses-view">
    Show Courses
    <div class="courses">
      <div class="course" v-for="course in courses" :key="course.id">
        <div>ID: {{ course.id }}</div>
        <div>Department: {{ course.department }}</div>
        <div>Number: {{ course.number }}</div>
        <div>Name: {{ course.name }}</div>
        <button type="submit" @click="tutSignup">Tutor Signup</button>
        <button type="submit" @click="viewTuts">View Available Tutors</button>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { API_URL } from '../api';
export default {
  data() {
    return {
      courses: null,
    };
  },
  async created() {
    const res = await fetch(`${API_URL}/courses`);
    this.courses = await res.json();
  }
};
</script>

<style>

</style>