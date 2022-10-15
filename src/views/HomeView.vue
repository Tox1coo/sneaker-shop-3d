<script>
import HeroSection from '@/components/Hero/HeroSection.vue';
import SneakersSection from '@/components/Sneakers/SneakersSection.vue';
import SliderSneakerSection from '@/components/Sneakers/SliderSneakerSection.vue';
export default {
  components: { HeroSection, SneakersSection, SliderSneakerSection }
}
</script>

<template>

  <main>
    <HeroSection></HeroSection>
    <div class="container">
      <SneakersSection></SneakersSection>
      <SliderSneakerSection></SliderSneakerSection>
    </div>
  </main>
</template>
