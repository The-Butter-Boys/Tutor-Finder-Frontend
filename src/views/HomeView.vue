<template>
  <div class="home">
		<div class="logged-in"></div>
		<div class="guest"></div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
	methods: {
		test() {
			this.$fire({
				type: 'success',
				title: 'hello',
				confirmButtonColor: 'red',
			});
		},
	}
};
</script>

<style scoped>
</style>
