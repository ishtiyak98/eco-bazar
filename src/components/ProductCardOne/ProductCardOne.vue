<template>
  <div class="product">
    <div class="product__image">
      <div class="product__image__extra">
        <div class="icon">
          <EcoIcon name="heart"></EcoIcon>
        </div>
        <div class="icon" style="margin-top: 6px">
          <EcoIcon name="eye" class="product__quick-view"></EcoIcon>
        </div>
      </div>
      <img src="../../assets/images/products/chinese-cabage.jpg" alt="" />
    </div>
    <div class="product__info px-4 py-3 d-flex align-center justify-space-between">
      <div>
        <p class="product__info__title">chinese cabbage</p>
        <p class="product__info__price">$14.99</p>
        <div class="product__info__rating">
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
          <EcoIcon name="star" class="star star--fill"></EcoIcon>
          <EcoIcon name="star" class="star"></EcoIcon>
        </div>
      </div>
      <div class="product__info__add-to-cart">
        <EcoIcon name="bag"></EcoIcon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EcoIcon from '@/components/Shared/EcoIcon/EcoIcon.vue'
export default {
  name: 'ProductCardOne',
  components: { EcoIcon }
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
      &__extra {
        display: block;
      }
      img {
        transform: translateY(-12px);
      }
    }
    .product__info__add-to-cart {
      cursor: pointer;
      background-color: $primary;

      &:hover {
        background-color: $primary-hard;
      }

      svg {
        stroke: #fff;
      }
    }
  }

  &__image {
    width: 246px;
    height: 246px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
    }

    &__extra {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 2;
      display: none;

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
          background-color: $gray-g800;

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

  &__info {
    &__title {
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
      margin-top: 6px;
      .star {
        fill: $gray-g200;
        width: 14px;
        height: 14px;

        &--fill {
          fill: $warning;
        }
      }
    }

    &__add-to-cart {
      width: 40px;
      height: 40px;
      background-color: $gray-g50;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        stroke: $gray-g900;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
