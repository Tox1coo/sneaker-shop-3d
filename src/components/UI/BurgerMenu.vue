<script>
import { RouterLink } from 'vue-router'

import { ref } from 'vue';
import Logo from '../Hero/Logo.vue';

export default {
	setup() {
		const showMenu = ref(false)
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
			{
				title: "workout",
				link: "/"
			},
			{
				title: "run",
				link: "/"
			},
			{
				title: "football",
				link: "/"
			},
			{
				title: "everyday life",
				link: "/"
			},
		];
		const items = [
			{
				text: 'Search',
				icon: 'search'
			},
			{
				text: 'Login',
				icon: 'user'
			},
		];
		const showSearch = ref(false)
		const iconList = ['user', 'search', 'bucket']
		return { linkList, iconList, showMenu, items, showSearch }
	},
	name: 'BurgerMenu',
	components: {
		RouterLink,
		Logo
	},
	methods: {
		eventMenu(event) {
			console.log(event);
		}
	}
}
</script>

<template>
	<div class="burger" :class="{'burger--active': showMenu, }">
		<div @click="showMenu = !showMenu" class="burger__block"
			:class="{'burger__block--open': showMenu, 'burger__block--close': !showMenu}">
			<span></span>
		</div>
		<Transition name="burger">
			<div v-if="showMenu" class="burger__menu menu">
				<div @click="eventMenu" v-for="item in items" :key="item.text" class="menu__block">
					<IconItem :path="item.icon"></IconItem>
					<span class="text">{{item.text}}</span>
				</div>
				<div class="menu__links">
					<RouterLink class="link link--dark" v-for="link in linkList" :key="link.title" :to="link.link">
						{{link.title}}
					</RouterLink>
				</div>
				<div class="menu__logo">
					<Logo :fillLogo="'none'" :strokeLogo="'black'" :widthLogo="'2'"></Logo>
				</div>
			</div>
		</Transition>
	</div>

</template>


<style lang="scss" scoped>
%burger-item {
	display: inline-block;
	width: 100%;
	height: 4px;
	background-color: $primary2;
	border-radius: 50px;
	position: relative;
}

.burger {
	display: none;

	&__block {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		overflow: hidden;
		z-index: 1000;
		position: relative;

		span {
			@extend %burger-item;

			&::before {
				@extend %burger-item;
				content: '';
				width: 80%;
				top: -10px;
				position: absolute;
			}

			&::after {
				@extend %burger-item;
				content: '';
				width: 60%;
				top: 10px;
				position: absolute;
			}

		}

		&--open {
			span {
				&::before {
					animation: open-1 0.6s ease-in-out forwards;
				}

				animation: open-2 0.4s ease-out forwards;

				&::after {
					animation: open-3 0.4s ease-out forwards;
				}
			}

			position: fixed;
			top: 15px;
		}

		&--close {
			span {
				&::before {
					animation: close-1 0.6s ease-in-out forwards;
				}

				animation: close-2 0.6s ease-in-out forwards;

				&::after {
					animation: close-3 0.6s linear forwards;
				}
			}
		}
	}

	&__menu {
		height: 100vh;
		padding: 80px 20px 20px;
		background-color: $primary1;
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 111;
	}


}

.menu {
	display: flex;
	flex-direction: column;

	&__block {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-top: 10px;

		span {
			font-size: calc($text-big-fonts + 4px);
		}

		&:first-child {
			margin-top: 0;
		}

		svg {
			width: 40px;
			height: 40px;

		}
	}

	&__links {
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		gap: 20px;

		.link {
			font-size: calc($text-big-fonts + 4px);
		}
	}

	&__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 1 100%;

		.logo {
			width: 50%;
		}
	}
}

@keyframes open-1 {
	0% {
		width: 80%;

	}

	40% {
		background-color: $attention-color;
		border-radius: 50%;
		width: 20%;
	}

	75%,
	80% {
		border-radius: 50%;
		transform: translate(0px, -20px);
		width: 20%;
		animation-timing-function: cubic-bezier(0, 1, 1, 1);
	}

	100% {
		background-color: #ff1456;
		width: 0%;
		transform: translate(10px, 15px);

	}
}

@keyframes open-2 {
	80% {
		background-color: $primary2;
		transform: translate(0px, 0px) rotate(0deg);
	}

	100% {
		background-color: $attention-color;
		transform: translate(0px, 0px) rotate(45deg);
	}
}

@keyframes open-3 {
	80% {
		width: 100%;
		background-color: $primary2;
		transform: translate(0px, 0px) rotate(0deg);
	}

	100% {
		width: 100%;
		background-color: $attention-color;
		transform: translate(0px, -10px) rotate(-90deg);
	}
}

@keyframes close-1 {

	0% {
		background-color: $attention-color;
		width: 10px;
		left: 50%;
		transform: translate(-50%, 0);
	}

	65% {
		left: 50%;
		transform: translate(-50%, 70px);
		animation-timing-function: cubic-bezier(0, 1, 1, 1);
	}

	80% {
		width: 0px;
	}

	100% {
		width: 80%;
		transform: translate(0, 0);
	}
}

@keyframes close-2 {
	0% {
		transform: translate(0px, 0px) rotate(45deg);
		background-color: $attention-color;
	}

	20% {
		background-color: $attention-color;
		transform: translate(0px, 0px) rotate(0);
		width: 0px;
	}

	100% {
		width: 100%;
		transform: translate(0px, 0px) rotate(0);
	}
}

@keyframes close-3 {
	0% {
		transform: translate(0px, -10px) rotate(-90deg);
		background-color: $attention-color;
	}

	65% {
		background-color: $attention-color;
		width: 0px;
	}

	100% {
		width: 60%;
		transform: translate(0, 0);
	}
}


.burger-enter-active {
	transition: transform 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	transform: translateX(0)
}

.burger-leave-active {
	transition: transform 0.4s ease-in;
}

.burger-enter-from,
.burger-leave-to {
	transform: translateX(-100%)
}
</style>