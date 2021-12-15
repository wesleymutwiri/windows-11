<script>
  import Taskbar from "./TaskBar.svelte";
  import Calendar from "./Calendar.svelte";
  import WindowsUtilityIcons from "./WindowsUtilityIcons.svelte";
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
      <WindowsUtilityIcons />
      <Calendar />
    </div>
  </div>
</footer>

<style>
  .footer-container {
    background: rgba(28, 28, 40, 0.9);
    height: 42px;
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

  img,
  .search {
    height: 33px;
    width: 33px;
    padding: 5.5px;
  }

  .search {
    transform: rotate(90deg);
  }
  .icon {
    color: #fff;
    margin: auto 0.2rem;
    cursor: pointer;
  }
</style>
