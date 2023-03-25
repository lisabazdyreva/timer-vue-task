<script setup>
  import TimerItem from '@/components/timer-item/timer-item.vue';
  import AddTimerButton from '@/components/add-timer-button.vue';
  import { useTimersStore } from '@/store/timers';
  import { storeToRefs } from 'pinia';

  const store = useTimersStore();
  const { timerIds } = storeToRefs(store);
</script>

<template>
  <main class="main body__main">
    <div class="timer-list main__timer-list">
      <TimerItem v-for="timer in timerIds" :key="timer" :timer-id="timer" />
      <add-timer-button></add-timer-button>
    </div>
  </main>
</template>

<style scoped>
  .body__main {
    margin-top: 72px;
    margin-bottom: 82px;
  }

  .main__timer-list {
    margin: 0 auto;
  }

  .timer-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 45px;
    align-items: center;
  }

  @media (min-width: 320px) {
    .timer-list {
      width: 225px;
    }
  }

  @media (min-width: 768px) {
    .timer-list {
      flex-direction: row;
      column-gap: 50px;
      width: 500px;
    }
  }

  @media (min-width: 1024px) {
    .body__main {
      margin-bottom: 82px;
    }

    .timer-list {
      width: 775px;
    }
  }
</style>
