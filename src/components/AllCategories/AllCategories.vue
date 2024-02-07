<template>
  <section class="container section">
    <p class="section__sub-header text-center">Category</p>
    <p class="section__header text-center">Shop by Top Categories</p>
    <div class="section--content-gap">
      <v-row>
        <v-col v-for="category in categoriesData" :key="category.id" cols="6" lg="2">
          <div class="category-card">
            <div class="category-card__img">
              <img :src="category.img" alt="" />
            </div>
            <p class="text-center text-capitalize">{{ category.name }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import { categoriesData } from './allCategories.ts'
import { useCategoryStore } from '../../stores/categoryStore'

export default {
  name: 'AllCategories',
  data() {
    return {
      categoriesData: categoriesData,
      categories: []
    }
  },
  mounted() {
    this.categories = useCategoryStore()
    console.log(this.categories)
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
@import '../../styles/responsive';

.category-card {
  border: 2px solid $gray-g100;
  padding: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid $primary-hard;
    box-shadow: $primary-soft 0px 1px 4px;

    p {
      color: $primary-hard;
    }
  }

  &__img {
    width: 100%;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    margin-top: 16px;
    color: black;
    font-weight: 500;
    font-size: 18px;
  }
}
</style>
