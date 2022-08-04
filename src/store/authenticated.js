import Axios from 'axios';
import { API_URL } from '../api';
const authenticated = {
	state: () => ({
		authToken: localStorage.getItem('auth-token') || null,
		currentUser: null,
	}),
	getters: {
		authToken(state) {
			return state.authToken;
		},
		loggedIn(state) {
			return state.authToken !== null;
		},
		currentUser(state) {
			if (!state.currentUser) {
				return {username: 'user'};
			}
			return state.currentUser;
		}
	},
	mutations: {
		logIn(state, payload) {
			/*
			Expects payload: {authToken, user}
			*/
			console.log('login');
			state.currentUser = payload.user;
			state.authToken = payload.authToken;
			localStorage.setItem('auth-token', payload.authToken);
		},
		setAuthToken(state, authToken) {
			state.authToken = authToken;
			if (authToken !== null) localStorage.setItem('auth-token', authToken);
		},
		setCurrentUser(state, user) {
			state.currentUser = user;
		}
	},
	actions: {
		async register({ commit }, payload) {
			/*
			Expects payload: {username, email, password}
			*/
			try {
				const requestBody = {username: payload.username, email: payload.email, password: payload.password};
				const response = await Axios.post(`${API_URL}/register`, requestBody);
				commit('setCurrentUser', response.data.user);
				commit('setAuthToken', response.data.token);
				return response;
			} catch(error) {
				return error.response;
			}
		},	
		async logIn({ commit }, payload) {
			/*
			Make API call to log_in route to try to get user's token
			Expects payload: {username, password}
			*/
			console.log('payload: ', payload);
			try {
				const requestBody = {username: payload.username, password: payload.password};
				const response = await Axios.post(`${API_URL}/login`, requestBody);
				
				commit('setCurrentUser', response.data.user);
				commit('setAuthToken', response.data.token);
				console.log('token: ', response.data.token);
				return response;
			} catch(error) {
				return error.response;
			}
		},
		logout({ commit }) {
			localStorage.removeItem('auth-token');
			commit('setAuthToken', null);
			commit('setCurrentUser', null);
		},
		async loadCurrentUser({ getters, commit }) {
			try {
				const response = await Axios.get(`${API_URL}/user`, {
					headers: {
						Authorization: `Bearer ${getters.authToken}`
					}
				});
				commit('setCurrentUser', response.data.user);
				return response;
			} catch(error) {
				return error.response;
			}
		},
	},
};

export default authenticated;