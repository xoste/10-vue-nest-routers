<template>
	<div>
		<router-link :to="{}">首页</router-link>
		<router-link :to="{name: 'music'}">音乐</router-link>
	</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>