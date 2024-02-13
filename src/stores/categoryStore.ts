import { defineStore } from 'pinia'
import categories from '../data/categories.json'

export const useCategoryStore = defineStore('categoryStore', {
  //!---- state ----
  state: () => ({
    categories: []
  }),
  //!---- actions ----
  actions: {
    addCategories(data: []) {
      this.categories = data
    }
  },
  //!---- getters ----
  getters: {
    getCategories() {
      return categories
    }
  }
})
