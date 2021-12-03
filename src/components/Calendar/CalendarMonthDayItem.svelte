<script>
  export let isCurrentMonth = false;
  export let isToday = false;
  export let day;
  $: label = day.format("D");
</script>

<li
  class="calendar-day"
  class:calendar-day--not-current={!isCurrentMonth}
  class:calendar-day--today={isToday}
>
  <span>{label}</span>
</li>

<style>
  .calendar-day {
    padding: 0.2rem;
    color: #fff;
    cursor: pointer;
    font-size: 0.64rem;
  }
  /* .calendar-day:hover {
    background-color: #e2e8f0;
  } */
  .calendar-day--not-current {
    opacity: 0.2;
  }
  /* .calendar-day--not-current:hover {
    background-color: #cbd5e0;
  } */
  .calendar-day--today {
    background: #ffbd2a;
  }
  .calendar-day--today:hover {
    background: #f5a700;
  }
</style>
