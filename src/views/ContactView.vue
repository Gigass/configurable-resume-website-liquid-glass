<script setup lang="ts">
import Background from './overlay/Background.vue'
</script>

<template>
  <div class="contact-view">
    <Background />
    <svg width="0" height="0">
      <filter id="glass-distortion-contact">
        <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="3" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
    <div class="contact-card-wrapper">
      <div class="contact-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-contact)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h2>GET IN TOUCH</h2>
          <ul class="contact-list">
            <li><strong>Phone:</strong><a href="tel:15370145716">15370145716</a></li>
            <li><strong>WeChat:</strong><span>o1547654938</span></li>
            <li><strong>Email:</strong><a href="mailto:1547654938@qq.com">1547654938@qq.com</a></li>
          </ul>
          <div class="contact-social">
            <a href="mailto:1547654938@qq.com" class="contact-btn">Send Email</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
  position: relative;
  width: 100%;
  height: 100vh; /* 确保视图占满整个视口高度 */
  overflow: hidden; /* 防止背景溢出 */
}

.contact-card-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2; /* 确保卡片在背景之上 */
  padding: 1rem;
}

/* Liquid Glass Styles */
.liquidGlass-wrapper {
  position: relative;
  display: flex;
  font-weight: 600;
  overflow: hidden;
  color: black;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.5);
  border-radius: 2rem;
}

.liquidGlass-effect {
  position: absolute;
  z-index: 0;
  inset: 0;
  backdrop-filter: blur(4px);
  filter: url(#glass-distortion-contact);
  overflow: hidden;
  isolation: isolate;
}

.liquidGlass-tint {
  z-index: 1;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
}

.liquidGlass-shine {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
}

.liquidGlass-text {
  z-index: 3;
  color: #1a1a1a;
  padding: 2.5rem;
  width: 100%;
  text-align: center;
}

.contact-card {
  max-width: 550px;
  width: 100%;
}

.contact-card h2 {
  font-size: 2.5rem; /* 增大标题字号 */
  font-weight: 800;  /* 加粗 */
  margin-bottom: 2rem; /* 增加与下方内容的间距 */
  color: #003d7a; /* 深蓝色，更具专业感 */
  letter-spacing: 0.1em; /* 增加字母间距 */
  text-transform: uppercase; /* 标题大写 */
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left; /* 列表内容左对齐 */
}

.contact-list li {
  font-size: 1.2rem; /* 增大列表项字号 */
  margin-bottom: 1.2rem; /* 增加列表项间距 */
  line-height: 1.6;
  display: flex;
  justify-content: space-between; /* 标签和内容分开 */
  align-items: center;
  color: #333;
}

.contact-list li strong {
  font-weight: 600; /* 标签加粗 */
  color: #005cbf;
  margin-right: 1rem;
}

.contact-list a, .contact-list span {
  font-family: 'Courier New', Courier, monospace; /* 使用等宽字体以获得技术感 */
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.3s;
}
.contact-list a:hover {
  color: #0070e0;
}

.contact-social {
  margin-top: 2rem;
}

.contact-btn {
  display: inline-block;
  background: #005cbf;
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 1rem 3rem; /* 增大按钮内边距 */
  font-size: 1.2rem; /* 增大按钮字号 */
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 8px 20px rgba(0, 92, 191, 0.3); /* 添加更明显的阴影 */
  text-transform: uppercase;
}

.contact-btn:hover {
  background: #0070e0;
  transform: translateY(-3px) scale(1.05); /* 悬停时效果更明显 */
}
</style> 