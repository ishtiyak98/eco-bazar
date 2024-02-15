<template>
  <div class="product d-flex">
    <div class="product__image">
      <img src="../../assets/images/products/tomatoes.jpg" alt="" />
    </div>
    <div class="product__info py-6 px-3">
      <p class="product__info__name">Red Tomatos</p>
      <div class="position-relative pt-1">
        <div class="product__info__extra pt-1">
          <div class="icon">
            <EcoIcon name="bag"></EcoIcon>
          </div>
          <div class="icon">
            <EcoIcon name="heart"></EcoIcon>
          </div>
          <div class="icon">
            <EcoIcon name="eye" class="product__quick-view"></EcoIcon>
          </div>
        </div>
        <p class="product__info__price">$14.99</p>
        <div class="product__info__rating">
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EcoIcon from '@/components/Shared/EcoIcon/EcoIcon.vue'

export default {
  name: 'ProductCardTwo',
  components: { EcoIcon },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
@import '../../styles/responsive';

.product {
  border: 1px solid $gray-g100;
  display: inline-block;
  overflow: hidden;

  &:hover {
    border: 1px solid $primary;
    box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);

    .product__image {
      img {
        transform: scale(0.9);
      }
    }
    .product__info__extra {
      display: flex;
      top: 5px;
    }
  }

  &__image {
    width: 114px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
    }
  }

  &__info {
    &__name {
      color: $gray-g700;
      font-size: 14px;
      text-transform: capitalize;
    }
    &__price {
      color: $gray-g900;
      font-size: 16px;
      font-weight: 500;
    }
    &__rating {
      margin-top: 2px;
      .star {
        fill: $gray-g200;
        width: 14px;
        height: 14px;

        &--fill {
          fill: $warning;
        }
      }
    }

    &__extra {
      position: absolute;
      top: 5px;
      top: 150%;
      left: 0;
      height: 100%;
      background-color: #fff;
      z-index: 2;
      display: none;
      display: flex;
      gap: 12px;
      transition: all 0.4s;

      .icon {
        width: 40px;
        height: 40px;
        background-color: #f2f2f2c6;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          cursor: pointer;
          background-color: $primary;

          svg {
            stroke: #fff;
          }
        }

        svg {
          stroke: $gray-g900;
          width: 20px;
        }
      }
    }
  }
}
</style>
