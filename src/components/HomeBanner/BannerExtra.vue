<template>
  <div class="banner-extra">
    <Splide :has-track="false" :options="bannerExtraSliderOptions" aria-label="...">
      <div class="home-banner__wrapper">
        <SplideTrack>
          <SplideSlide>
            <div class="banner-extra__item">
              <div class="banner-extra__item__icon rounded-circle">
                <EcoIcon name="delivery-truck"></EcoIcon>
              </div>
              <div class="banner-extra__item__text">
                <p class="font-weight-bold mb-1">Free Shipping</p>
                <p>Free shipping with Discount</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="banner-extra__item">
              <div class="banner-extra__item__icon rounded-circle">
                <EcoIcon name="headphones"></EcoIcon>
              </div>
              <div class="banner-extra__item__text">
                <p class="font-weight-bold mb-1">Great Support 24/7</p>
                <p>Instant access to Contact</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="banner-extra__item banner-extra__item--active">
              <div class="banner-extra__item__icon rounded-circle">
                <EcoIcon name="shopping-bag"></EcoIcon>
              </div>
              <div class="banner-extra__item__text">
                <p class="font-weight-bold mb-1">100% Secure Payment</p>
                <p>We ensure your money is save</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="banner-extra__item">
              <div class="banner-extra__item__icon rounded-circle">
                <EcoIcon name="package"></EcoIcon>
              </div>
              <div class="banner-extra__item__text">
                <p class="font-weight-bold mb-1">Money-Back Guarantee</p>
                <p>30 days money-back</p>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
      </div>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import EcoIcon from '@/components/Shared/EcoIcon/EcoIcon.vue'
import { bannerExtraSliderOptions } from '@/components/HomeBanner/sliderData'

export default {
  name: 'BannerExtra',
  components: { EcoIcon, Splide, SplideSlide, SplideTrack },
  data() {
    return {
      bannerExtraSliderOptions: bannerExtraSliderOptions
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.banner-extra {
  border-bottom: 1px solid $gray-g200;

  &__item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 30px 0px;
    border-bottom: 2px solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid $primary;

      .banner-extra__item__icon {
        background-color: $primary;
        svg {
          fill: $white;
        }
      }
    }
    &__icon {
      width: 72px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $gray-g50;

      svg {
        fill: $primary;
      }
    }

    &__text {
      p:first-child {
        font-size: 18px;
      }
    }
  }
}
</style>
