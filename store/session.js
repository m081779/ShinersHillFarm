export const state = () => ({
	isAdmin: false,
})

export const mutations = {
	updateIsAdmin(state, isAdmin) {
		console.log('isAdmin: ', isAdmin);
		state.isAdmin = isAdmin;
	},
}

export const actions = {
	async toggleIsAdmin(context) {
		console.log('firing toggleIsAdmin: ');
		await context.commit('updateIsAdmin', !context.state.isAdmin)
	}
}