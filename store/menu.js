export default {
	state: {
		showMenu: false
	},
	getters: {
		showMenu: (state) => {
			return state.showMenu
		}
	},
	mutations: {
		mutationMenu: (state) => {
			return state.showMenu = !state.showMenu
		},
		closeMenu: (state) => {
			return state.showMenu = false
		}
	}
}
