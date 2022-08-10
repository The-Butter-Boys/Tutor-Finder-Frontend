<template>
	<div class="profile-view">
		<div class="username">{{ currentUser.username }}</div>
		<div class="email">{{ currentUser.email }}</div>
	</div>	
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	created() {
		this.localAboutMe = this.currentUser['about_me'];
	},
	computed: {
		...mapGetters(['currentUser']),
	},
};
</script>

<style>
.username {
	margin-top: 25px;
	font-size: 2.4rem;
}
.email {
	margin: 5px 0;
}
</style>
