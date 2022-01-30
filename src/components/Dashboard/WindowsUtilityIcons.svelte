<script>
  let utilityIconCalled = true;
  let wifiIconCalled = true;
  let bluetoothIconCalled = false;
  let theme = "dark";
  let flightIconCalled = false;
  let batterySaverIconCalled = false;
  let nightIconCalled = false;
</script>

<div
  class="windows-utility-icons"
  on:click={() => (utilityIconCalled = !utilityIconCalled)}
>
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
</div>

{#if utilityIconCalled}
  <div class="menu-buttons">
    <div class="grid-icons">
      <div class="column">
        <div
          class:active={wifiIconCalled}
          class="utility-icon"
          on:click={() => (wifiIconCalled = !wifiIconCalled)}
        >
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
            ><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path
              d="M1.42 9a16 16 0 0 1 21.16 0"
            /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line
              x1="12"
              y1="20"
              x2="12.01"
              y2="20"
            />
          </svg>
        </div>
        <p>Wifi</p>
      </div>
      <div class="column">
        <div
          class:active={bluetoothIconCalled}
          class="utility-icon"
          on:click={() => (bluetoothIconCalled = !bluetoothIconCalled)}
        >
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
            ><polyline
              points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
            />
          </svg>
        </div>
        <p>Bluetooth</p>
      </div>
      <div class="column">
        <div
          class:active={theme === "dark"}
          class="utility-icon"
          on:click={() => (theme ? "dark" : "light")}
        >
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
            ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
          >
          <!-- <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
          ><circle cx="12" cy="12" r="5" /><line
          x1="12"
          y1="1"
          x2="12"
          y2="3"
          /><line x1="12" y1="21" x2="12" y2="23" /><line
          x1="4.22"
          y1="4.22"
          x2="5.64"
          y2="5.64"
          /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line
          x1="1"
          y1="12"
          x2="3"
          y2="12"
          /><line x1="21" y1="12" x2="23" y2="12" /><line
          x1="4.22"
          y1="19.78"
          x2="5.64"
          y2="18.36"
          /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
          > -->
        </div>
        <p>Theme</p>
      </div>
      <div class="column">
        <div
          class:active={batterySaverIconCalled}
          class="utility-icon"
          on:click={() => (batterySaverIconCalled = !batterySaverIconCalled)}
        >
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
            ><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line
              x1="16"
              y1="8"
              x2="2"
              y2="22"
            /><line x1="17.5" y1="15" x2="9" y2="15" /></svg
          >
        </div>
        <p>Battery Saver</p>
      </div>
      <div class="column">
        <div
          class:active={nightIconCalled}
          class="utility-icon"
          on:click={() => (nightIconCalled = !nightIconCalled)}
        >
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
            ><circle cx="12" cy="12" r="5" /><line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
            /><line x1="12" y1="21" x2="12" y2="23" /><line
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
            /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
            /><line x1="21" y1="12" x2="23" y2="12" /><line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
            /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
          >
        </div>
        <p>Night light</p>
      </div>
      <div class="column">
        <div
          class:active={flightIconCalled}
          class="utility-icon"
          on:click={() => (flightIconCalled = !flightIconCalled)}
        >
          <img
            class="airplane-mode"
            src="https://img.icons8.com/ios-glyphs/30/000000/airplane-mode-on.png"
            alt="airplane mode on"
          />
        </div>
        <p>Flight mode</p>
      </div>
    </div>
    <div class="row">
      <div class="brightness-range">
        <label for="brightness">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
            ><circle cx="12" cy="12" r="5" /><line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
            /><line x1="12" y1="21" x2="12" y2="23" /><line
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
            /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
            /><line x1="21" y1="12" x2="23" y2="12" /><line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
            /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
          >
        </label>
        <input type="range" name="brightness" id="" />
      </div>
      <div class="volume-range">
        <label for="volume"
          ><svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
            ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path
              d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
            /></svg
          ></label
        >
        <input type="range" name="volume" id="" />
      </div>
    </div>
    <div class="row battery-percentage">
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
      <span>100%</span>
    </div>
  </div>
{/if}

<style>
  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .column p {
    margin: 0.5rem 0;
    font-size: 0.75rem;
  }
  .windows-utility-icons {
    display: flex;
    position: relative;
    padding: 0 0.2rem;
    cursor: pointer;
  }
  .windows-utility-icons:hover {
    background: hsla(0, 0%, 100%, 0.1);
  }
  .icon {
    color: #fff;
    margin: auto 0.2rem;
  }
  .menu-buttons {
    position: absolute;
    top: -400px;
    background: rgba(36, 36, 36, 0.8);
    height: 390px;
    width: 360px;
    right: 20px;
    border-radius: 0.4rem;
    padding: 1rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .grid-icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    /* margin-bottom: 1rem; */
  }

  .airplane-mode {
    filter: invert(100%);
    height: 18px;
    width: 18px;
  }

  .volume-range,
  .brightness-range {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;
  }
  .volume-range label,
  .brightness-range label {
    margin-right: 0.5rem;
  }

  .utility-icon {
    background: #ffffff14;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    cursor: pointer;
  }

  .utility-icon.active {
    background: #4cc2ff;
    color: #000;
  }

  .utility-icon.active .airplane-mode {
    filter: none;
  }

  input[type="range"] {
    width: 100%;
  }

  .battery-percentage {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    background: #00000033;
  }
  .battery-percentage svg {
    margin-right: 0.5rem;
  }
</style>
