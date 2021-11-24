<script>
  import MenuBar from "./Dashboard/MenuBar.svelte";
</script>

<div class="container">
  <div class="column">
    <div class="icon">
      <img src="desktop-icon.png" alt="" />
      <p>Desktop</p>
    </div>
    <div class="icon">
      <img src="desktop-icon.png" alt="" />
      <p>Desktop</p>
    </div>
    <div class="icon">
      <img src="desktop-icon.png" alt="" />
      <p>Desktop</p>
    </div>
    <div class="icon">
      <img src="desktop-icon.png" alt="" />
      <p>Desktop</p>
    </div>
  </div>
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    height: max-content;
  }

  .icon:hover {
  }

  p {
    color: #fff;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
</style>
