<template>
    <main class="container">
        <div class="section section_image" style="background-color: grey;background-image: url(/img/bg-index.jpg);" >
            <div class="section__wrapper">
                <div class="carousel">
                    <carousel :per-page="1" :paginationActiveColor="'#da251d'" :paginationColor="'transparent'" :paginationSize="12">
                        <slide v-for="(value, key ) in slider" :key="key">
                            <div class="slider__top">
                                <h3>{{value.subtitle}} {{key}}</h3>
                                <h2>{{value.title}}</h2>
                                <p class="slider__text">
                                    {{value.text}}
                                </p>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
        <div class="section section_image" style="background-color: grey;background-image: url(/img/bg-index.jpg);" >
            <div class="section__wrapper">
                <div class="carousel">
                    <carousel :per-page="1" :paginationActiveColor="'#da251d'" :paginationColor="'transparent'" :paginationSize="12">
                        <slide v-for="(value, key ) in slider" :key="key">
                            <div class="slider__top">
                                <h3>{{value.subtitle}} {{key}}</h3>
                                <h2>{{value.title}}</h2>
                                <p class="slider__text">
                                    {{value.text}}
                                </p>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from '~/plugins/axios'

export default {
	async asyncData () {
		let { data } = await axios.get('/api/users')
		return { users: data }
	},
    data() {
		return {
			slider: [
                {
                	subtitle: 'Доступные квартиры у Черного моря',
                    title: '«ЖЕМЧУЖИНА СЕВАСТОПОЛЯ»',
                    text: 'Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов,внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек,фитнес-центров и т.д.'
                },
				{
					subtitle: 'Доступные квартиры у Черного моря',
					title: '«ЖЕМЧУЖИНА СЕВАСТОПОЛЯ»',
					text: 'Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов,внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек,фитнес-центров и т.д.'
				},
				{
					subtitle: 'Доступные квартиры у Черного моря',
					title: '«ЖЕМЧУЖИНА СЕВАСТОПОЛЯ»',
					text: 'Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов,внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек,фитнес-центров и т.д.'
				}
            ]
        }
    },
	head () {
		return {
			title: 'Главная страница'
		}
	},
}
</script>

<style lang="sass">
    .carousel
        flex-basis: 100%
    .VueCarousel-dot-inner
        -webkit-border-radius: 0 !important
        -moz-border-radius: 0 !important
        border-radius: 0 !important
        border: 1px solid #ffffff
    .VueCarousel-dot--active .VueCarousel-dot-inner
        border-color: #da251d
</style>
