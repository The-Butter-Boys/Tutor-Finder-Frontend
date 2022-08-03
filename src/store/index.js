import Vue from 'vue';
import Vuex from 'vuex';
import authenticated from '@/store/authenticated';
import courses from '@/store/courses';
import user from '@/store/user';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
		authenticated: authenticated,
		courses: courses,
		user: user
	}
});
