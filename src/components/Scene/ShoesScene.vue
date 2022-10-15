<script>
import { ref } from "vue";
import dbSneaker from '@/utils/sneakers.json';
import * as THREE from 'three'
console.log(dbSneaker);

export default {
	setup() {
		const scene = ref(null);
		const camera = ref(null)
		const model = ref(null)
		const dbSneakers = dbSneaker;
		const render = ref(null)
		const modelPosition = {
			x: 0, y: 0, z: 0
		}
		const target = new THREE.Vector3(0, 24, 0);

		return { modelPosition, scene, camera, model, dbSneakers, target, render }
	},
	computed: {
		getActiveSneakers() {
			return 0
		},
		getPositionCamera() {
			return this.dbSneakers[this.getActiveSneakers]?.settingModel?.positionCamera || { x: 0, y: 0, z: 0 }
		}
	},
	methods: {
		onErrorModel(model) {
			console.log(model);
		},

		onLoad(model) {
			model.scene.children[0].position.z = 0
			model.scene.children[0].position.y = 0
			// model.scene.children[0].rotation.set(0, 0, 0)
			this.scene.scene.fog = new THREE.Fog(0x9C1E58, 0, 1000);
			console.log(model.scene.children[0]
			);
			model.scene.traverse(o => {
				if (o.isMesh) {
					const asArray = Array.isArray(o.material) ? o.material : [o.material]
					asArray.forEach(mat => mat.metalness = 0)
					console.log(o);
					o.castShadow = true;
				}
			})
		}
	},
	// components: { PhysicalMaterial, NoisyPlane }
}
</script>

<template>
	<Renderer ref="render" antialias alpha resize="window"
		:orbit-ctrl="{ enableDamping: true, dampingFactor: 0.8,  maxDistance: 90, minDistance:40, target: target, }"
		shadow>
		<Camera :lookAt="target" :props="{zoom: this.dbSneakers[this.getActiveSneakers]?.settingModel?.zoomCamera || 1}"
			ref="camera" :position="{x:0, y: 70, z:70 }" />
		<Scene ref="scene" background="#9C1E58">
			<ambient-light color="#ddd"></ambient-light>
			<point-light ref="light" :shadow-map-size="{ width: 1024, height: 1024 }" :position="{x:0, y: 100, z:100 }"
				cast-shadow>
			</point-light>

			<GltfModel cast-shadow ref="model" @error="onErrorModel" @load="onLoad"
				:src="`./models/sneakers/${dbSneakers[getActiveSneakers].nameFolder}/scene.glb`"
				:position="this.dbSneakers[this.getActiveSneakers]?.settingModel?.positionModel || {y: 23.8}"
				:scale="this.dbSneakers[this.getActiveSneakers]?.settingModel?.scaleModel || { x: 1, y: 1, z: 1 }"
				:rotation=" this.dbSneakers[this.getActiveSneakers]?.settingModel?.rotationModel || { x: 0, y: 0, z: 0 }">
			</GltfModel>
			<Box receiveShadow cast-shadow :size="25" height="20" :position="{y: 9.5}">
				<BasicMaterial>
					<Texture src="./textures/texture-cube.jpg" />
				</BasicMaterial>
			</Box>
			<Plane cast-shadow receiveShadow :position="{y: -2}" :rotation="{x: -Math.PI / 2}" :width="10000"
				:height="10000">
				<PhongMaterial :color="'#9C1E15'" />
			</Plane>

		</Scene>

	</Renderer>
</template>


<style lang="scss" scoped>
canvas {
	cursor: pointer;
}
</style>