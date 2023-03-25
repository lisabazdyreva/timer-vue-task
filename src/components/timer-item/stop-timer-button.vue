<script setup>
  import { defineEmits } from 'vue';
  const emits = defineEmits(['resetTimer, removeTimer']);
</script>

<template>
  <button class="timer-item__button stop-button" type="button" @click="emits('resetTimer')" @dblclick="emits('removeTimer')">
    <span class="visually-hidden">Stop timer</span>
    <svg aria-hidden="true" class="timer-item__icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#9E9E9E" height="20" width="20" />
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

  .stop-button {
    padding-left: 15px;
    padding-right: 15px;
  }

  .timer-item__icon {
    display: block;
  }

  @media (min-width: 320px) {
    .stop-button {
      padding-right: 70px;
      padding-left: 22px;
    }
  }
</style>
