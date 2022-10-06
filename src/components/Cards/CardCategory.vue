<script>

export default {
	props: {
		typeCard: {
			type: String,
			required: true,
		},
		textCard: {
			type: String,
			default: ""
		},
		buttonCard: {
			type: String,
			required: true
		},
		sneakerPhoto: {
			type: String,
			required: true
		}
	},
	computed: {
		getSneakerPhoto() {
			return new URL(`/src/assets/${this.sneakerPhoto}.png`, import.meta.url)
		}
	}
}
</script>

<template>
	<div class="card-category">
		<div class="card-category__body">
			<h3 class="title title--card title--accent">{{typeCard}}</h3>
			<p class="text">{{textCard}}</p>
			<MyButton :class="{'btn--icons':buttonCard === 'icon' }">
				<slot></slot>
			</MyButton>
		</div>
		<img :src="getSneakerPhoto" alt="">
	</div>
</template>


<style lang="scss" scoped>
.card-category {
	max-width: 60.5rem;
	max-height: 26.5rem;
	min-height: 26rem;
	border-radius: 1.8rem;
	background-color: $card-bgcolor;
	box-shadow: $primary-shadow;
}
</style>