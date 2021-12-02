<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import dayjs from "dayjs";
  import CalendarDateIndicator from "../Calendar/CalendarDateIndicator.svelte";
  import CalendarDateSelector from "../Calendar/CalendarDateSelector.svelte";
  let selectedDate = dayjs();
  const selectDate = ({ detail: { date } }) => (selectedDate = date);
  let today = dayjs().format("YYYY-MM-DD");
  let calendarCalled = true;

  let time = new Date();
  let date = time.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  $: hours = time.getHours();
  $: minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  $: fullDate = time.toLocaleString("en-US", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });
</script>

<div class="time" on:click={() => (calendarCalled = !calendarCalled)}>
  <span>
    {#if hours > 12}
      {hours - 12}:{minutes} PM
    {:else}
      {hours}:{minutes} AM
    {/if}
  </span>
  <span>
    {fullDate}
  </span>
</div>
{#if calendarCalled}
  <div
    class="calendar-month"
    transition:fly={{
      delay: 250,
      duration: 300,
      x: 500,
      y: 0,
      opacity: 0.5,
      easing: quintOut,
    }}
  >
    <!-- Calendar header -->
    <div class="calendar-month-header">
      <!-- name of the month  -->
      <!-- <CalendarDateIndicator {selectedDate} /> -->
      <!-- pagination for ease of use  -->
      <CalendarDateSelector
        on:dateSelected={selectDate}
        {selectedDate}
        currentDate={today}
      />
    </div>
    <!-- calendar grid header  -->
    <!-- <CalendarWeekdays /> -->

    <!-- calendar grid  -->
    <ol class="days-grid">
      <!-- <CalendarMonthDayItem /> -->
    </ol>
  </div>
{/if}

<style>
  .time {
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 0.64rem;
    padding: 0.5rem 1rem;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .calendar-month {
    position: absolute;
    top: -270px;
    background: rgba(36, 36, 36, 0.8);
    height: 250px;
    width: 300px;
    right: 20px;
    border-radius: 0.4rem;
    padding: 1rem;
  }

  .calendar-month-header {
    display: flex;
  }
</style>
