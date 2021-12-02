<script>
  import dayjs from "dayjs";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let currentDate;
  export let selectedDate;
  const selectPrevious = () => {
    selectedDate = dayjs(selectedDate).subtract(1, "month");
    dispatch("dateSelected", { date: selectedDate });
  };
  const selectCurrent = () => {
    selectedDate = dayjs(currentDate);
    dispatch("dateSelected", { date: selectedDate });
  };
  const selectNext = () => {
    selectedDate = dayjs(selectedDate).add(1, "month");
    dispatch("dateSelected", { date: selectedDate });
  };
</script>

<div class="calendar-date-selector">
  <span on:click={selectPrevious}>
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="triangle-left"
      ><path
        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      /></svg
    >
  </span>
  <span on:click={selectCurrent}> {selectedDate.format("MMMM YYYY")}</span>
  <span on:click={selectNext}>
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="triangle-right"
      ><path
        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      /></svg
    >
  </span>
</div>

<style>
  span {
    color: #fff;
  }
  .calendar-date-selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .triangle-right {
    transform: rotate(90deg);
  }
  .triangle-left {
    transform: rotate(270deg);
  }
</style>
