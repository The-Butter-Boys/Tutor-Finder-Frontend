<template>
	<div class="profile-view">
		<h1>Profile</h1>
		<div class="info-container">
			<p>username: {{ currentUser.username }}</p>
			<p>email: {{ currentUser.email }}</p>
		</div>
	</div>	
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['currentUser']),
	}
};
</script>

<style>

</style>