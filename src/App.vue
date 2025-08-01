<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
import Background from '@/views/overlay/Background.vue';

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
          <RouterLink to="/project">Project</RouterLink>
          <RouterLink to="/opensource">Open Source</RouterLink>
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

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>

  <div class="global-background">
    <Background />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

/* 
  The core .liquidGlass-* styles are now moved to a global css file.
  Only component-specific styles remain.
*/

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
  /* New vibrant green theme gradient */
  background: linear-gradient(135deg, #66ff99 0%, #00cc99 100%);
  border-radius: 12px;
  z-index: -1;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  /* "Glowing" effect with a matching color shadow */
  box-shadow: 0 0 10px rgba(0, 204, 153, 0.7), 
              inset 0 1px 1px rgba(255, 255, 255, 0.6);
  /* A slightly darker border for definition */
  border: 1px solid rgba(0, 204, 153, 0.8);
}

nav a.router-link-exact-active {
  /* White text for high contrast against the green background */
  color: #ffffff;
  font-weight: 900;
  /* Dark shadow for readability on the bright indicator */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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

.global-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it behind all content */
}
</style>
