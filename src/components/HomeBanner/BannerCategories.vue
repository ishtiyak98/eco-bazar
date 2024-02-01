<template>
  <div class="banner-categories">
    <div class="banner-categories__container">
      <div v-for="category in categoriesData" :key="category.id" class="banner-categories__item">
        <div class="banner-categories__item__icon">
          <EcoIcon :name="category.icon"></EcoIcon>
        </div>
        <p class="banner-categories__item__text">{{ category.name }}</p>
      </div>
    </div>

    <div class="banner-categories__item banner-categories__extra">
      <div class="banner-categories__item__icon pt-1">
        <EcoIcon name="plus" style="width: 18px; height: 18px"></EcoIcon>
      </div>
      <p class="banner-categories__item__text">View all Category</p>
    </div>
  </div>
</template>

<script lang="ts">
import EcoIcon from '@/components/Shared/EcoIcon/EcoIcon.vue'
import { categoriesData } from './categories'

export default {
  name: 'BannerCategories',
  components: { EcoIcon },
  data() {
    return {
      categoriesData: categoriesData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.banner-categories {
  width: 100%;
  background-color: $white;
  border: 1px solid $gray-g200;

  &__container {
    max-height: 438px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      
      display: none;
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: $gray-g300;
      border-radius: 20px;
    }
  }

  &__item {
    padding: 16px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid $gray-g200;

    &:hover {
      color: $white;
      background-color: $primary;

      .banner-categories__item__icon {
        svg {
          fill: $white;
        }
      }
    }

    &__icon {
      svg {
        width: 24px;
        height: 24px;
        fill: $gray-g400;
      }
    }
  }

  &__extra {
    border-top: 1px solid $gray-g200;
  }
}
</style>
