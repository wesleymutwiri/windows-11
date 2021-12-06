<script>
  export let name, headerIcon;
  import { draggable } from "svelte-drag";
</script>

<div class="container" use:draggable>
  <div class="topbar-menu">
    <div class="header-name">
      <img src={headerIcon} alt="" />
      <h6>{name}</h6>
    </div>
    <div class="header-icons">
      <span class="minimize">
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12" /></svg
        >
      </span>
      <span class="maximize">
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
          ><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg
        >
      </span>
      <span class="close">
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
          ><line x1="18" y1="6" x2="6" y2="18" /><line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
          /></svg
        >
      </span>
    </div>
  </div>
  <div class="container-body">
    <slot name="container-body" />
  </div>
</div>

<style>
  .container {
    color: #fff;
    width: 100%;
    height: calc(100vh - 39px);
    background: rgba(28, 28, 40, 0.9);
  }
  .topbar-menu {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }
  .header-icons svg {
    margin: 0 0.2rem;
    cursor: pointer;
  }
  .header-name {
    display: flex;
    align-items: center;
  }
  .header-name img {
    height: 14px;
    width: 14px;
    margin: 0 0.3rem;
    margin-right: 0.6rem;
  }
</style>
