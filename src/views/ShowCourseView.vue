<template>
	<div class="show-course-view">
		<h1>{{ fullCourseName }}</h1>
		<hr>
		<div>Users enrolled in this course: </div>
		<div class="users-container" v-for="user in courseUsers" :key="user.id">
			<div class="user-container">
				<div class="username">{{ user.username }} {{ user.username === currentUser.username ? '(you)' : '' }}</div>
				<div class="email">{{ user.email }}</div>
				<div class="about">{{ user['about_me'] }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: {
		course: Object,
	},
	data() {
		return {
			courseUsers: [],
		};
	},
	computed: {
		...mapGetters(['currentUser']),
		fullCourseName() {
			return `${this.course.department} ${this.course.number} ${this.course.name}`;
		}
	},
	async created() {
		const response = await this.$store.dispatch('getCourseUsers', {courseID: this.course.id});
		if (response.status === 200) {
			this.courseUsers = response.data.users;
		}
		else {
			this.$fire({
				type: 'error',
				title: 'Error',
				text: 'Something went wrong'
			});
		}
	},
};
</script>

<style>
.header {
	font-size: 1.6rem;
	margin: 15px;
}
.course-name {
	color: var(--color-secondary-lighter);
	display: inline;
}
</style>