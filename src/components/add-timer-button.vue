<template>
  <div class="timer-container">
    <button class="add-button timer-container__add-button" type="button">
      <svg
        class="add-button__icon"
        aria-hidden="true"
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="#9E9E9E" height="20" width="3" x="8.5" />
        <rect
          fill="#9E9E9E"
          height="20"
          transform="rotate(-90 0 11.5)"
          width="3"
          y="11.5"
        />
      </svg>
      <span class="visually-hidden">Add new timer</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'AddTimerButton',
  };
</script>

<style scoped>
  .add-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 50px;
  }

  .add-button__icon {
    display: block;
  }

  @media (min-width: 320px) {
    .add-button {
      padding-left: 103px;
      padding-right: 103px;
    }
  }
</style>
