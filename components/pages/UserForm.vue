<template>
    <div class="form">
        <div class="form__wrapper">
            <div class="form__cross">
                <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" class="form__svg" @click="closeForm" height="64" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                    <g>
                        <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                    </g>
                </svg>
            </div>
            <div class="form__content" v-if="status == null">
                <h2 class="form__title">оФОРМИТЕ ЗАЯВКУ</h2>
                <p class="form__text">
                    Наши консультанты свяжутся
                    с Вами в ближайшее время
                </p>
                <form @submit.prevent="sendForm(form)">
                    <div v-for="(value, key, index) in form" class="form__item">
                        <input type="text" v-bind:placeholder="value.placeholder" v-model="value.value" v-bind:class="value.error.length ? 'error' : ''">
                        <span class="form__error" v-if="value.error.length">{{value.error}}</span>
                    </div>
                    <button class="form__button">Оформить</button>
                    <p class="form__val">
                        Отправляя заявку, Вы даёте свое согласие на <a href="#" target="_blank">обработку персональных данных</a> и соглашаетесь с условиями <a href="#" target="_blank">политики конфиденциальности</a>
                    </p>
                </form>
            </div>
            <div class="form__content" v-if="status == true">
                <h2 class="form__title">Поздравляем!</h2>
                <p class="form__text">
                    Ваша заявка успешно оформлена и
                    находится в обработке. Ожидайте звонка
                    консультант свяжется с Вами в
                    ближайшее время!

                </p>
                <b class="form__bold">Спасибо, что выбрали «Vip Class»!</b>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "user-form",
        computed: {
            ...mapGetters({
                form: 'getForm',
                status: 'statusSend'
            }),
        },
        methods: {
            ...mapMutations({
                sendForm: 'sendForm',
                closeForm: 'closeForm'
            })
        }
	}
</script>

<style>

</style>