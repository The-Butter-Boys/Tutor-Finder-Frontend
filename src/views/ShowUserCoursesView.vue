<template>
	<div class="show-user-courses">
		{{ currentUserCourses }}
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
	}
};
</script>

<style>

</style>