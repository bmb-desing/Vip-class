<template>
  <section class="container">
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
	async asyncData () {
		let { data } = await axios.get('/api/users')
		return { users: data }
	},
	head () {
		return {
			title: 'Главная страница'
		}
	}
}
</script>

<style>
</style>
