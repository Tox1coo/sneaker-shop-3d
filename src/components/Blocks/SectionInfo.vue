<script>

export default {
	props: {
		title: String,
		text: String,
		buttonText: String,
		boldText: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<template>
	<div class="info">
		<h2 class="title title--light title--medium">{{title}}</h2>
		<p class="text text--light" :class="{'text--bold': boldText}" v-html="text">
		</p>
		<MyButton class="btn--light">{{buttonText}}
		</MyButton>
	</div>

</template>


<style lang="scss" scoped>
.info {
	padding: 50px 50px 30px;

	.btn {
		margin-top: 3.5rem;
	}

	.text {
		margin-top: 3.5rem;
	}
}
</style>