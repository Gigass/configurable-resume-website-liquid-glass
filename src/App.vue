<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'

const navRef = ref<HTMLElement | null>(null);
const indicatorStyle = ref({
  left: '0px',
  width: '0px',
  opacity: '0'
});
const route = useRoute();

function updateIndicator() {
  if (!navRef.value) return;

  const activeLink = navRef.value.querySelector('a.router-link-exact-active') as HTMLElement;
  if (activeLink) {
    indicatorStyle.value = {
      left: `${activeLink.offsetLeft}px`,
      width: `${activeLink.offsetWidth}px`,
      opacity: '1'
    };
  } else {
    indicatorStyle.value.opacity = '0';
  }
}

// Watch for the nav element to be available
watch(navRef, (el) => {
  if (el) {
    // We need to wait a moment for all styles to apply, especially web fonts
    setTimeout(() => {
        updateIndicator();
    }, 100);
  }
});

// Watch for route changes to move the indicator
watch(() => route.path, () => {
  // Use nextTick to wait for the DOM to update with the new active class
  nextTick(updateIndicator);
});
</script>

<template>
  <div class="header-container">
    <header class="liquidGlass-wrapper">
      <div class="liquidGlass-effect"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="wrapper liquidGlass-text">
        <nav ref="navRef">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/portfolio">Portfolio</RouterLink>
          <RouterLink to="/resume">Resume</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <div class="nav-indicator" :style="indicatorStyle"></div>
        </nav>
      </div>
    </header>
  </div>

  <!-- Global SVG Filter Definition -->
  <svg width="0" height="0" style="position: absolute; top: -100vh;">
    <filter id="glass-distortion-global">
      <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lighting-color="white" result="specLight">
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
      <feDisplacementMap in="SourceGraphic" in2="softMap" scale="120" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <RouterView />
</template>

<style scoped>
.background-video {
  display: none; /* Hide the video */
}

.header-container {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

header {
  line-height: 1.5;
  width: auto;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  /* position, top, left, transform, z-index are now on the parent */
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
  backdrop-filter: blur(5px);
  filter: url(#glass-distortion-global);
  overflow: hidden;
  isolation: isolate;
  /* Force hardware acceleration here to fix stacking context issues */
  will-change: filter, backdrop-filter;
  transform: translateZ(0);
  /* Inherit border-radius to prevent corner artifacts */
  border-radius: inherit;
}

.liquidGlass-tint {
  z-index: 1;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.25);
  /* Inherit border-radius to prevent corner artifacts */
  border-radius: inherit;
}

.liquidGlass-shine {
  z-index: 2;
  position: absolute;
  inset: 0;
  overflow: hidden;
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5),
    inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
  /* Inherit border-radius to prevent corner artifacts */
  border-radius: inherit;
}

.liquidGlass-text {
  z-index: 3;
  color: #1a1a1a;
}

nav {
  position: relative;
  width: 100%;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  z-index: -1;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1); /* Smooth easing */
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

nav a.router-link-exact-active {
  color: #0d1117; /* Darker color for active state */
  font-weight: 900;
  /* font-size change removed for smooth animation */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-left: none; /* Removed separator */
  font-size: 1.15rem;
  font-weight: 700;
  transition: color 0.3s ease;
  color: #1f2937;
  position: relative; /* for z-index to work */
  z-index: 1;
}

nav a:first-of-type {
  border: 0;
}
</style>
