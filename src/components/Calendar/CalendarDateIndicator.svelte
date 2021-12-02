<script>
  // import dayjs from "dayjs";
  export let selectedDate;
  // $: selectedMonth = selectedDate.format("MMMM YYYY");
</script>

<div class="calendar-date-indicator">
  {selectedDate.format("MMMM YYYY")}
</div>

<style>
  div {
    color: #fff;
  }
</style>
