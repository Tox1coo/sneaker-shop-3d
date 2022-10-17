<script>
import CategoryItem from '@/components/Category/CategoryItem.vue';
export default {
	setup() {
		const categories = [
			{ title: "workout", photo: "workout" },
			{ title: "run", photo: "run" },
			{ title: "trekking", photo: "trekking" },
			{ title: "everyday life", photo: "everyday life" },
		];
		return { categories };
	},
	components: { CategoryItem }
}
</script>

<template>
	<section class="categories">
		<h3 class="title title--medium title--mild">Buy by category</h3>
		<div class="categories__block">
			<CategoryItem v-for="category in categories" :key="category.title" :category="category"></CategoryItem>
		</div>
	</section>
</template>


<style lang="scss" scoped>
.categories {
	margin-top: $margin-sections;

	&__block {
		margin-top: 3rem;
	}
}
</style>