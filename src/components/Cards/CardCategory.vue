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

}
</script>

<template>
	<div class="card-category">
		<div class="card-category__body">
			<h3 class="title title--card title--accent">{{typeCard}}</h3>
			<p class="text ">{{textCard}}</p>
			<MyButton :class="{'btn--icons':buttonCard === 'icon' }">
				<slot></slot>
			</MyButton>
		</div>
		<img class="card-category__photo" :src="sneakerPhoto" alt="">
	</div>
</template>


<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.card-category {
	@include styleCards;
	max-width: 60.5rem;
	width: 100%;
	min-height: 26rem;
	padding-top: 5rem;
	padding-left: 5rem;
	padding-bottom: 3.5rem;
	position: relative;

	&__body {
		width: 40%;

		.btn {
			margin-top: 1.5rem;
			margin-left: 3rem;
		}

		.text {
			margin-top: 1rem;
		}
	}

	&__photo {
		width: 100%;
		max-width: 40rem;
		max-height: 30rem;
		display: block;
		position: absolute;
		right: -10px;
		top: -15px;
		transform: rotate(-30deg);
	}
}
</style>