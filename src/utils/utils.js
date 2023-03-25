const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

const SECONDS_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;
const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE;

const DIGIT_MAX = 9;

const formatTwoSignsNumber = (number) => {
  return number > DIGIT_MAX ? number : `0${number}`;
};
export const formatTime = (value) => {
  if (value / SECONDS_IN_DAY >= 1) {
    const days = Math.floor(value / SECONDS_IN_DAY);
    const hours = Math.floor((value - SECONDS_IN_DAY * days) / SECONDS_IN_HOUR);

    const minutesNumber = Math.floor((value - SECONDS_IN_DAY * days - hours * SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    const minutes = formatTwoSignsNumber(minutesNumber);

    const secondsNumber = value - SECONDS_IN_DAY * days - hours * SECONDS_IN_HOUR - minutesNumber * SECONDS_IN_MINUTE;
    const seconds = formatTwoSignsNumber(secondsNumber);

    return `${hours}:${minutes}:${seconds}`;
  } else if (value / SECONDS_IN_HOUR >= 1) {
    const hours = Math.floor(value / SECONDS_IN_HOUR);

    const minutesNumber = Math.floor((value - hours * SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    const minutes = formatTwoSignsNumber(minutesNumber);

    const secondsNumber = value - hours * SECONDS_IN_HOUR - minutesNumber * SECONDS_IN_MINUTE;
    const seconds = formatTwoSignsNumber(secondsNumber);

    return `${hours}:${minutes}:${seconds}`;
  } else if (value / SECONDS_IN_MINUTE >= 1) {
    const minutes = Math.floor(value / SECONDS_IN_MINUTE);
    const seconds = value - minutes * SECONDS_IN_MINUTE;

    return `${minutes}:${formatTwoSignsNumber(seconds)}`;
  } else if (value < SECONDS_IN_MINUTE) {
    return value.toString();
  }
};
