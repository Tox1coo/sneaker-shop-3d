<script>
import { icons } from "@/utils/icons.js"
export default {
	name: 'IconItem',
	props: {
		path: {
			type: String,
			required: true
		}
	},
	setup() {
		const iconsList = icons;
		return { iconsList }
	},
	methods: {
		activeHoverIcon(event) {
			for (let index = 0; index < event.target.children.length; index++) {
				const path = event.target.children[index];
				const colorStation = [
					{ stroke: '#000' },
					{ stroke: '#9cfdfd' }
				];

				const colorTiming = {
					duration: 200,
					fill: 'forwards',
					iterations: 1,
				}
				// path.attributes[1].value = '#ff7'
				path.animate(colorStation, colorTiming);
			}

		},
		inActiveHoverIcon(event) {
			for (let index = 0; index < event.target.children.length; index++) {
				const path = event.target.children[index];
				const colorStation = [
					{ stroke: '#9cfdfd' },
					{ stroke: '#000' }
				];

				const colorTiming = {
					duration: 200,
					fill: 'forwards',
					iterations: 1,
				}
				// path.attributes[1].value = '#ff7'
				path.animate(colorStation, colorTiming);
			}
		}
	}
}
</script>

<template>
	<svg @mouseenter="activeHoverIcon" @mouseleave="inActiveHoverIcon" width="30" height="30" viewBox="0 0 30 30"
		fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" v-html="iconsList[path]">

	</svg>
</template>


<style lang="scss" scoped>
.icon {
	cursor: pointer;

	path {
		transition: all 0.4s ease 0s;
	}

}
</style>