<template>
  <Splide :has-track="false" :options="sliderOptions" aria-label="...">
    <div class="custom-wrapper">
      <SplideTrack>
        <SplideSlide v-for="data in sliderData" :key="data.id">
          <div class="home-banner d-flex align-center pa-12">
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
                <img src="../../assets//icons/arrow-right.svg" alt="" />
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
import { sliderData, sliderOptions } from './sliderData'
export default {
  name: 'BannerSlider',
  components: { Splide, SplideSlide, SplideTrack },
  data() {
    return {
      sliderData: sliderData,
      sliderOptions: sliderOptions
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/config';

.splide__pagination {
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
</style>

<style lang="scss" scoped>
@import '../../styles/config';
.home-banner {
  width: 100%;
  height: 533px;
  color: $white;
  margin-top: 24px;
  background-image: url('../../assets/images/home-banner-bg-one.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    max-width: 390px;
    font-size: 48px;
    line-height: 1.3;
  }

  &__sub-heading {
    padding-left: 12px;
    border-left: 3px solid $primary;
    p {
      color: $gray-g400;
      font-size: 24px;
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

.splide__pagination {
  margin-bottom: 15px;
  left: 0;
  right: 86%;
}
</style>
