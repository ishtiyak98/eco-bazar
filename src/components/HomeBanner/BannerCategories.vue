<template>
  <div class="banner-categories">
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="apple"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Fresh Fruits</p>
    </div>
    <div class="banner-categories__item banner-categories__item--active">
      <div class="banner-categories__item__icon">
        <EcoIcon name="vegetables"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Vegetables</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="fish"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">River Fish</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="meat"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Chicken & Meat</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="coffee"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Drink & Water</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="ice-cream"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Yogurt & Ice Cream</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="cupcake"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Cake & Bread</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="pie"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Butter & Cream</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon">
        <EcoIcon name="food"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">Cooking</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon pt-1">
        <EcoIcon name="plus" style="width: 18px; height: 18px;"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">View all Category</p>
    </div>
  </div>
</template>

<script lang="ts">
import EcoIcon from '@/components/Shared/EcoIcon/EcoIcon.vue'

export default {
  name: 'BannerCategories',
  components: { EcoIcon }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.banner-categories {
  width: 100%;
  background-color: $white;
  border: 1px solid $gray-g200;

  &__item {
    padding: 16px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
      color: $white;
      background-color: $gray-g800;

      .banner-categories__item__icon {
        svg {
          fill: $white;
        }
      }
    }
    &--active {
      color: $white;
      background-color: $primary;

      .banner-categories__item__icon {
        svg {
          fill: $white;
        }
      }
    }
    &:last-child {
      border-top: 1px solid $gray-g200;
    }

    &__icon {
      svg {
        width: 24px;
        height: 24px;
        fill: $gray-g400;
      }
    }
  }
}
</style>
