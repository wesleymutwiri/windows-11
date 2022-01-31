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
  <span on:click={selectCurrent}> {selectedDate.format("MMMM YYYY")}</span>
  <div class="row">
    <span on:click={selectPrevious}>
      <svg
        viewBox="0 0 24 24"
        width="10"
        height="10"
        stroke="none"
        stroke-width="2"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="triangle-top"
        ><path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        /></svg
      >
    </span>

    <span on:click={selectNext}>
      <svg
        viewBox="0 0 24 24"
        width="10"
        height="10"
        stroke="none"
        stroke-width="2"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="triangle-bottom"
        ><path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        /></svg
      >
    </span>
  </div>
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
  .row span {
    padding: 0.6rem;
    cursor: pointer;
  }
  .row span:hover {
    background: #17191d;
  }
  .triangle-bottom {
    transform: rotate(180deg);
  }
</style>
