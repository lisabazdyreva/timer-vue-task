<script setup>
  import { ref, defineProps } from 'vue';
  import { useTimersStore } from '@/store/timers';
  import { formatTime } from '@/utils/utils';
  import { MILLISECONDS_IN_SECOND } from '@/utils/const';

  import PlayTimerButton from '@/components/timer-item/buttons/play-timer-button.vue';
  import PauseTimerButton from '@/components/timer-item/buttons/pause-timer-button.vue';
  import StopTimerButton from '@/components/timer-item/buttons/stop-timer-button.vue';

  const initialTimeDisplay = '00:00';

  const store = useTimersStore();
  const props = defineProps(['timerId']);

  const isActive = ref(false);

  const startTime = ref(null);
  const passedTime = ref(null);
  const differenceInTime = ref(null);

  const timeDisplay = ref(initialTimeDisplay);

  let timer;

  const setTimeValue = () => {
    const differenceFromStart = Date.now() - startTime.value;

    if (passedTime.value) {
      differenceInTime.value = differenceFromStart + passedTime.value;
    } else {
      differenceInTime.value = differenceFromStart;
    }

    timeDisplay.value = formatTime(Math.floor(differenceInTime.value / MILLISECONDS_IN_SECOND));
  };

  const setActive = () => {
    isActive.value = true;
    startTime.value = Date.now();

    timer = setInterval(setTimeValue, MILLISECONDS_IN_SECOND);
  };

  const setPause = () => {
    clearInterval(timer);
    passedTime.value = differenceInTime.value;
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

    timeDisplay.value = initialTimeDisplay;

    startTime.value = null;
    passedTime.value = null;
    differenceInTime.value = null;

    isActive.value = false;
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
