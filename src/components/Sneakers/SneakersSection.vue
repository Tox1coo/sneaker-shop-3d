<script>
import { sneakersStore } from "@/stores/sneakers/sneakers"
import CardCategoryList from '@/components/Cards/CardCategoryList.vue';
export default {
	setup() {
		const sneakers = sneakersStore().dbSneakers;

		return { sneakers }
	},
	computed: {
		getNewModelsShoes() {
			return this.sneakers.filter(sneaker => sneaker?.cardSetting?.type === "new")
		},
	},
	components: { CardCategoryList }
}
</script>

<template>
	<section class="sneakers">

		<CardCategoryList :cardList="getNewModelsShoes">
			<svg width="19" height="15" viewBox="0 0 19 15" fill="black" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.1421 13.9561C14.7717 13.8476 14.4922 13.6193 14.3036 13.2715C14.1159 12.9231 14.0676 12.5614 14.1588 12.1864L15.447 6.88864L2.57951 14.3177C2.25253 14.5065 1.91125 14.5488 1.55565 14.4446C1.20129 14.3407 0.925221 14.1175 0.727446 13.775C0.529671 13.4324 0.474176 13.0813 0.56096 12.7217C0.648979 12.3625 0.856477 12.0884 1.18345 11.8997L14.051 4.4706L8.77257 2.9238C8.40216 2.81525 8.12086 2.59453 7.92867 2.26165C7.73694 1.92957 7.68668 1.576 7.77788 1.20094C7.86908 0.825882 8.07355 0.546627 8.3913 0.363177C8.70828 0.180171 9.05197 0.142941 9.42238 0.251489L17.8956 2.73452C18.0808 2.78879 18.2383 2.87246 18.3682 2.98553C18.4974 3.09904 18.6085 3.2364 18.7016 3.3976C18.7946 3.55881 18.858 3.7237 18.8918 3.89229C18.9247 4.06133 18.9184 4.23962 18.8728 4.42715L16.7752 13.0535C16.6916 13.3973 16.4913 13.6608 16.1743 13.8438C15.8566 14.0272 15.5125 14.0647 15.1421 13.9561Z" />
			</svg>
		</CardCategoryList>
		<div class="sneakers__tops">
			<div class="sneakers__tops-titles">
				<div class="title title--medium title--mild">
					At the moment
				</div>
				<h2 class="title">SUMMERTIME MOOD
				</h2>
				<div class="title title--medium title--mild">
					Fight the heat in a sunny look!
				</div>
			</div>

		</div>
	</section>
</template>


<style lang="scss" scoped>
.sneakers {


	&__tops {
		margin-top: calc($margin-sections - 65px);

		&-titles {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;

			.title--mild:last-child {
				margin-top: 3rem;
			}
		}
	}

	.cards-block {
		position: relative;
		top: -65px;
	}
}
</style>