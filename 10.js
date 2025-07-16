// 1.js 文件内容
document.write(`
<div class="wiiuii_layout">
  <svg class="editorial" viewBox="0 24 150 28" preserveAspectRatio="none">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
    </defs>
    <g class="parallax">
      <use xlink:href="#gentle-wave" x="50" y="0" fill="#ffffff"/>
      <use xlink:href="#gentle-wave" x="50" y="3" fill="#e1f3ff"/>
      <use xlink:href="#gentle-wave" x="50" y="6" fill="#b8e2ff"/>
      <use xlink:href="#gentle-wave" x="50" y="9" fill="#8ac8ff"/>
    </g>
  </svg>
</div>
<style>
  .parallax > use {
    animation: move-forever 12s linear infinite;
  }
  .parallax > use:nth-child(1) { animation-delay: -2s; }
  .parallax > use:nth-child(2) { animation-delay: -2s; animation-duration: 5s; }
  .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 3s; }
  .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 7s; }
  @keyframes move-forever {
    0% { transform: translate(-90px, 0%); }
    100% { transform: translate(85px, 0%); }
  }
  .wiiuii_layout {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    background: transparent;
  }
  .editorial {
    display: block;
    width: 100%;
    height: 60px;
    margin: 0;
  }
</style>
`);
