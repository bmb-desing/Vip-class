import {state} from "./index";

export default {
	state: {
		showForm: false,
		form: {
			name: {
				placeholder: 'Ваше имя*',
				name: 'name',
				value: '',
				required: true,
				error: ''
			},
			phone: {
				placeholder: 'Номер телефона*',
				value: '',
				name: 'phone',
				required: true,
				error: ''
			},
			email: {
				placeholder: 'Ваш E-mail',
				name: 'email',
				value: '',
				email: true,
				error: ''
			}
		},
		theme: '',
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
				state.theme = payload,
				state.showForm = true
			]
		},
		closeForm: (state) => {
			return state.showForm = false
		},
		sendForm: (state, payload) => {
			state.form.name.error = '';
			state.form.phone.error = '';
			state.form.email.error = '';

			const form = {
				name: payload.name.value,
				phone: payload.phone.value,
				email: payload.email.value
			}
			if (!form.name.length) {
				return state.form.name.error = 'Поле обязательно для заполнения.'
			}
			if (!form.phone.length) {
				return state.form.phone.error = 'Поле обязательно для заполнения.'
			}
			if (form.email.length && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
				return state.form.email.error = 'E-mail введен не верно';
			}
			/* @TODO  Добавить отправку на сервер*/
			return state.status = true
		}
	}
}