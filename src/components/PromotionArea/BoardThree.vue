<template>
  <div class="promo-board">
    <p class="promo-board__sub-heading">Summer Sale</p>
    <h1 class="promo-board__heading">100% Fresh Fruit</h1>
    <p class="promo-board__details">
      Up to <span class="promo-board__details--highlight">64% OFF</span>
    </p>
    <div class="btn btn--white d-inline-flex align-center ga-2">
      <p>Shop Now</p>
      <EcoIcon name="arrow-right"></EcoIcon>
    </div>
  </div>
</template>

<script lang="ts">
import EcoIcon from '../Shared/EcoIcon/EcoIcon.vue'
export default {
  name: 'BoardThree',
  components: { EcoIcon }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
@import '../../styles/responsive';
.promo-board {
  width: 100%;
  height: 350px;
  padding-top: 35px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  background-image: url('../../assets/images/promo-board-three.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  border-radius: 8px;
  color: $gray-g900;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 2;
  position: relative;

  @include lg {
    height: 536px;
  }

  & > * {
    z-index: 2;
  }

  &:hover {
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #0000003e;
      z-index: 1;
      border-radius: 8px;
    }
  }

  &__sub-heading {
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
    font-weight: 500;
  }

  &__heading {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 8px;
  }

  &__details {
    font-size: 18px;
    margin-bottom: 28px;

    &--highlight {
      font-size: 18px;
      font-weight: 600;
      color: #fcc900;
      padding: 8px 12px;
      background-color: $gray-g900;
      border-radius: 5px;
    }
  }
}
</style>
