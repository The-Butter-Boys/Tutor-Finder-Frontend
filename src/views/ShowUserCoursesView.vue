<template>
	<div class="show-user-courses">
		<h1>My Courses</h1>
		<hr>
		<div class="course-container" v-for="course in currentUserCourses" :key="course.id">
			<div class="full-course-name">{{ fullCourseName(course) }}</div>
			<button @click="goToCoursePage(course)" class="view-course-btn">View course page</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	async created() {
		await this.$store.dispatch('loadUserCourses');
	},
	computed: {
		...mapGetters(['currentUserCourses']),
	},
	methods: {
		fullCourseName(course) {
			return `${course.department} ${course.number} ${course.name}`;
		},
		goToCoursePage(course) {
			this.$router.push({name: 'showCourse', params: {course: course}});
		},
	}
};
</script>

<style>
.show-user-courses {
	
}
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
.view-course-btn {
	font-size: 1.1rem;
	background-color: var(--color-secondary-darker);
	color: white;
	border: none;
	margin-left: 12px;
	border-radius: 10px;
	padding: 10px;
	cursor: pointer;
}
.view-course-btn:hover {
	background-color: var(--color-secondary);
	transition: 0.2s;
}
.view-course-btn:active {
	background-color: var(--color-secondary-lighter);
	transition: 0s;
}
</style>