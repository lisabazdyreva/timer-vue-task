<script>
import { defineComponent } from "vue";
import AddTimerButton from "@/components/add-timer-button.vue";

export default defineComponent({
  components: { AddTimerButton },
});
</script>

<template>
  <main class="main body__main">
    <add-timer-button></add-timer-button>
  </main>
</template>

<style scoped></style>
