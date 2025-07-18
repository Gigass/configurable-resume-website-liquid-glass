<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home-view">
    <!-- SVG Filter for the glass distortion effect -->
    <svg width="0" height="0">
      <filter id="glass-distortion">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.05 0.05"
          numOctaves="3"
          result="turbulence"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale="10"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>

    <div class="hero-container liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h1 class="hero-title">杨志超</h1>
        <p class="hero-subtitle">资深Java工程师 | 技术平台构建者</p>
        <p class="hero-description">
          致力于将复杂的业务流程自动化、数据化、平台化，为企业数字化转型持续赋能。
        </p>
        <RouterLink to="/portfolio" class="hero-cta">查看我的作品</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-view {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: 60vh;
}

.hero-container {
  text-align: center;
  max-width: 800px;
  border-radius: 2rem;
}

.liquidGlass-wrapper {
  position: relative;
  display: flex;
  font-weight: 600;
  overflow: hidden;
  color: black;
  cursor: pointer;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
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
  padding: 3rem 4rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #333333;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 600px;
  color: #333333;
  margin: 0 auto 2.5rem;
}

.hero-cta {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(88, 166, 255, 0.3);
  filter: brightness(1.1);
}
</style>
