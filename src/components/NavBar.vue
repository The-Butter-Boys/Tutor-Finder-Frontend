<template>
  <div class="navbar">
		<div class="container" v-if="loggedIn">
			<div class="left">
				<!-- <router-link to="/" class="nav-item">Home</router-link> -->
				<router-link to="/courses" class="nav-item">Courses</router-link>
				<router-link to="/myCourses" class="nav-item">My Courses</router-link>
				<router-link to="/addCourse" class="nav-item">Add Course</router-link>
				<router-link to="/profile" class="nav-item">Profile</router-link>
				<div class="nav-item" @click="logout">Logout</div>
			</div>
			<div class="right">
				<div class="greeting">Logged in as {{ currentUser.username }}</div>
			</div>
		</div>

		<div class="container" v-if="!loggedIn">
			<div class="left">
				<router-link to="/" class="nav-item">Home</router-link>
			</div>
			<div class="right">
				<router-link to="/login" class="nav-item">Login</router-link>
				<router-link to="/register" class="nav-item">Register</router-link>
			</div>
		</div>		
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '@/router';
export default {
	computed: {
		...mapGetters(['loggedIn', 'currentUser']),
	},
	methods: {
		logout() {
			this.$store.dispatch('logout');
			if (router.currentRoute.name !== 'home') router.push({name: 'home'});
		}
	}
};
</script>

<style>
.navbar {
	display: flex;
	background-color: #24252a;
	height: 40px;
	align-items: center;
	padding: 10px 20px;
	justify-content: space-between;
}
.nav-item {
	color: white;
	padding: 7px 15px;
	text-decoration: none;
}
.nav-item:hover {
	color: hsl(191, 100%, 50%);
	cursor: pointer;
	transition: 0.2s;
}
.container {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.left {
	display: flex;
}
.right {
	display: flex;
}
.greeting {
	color: white;
	padding: 0 15px;
	margin-right: 50px;
	display: flex;
	align-items: center;
}
.router-link-exact-active {
	background-color: var(--color-secondary);
	border-radius: 100px;
}
.router-link-exact-active:hover {
	color: white;
}
</style>
