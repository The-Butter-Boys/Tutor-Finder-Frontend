import Axios from 'axios';
import { API_URL } from '../api';
const authenticated = {
	state: () => ({
		courses: [],
	}),
	getters: {
		currentUserCourses(state) {
			return state.courses;
		},
	},
	mutations: {
		setCurrentUserCourses(state, courses) {
			state.courses = courses;
		}
	},
	actions: {
		async addCourseToUser({ getters }, payload) {
			/*
			Expects payload: {courseID}
			*/
			try {
				// Format payload as backend expects it, i.e. snake_case
				const response = await Axios.post(`${API_URL}/user/courses`, {'course_id': payload.courseID}, {
					headers: {
						Authorization: `Bearer ${getters.authToken}`
					}
				});
				return response;
			} catch(error) {
				return error.response;
			}
		},
		async loadUserCourses({ commit, getters }) {
			try {
				const response = await Axios.get(`${API_URL}/user/courses`, {
					headers: {
						Authorization: `Bearer ${getters.authToken}`
					}
				});
				commit('setCurrentUserCourses', response.data.courses);
				return response;
			} catch(error) {
				return error.respnse;
			}
		}
	},
};

export default authenticated;