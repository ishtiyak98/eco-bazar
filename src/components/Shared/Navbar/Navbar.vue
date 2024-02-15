<template>
  <div class="container">
    <!--! top nav section -->
    <div class="top-nav d-flex align-center justify-space-between">
      <div>
        <img src="../../../assets/logo.png" alt="eco-bazar logo" width="183" srcset="" />
      </div>
      <div class="top-nav__search">
        <input class="top-nav__search__input" type="text" placeholder="Search an item" />
        <div class="top-nav__search__btn">Search</div>
      </div>
      <div class="d-flex align-center ga-2">
        <div>
          <img class="d-block" src="../../../assets/icons/phone-call.svg" alt="" />
        </div>
        <div>
          <p class="text-14">Customer Services</p>
          <p class="text-20 text-gray-g900 font-weight-medium">(219) 555-0114</p>
        </div>
      </div>
    </div>
  </div>

  <!--! navbar section -->
  <nav class="navbar">
    <div class="container d-flex align-center">
      <div class="navbar__menu" style="">
        <img class="d-block" src="../../../assets/icons/menu.svg" alt="" />
      </div>
      <div class="navbar__category d-flex align-center justify-space-between">
        <p>All Categories</p>
        <div>
          <svg
            class="d-block"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
          >
            <path d="M8 1.25L4.5 4.75L1 1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="navbar__items">
        <p class="navbar__items__item navbar__items__item--active">Home</p>
        <p class="navbar__items__item">Shop</p>
        <p class="navbar__items__item">Pages</p>
        <p class="navbar__items__item">Blog</p>
        <p class="navbar__items__item">About Us</p>
        <p class="navbar__items__item">Contact Us</p>
      </div>
      <div class="navbar__actions ms-auto d-flex ga-6">
        <EcoIcon name="heart" class="navbar__actions__icon"></EcoIcon>
        <div class="navbar__actions__bag">
          <p class="navbar__actions__bag__number">2</p>
          <EcoIcon name="bag" class="navbar__actions__icon"></EcoIcon>
        </div>
        <EcoIcon name="user" class="navbar__actions__icon"></EcoIcon>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import EcoIcon from '../EcoIcon/EcoIcon.vue'
export default {
  name: 'navbar',
  components: { EcoIcon }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_config.scss';
.top-nav {
  position: relative;
  padding: 24px 0px;

  &__search {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__input {
      padding: 10px 18px;
      outline: none;
      border-top: 1px solid $gray-g400;
      border-left: 1px solid $gray-g400;
      border-bottom: 1px solid $gray-g400;
      border-radius: 4px 0px 0px 4px;
    }

    &__btn {
      padding: 10px 24px;
      color: $white;
      background-color: $primary;
      border-radius: 0px 4px 4px 0px;
      border: 1px solid $primary;

      &:hover {
        cursor: pointer;
        background-color: $primary-hard;
      }
    }
  }
}

.navbar {
  color: $gray-g500;
  background-color: $gray-g900;

  &__menu {
    height: 100%;
    background-color: $primary;
    padding: 20px;

    &:hover {
      cursor: pointer;
      background-color: $primary-hard;
    }
  }

  &__category {
    color: white;
    padding: 0px 16px;
    width: 242px;
    height: 72px;
    background-color: $gray-g800;

    svg {
      width: 14px;
      height: 14px;
      stroke: $white;
    }
  }

  &__items {
    display: flex;
    //gap: 32px;
    &__item {
      padding: 20px 16px;
      margin: 0px 8px;
      cursor: pointer;

      &:hover {
        color: $primary;
      }

      &--active {
        color: $white;
      }
    }
  }

  &__actions {
    &__icon {
      width: 32px;
      height: 32px;
      stroke: $white;

      &:hover {
        stroke: $primary;
        cursor: pointer;
      }
    }
    &__bag {
      position: relative;

      &__number {
        width: 22px;
        height: 22px;
        border-radius: 50px;
        color: $white;
        font-size: 14px;
        text-align: center;
        background-color: $primary;
        border: 2px solid $gray-g800;
        position: absolute;
        top: -2px;
        right: -5px;
        display: block;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
