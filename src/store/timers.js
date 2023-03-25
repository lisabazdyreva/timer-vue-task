import { defineStore } from 'pinia';
import { ref } from 'vue';
import { StoreName } from '@/utils/const';

export const useTimersStore = defineStore(StoreName.Timers, () => {
  const timerIds = ref([]);

  const addTimer = (id) => {
    timerIds.value.push(id);
  };

  const removeTimer = (idToRemove) => {
    timerIds.value = timerIds.value.filter((id) => id !== idToRemove);
  };

  return { addTimer, removeTimer, timerIds };
});
