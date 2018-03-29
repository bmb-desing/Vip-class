<script src="../../stroy/store/index.js"></script>
<template>
    <div>
        <my-header/>
        <my-menu/>
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
    .form-enter
        opacity: 0
    .fade-enter-active, .fade-leave-active
        transition: opacity 1s
    .fade-enter-active
        opacity: 1
    .form-leave
        opacity: 1
    .form-leave-active
        opacity: 0
</style>
