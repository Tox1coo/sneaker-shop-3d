<script>
import { RouterLink, RouterView } from 'vue-router'

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
		]
		return { linkList }
	},
	name: 'HeaderBlock',
	components: {
		RouterLink,
		RouterView
	}
}
</script>

<template>
	<header class="header">
		<div class="container">

			<div class="header__inner">
				<nav class="nav">
					<ul class="nav__list">
						<li v-for="link in linkList" :key="link.title" class="nav__item">
							<RouterLink :to="link.link">{{link.title}}</RouterLink>
							<div class="nav__underline">

							</div>
						</li>
					</ul>
				</nav>
				<div class="header__title">
					<span>Your</span>Sneaker
				</div>
				<div class="header__user">

				</div>
			</div>
		</div>

	</header>
	<RouterView></RouterView>

</template>


<style lang="scss" scoped>
.header {

	&__title {
		text-transform: uppercase;
		color: #000;
		font-size: 3.2rem;
		letter-spacing: 1px;
		font-weight: 700;

		span {
			color: #a0a0a0;
			font-weight: 400;
		}
	}

	&__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}

.nav {
	flex: 0 1 33%;

	&__list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
	}

	&__item {
		position: relative;
		overflow: hidden;

		a {
			color: $title-color;
			font-size: $text-medium-fonts;
			text-decoration: none;
			font-weight: 400;
			transition: all 0.2s linear;

			&:hover {

				&+.nav__underline {
					transform: translateY(0);
				}

				font-weight: 700;
			}
		}
	}

	&__underline {
		display: block;
		width: 100%;
		height: 3px;
		background-color: $title-color;
		transition: transform 0.2s ease 0.2s;
		transform: translateY(100%);
	}
}
</style>