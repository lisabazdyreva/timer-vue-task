<script>
  import { defineComponent } from 'vue';
  import AddTimerButton from '@/components/add-timer-button.vue';
  import TimerItem from '@/components/timer-item.vue';

  export default defineComponent({
    components: { TimerItem, AddTimerButton },
  });
</script>

<template>
  <main class="main body__main">
    <div class="timer-list main__timer-list">
      <timer-item></timer-item>
      <timer-item></timer-item>
      <timer-item></timer-item>
      <timer-item></timer-item>
      <timer-item></timer-item>
      <timer-item></timer-item>
      <timer-item></timer-item>
      <timer-item></timer-item>
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
