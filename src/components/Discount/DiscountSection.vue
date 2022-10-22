<script>
import { sneakersStore } from "@/stores/sneakers/sneakers"
// import CardCategory from "@/components/Cards/CardCategory.vue";
import CardCategoryList from '@/components/Cards/CardCategoryList.vue';
export default {
	setup() {
		const sneakers = sneakersStore().dbSneakers;
		return { sneakers };
	},
	computed: {
		getDiscountModelsShoes() {
			return this.sneakers.filter((sneaker) => sneaker?.cardSetting?.type === "discount")
		},
		getTitleCard() {
			return '<span>-20%</span> Discount'
		}
	},
	components: { CardCategoryList }
}
</script>

<template>
	<section class="discount">
		<h3 class="title title--medium">Looks good. Runs Good. Feels Good
		</h3>
		<CardCategoryList :cardList="getDiscountModelsShoes" :textCards="'on your first purchase'"
			:titleCards="getTitleCard">
			Shop now
		</CardCategoryList>
	</section>
</template>


<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.discount {
	@include margin-section;

	h3 {
		text-align: center;
		text-transform: uppercase;
	}

	.cards-block {
		margin-top: $margin-sections;
	}
}
</style>