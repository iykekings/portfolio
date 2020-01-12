<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    height: 100%;
    min-height: 450px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 3rem;
    .bg {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(252, 252, 252, 0.9) 20%,
        rgba(255, 255, 255, 0.54) 50%,
        rgba(252, 252, 252, 0.85) 80%
      );
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    .rect {
      position: absolute;
      border: 1px gray solid;
      transform: rotate(45deg);
      margin: 0 auto;
    }
    .r1 {
      width: 70vw;
      height: 70vw;
      @media (max-width: 600px) {
        width: 60vh;
        height: 60vh;
      }
    }
    .r2 {
      width: 55vw;
      height: 55vw;
      @media (max-width: 600px) {
        width: 45vh;
        height: 45vh;
      }
    }
    .r3 {
      width: 40vw;
      height: 40vw;
      @media (max-width: 600px) {
        width: 30vh;
        height: 30vh;
      }
    }
    .wrapper {
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>

<div class="container">
  <div class="bg" />
  <div class="rect r1" />
  <div class="rect r2" />
  <div class="rect r3" />
  <div class="wrapper">
    <slot />
  </div>
</div>
