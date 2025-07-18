<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <video
      class="background-video"
      src="/src/assets/bac.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    ></video>
    <svg style="display: none">
      <filter
        id="glass-distortion-global"
        x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
      >
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
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
  pointer-events: none;
  background: #000;
}
header {
  line-height: 1.5;
  width: 100%;
  padding-block: 1.5rem;
  margin-bottom: 2rem;
}

nav {
  width: 100%;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.02em;
}

nav a.router-link-exact-active {
  color: var(--color-heading);
  font-weight: 900;
  font-size: 1.35rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1.2rem;
  border-left: 1px solid var(--color-border);
  font-size: 1.15rem;
  font-weight: 700;
  transition: color 0.2s;
}

nav a:first-of-type {
  border: 0;
}
</style>
