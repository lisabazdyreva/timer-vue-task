<script setup>
  import { defineEmits } from 'vue';

  const emit = defineEmits(['setPause']);
</script>

<template>
  <button class="timer-item__button pause-button" type="button" @click="emit('setPause')">
    <span class="visually-hidden">Pause timer</span>
    <svg aria-hidden="true" class="timer-item__icon" fill="none" height="20" viewBox="0 0 10 20" width="10" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#9E9E9E" height="20" width="3" x="7" y="0.000244141" />
      <rect fill="#9E9E9E" height="20" width="3" y="0.000244141" />
    </svg>
  </button>
</template>

<style>
  .timer-item__button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .timer-item__button:hover {
    background-color: var(--hover-gray);
  }

  .pause-button {
    padding-left: 15px;
    padding-right: 15px;
  }

  .timer-item__icon {
    display: block;
  }

  @media (min-width: 320px) {
    .pause-button {
      padding-left: 73px;
      padding-right: 29px;
    }
  }
</style>
