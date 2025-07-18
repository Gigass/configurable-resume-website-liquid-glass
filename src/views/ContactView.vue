<template>
  <div class="contact-view">
    <svg width="0" height="0">
      <filter id="glass-distortion-contact">
        <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="3" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <div class="contact-card liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h2>联系方式</h2>
        <ul class="contact-list">
          <li><strong>电话：</strong>15370145716</li>
          <li><strong>微信：</strong>o1547654938</li>
          <li><strong>邮箱：</strong>1547654938@qq.com</li>
        </ul>
        <div class="contact-social">
          <a href="mailto:1547654938@qq.com" class="liquidGlass-btn">发送邮件</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.contact-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 2rem;
}

.liquidGlass-wrapper {
  position: relative;
  display: flex;
  font-weight: 600;
  overflow: hidden;
  color: black;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
  border-radius: 2rem;
}
.liquidGlass-effect {
  position: absolute;
  z-index: 0;
  inset: 0;
  backdrop-filter: blur(3px);
  filter: url(#glass-distortion-global);
  overflow: hidden;
  isolation: isolate;
}
.liquidGlass-tint {
  z-index: 1;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.25);
}
.liquidGlass-shine {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5),
    inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
}
.liquidGlass-text {
  z-index: 3;
  color: #1a1a1a;
  padding: 2rem;
  width: 100%;
  text-align: center;
}
.liquidGlass-text h2 {
  font-size: 1.5rem;
  color: #005cbf;
  margin-bottom: 1.2rem;
  font-weight: 700;
}
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}
.contact-list li {
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  line-height: 1.7;
}
.contact-social {
  margin-top: 1rem;
}
.contact-btn {
  display: inline-block;
  background: #005cbf;
  color: #fff;
  border: none;
  border-radius: 1.5rem;
  padding: 0.7rem 2rem;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
}
.contact-btn:hover {
  background: #0070e0;
}
</style> 