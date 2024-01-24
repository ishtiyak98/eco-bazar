<template>
  <div class="banner-categories">
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Fresh Fruits</p>
    </div>
    <div class="banner-categories__item banner-categories__item--active">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Vegetables</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">River Fish</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Chicken & Meat</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Drink & Water</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Yogurt & Ice Cream</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Cake & Bread</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Butter & Cream</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">Cooking</p>
    </div>
    <div class="banner-categories__item">
      <div class="banner-categories__item__icon"></div>
      <p class="banner-categories__item__text">View all Category</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerCategories'
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.banner-categories {
  margin-top: 24px;
  width: 314px;
  background-color: $white;
  border: 1px solid $gray-g200;

  &__item {
    padding: 16px 20px;
    cursor: pointer;
    &:hover {
      color: $white;
      background-color: $gray-g800;
    }
    &--active {
      color: $white;
      background-color: $primary;
    }
    &:last-child {
      border-top: 1px solid $gray-g200;
    }
  }
}
</style>
