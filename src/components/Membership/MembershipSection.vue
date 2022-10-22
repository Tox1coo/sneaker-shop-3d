<script>
import SectionInfo from "../Blocks/SectionInfo.vue";

export default {
	components: { SectionInfo },
	computed: {
		getTextInfo() {
			return `Join our members and show your love with <span style="font-weight: 700;">Nike By You!</span>`
		}
	}
}
</script>

<template>
	<section class="membership">
		<div class="container">

			<div class="membership__title title title--medium">
				More Nike products
			</div>
		</div>
		<div class="membership__body">
			<SectionInfo :title="'YOUR NIKE MEMBERSHIP'" :text="getTextInfo" :buttonText="'Join Us'"></SectionInfo>
		</div>
	</section>
</template>


<style lang="scss">
@import "@/styles/mixins.scss";

.membership {
	@include margin-section;

	.container {
		padding: 0;
	}

	&__title {
		text-transform: uppercase;
	}

	&__body {
		margin-top: 3rem;
		position: relative;
		min-height: 30rem;
		height: fit-content;
		background: url('../../assets/membership.webp') center/cover no-repeat;
	}

	&__image {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		min-height: 30rem;
		height: fit-content;
		z-index: 0;
	}

	.info {
		position: relative;
		z-index: 1;
		width: 25vw;
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