import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Menu from './menu'
import Form from './form'
Vue.use(Vuex)
export const state = () => ({
	counter: 0
})
const store = () => new Vuex.Store({
	modules: {
		Menu,
		Form,
		User
	}
})
export default store
