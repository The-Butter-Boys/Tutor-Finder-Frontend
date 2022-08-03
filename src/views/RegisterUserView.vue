<template>
    <div class="register-user-view">
			<div class="form">
				<h2 class="header">Register</h2>
				<div @keydown.enter="submitRegister" class="input-container">
					<label class="form-label" for="username">Username
							<input class="form-input" type="text" v-model="enteredUsername">
					</label>
					<label class="form-label" for="password">Password
						<input class="form-input" type="password" v-model="enteredPassword">
					</label>
					<label class="form-label" for="email">Email
						<input class="form-input" type="text" v-model="enteredEmail">
					</label>
				</div>
				<div class="submit-container">
					<button v-show="!isLoading" class="register-button" @click="submitRegister">Register</button>
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
      enteredEmail: ''
    };
  },
  methods: {
		async submitRegister() {
			if (this.isMissingFields()) {
				alert('Fields missing');
				return;
			}
			const payload = {username: this.enteredUsername, password: this.enteredPassword, email: this.enteredEmail};
			this.isLoading = true;
			const response = await this.$store.dispatch('register', payload);
			this.isLoading = false;
			if (response.status === 200) {
				this.clearInputs();
				router.push({name: 'home'});
				return;
			}
			else {
				console.log(response);
				alert('Something went wrong');
			}
		},
		isMissingFields() {
			return this.enteredUsername.trim() === '' || this.enteredPassword.trim() === '';
		},
		clearInputs() {
			this.enteredUsername = '';
			this.enteredPassword = '';
		}
  }
};
</script>

<style scoped>
.register-user-view {
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
.register-button {
	align-self: center;
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
.register-button:hover {
	background-color: var(--color-secondary-darker);
	transition: 0.2s;
}
</style>