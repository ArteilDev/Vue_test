import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state: () => ({
		data: [],
		total: 0,
		downtime: 0,
		error: '',
		isLoading: false
	}),

	getters: {
		completeData(state) {
			state.downtime = 0
			for (let key in state.data){
				if(state.data[key]['EamState'] === 'В простое' || state.data[key]['MesState'] === 'В простое') {
					state.downtime++
				}
			}

			return state.data
		}
	},

	mutations: {
		setData(state, data) {
            state.data = data;
        },

		setTotal(state, data) {
			state.total = Object.keys(data).length
		},

        setLoading(state, status) {
            state.isLoading = status
        },

		setErors(state, error) {
			state.error = error
		}
	},

	actions: {
		async fetchData({ commit }) {
			try {
				if(Object.keys(this.state.data).length === 0){
					commit('setLoading', true)
				}

				const response = await axios.get('http://192.168.107.44:5501/api/tpainfo')

				commit('setData', response.data)
				commit('setTotal', response.data)
			} catch(err) {
				commit('setErors', err.message)
			} finally {
				commit('setLoading', false)
			}
		}
	},
})