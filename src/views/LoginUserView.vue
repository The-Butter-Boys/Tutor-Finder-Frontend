<template>
  <div class="login-user-view">
    <div class="form">
			<h2 class="header">Log In</h2>
			<div @keydown.enter="submitLogin" class="input-container">
				<label class="form-label" for="username">Username
					<input class="form-input" v-model="enteredUsername" type="text" name="username">
				</label>
				<label class="form-label" for="password">Password
					<input class="form-input" v-model="enteredPassword" type="password" name="password">
				</label>
			</div>
			<div class="submit-container">
				<button v-show="!isLoading" class="login-button">Log In</button>
				<LoadingSpinner :isLoading="isLoading"/>
			</div>
    </div>
  </div>  
</template>

<script>
import router from '@/router';
import LoadingSpinner from '@/components/LoadingSpinner';
export default {
	components: {
		LoadingSpinner,
	},
  data() {
    return {

			isLoading: false,

      enteredUsername: '',
      enteredPassword: '',
    };
  },
  methods: {
		async testClicked() {
			const response = await this.$store.dispatch('test');
			console.log(response);
			if (response.status === 200) {
				alert('Success!');
			}
			else {
				alert(response.status);
			}
		},
    async submitLogin() {
      if (this.isMissingFields()) {
				alert('Fields missing');
				return;
      }
			const payload = {username: this.enteredUsername, password: this.enteredPassword};
			this.isLoading = true;
			const response = await this.$store.dispatch('logIn', payload)
			this.isLoading = false;
			console.log(response);
			if (response.status === 200) {
				this.clearInputs();
				router.push({name: 'home'});
				return;
			}
			else {
				alert('Invalid login');
			}
    },
    isMissingFields() {
      return this.enteredUsername.trim() === '' || this.enteredPassword.trim() === '';
    },
		clearInputs() {
			this.enteredUsername = '';
			this.enteredPassword = '';
		},
  }
};
</script>

<style>
.login-user-view {
	display: flex;
	justify-content: center;
}
.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--color-primary);
	height: 400px;
	width: 600px;
	border-radius: 60px;
	margin: 25px;
}
.header {
	color: white;
}
.input-container {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
.login-button {
	align-self: center;
	font-size: 1.1rem;
	background-color: var(--color-secondary);
	color: white;
	border: none;
	width: 150px;
	border-radius: 15px;
	padding: 10px;
	cursor: pointer;
}
.login-button:hover {
	background-color: var(--color-secondary-darker);
	transition: 0.2s;
}
</style>