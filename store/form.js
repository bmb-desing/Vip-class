import {state} from "./index";

export default {
	state: {
		showForm: false,
		form: {
			name: '',
			tel: '',
			email: '',
			theme: ''
		},
		status: null,
		errors: {},
		sendForm: false
	},
	getters: {
		showForm: (state) => {
			return state.showForm
		},
		getForm: (state) => {
			return state.form
		},
		statusSend: (state) => {
			return state.status
		},
		userSendForm: (state) => {
			return state.sendForm
		}
	},
	mutations: {
		showForm: (state, payload) => {

			return [
				state.form.theme = payload,
				state.showForm = true
			]
		},
		mutationForm: (state) => {
			return state.showForm = !state.showForm
		},
		closeForm: (state) => {
			return state.showForm = false
		}
	}
}