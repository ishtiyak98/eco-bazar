<template>
  <div class="container">
    <div class="top-nav d-flex align-center justify-space-between">
      <div>
        <img src="../../../assets/logo.png" alt="eco-bazar logo" width="183" srcset="" />
      </div>
      <div class="top-nav__search">
        <input class="top-nav__search__input" type="text" name="" id="" />
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
</template>

<script lang="ts">
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_config.scss';
.top-nav {
  position: relative;
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
</style>
