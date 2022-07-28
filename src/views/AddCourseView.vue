<template>
    <div class="add-course-view">
        <label for="department">Department
            <input type="text" v-model="department">
        </label>
        <label for="number">Number
          <input type="text" v-model="number">
        </label>
        <label for="name">Name
          <input type="text" v-model="name">
        </label>
        <button type="submit" @click="submitClicked">Add Course</button>
        <div class="login-response">{{ loginResponse }}</div>
    </div>
</template>

<script>
import { API_URL } from '../api';
export default {
  data() {
    return {
      department: '',
      number: '',
      name: '',
      loginResponse: '',
    };
  },
  methods: {
    async submitClicked() {
      this.loginResponse = '';
      const body = {department: this.department, number: this.number, name: this.name};
      const res = await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const isSuccess = (await res.json()).success;
      this.loginResponse = isSuccess ? 'Successfully added course!' : 'Course already added';
    }
  }
};
</script>

<style scoped>
.add-course-view {
  display: flex;
  flex-direction: column;
}
</style>