import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTimersStore = defineStore('timers', () => {
  const timerIds = ref([1, 34]);

  const addTimer = (id) => {
    timerIds.value.push(id);
  };

  const removeTimer = (idToRemove) => {
    timerIds.value = timerIds.value.filter((id) => id !== idToRemove);
  };

  return { addTimer, removeTimer, timerIds };
});

//todo name to consts
