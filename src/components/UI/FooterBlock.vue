<script>
import Logo from '../Hero/Logo.vue';
import { RouterLink } from 'vue-router'

export default {
	setup() {
		const links = [[
			{
				title: "All",
				link: "/"
			},
			{
				title: "Women",
				link: "/women"
			},
			{
				title: "Men",
				link: "/men"
			},
		], [
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

		]];
		return { links };
	},
	name: "FooterBlock",
	components: {
		Logo,
		RouterLink,
	}
}
</script>

<template>
	<footer class="footer">
		<div v-for="(linkList, index) in links" :key="index" class="footer__links">
			<RouterLink class="link " v-for="link in linkList" :key="link.title" :to="link.link">{{link.title}}
			</RouterLink>

		</div>
		<Logo :fillLogo="'none'" :strokeLogo="'white'" :widthLogo="'5'"></Logo>
	</footer>

</template>


<style lang="scss" >
.footer {
	margin-top: $margin-sections;
	min-height: 32rem;
	background-color: $primary2;
	display: flex;

	justify-content: space-between;
	align-items: center;
	padding: 20px 50px;

	.logo {
		order: 2;

		&__item {
			display: flex;

			svg {
				width: 32rem;
				height: 100%;
			}
		}
	}

	&__links {
		display: flex;
		flex-direction: column;
		gap: 50px;
		align-items: center;
		text-align: center;

		&:last-child {
			order: 3;
		}

		&:first-child {
			order: 3
		}


	}
}
</style>