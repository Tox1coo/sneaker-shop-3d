<script>
export default {
	name: 'MyButton',
}
</script>

<template>
	<button class="btn" :class="$attr">
		<slot></slot>
	</button>
</template>


<style lang="scss" scoped>

</style>