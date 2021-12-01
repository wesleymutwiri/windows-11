<script>
  import { fly } from "svelte/transition";
  let openTaskbar = true;
  let powerOff = true;
</script>

<span class="taskbar" on:click={() => (openTaskbar = !openTaskbar)}>
  <img src="open-tasks-button.png" alt="" />
</span>
{#if openTaskbar}
  <div class="taskbar-menu-items" transition:fly>
    <div class="row">
      <h5>Pinned</h5>
      <button class="iconed">
        All apps
        <svg
          viewBox="0 0 24 24"
          width="8"
          height="8"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"><polyline points="9 18 15 12 9 6" /></svg
        >
      </button>
    </div>
    <div class="grid-party">
      <div class="icon">
        <img src="spotify.png" alt="" />
        <p>Spotify</p>
      </div>
      <div class="icon">
        <img src="settings.png" alt="" />
        <p>settings</p>
      </div>
      <div class="icon">
        <img src="file-icon.png" alt="" />
        <p>Files</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
    </div>
    <h5>Recommended</h5>
    <div class="grid-recommended">
      <div class="icon-recommend">
        <img src="spotify.png" alt="" />
        <p>Spotify</p>
      </div>
      <div class="icon-recommend">
        <img src="file-icon.png" alt="" />
        <p>Files</p>
      </div>
      <div class="icon-recommend">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon-recommend">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon-recommend">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
      <div class="icon-recommend">
        <img src="windows-store.png" alt="" />
        <p>Desktop</p>
      </div>
    </div>
    <div class="taskbar-footer">
      <div class="avatar">
        <img src="windows-logo.png" alt="" />
        Wesley M
      </div>
      <div class="power-off">
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
          on:click={() => (powerOff = !powerOff)}
          ><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line
            x1="12"
            y1="2"
            x2="12"
            y2="12"
          /></svg
        >
        {#if powerOff}
          <div class="shutdown-options">
            <p class="shutdown-icons">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
                ><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="12"
                /></svg
              >
              Shutdown
            </p>
            <p class="shutdown-icons">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
                ><polyline points="1 4 1 10 7 10" /><path
                  d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                /></svg
              >
              Restart
            </p>
            <p class="shutdown-icons">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
                ><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path
                  d="M7 11V7a5 5 0 0 1 10 0v4"
                /></svg
              >
              Lock
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  img {
    height: 33px;
    width: 33px;
    padding: 5.5px;
  }
  .taskbar {
    position: relative;
    cursor: pointer;
  }
  .taskbar-menu-items {
    position: absolute;
    bottom: 50px;
    z-index: 1;
    background: rgba(36, 36, 36, 0.8);
    height: 534px;
    width: 520px;
    left: -100px;
    border-radius: 0.5rem;
    margin: auto;
    padding: 2.5rem 3rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .iconed {
    display: flex;
    align-items: center;
    justify-content: center;
    height: max-content;
    width: max-content;
    background: rgba(98, 98, 138, 0.7);
    border: none;
    outline: none;
    color: #fff;
    padding: 0 8px 2px;
    border-radius: 0.4rem;
    font-size: 0.64rem;
  }
  .iconed svg {
    margin-left: 0.2rem;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .grid-party {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: 1rem 0 2rem;
    gap: 0.5rem 1.8rem;
  }
  .icon {
    text-align: center;
    cursor: pointer;
  }
  .icon img,
  .icon-recommend img {
    height: 36px;
    width: 36px;
  }
  .icon p {
    font-size: 0.7rem;
  }
  .grid-recommended {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5rem 1rem;
    margin: 1rem 0;
  }
  .icon-recommend {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
  }
  .icon-recommend img {
    margin-right: 0.5rem;
  }
  .taskbar-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: max-content;
    background: rgba(28, 28, 40, 0.3);
    width: calc(100% + 6rem);
    margin: auto;
    margin-top: 2rem;
    margin-left: -3rem;
    padding: 0.5rem 3rem;
    border-radius: 0.4rem;
    font-size: 0.64rem;
  }
  .avatar {
    display: flex;
    align-items: center;
  }
  .avatar img {
    border-radius: 50%;
  }
  h5 {
    font-size: 0.75rem;
    margin-left: 0.5rem;
  }
  .icon-recommend p {
    font-weight: bold;
  }

  .power-off {
    position: relative;
    cursor: pointer;
  }
  .shutdown-options {
    position: absolute;
    top: -130px;
    background: rgba(98, 98, 138, 0.5);
    padding: 0.5rem 1rem;
    left: 0;
    margin-left: -40px;
    border-radius: 0.2rem;
  }
  .shutdown-icons {
    display: flex;
    align-items: center;
    margin: 0.8rem 0;
  }
  .shutdown-icons svg {
    margin-right: 0.3rem;
  }
</style>
