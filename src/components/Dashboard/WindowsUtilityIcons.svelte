<script>
  let utilityIconCalled = true;
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
      <div class="utility-icon">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
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
      <div class="utility-icon">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
          ><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
        </svg>
      </div>
      <div class="utility-icon">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
          ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
        >
        <svg
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
        >
      </div>
      <div class="utility-icon" />
    </div>
  </div>
{/if}

<style>
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
    top: -365px;
    background: rgba(36, 36, 36, 0.8);
    height: 350px;
    width: 380px;
    right: 20px;
    border-radius: 0.4rem;
    padding: 1rem;
    color: #fff;
  }

  .grid-icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
</style>
