<script>
import HeroLogo from "./HeroLogo.vue";

export default {
	components: { HeroLogo }
}
</script>

<template>
	<section class="hero">
		<div class="hero__info">
			<h2 class="title title--light title--medium">WE ARE NEVER DONE</h2>
			<p class="text text--light text--bold">
				Celebrating 50 years of Nike from May 16th!
				Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!
			</p>
			<MyButton class="btn--light">Celebrate with us
			</MyButton>
		</div>
		<img class="hero__image" src="../../assets/hero.png" alt="">
	</section>
	<marquee scrollamount="8" truespeed scrolldelay="25" direction="right" class="marquee">
		<div v-for="item in 10" :key="item" class="marquee__item">
			<span>just do it</span>
			<svg width="50" height="20" viewBox="0 0 370 132" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M370 0L99.3121 116.834C76.8652 126.461 58.0105 131.29 42.7633 131.29C25.4965 131.29 12.9626 125.164 5.19259 112.896C0.305466 105.02 -1.1283 95.0335 0.875887 82.9218C2.88007 70.8102 8.21428 57.9171 16.8477 44.1958C24.0473 33.1 35.8412 18.5191 52.26 0.43758C46.6909 9.32466 42.6071 19.0826 40.1733 29.318C35.8566 47.9934 39.7416 61.6991 51.8284 70.4507C57.5788 74.5296 65.4876 76.5769 75.5702 76.5769C83.6178 76.5769 92.6829 75.2642 102.765 72.6387L370 0Z"
					fill="black" />
			</svg>
		</div>
	</marquee>
	<HeroLogo></HeroLogo>
</template>


<style lang="scss" scoped>
.hero {
	min-height: 300px;
	display: flex;
	min-height: 300px;

	&__image {
		width: 50%;
	}

	&__info {
		padding: 50px 50px 30px;
		width: 50%;
		background-color: $primary2;

		.btn {
			margin-top: 3.5rem;
		}

		.text {
			margin-top: 3.5rem;
		}
	}
}

.marquee {
	display: flex;


	&__item {
		font-size: $title-medium-fonts;
		color: $title-color;
		font-weight: 900;
		font-style: italic;
		display: inline;
		text-transform: uppercase;
		margin-right: 70px;
		position: relative;

		svg {
			position: absolute;
			top: 50%;
			right: -60px;
			transform: translateY(-50%)
		}
	}
}
</style>