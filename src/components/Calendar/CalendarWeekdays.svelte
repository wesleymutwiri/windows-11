<script>
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
</script>

<ol class="day-of-week">
  {#each weekdays as weekday}
    <li>
      {weekday}
    </li>
  {/each}
</ol>

<style>
  ol {
    color: #fff;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
    margin: 1rem 0;
  }
  li {
    list-style: none;
  }
</style>
