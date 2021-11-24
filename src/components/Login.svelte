<div class="login-page">
  <div class="avatar">
    <img src="windows-logo.png" alt="" />
  </div>
  <h1 class="no-break">Wesley Mutwiri</h1>
  <div class="form-field">
    <input type="password" name="" id="" placeholder="Password" />
    <svg
      on:click
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="#cfcfcf"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="css-i6dzq1"
      ><line x1="5" y1="12" x2="19" y2="12" /><polyline
        points="12 5 19 12 12 19"
      /></svg
    >
  </div>
  <a href="#/password">I forgot my Password</a>
  <p>Sign-in options</p>
  <div class="options">
    <button href="#" class="option-buttons">
      <img src="pinlock.png" alt="" />
    </button>
    <button href="#" class="option-buttons">
      <img src="passkey.png" alt="" />
    </button>
  </div>
</div>

<style>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("background-banner.jpg");
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }
  .avatar {
    /* border-radius: 50%; */
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  .no-break {
    color: #fff;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  .avatar img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;
  }

  .option-buttons {
    border: none;
    outline: none;
    background: none;
  }
  .option-buttons img {
    /* background: #494949; */
    /* padding: 0.5rem; */
    /* border: none; */
    height: 38px;
    width: 38px;
  }
  p,
  a {
    color: #fff;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    margin: 1.5rem 0;
  }
  p {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  .form-field {
    position: relative;
  }

  .form-field svg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 8px;
    z-index: 1;
    transform: translateY(50%);
  }

  .form-field svg:hover {
    cursor: pointer;
  }
</style>
