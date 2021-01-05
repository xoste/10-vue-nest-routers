<template>
	<div>
		欢迎来到音乐世界
		<router-link :to="{name: 'music.oumei'}">欧美音乐</router-link>
		<router-link :to="{name: 'music.guochan'}">国产音乐</router-link>
		<hr/>
		<!-- 变化的音乐数据-->
		<router-view></router-view>
		<hr/>
	</div>
</template>

<script>
    export default {
        name: "Music"
    }
</script>

<style scoped>

</style>