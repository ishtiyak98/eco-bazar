<template>
  <div class="promo-board">
    <p class="promo-board__sub-heading">Best Deals</p>
    <h1 class="promo-board__heading">Sale of the Month</h1>
    <div class="timer__container d-flex ga-2">
      <div class="timer d-flex flex-column align-center">
        <div id="counter-days" class="timer__number">
          {{ daysCount < 10 ? '0' + daysCount : daysCount }}
        </div>
        <p class="timer__label">Days</p>
      </div>
      <div class="timer__separator">:</div>
      <div class="timer d-flex flex-column align-center">
        <div id="counter-hours" class="timer__number">
          {{ hoursCount < 10 ? '0' + hoursCount : hoursCount }}
        </div>
        <p class="timer__label">Hours</p>
      </div>
      <div class="timer__separator">:</div>
      <div class="timer d-flex flex-column align-center">
        <div id="counter-mins" class="timer__number">
          {{ minsCount < 10 ? '0' + minsCount : minsCount }}
        </div>
        <p class="timer__label">Mins</p>
      </div>
      <div class="timer__separator">:</div>
      <div class="timer d-flex flex-column align-center">
        <div id="counter-secs" class="timer__number">
          {{ secondCount < 10 ? '0' + secondCount : secondCount }}
        </div>
        <p class="timer__label">Secs</p>
      </div>
    </div>
    <div class="btn btn--white d-inline-flex align-center ga-2">
      <p>Shop Now</p>
      <EcoIcon name="arrow-right"></EcoIcon>
    </div>
  </div>
</template>

<script lang="ts">
import EcoIcon from '@/components/Shared/EcoIcon/EcoIcon.vue'
export default {
  name: 'BoardOne',
  components: { EcoIcon },
  data() {
    return {
      targetDate: new Date('mar 10 24, 2024 10:00:00').getTime(),
      daysCount: 0,
      hoursCount: 0,
      minsCount: 0,
      secondCount: 0
    }
  },
  mounted() {
    var counter = setInterval(() => {
      const now = new Date().getTime()
      const diff = this.targetDate - now
      if (diff > 0) {
        this.daysCount = Math.floor(diff / (1000 * 60 * 60 * 24))
        this.hoursCount = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        this.minsCount = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        this.secondCount = Math.floor((diff % (1000 * 60)) / 1000)
      }
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';

.promo-board {
  width: 100%;
  height: 536px;
  padding-top: 35px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  background-image: url('../../assets/images/promo-board-one.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  border-radius: 8px;
  color: #fff;

  &__sub-heading {
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
  }

  &__heading {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 8px;
  }

  .timer__container {
    margin-bottom: 24px;

    .timer {
      &__number {
        font-size: 24px;
      }

      &__label {
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }

    .timer__separator {
      font-size: 24px;
    }
  }
}
</style>
