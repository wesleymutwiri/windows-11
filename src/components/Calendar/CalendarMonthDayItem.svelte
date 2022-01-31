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
    padding: .8rem;
    color: #fff;
    cursor: pointer;
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    background: #4cc2ff;
    border-radius: 50%;
  }
  .calendar-day--today:hover {
    background: #006191;
  }
</style>
