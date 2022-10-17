<script>

export default {
	props: {
		category: {
			type: Object,
			required: true
		},
	},
}
</script>

<template>
	<div class="category">
		<div class="category__title title title--medium">{{category.title}}</div>
		<div class="category__photo"><img :src="`./category/${category.photo}.webp`" alt=""></div>

	</div>
</template>


<style lang="scss" scoped>
.category {
	display: flex;
	width: 100%;
	height: 40vh;

	&__title {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 1 50%;
		text-transform: uppercase;
	}

	&__photo {
		flex: 0 1 50%;

		img {
			width: 100%;
			height: 100%;
		}


	}

	&:nth-child(2n) {
		.category__title {
			order: 2;
		}

		.category__photo {
			order: 1;
		}
	}


}
</style>