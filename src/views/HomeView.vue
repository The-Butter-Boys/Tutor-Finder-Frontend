<template>
  <div class="home">
    <h1>Home</h1>
		<button @click="test" class="form-button">Test Alert</button>
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
