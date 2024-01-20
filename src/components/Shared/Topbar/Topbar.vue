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
    <!-- <div class="d-flex ga-2">
      <v-select :items="['eng', 'বাংলা']" v-model="selectedLanguage" variant="plain"></v-select>
      <v-select :items="['usd', 'টাকা']" v-model="selectedCurrency" variant="underlined"></v-select>
    </div> -->
    <div class="dropdown">
      <div class="d-flex align-center ga-2">
        <p class="dropdown__text">{{ selectedLanguage }}</p>
        <div class="dropdown__icon">
          <svg
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data() {
    return {
      selectedLanguage: 'eng',
      selectedCurrency: 'usd'
    }
  }
}
</script>

<style lang="scss" scoped></style>
