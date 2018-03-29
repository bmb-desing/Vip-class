<template>
  <section class="container">
      <h1 class="error-page__title">
          ЧТО-то пошло не так.
      </h1>
      <div class="error-page__container">
          <div class="error-page__right">
              <img src="~/assets/img/error-img.png" alt="Что-то пошло не так">
          </div>
          <div class="error-page__left">
              <div class="error-page__text">
                  <p>Возможно, страницы не существует
                      или она находится в разработке.</p>
                  <p>Добавьте эту страницу в закладку,
                      ирформация скоро обновится</p>
                  <!--{{ error.message }}-->
              </div>

              <nuxt-link class="error-page__button" to="/" v-if="error.statusCode === 404">
                  На главную
              </nuxt-link>
          </div>
      </div>

  </section>
</template>
<script>
export default {
	props: ['error'],
    layout: 'errors',
    head() {
		return {
			title: 'Ошибка 404. Страница не найдена'
        }
    }
}
</script>

<style>

</style>
