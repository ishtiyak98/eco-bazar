import { defineStore } from 'pinia'
import categories from '../data/categories.json'

export const useCategoryStore = defineStore('categoryStore', {
  //!---- state ----
  state: () => {
    return {
      categories
    }
  }

  //!---- actions ----
  //!---- getters ----
})
