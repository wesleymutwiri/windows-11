<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let login_type = "Password"
  let time = new Date();
  let date = time.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  $: hours = time.getHours();
  $: minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  // $: seconds = time.getSeconds();
  let ready = false;
  let loginpage = true;
  onMount(() => {
    setInterval(() => {
      ready = true;
    }, 1000);

    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

{#if !ready}
  <div class="loading-container">
    <img src="windows-logo.png" alt="" in:fade={{ duration: 400 }} />
    <div class="loader" transition:fade>
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
    </div>
  </div>
{/if}

{#if ready}
  {#if loginpage}
    <div
      class="App login-animation"
      on:click={() => (loginpage = false)}
    >
      <div class="time-container">
        <h1>
          {#if hours > 12}
            {hours - 12}:{minutes} PM
          {:else}
            {hours}:{minutes} AM
          {/if}
        </h1>
        <p>
          {date}
        </p>
      </div>
    </div>
  {:else}
    <div class="login-page login-animation">
      <div class="avatar">
        <img src="windows-logo.png" alt="" />
        <p class="no-break">
        Wesley Mutwiri
        </p>
      </div>
      <div class="input-form">
        <input type="password" name="password" id="" placeholder="{login_type}">
      </div>
      <a href="#">
        I forgot my {login_type}
      </a>
      <p>
        Sign-in options   
      </p>
    </div>
  {/if}
  <!-- {#if !loginpage}
    login here
  {/if} -->
{/if}

<style>
  .no-break {
    word-break: keep-all;
    white-space: nowrap;
  }
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .avatar {
    /* border-radius: 50%; */
    width: 100px;
    height: 100px;
    margin: 20px auto;
  }
  .avatar img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .time-container {
    padding-top: 150px;
    text-align: center;
  }
  .time-container h1 {
    font-size: 4rem;
  }
  .time-container p {
    font-size: 1.2rem;
  }
  .login-animation {
    background: url("background-banner.jpg");
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 100vh;
  }
  .loading-container {
    background: black;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .loading-container img {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }
  .loader {
    position: relative;
    /* padding-top: 100px; */
    width: 40px;
    margin: 200px auto;
  }
  .loader .circle {
    position: absolute;
    width: 38px;
    height: 38px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5.5s;
  }
  .loader .circle:after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background: #fff;
    /* Pick a color */
  }
  .loader .circle:nth-child(2) {
    animation-delay: 240ms;
  }
  .loader .circle:nth-child(3) {
    animation-delay: 480ms;
  }
  .loader .circle:nth-child(4) {
    animation-delay: 720ms;
  }
  .loader .circle:nth-child(5) {
    animation-delay: 960ms;
  }
  @keyframes orbit {
    0% {
      transform: rotate(225deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    7% {
      transform: rotate(345deg);
      animation-timing-function: linear;
    }
    30% {
      transform: rotate(455deg);
      animation-timing-function: ease-in-out;
    }
    39% {
      transform: rotate(690deg);
      animation-timing-function: linear;
    }
    70% {
      transform: rotate(815deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    75% {
      transform: rotate(945deg);
      animation-timing-function: ease-out;
    }
    76% {
      transform: rotate(945deg);
      opacity: 0;
    }
    100% {
      transform: rotate(945deg);
      opacity: 0;
    }
  }
</style>
