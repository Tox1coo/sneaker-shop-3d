<script>
import { sneakersStore } from "@/stores/sneakers/sneakers"
import CategorySlider from '@/components/slider/CategorySlider.vue';
export default {
	setup() {
		const sneakers = sneakersStore().dbSneakers;

		return { sneakers }
	},
	computed: {
		getNewModelsShoes() {
			return this.sneakers.filter(sneaker => sneaker?.cardSetting?.type === "new")
		},
	},
	components: { CategorySlider }
}
</script>

<template>
	<section class="slider-section">
		<CategorySlider :sliderList="sneakers" :titleSlider="'Top sneakers'"></CategorySlider>
	</section>
</template>


<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.slider-section {
	@include margin-section;
}
</style>