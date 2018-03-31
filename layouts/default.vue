<script src="../../stroy/store/index.js"></script>
<template>
    <div>
        <my-header/>
        <my-menu/>
        <main class="container" style="background-color: blue;">
            <div class="section" style="background-color: grey;">
                <div class="section__wrapper" style="width: 100%;height:200px;background-color: red;">
                </div>
            </div>

        </main>
        <nuxt/>
        <transition name="form">
            <user-form v-if="showForm"/>
        </transition>

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
