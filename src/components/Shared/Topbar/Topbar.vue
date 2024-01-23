<template>
  <div class="topbar d-flex justify-space-between container py-3">
    <div class="d-flex align-center ga-2">
      <div class="">
        <img
          style="width: 100%; height: 100%"
          class="d-block"
          src="../../../assets/icons/map-pin.svg"
          alt=""
        />
      </div>
      <p class="text-12">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
    </div>
    <div class="d-flex ga-5">
      <!--! dropdown 1 -->
      <div class="dropdown">
        <div
          v-click-outside="onClickLanguageOutside"
          class="dropdown__content d-flex align-center ga-1"
          @click="toggleLanguageDropdown"
        >
          <p class="dropdown__content__text text-12 capitalize">
            {{ selectedLanguage?.name }}
          </p>
          <div
            class="dropdown__content__icon"
            :class="{ 'dropdown__content__icon--rotate': languageDropdownToggle }"
          >
            <svg
              class="d-block"
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
            >
              <path
                d="M8 1.25L4.5 4.75L1 1.25"
                stroke="#808080"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div :class="{ 'd-block': languageDropdownToggle }" class="dropdown__selection d-none">
          <p
            v-for="item in getLanguages()"
            :key="item.id"
            class="dropdown__selection__item text-12"
            @click="() => (selectedLanguage = item)"
          >
            {{ item.name }}
          </p>
        </div>
      </div>

      <!--! dropdown 2 -->
      <div class="dropdown">
        <div
          v-click-outside="onClickCurrencyOutside"
          class="dropdown__content d-flex align-center ga-1"
          @click="toggleCurrencyDropdown"
        >
          <p class="dropdown__content__text text-12 capitalize">
            {{ selectedCurrency?.name }}
          </p>
          <div
            class="dropdown__content__icon"
            :class="{ 'dropdown__content__icon--rotate': currencyDropdownToggle }"
          >
            <svg
              class="d-block"
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
            >
              <path
                d="M8 1.25L4.5 4.75L1 1.25"
                stroke="#808080"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div :class="{ 'd-block': currencyDropdownToggle }" class="dropdown__selection d-none">
          <p
            v-for="item in getCurrencies()"
            :key="item.id"
            class="dropdown__selection__item text-12"
            @click="() => (selectedCurrency = item)"
          >
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getLanguages, getCurrencies } from './topbar-data'
export default {
  name: 'Topbar',
  data() {
    return {
      selectedLanguage: getLanguages().find((language) => language.default === true),
      languageDropdownToggle: false,

      selectedCurrency: getCurrencies().find((currency) => currency.default === true),
      currencyDropdownToggle: false
    }
  },
  methods: {
    getLanguages() {
      return getLanguages()
    },

    toggleLanguageDropdown() {
      this.languageDropdownToggle = !this.languageDropdownToggle
    },

    onClickLanguageOutside() {
      this.languageDropdownToggle = false
    },

    getCurrencies() {
      return getCurrencies()
    },

    toggleCurrencyDropdown() {
      this.currencyDropdownToggle = !this.currencyDropdownToggle
    },

    onClickCurrencyOutside() {
      this.currencyDropdownToggle = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/config';

.topbar {
  border-bottom: 2px solid $gray-g100;
}
.dropdown {
  position: relative;

  &__content {
    cursor: pointer;

    &__icon {
      transform: rotate(0deg);
      transition: transform 0.3s;

      &--rotate {
        transform: rotate(180deg);
      }
    }
  }

  &__selection {
    width: 100px;
    color: $white;
    background-color: $primary;
    position: absolute;
    left: 0;
    top: 100%;
    border-radius: 4px;
    z-index: 5;

    &__item {
      padding: 5px 15px;
      cursor: pointer;

      &:hover {
        background-color: $primary-hard;
      }
      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:not(:last-child) {
        border-bottom: 1px solid $gray-g800;
      }
    }
  }
}
</style>
