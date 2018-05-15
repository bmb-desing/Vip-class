<script src="../../stroy/store/index.js"></script>
<template>
    <div class="el1" v-bar style="height: 100vh;">
        <div class="el2">
            <my-header/>
            <my-menu/>
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
