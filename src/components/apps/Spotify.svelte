<script>
  import AppContainer from "./AppContainer.svelte";
</script>

<AppContainer name="Spotify" headerIcon="spotify.png">
  <slot slot="container-body">
    <div class="card">Wesley Songs</div>
  </slot>
</AppContainer>

<style>
</style>
