/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
	modules: [
		'@nuxtjs/localtunnel'
	],
	loading: 'components/Loading.vue',
	router: {
		linkActiveClass: 'active'
	},
	/*
  ** Headers of the page
  */
	head: {
		title: 'starter',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
  ** Global CSS
  */
	css: [
  	'~/assets/css/main.css',
	  { src: '~/assets/sass/main.sass', lang: 'sass' }
	],
	/*
  ** Add axios globally
  */
	plugins: [
		'~/plugins/vuebar',
		{
			src: '~/plugins/slider',
			ssr: false
		}
	],
	build: {
		extractCSS: true,
		vendor: ['axios', 'vuebar'],
		/*
    ** Run ESLINT on save
    */
		extend (config, ctx) {
			if (ctx.isClient) {
				/* config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
					options: {
						fix: true
					}
				}) */
			}
		}
	}
}
