<template>
  <div class="d-flex justify-space-between container py-3">
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
    <div class="dropdown">
      <div class="dropdown__content d-flex align-center ga-1" @click="changeLangOpen">
        <p class="dropdown__content__text text-12 capitalize">
          {{ selectedLanguage }}
        </p>
        <div
          class="dropdown__content__icon"
          :class="{ 'dropdown__content__icon--rotate': selectedLanguageOpen }"
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
      <div :class="{ 'd-block': selectedLanguageOpen }" class="dropdown__selection d-none">
        <p class="dropdown__selection__item text-12">Eng</p>
        <p class="dropdown__selection__item text-12">বাংলা</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data() {
    return {
      selectedLanguage: 'eng',
      selectedCurrency: 'usd',
      selectedLanguageOpen: false,
      selectedCurrencyOpen: false
    }
  },
  methods: {
    changeLangOpen() {
      this.selectedLanguageOpen = !this.selectedLanguageOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/config';
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
