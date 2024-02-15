<template>
  <section class="container section">
    <p class="section__sub-header text-center">Category</p>
    <p class="section__header text-center">Shop by Top Categories</p>
    <div class="section--content-gap">
      <v-row>
        <v-col v-for="category in categories" :key="category.id" cols="6" lg="2">
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

<script lang="ts">
import { ICategories } from './allCategories'
import ApiCall from '../../api/apiInterface'
import { useCategoryStore } from '../../stores/categoryStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'AllCategories',
  data() {
    return {
      //categoriesData: categoriesData,
      categories: []
    }
  },
  watch: {
    categories(newValue) {
      if (newValue.length > 0) {
        console.log('form watch', newValue)
        useCategoryStore().addCategories(newValue)
      }
    }
  },
  async mounted() {
    try {
      const { data } = await ApiCall.get('/src/data/categories.json')
      this.categories = data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
@import '../../styles/responsive';

.category-card {
  border: 1px solid $gray-g100;
  padding: 20px;
  cursor: pointer;

  &:hover {
    border: 1px solid $primary-hard;
    box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);

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
