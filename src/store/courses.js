import Axios from 'axios';
import { API_URL } from '../api';
const authenticated = {
	state: () => ({
		
	}),
	getters: {

	},
	mutations: {

	},
	actions: {
		async getCourses() {
			try {
				const response = await Axios.get(`${API_URL}/courses`);
				return response;
			} catch(error) {
				return error.response;
			}
		},
		async addCourse({ getters }, payload) {
			/*
			Expects payload {department, number, name};
			*/
			try {
				console.log('add course payload: ', payload);
				const response = await Axios.post(`${API_URL}/courses`, payload, {
					headers: {
						Authorization: `Bearer ${getters.authToken}`
					}
				});
				// TODO: commit
				return response;
			} catch(error) {
				return error.response;
			}
		},
		async getCourseUsers({ getters }, payload) {
			/*
			Expects payload: {courseID}
			*/
			try {
				const response = await Axios.get(`${API_URL}/courses/${payload.courseID}/users`, {
					headers: {
						Authorization: `Bearer ${getters.authToken}`
					}
				});
				return response;
			} catch(error) {
				return error.response;
			}
		}
	},
};

export default authenticated;