<template>
	<div id="app">
		<NavBar />
		<div class="body">
			<router-view/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar';
export default {
	components: {
			NavBar,
	},
	async created() {
		if (this.loggedIn) {
			await this.$store.dispatch('loadCurrentUser');
			await this.$store.dispatch('loadUserCourses');
		}
	},
	computed: {
		...mapGetters(['loggedIn', 'currentUser']),
	}
};
</script>


<style>
:root {
	--color-primary: #24252a;
	--color-primary-lighter: hsl(230, 8%, 25%);
	--color-primary-lightest: hsl(230, 8%, 35%);
	--color-secondary: hsl(191, 100%, 40%);
	--color-secondary-darker: hsl(191, 100%, 35%);
	--color-secondary-lighter: hsl(191, 100%, 45%);
}
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:ital,wght@0,400;1,300;1,400&display=swap');
body {
	background-color: var(--color-primary-lighter);
	color: white;
	font-family: Roboto;
}
.body {
	padding: 0 50px;
}
.form-input {
	border-radius: 10px;
	font-size: 1.2rem;
	margin: 5px 15px;
	padding: 5px 10px;
}
.form-label {
	display: flex;
	align-items: center;
	font-size: 1.1rem;
	color: white;
}
.submit-container {
	height: 40px;
	display: flex;
	align-items: center;
	margin-top: 10px;
}
.form-button {
	font-size: 1.1rem;
	background-color: var(--color-secondary);
	color: white;
	border: none;
	padding: 10px;
	width: 150px;
	border-radius: 15px;
	margin: 10px 0;
	cursor: pointer;
}
.form-button:hover {
	background-color: var(--color-secondary-darker);
	transition: 0.2s;
}
.input-container {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
</style>
