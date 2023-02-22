<template>
	<div class="content">
		<div class="page">
			<div v-if="!error">
            	<h1 class="page_title">Общая информация по ТПА</h1>
				<total-amount />
				<main-data :data="completeData"/>
			</div>
			<div v-else>
				<error-screen>
					{{ error }}
				</error-screen>
			</div>
		</div>
	</div>
</template>

<script>
	import TotalAmount from '@/components/TotalAmount.vue'
	import MainData from '@/components/MainData.vue'
	import ErrorScreen from '@/components/ErrorScreen.vue'

	import {mapState, mapGetters, mapActions} from 'vuex'

	export default {
		name: 'HomeView',

		components: {
			TotalAmount, MainData, ErrorScreen
		},

		methods: {
			...mapActions ({
				fetchData: 'fetchData'
			}),

			// getData() {
			// 	window.setInterval(() => {
			// 		this.fetchData()
			// 	}, 60000)
			// }
		},

		computed: {
			...mapState ({
				data: state => state.data,
				error: state => state.error
			}),

			...mapGetters ({
				completeData: 'completeData'
			})
		},

		mounted() {
			setInterval(() => {
				this.fetchData()
			}, 60000)
		}
	}
</script>
