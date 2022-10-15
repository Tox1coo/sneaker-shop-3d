<script>
/*  eslint-disable no-unused-vars  */

import { Swiper, SwiperSlide } from "swiper/vue";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
import SneakerItem from "@/components/Sneakers/SneakerItem.vue"
export default {
	props: {
		sliderList: {
			type: Array,
			required: true
		},
		titleSlider: {
			type: String,
			required: true
		}
	},
	components: { Swiper, SwiperSlide, SneakerItem },
}
</script>

<template>
	<div class="slider">
		<div class="slider__title title title--mild title--medium">
			{{titleSlider}}
		</div>
		<swiper :slidesPerView="3" :spaceBetween="50" :slidesPerGroup="3" :navigation="true" :grab-cursor="true">
			<swiper-slide ref="swipeItem" v-for="(sneaker) in sliderList" :key="sneaker.name">
				<SneakerItem :sneakerItem="sneaker"></SneakerItem>
			</swiper-slide>
		</swiper>
	</div>
</template>


<style lang="scss" scoped>
.swiper-container {
	padding: 0 20px;
	margin-top: 3.3rem;
}
</style>