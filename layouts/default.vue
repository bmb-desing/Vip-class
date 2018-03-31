<script src="../../stroy/store/index.js"></script>
<template>
    <div class="el1" v-bar style="height: 100vh;">
        <div class="el2">
            <my-header/>
            <my-menu/>
            <main class="container" style="background-color: blue;" >
                <div class="section section_image" style="background-color: grey;background-image: url(/img/bg-index.jpg);" >
                    <div class="section__wrapper">
                    </div>
                </div>
                <div class="section section_image" style="background-color: grey;background-image: url(/img/bg-index.jpg);" >
                    <div class="section__wrapper">
                    </div>
                </div>
            </main>
            <nuxt/>
            <transition name="form">
                <user-form v-if="showForm"/>
            </transition>
            </div>
    </div>
</template>

<script>
import MyHeader from '~/components/pages/Header.vue'
import MyMenu from '~/components/pages/MyMenu.vue'
import UserForm from '~/components/pages/UserForm.vue'
import {mapGetters} from 'vuex'
export default {
	components: {
		MyHeader,
        MyMenu,
        UserForm
	},
    computed: {
        ...mapGetters({
            showForm: 'showForm'
        })
    },
}
</script>

<style lang="sass">
</style>
