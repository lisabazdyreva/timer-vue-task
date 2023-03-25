<script setup>
  import { defineEmits } from 'vue';

  const emit = defineEmits(['setActive']);
</script>

<template>
  <button class="timer-item__button play-button" type="button" @click="emit('setActive')">
    <span class="visually-hidden">Start timer</span>
    <svg aria-hidden="true" class="timer-item__icon" fill="none" height="20" viewBox="0 0 17 20" width="17" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20V0L17 10L0 20Z" fill="#9E9E9E" />
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

  .play-button {
    padding-left: 15px;
    padding-right: 15px;
  }

  .timer-item__icon {
    display: block;
  }

  @media (min-width: 320px) {
    .play-button {
      padding-left: 70px;
      padding-right: 25px;
    }
  }
</style>
