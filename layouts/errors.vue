<template>
    <div class="error-page__wrapper">
        <nuxt/>
    </div>
</template>

<script>
	export default {
		name: "errors",
        head() {
			return {
				bodyAttrs: {
					class: 'error-page'
                }
            }
        }
	}
</script>

<style>

</style>