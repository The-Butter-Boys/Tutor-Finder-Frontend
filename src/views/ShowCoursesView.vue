<template>
  <div class="show-courses-view">
    Show Courses
    <div class="courses">
			<LoadingSpinner :isLoading="isLoading" :size="100" />
      <div class="course" v-for="course in courses" :key="course.id">
        <div>ID: {{ course.id }}</div>
        <div>Department: {{ course.department }}</div>
        <div>Number: {{ course.number }}</div>
        <div>Name: {{ course.name }}</div>
				<button @click="addClicked(course.id)" class="add-button">Add to my courses</button>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner';
export default {
	components: {
		LoadingSpinner,
	},
  data() {
    return {
			isLoading: false,
      courses: null,
    };
  },
  async created() {
		this.isLoading = true;
    const response = await this.$store.dispatch('getCourses');
		this.isLoading = false;
		console.log(response);
    if (response.status === 200) {
			this.courses = response.data.courses;
		}
		else {
			alert('Something went wrong');
		}
  },
	methods: {
		async addClicked(courseID) {
			const payload = {courseID: courseID};
			const response = await this.$store.dispatch('addCourseToUser', payload);
			if (response.status === 200) {
				alert('Added!');
			}
			else {
				alert('Something went wrong');
			}
		},
	}
};
</script>

<style>
.add-button {
	font-size: 1.1rem;
}
</style>