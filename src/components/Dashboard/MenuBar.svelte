<script>
  import Taskbar from "./TaskBar.svelte";
  import Calendar from "./Calendar.svelte";
</script>

<footer>
  <div class="footer-container">
    <div class="taskbar-icons">
      <Taskbar />
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="#fff"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="search"
        ><circle cx="11" cy="11" r="8" /><line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
        /></svg
      >
      <img src="settings.png" alt="" />
      <img src="widget.png" alt="" />
      <img src="file-icon.png" alt="" />
      <img src="windows-store.png" alt="" />

      <img src="spotify.png" alt="" />
    </div>
    <div class="windows-icons">
      <div class="icon">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
          ><polyline points="18 15 12 9 6 15" />
        </svg>
      </div>
      <div class="icon">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      </div>
      <div class="icon">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
          ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path
            d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
          /></svg
        >
      </div>
      <div class="icon">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          stroke-width="2"
          fill="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
          ><rect x="1" y="6" width="18" height="12" rx="2" ry="2" /><line
            x1="23"
            y1="13"
            x2="23"
            y2="11"
          /></svg
        >
      </div>
      <Calendar />
    </div>
  </div>
</footer>

<style>
  .footer-container {
    background: rgba(28, 28, 40, 0.9);
    height: 39px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .taskbar-icons {
    justify-content: center;
    margin-left: auto;
    position: relative;
  }
  .taskbar-icons img {
    cursor: pointer;
  }
  .windows-icons {
    margin-left: auto;
    display: flex;
  }
  .icon {
    color: #fff;
    margin: auto 0.2rem;
    cursor: pointer;
  }
  img,
  .search {
    height: 33px;
    width: 33px;
    padding: 5.5px;
  }

  .search {
    transform: rotate(90deg);
  }
</style>
