<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import dayjs from "dayjs";
  import weekday from "dayjs/plugin/weekday";
  import weekOfYear from "dayjs/plugin/weekOfYear";

  import CalendarWeekdays from "../Calendar/CalendarWeekdays.svelte";
  import CalendarMonthDayItem from "../Calendar/CalendarMonthDayItem.svelte";
  import CalendarDateSelector from "../Calendar/CalendarDateSelector.svelte";

  let time = new Date();
  $: hours = time.getHours();
  $: minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  $: fullDate = time.toLocaleString("en-US", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });

  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  let selectedDate = dayjs();
  let today = dayjs().format("YYYY-MM-DD");

  // Function for changing the currently selected date to a different month when using the selectors
  const selectDate = ({ detail: { date } }) => (selectedDate = date);
  const getWeekday = (date) => dayjs(date).weekday();
  let calendarCalled = true;

  // let date = time.toLocaleString("en-US", {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  // });

  $: month = Number(selectedDate.format("M"));
  $: year = Number(selectedDate.format("YYYY"));
  $: numberOfDaysInMonth = dayjs(selectedDate).daysInMonth();
  $: currentMonthDays = [...Array(numberOfDaysInMonth)].map((day, index) => {
    return {
      date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
      isCurrentMonth: true,
    };
  });
  let previousMonthDays = [];
  $: {
    const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");
    // Cover first day of the month being sunday
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
      ? firstDayOfTheMonthWeekday - 1
      : 6;
    const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
      .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
      .date();
    previousMonthDays = [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
      (day, index) => {
        return {
          date: dayjs(
            `${previousMonth.year()}-${previousMonth.month() + 1}-${
              previousMonthLastMondayDayOfMonth + index
            }`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false,
        };
      }
    );
  }
  let nextMonthDays = [];
  $: {
    const lastDayOfTheMonthWeekday = getWeekday(
      `${year}-${month}-${currentMonthDays.length}`
    );
    const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
      ? 7 - lastDayOfTheMonthWeekday
      : lastDayOfTheMonthWeekday;
    nextMonthDays = [...Array(visibleNumberOfDaysFromNextMonth)].map(
      (day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false,
        };
      }
    );
  }
  $: days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
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
    <CalendarWeekdays />

    <!-- calendar grid  -->
    <ol class="days-grid">
      {#each days as day (day.date)}
        <li>
          <CalendarMonthDayItem
            day={dayjs(day.date)}
            isToday={day.date === today}
            isCurrentMonth={day.isCurrentMonth}
          />
        </li>
      {/each}
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
    top: -320px;
    background: rgba(36, 36, 36, 0.8);
    height: 300px;
    width: 300px;
    right: 20px;
    border-radius: 0.4rem;
    padding: 1rem;
  }

  .days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem .5rem;
    width: 100%;
    align-items: center;
    margin: 1rem 0;
  }
  li {
    list-style: none;
    /* padding: .1rem; */
  }
</style>
