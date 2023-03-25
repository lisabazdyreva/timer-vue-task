<template>
  <div class="timer-container">
    <div class="timer-item">
      <p class="timer-item__time">01:20</p>
      <div class="timer-item__buttons">
        <button class="timer-item__button play-button" type="button">
          <span class="visually-hidden">Start timer</span>
          <svg
            class="timer-item__icon"
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M0 20V0L17 10L0 20Z" fill="#9E9E9E" />
          </svg>
        </button>
        <button
          class="timer-item__button pause-button visually-hidden"
          type="button"
        >
          <span class="visually-hidden">Pause timer</span>
          <svg
            class="timer-item__icon"
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="7" y="0.000244141" width="3" height="20" fill="#9E9E9E" />
            <rect y="0.000244141" width="3" height="20" fill="#9E9E9E" />
          </svg>
        </button>
        <button class="timer-item__button stop-button" type="button">
          <span class="visually-hidden">Stop timer</span>
          <svg
            class="timer-item__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="20" height="20" fill="#9E9E9E" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimerItem',
  };
</script>

<style scoped>
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
  }

  .timer-item__buttons {
    display: flex;
    justify-content: space-between;
  }

  .timer-item__button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .pause-button {
    padding-left: 15px;
    padding-right: 15px;
  }

  .play-button {
    padding-left: 15px;
    padding-right: 15px;
  }

  .stop-button {
    padding-left: 15px;
    padding-right: 15px;
  }

  .timer-item__icon {
    display: block;
  }

  @media (min-width: 320px) {
    .timer-item {
      width: 225px;
    }

    .pause-button {
      padding-left: 73px;
      padding-right: 29px;
    }

    .play-button {
      padding-left: 70px;
      padding-right: 25px;
    }

    .stop-button {
      padding-right: 70px;
      padding-left: 22px;
    }
  }
</style>
