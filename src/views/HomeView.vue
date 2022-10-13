<script>
import HeroSection from '../components/Hero/HeroSection.vue';
import SneakersSection from '../components/Sneakers/SneakersSection.vue';
import ShoesScene from '../components/Scene/ShoesScene.vue';
export default {
  components: { HeroSection, SneakersSection, ShoesScene }
}
</script>

<template>

  <main>
    <HeroSection></HeroSection>
    <SneakersSection></SneakersSection>
    <ShoesScene></ShoesScene>
  </main>
</template>
