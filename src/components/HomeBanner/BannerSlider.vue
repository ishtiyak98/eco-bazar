<template>
  <Splide :has-track="false" :options="sliderOptions" aria-label="...">
    <div class="home-banner__wrapper">
      <SplideTrack>
        <SplideSlide v-for="data in sliderData" :key="data.id">
          <div
            class="home-banner pa-12 h-100 d-flex align-center"
            :class="{
              'home-banner--one': data.id === 1,
              'home-banner--two': data.id === 2,
              'home-banner--three': data.id === 3
            }"
          >
            <div>
              <div class="home-banner__heading mb-5">
                <h1>{{ data.heading }}</h1>
              </div>
              <div class="home-banner__sub-heading mb-8">
                <p>{{ data.content }}</p>
              </div>
              <div
                v-if="data.btn"
                class="home-banner__btn btn btn--primary d-inline-flex align-center ga-2"
              >
                <p>{{ data.btn }}</p>
                <img src="../../assets/icons/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </SplideSlide>
      </SplideTrack>
      <ul class="splide__pagination"></ul>
    </div>
  </Splide>
</template>

<script lang="ts">
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { sliderData, sliderOptions } from '@/components/HomeBanner/sliderData'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerSlider',
  components: { Splide, SplideSlide, SplideTrack },
  data() {
    return {
      sliderData: sliderData,
      sliderOptions: sliderOptions
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.home-banner {
  width: 100%;
  height: 100%;
  color: $white;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &--one {
    background-image: url('../../assets/images/home-banner-bg-one.png');
  }
  &--two {
    background-image: url('../../assets/images/home-banner-bg-two.png');
  }
  &--three {
    background-image: url('../../assets/images/home-banner-bg-three.png');
  }

  h1 {
    max-width: 390px;
    font-size: 48px;
    line-height: 1.3;
  }

  &__sub-heading {
    padding-left: 18px;
    max-width: 140px;
    position: relative;

    &::before {
      content: '';
      width: 3px;
      height: 78%;
      background-color: $primary;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    p {
      color: #fff;
      font-size: 24px;
      line-height: 1.6;
    }
  }

  &__btn {
    img {
      transform: translateX(0px);
      animation: slide 0.8s linear infinite alternate;

      @keyframes slide {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(5px);
        }
      }
    }
  }
}

.splide {
  height: 100% !important;

  &__track {
    height: 100%;
  }
}

.home-banner__wrapper {
  width: 100%;
  height: 100%;

  :deep .splide__pagination {
    margin-bottom: 15px;
    left: 0;
    right: 86%;

    &__page {
      width: 10px;
      height: 10px;
      background-color: $green-g600;
      opacity: 1;

      &.is-active {
        background-color: $white;
        transform: scale(1);
      }
    }
  }
}
</style>
