<script>
export default {
	name: 'MyInput',
	props: {
		typeInput: {
			type: String,
			default: 'text'
		},
		placeholderInput: {
			type: String,
			default: 'Введите текст'
		}
	}
}
</script>

<template>
	<input :type="typeInput" class="input" :placeholder="placeholderInput">
</template>


<style lang="scss" scoped>

</style>