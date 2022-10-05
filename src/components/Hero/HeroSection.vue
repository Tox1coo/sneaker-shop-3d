<script>

export default {

}
</script>

<template>
	<section class="hero">
		<img class="hero__image" src="../../assets/hero.webp" alt="">
		<div class="hero__info">
			<h2 class="title title--light title--medium">WE ARE NEVER DONE</h2>
			<p class="text text--light text--bold">
				Celebrating 50 years of Nike from May 16th!
				Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!
			</p>
			<MyButton class="btn--light">Celebrate with us
			</MyButton>
		</div>
	</section>

</template>


<style lang="scss" scoped>
.hero {
	position: relative;

	&__image {
		width: 100%;
		object-fit: cover;
	}

	&__info {
		position: absolute;
		width: 40%;
		top: 5rem;
		left: 5rem;

		.title {
			margin-bottom: 3rem;
		}

		.text {
			margin-bottom: 3rem;
		}
	}
}
</style>