<template>
    <div class="add-course-view">
        <div class="form">
					<div @keydown.enter="addCourse" class="input-container">
						<label class="form-label">Department
								<input placeholder="eg. CSCI" class="form-input" type="text" v-model="enteredDepartment">
						</label>
						<label class="form-label">Number
							<input placeholder="eg. 4830" class="form-input" type="text" v-model="enteredNumber">
						</label>
						<label class="form-label">Name
							<input placeholder="eg. Intro to SWE" class="form-input" type="text" v-model="enteredName">
						</label>
					</div>
					<div class="submit-container">
						<button v-show="!isLoading" class="form-button" @click="submitClicked">Add Course</button>
						<LoadingSpinner :isLoading="isLoading"/>
					</div>
				</div>
    </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner';
export default {
	components: {
		LoadingSpinner,
	},
  data() {
    return {
			isLoading: false,
      enteredDepartment: '',
      enteredNumber: '',
      enteredName: '',
    };
  },
  methods: {
		test() {
			console.log('test');
		},
    async submitClicked() {
      const payload = {department: this.enteredDepartment, number: this.enteredNumber, name: this.enteredName};
			this.isLoading = true;
			const response = await this.$store.dispatch('addCourse', payload);
			this.isLoading = false;
			if (response.status === 200) {
				this.clearInputs();
				alert('Course added!'); // TODO: don't use default alert
				return;
			}
			else {
				console.log(response);
				alert('Something went wrong');
			}
    },
		clearInputs() {
			this.enteredDepartment = '';
			this.enteredNumber = '';
			this.enteredName = '';
		},
  }
};
</script>

<style scoped>
.add-course-view {
  display: flex;
  flex-direction: column;
}
.add-button {
	border: none;
}
</style>