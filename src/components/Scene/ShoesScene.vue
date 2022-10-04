<script>
export default {
	methods: {
		onErrorModel(model) {
			console.log(model);
		},
		onLoad(model) {
			console.log(model);
		}
	}
}
</script>

<template>
	<main>
		<Renderer antialias alpha resize="window">
			<Camera :position="{y:1 ,z:10}"></Camera>

			<Scene>
				<AmbientLight></AmbientLight>
				<GltfModel :position="{x:-0.4}" :rotation="{y:3.2}" :scale="{x:0.06,y:0.06,z:0.06}" @error="onErrorModel"
					@load="onLoad" src="./models/sneakers/nike/scene.gltf"></GltfModel>
			</Scene>

		</Renderer>
	</main>
</template>
