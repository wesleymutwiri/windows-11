<script>
  import Calendar from "./Dashboard/Calendar.svelte";

  import MenuBar from "./Dashboard/MenuBar.svelte";
</script>

<div class="container">
  <div class="column">
    <div class="icon">
      <img src="desktop-icon.png" alt="" />
      <p>Desktop</p>
    </div>
    <div class="icon">
      <img src="file-icon.png" alt="" />
      <p>Files</p>
    </div>
    <div class="icon">
      <img src="spotify.png" alt="" />
      <p>Spotify</p>
    </div>
    <div class="icon">
      <img src="windows-store.png" alt="" />
      <p>Store</p>
    </div>
  </div>
  <!-- <Calendar /> -->
  <MenuBar />
</div>

<style>
  .container {
    height: 100vh;
    background: url("desktop-background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    width: 100vw;
  }
  .column {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: min-content;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    height: max-content;
    margin: 1rem;
    text-align: center;
    cursor: pointer;
  }

  .icon img {
    height: 40px;
    width: 40px;
  }
  p {
    color: #fff;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
</style>
