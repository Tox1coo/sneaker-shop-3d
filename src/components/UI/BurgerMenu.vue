<script>
// import { RouterLink } from 'vue-router'

export default {
	setup() {
		const linkList = [
			{
				title: 'Men',
				link: '/men'
			},
			{
				title: 'Women',
				link: '/women'
			},
			{
				title: 'All',
				link: '/'
			},
		];
		const iconList = ['user', 'search', 'bucket']
		return { linkList, iconList }
	},
	name: 'BurgerMenu',
	components: {
		// RouterLink,
	}
}
</script>

<template>
	<div class="burger">
		<div class="burger__block">
			<span></span>
		</div>
		<div class="burger__menu">

		</div>
	</div>

</template>


<style lang="scss" scoped>
%burger-item {
	display: inline-block;
	width: 100%;
	height: 4px;
	background-color: $primary2;
	border-radius: 50px;
}

.burger {
	display: none;

	&__block {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 4rem;

		span {
			@extend %burger-item;

			&::before {
				@extend %burger-item;
				content: '';
				width: 80%;
				top: -15px;
				position: relative;
			}

			&::after {
				@extend %burger-item;
				content: '';
				width: 60%;
				top: -5px;
				position: relative;
			}

		}
	}
}
</style>