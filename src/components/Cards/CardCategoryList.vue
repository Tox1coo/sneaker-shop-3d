<script>
import CardCategory from "../Cards/CardCategory.vue";

export default {
	props: {
		cardList: {
			type: Object,
			required: true
		},
		textCards: {
			type: String,
			default: ''
		},
		titleCards: {
			type: String,
			default: ''
		}
	},
	components: {
		CardCategory
	}
}
</script>

<template>
	<div class="cards-block">
		<CardCategory v-for="sneaker in cardList" :key="sneaker.id"
			:titleCard="!titleCards ? sneaker?.cardSetting?.type : titleCards"
			:textCard="!textCards ? sneaker.nameShoes : textCards"
			:sneakerPhoto="`./photo_sneakers/sneakers/${sneaker.nameFolder}/card_preview/${sneaker.nameFolder}.webp`">
			<slot></slot>
		</CardCategory>
	</div>
</template>


<style lang="scss" >
@import "@/styles/mixins.scss";

.cards-block {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;


}
</style>