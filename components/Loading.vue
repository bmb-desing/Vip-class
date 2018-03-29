<template>
    <div class="loader" v-if="loading">
        <div class="loader__wrapper">
            <div class="loader__container">
                <div class="loader__logo">
                    <img src="~/assets/img/logo-loader.png" alt="Вип-класс загрузка">
                </div>
                <div class="loader-image">
                    <span class="loader-image__item loader-image__item_passive"></span>
                    <span class="loader-image__item loader-image__item_active" v-bind:style="{width: loadNumber + '%'}"></span>
                </div>
                <div class="loader-line">
                    <span class="loader-line__item loader-line__item_passive"></span>
                    <span class="loader-line__item loader-line__item_active" v-bind:style="{width: loadNumber + '%'}"></span>
                </div>
                <div class="loader-number">
                    {{loadText}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
	export default {
		name: "loading",
        data: () => ({
            loading: false,
            loadNumber: 0,
            errorText: ''
        }),
        computed: {
			loadText() {
				if (this.errorText.length) {
					return this.errorText
                }
                else {
					return this.loadNumber + '%'
                }
            }
        },
        methods: {
			start() {
				this.loading = true
            },
            finish() {
				this.loading = false
            },
            fail() {
				this.errorText = 'Произошла ошибка при загрузке данных, пожалуйста обновите страницу'
            },
			increase(num) {
                this.loadNumber+=num
            }
        }
	}
</script>

<style>

</style>