<script>
import { sneakersStore } from "@/stores/sneakers/sneakers"
import CardCategory from "../Cards/CardCategory.vue";

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
	components: { CardCategory }
}
</script>

<template>
	<section class="discount">
		<h3 class="title title--medium">Looks good. Runs Good. Feels Good
		</h3>
		<div class="discount__block">
			<CardCategory v-for="sneaker in getDiscountModelsShoes" :key="sneaker.id" :titleCard="getTitleCard"
				:textCard="'on your first purchase'"
				:sneakerPhoto="`./photo_sneakers/sneakers/${sneaker.nameFolder}/card_preview/${sneaker.nameFolder}.webp`">
				Shop now
			</CardCategory>
		</div>
	</section>
</template>


<style lang="scss" scoped>
.discount {
	margin-top: $margin-sections;

	h3 {
		text-align: center;
		text-transform: uppercase;
	}

	&__block {
		margin-top: $margin-sections;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>