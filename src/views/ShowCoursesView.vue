<template>
  <div class="show-courses-view">
    <h1>All Courses</h1>
		<hr>
    <div class="courses">
			<LoadingSpinner :isLoading="isLoading" :size="100" />
      <div class="course-container" v-for="course in courses" :key="course.id">
				<div class="full-course-name">{{ fullCourseName(course) }}</div>
				<button :disabled="isUserRegistered(course.id)" @click="addClicked(course.id)" class="add-btn">
					{{ isUserRegistered(course.id) ? 'Already registered' : 'Add to my courses' }}
				</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
		await this.$store.dispatch('loadUserCourses');
    const response = await this.$store.dispatch('getCourses');
		this.isLoading = false;
    if (response.status === 200) {
			this.courses = response.data.courses;
		}
		else {
			this.$fire({
				type: 'error',
				title: 'Something went wrong',
			});
		}
  },
	computed: {
		...mapGetters(['currentUserCourses']),
	},
	methods: {
		fullCourseName(course) {
			return `${course.department} ${course.number} ${course.name}`;
		},
		isUserRegistered(courseID) {
			const userCourseIDs = this.currentUserCourses.map(course => course.id);
			return userCourseIDs.includes(courseID);
		},
		async addClicked(courseID) {
			const payload = {courseID: courseID};
			const response = await this.$store.dispatch('addCourseToUser', payload);
			if (response.status === 200) {
				await this.$store.dispatch('loadUserCourses');
				this.$fire({
					type: 'success',
					title: 'Success!',
					text: 'This course was added to your courses'
				});
			}
			else {
				this.$fire({
					type: 'error',
					title: 'Something went wrong',
				});
			}
		},
	}
};
</script>

<style>
.course-container {
	background-color: var(--color-primary);
	border: 1px solid var(--color-secondary);
	width: fit-content;
	border-radius: 5px;
	margin: 15px 0;
	padding: 20px;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
}
.add-btn {
	font-size: 1.1rem;
	background-color: var(--color-secondary-darker);
	color: white;
	border: none;
	padding: 10px;
	border-radius: 10px;
	margin-left: 12px;
	cursor: pointer;
}
.add-btn:hover {
	background-color: var(--color-secondary);
	transition: 0.2s;
}
.add-btn:active {
	background-color: var(--color-secondary-lighter);
	transition: 0s;
}
.add-btn:disabled {
	background-color: grey;
	background-color: hsl(191, 40%, 40%);
	color: hsl(0, 0%, 70%);
	cursor: not-allowed;
}
</style>