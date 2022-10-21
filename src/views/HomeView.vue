<script>
import HeroSection from '@/components/Hero/HeroSection.vue';
import SneakersSection from '@/components/Sneakers/SneakersSection.vue';
import SliderSneakerSection from '@/components/Sneakers/SliderSneakerSection.vue';
import CategorySection from '@/components/Category/CategorySection.vue';
import DiscountSection from '../components/Discount/DiscountSection.vue';
import MembershipSection from '../components/Membership/MembershipSection.vue';
export default {
  components: { HeroSection, SneakersSection, SliderSneakerSection, CategorySection, DiscountSection, MembershipSection }
}
</script>

<template>

  <main>
    <HeroSection></HeroSection>
    <div class="container">
      <SneakersSection></SneakersSection>
      <SliderSneakerSection></SliderSneakerSection>
      <CategorySection></CategorySection>
      <DiscountSection></DiscountSection>
    </div>
    <MembershipSection></MembershipSection>
    <FooterBlock></FooterBlock>
  </main>
</template>
