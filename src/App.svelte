<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
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
      transition:fade
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
    <div class="login-animation">
      <div class="avatar">
        <img src="windows-logo.png" alt="" />
        <h1 class="no-break">Wesley Mutwiri</h1>
      </div>
      <div class="form-field">
        <input type="password" name="" id="" placeholder="Password">
      </div>
      <a href="#">I forgot my Password</a>
      <p>Sign-in options</p>
      <button href="#">
        <svg
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 285.002 285.002"
          width="40"
          height="40"
          fill="none"
          stroke="black"
          stroke-width="20"
        >
          <path
            d="M279.806,235.505c-0.136-1.772-0.928-3.476-2.227-4.747L165.336,118.515c4.416-10.403,6.747-21.669,6.747-33.312
		c0-22.754-8.875-44.163-24.938-60.266C131.059,8.866,109.665,0,86.898,0C64.12,0,42.763,8.869,26.651,24.95
		c-33.243,33.225-33.25,87.266-0.005,120.488c16.111,16.115,37.475,24.99,60.241,24.99c11.646,0,22.884-2.35,33.312-6.772
		l36.874,36.902c1.534,1.515,3.557,2.319,5.74,2.248l20.095-0.705l-0.656,20.145c-0.062,2.125,0.705,4.193,2.245,5.706
		c1.484,1.512,3.569,2.334,5.685,2.248l20.169-0.689l-0.724,20.123c-0.063,2.127,0.754,4.199,2.238,5.712
		c1.534,1.512,3.321,2.325,5.74,2.251l20.119-0.684l-0.674,20.126c-0.118,2.232,0.822,4.379,2.418,5.903
		c1.472,1.339,3.309,2.06,5.245,2.06c0.278,0,0.563-0.012,0.847-0.037l30.851-3.426c4.169-0.455,7.205-4.175,6.847-8.353
		L279.806,235.505z M76.607,74.915c-9.476,9.466-24.796,9.466-34.252,0c-9.47-9.469-9.47-24.786,0-34.246
		c9.456-9.46,24.771-9.469,34.252-0.003C86.064,50.125,86.058,65.452,76.607,74.915z M253.471,238.075
		c-1.126,1.126-2.635,1.688-4.101,1.688s-2.976-0.563-4.101-1.688l-95.501-95.529c2.659-2.867,5.077-5.885,7.273-9.058l96.429,96.41
		C255.722,232.15,255.722,235.824,253.471,238.075z"
          />
        </svg>
      </button>
      <button href="#">
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 561 561"
          style="enable-background:new 0 0 561 561;"
          xml:space="preserve"
        >
          <path
            d="M280.5,459c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S308.55,459,280.5,459z M127.5,0
			c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S155.55,0,127.5,0z M127.5,153c-28.05,0-51,22.95-51,51s22.95,51,51,51
			s51-22.95,51-51S155.55,153,127.5,153z M127.5,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S155.55,306,127.5,306z
			 M433.5,102c28.05,0,51-22.95,51-51s-22.95-51-51-51s-51,22.95-51,51S405.45,102,433.5,102z M280.5,306c-28.05,0-51,22.95-51,51
			s22.95,51,51,51s51-22.95,51-51S308.55,306,280.5,306z M433.5,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
			S461.55,306,433.5,306z M433.5,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S461.55,153,433.5,153z M280.5,153
			c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S308.55,153,280.5,153z M280.5,0c-28.05,0-51,22.95-51,51s22.95,51,51,51
			s51-22.95,51-51S308.55,0,280.5,0z"
          />
        </svg>
      </button>
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
    align-items: center;
    justify-content: center;
  }
  .avatar {
    /* border-radius: 50%; */
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 100px;
  }
  .avatar img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .time-container {
    padding-top: 200px;
    text-align: center;
  }
  .time-container h1 {
    font-size: 5rem;
  }
  .time-container p {
    font-size: 1.5rem;
  }
  .login-animation {
    background: blue;
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
