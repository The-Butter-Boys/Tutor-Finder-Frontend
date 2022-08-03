<template>
	<div class="loading-spinner">
		<loading-spinner
			:active="isLoading"
			:color="color"
			:height="size"
			:width="size"
		></loading-spinner>
	</div>
</template>

<script>
export default {
	props: {
		isLoading: Boolean,
		size: {
			type: Number,
			default: 40,
		},
	},
	data() {
		return {
			color: '#00a7cc',
		};
	},
};
</script>

<style>

</style>