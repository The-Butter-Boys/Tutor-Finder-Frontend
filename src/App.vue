<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
	components: {
			NavBar,
	},
	async created() {

	},
};
</script>


<style>
:root {
	--color-primary: #24252a;
	--color-primary-lighter: hsl(230, 8%, 25%);
	--color-secondary: #00a7cc;
	--color-secondary-darker: hsl(191, 100%, 35%);
}
body {
	/* background-color: hsl(230, 8%, 95%); */
	background-color: var(--color-primary-lighter);
	color: white;
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
.input-container {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
</style>
