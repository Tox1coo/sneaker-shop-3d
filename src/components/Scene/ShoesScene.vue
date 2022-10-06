<script>
export default {
	methods: {
		onErrorModel(model) {
			console.log(model);
		},
		onLoad(model) {
			model.scene.traverse(o => {
				if (o.isMesh) {
					// handle both multiple and single materials
					const asArray = Array.isArray(o.material) ? o.material : [o.material]
					// 0 works for matte materials - change as needed
					asArray.forEach(mat => mat.metalness = 0)
				}
			})
		}
	}
}
</script>

<template>
	<Renderer antialias alpha resize="window">
		<Camera :position="{z:1}"></Camera>

		<Scene>
			<HemisphereLight />

			<DirectionalLight :color="'#fff'" :position="{ x: 0, y:100, z: 100 }" cast-shadow
				:shadow-camera="{ right: 180, bottom: -180 }" />
			<GltfModel :position="{y:0.08,x:0.1}" :rotation="{y:0.2, z: 0.4}" :scale="{x:2,y:2,z:2}" @error="onErrorModel"
				@load="onLoad" src="./models/sneakers/air_force/scene.gltf"></GltfModel>
		</Scene>

	</Renderer>
</template>
