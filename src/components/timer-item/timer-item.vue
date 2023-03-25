<script setup>
  import { ref, defineProps } from 'vue';
  import { useTimersStore } from '@/store/timers';
  import { formatTime } from '@/utils/utils';
  import { MILLISECONDS_IN_SECOND } from '@/utils/const';

  import PlayTimerButton from '@/components/timer-item/play-timer-button.vue';
  import PauseTimerButton from '@/components/timer-item/pause-timer-button.vue';
  import StopTimerButton from '@/components/timer-item/stop-timer-button.vue';

  const initialTimeValue = 0;
  const initialTimeDisplay = '00:00';

  const store = useTimersStore();
  const props = defineProps(['timerId']);

  const timeValue = ref(initialTimeValue);
  const timeDisplay = ref(initialTimeDisplay);
  const isActive = ref(false);

  let timer;

  const setTimeValue = () => {
    timeValue.value += 1;
    timeDisplay.value = formatTime(timeValue.value);
  };

  const setActive = () => {
    isActive.value = true;
    timer = setInterval(setTimeValue, MILLISECONDS_IN_SECOND);
  };

  const setPause = () => {
    clearInterval(timer);
    isActive.value = false;
  };

  const remove = () => {
    if (timer) {
      clearInterval(timer);
    }

    store.removeTimer(props.timerId);
  };

  const reset = () => {
    if (timer) {
      clearInterval(timer);
    }

    timeValue.value = initialTimeValue;
    timeDisplay.value = initialTimeDisplay;
  };
</script>

<template>
  <div class="timer-container">
    <div class="timer-item">
      <p class="timer-item__time" :class="{ active: isActive }">
        {{ timeDisplay }}
      </p>
      <div class="timer-item__buttons">
        <PlayTimerButton v-if="!isActive" @set-active="setActive" />
        <PauseTimerButton v-if="isActive" @set-pause="setPause" />
        <StopTimerButton @reset-timer="reset" @remove-timer="remove" />
      </div>
    </div>
  </div>
</template>

<style>
  .timer-item {
    width: 120px;
    height: 120px;
  }

  .timer-item__time {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    font-size: 22px;
    color: var(--light-gray-color);
    margin: 0;
    box-sizing: border-box;
    border-bottom: 1px solid var(--light-gray-color);
    pointer-events: none;
  }

  .timer-item__buttons {
    display: flex;
    justify-content: space-between;
  }

  .active {
    color: var(--white-color);
  }

  @media (min-width: 320px) {
    .timer-item {
      width: 225px;
    }
  }
</style>
