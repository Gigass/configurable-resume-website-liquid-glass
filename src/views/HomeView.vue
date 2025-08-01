<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted, computed } from 'vue';

// 重新引入 Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// 导入背景图片
import lb1 from '@/assets/lb/lb1.png';
import lb2 from '@/assets/lb/lb2.png';
import lb3 from '@/assets/lb/lb3.png';
import lb4 from '@/assets/lb/lb4.png';
import lb5 from '@/assets/lb/lb5.png';
import lb6 from '@/assets/lb/lb6.png';
import lb7 from '@/assets/lb/lb7.png';
import lb8 from '@/assets/lb/lb8.png';

import { useSiteData } from '@/stores/sitedata';

interface Advantage {
  icon: string;
  title: string;
  summary: string;
  details: string[];
}

const { siteData } = useSiteData();

const homeData = computed(() => siteData.value?.home);

// 将优势和图片数据结合
const slidesData = computed(() => {
  if (!homeData.value?.advantages) {
    return [];
  }
  return homeData.value.advantages.map((advantage, index) => {
    const images = [lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8];
    return {
      ...advantage,
      image: images[index % images.length], // 循环使用图片
    };
  });
});

const expandedCard = ref<number | null>(null);
const activeIndex = ref(0);
const swiperRef = ref<any>(null);
const introductionStarted = ref(false);

// 移除 toggleCard 相关逻辑
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
  swiper.autoplay.stop(); // 初始时停止自动播放
};
const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
  if (introductionStarted.value) {
    expandedCard.value = swiper.realIndex;
  }
};

const currentSlideData = computed(() => {
  if (slidesData.value.length > 0) {
    return slidesData.value[activeIndex.value];
  }
  return null;
});

const startIntroduction = () => {
  introductionStarted.value = true;
  if (swiperRef.value) {
    swiperRef.value.autoplay.start();
    // 立即展开第一个卡片
    setTimeout(() => {
      if(swiperRef.value) {
         expandedCard.value = swiperRef.value.realIndex;
      }
    }, 100); 
  }
};

const resetIntroduction = () => {
  introductionStarted.value = false;
  expandedCard.value = null; // 隐藏所有卡片
  if (swiperRef.value) {
    swiperRef.value.autoplay.stop();
    swiperRef.value.slideToLoop(0, 0); // 回到第一个slide，无动画
  }
};

// 移除全屏相关逻辑
let scrollTimeout: number | null = null;

// 移除滚轮事件处理
onMounted(() => {
  // 移除wheel事件监听
});

onUnmounted(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
});
</script>

<template>
  <main class="home-view">
    <!-- SVG filter definition is now moved to App.vue -->

    <div class="main-content-area">
      <transition name="hero-fade">
        <div v-if="!introductionStarted && homeData" class="hero-overlay">
          <div class="hero-container liquidGlass-wrapper">
            <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
            <div class="liquidGlass-tint"></div>
            <div class="liquidGlass-shine"></div>
            <div class="liquidGlass-text">
              <h1 class="hero-title">{{ homeData.hero.title }}</h1>
              <p class="hero-subtitle">{{ homeData.hero.subtitle }}</p>
              <p class="hero-description">
                {{ homeData.hero.description }}
              </p>
            </div>
          </div>
          <div class="intro-btn-container">
            <button @click="startIntroduction" class="intro-btn">
              <img src="@/assets/play-icon.png" alt="Start Introduction" class="play-icon">
            </button>
          </div>
        </div>
      </transition>

      <!-- 返回按钮 -->
      <transition name="fade" enter-active-class="fade-enter-active reset-btn-transition" leave-active-class="fade-leave-active reset-btn-transition" enter-from-class="fade-enter-from reset-btn-transition" leave-to-class="fade-leave-to reset-btn-transition">
        <button v-if="introductionStarted" @click="resetIntroduction" class="reset-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm4.59-12.41L12 10.17l-4.59-4.58L6 7.17l4.59 4.59L6 16.34l1.41 1.41L12 13.59l4.59 4.58L17.91 18l-4.59-4.59 4.59-4.59-1.32-1.4z"/>
          </svg>
        </button>
      </transition>

      <!-- 卡片式轮播图 -->
      <div class="carousel-container" :class="{ 'is-active': introductionStarted }">
        <swiper
          :modules="[Navigation, Autoplay, EffectFade]"
          :slides-per-view="1"
          :space-between="0"
          loop
          effect="fade"
          :fade-effect="{ crossFade: true }"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :navigation="true"
          class="card-swiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(slide, index) in slidesData" :key="index">
            <div class="slide-card" :style="{ backgroundImage: `url(${slide.image})` }">
              <!-- text-card is now outside -->
            </div>
          </swiper-slide>
        </swiper>

        <!-- Advantage card is now a sibling to the swiper -->
        <div 
          v-if="currentSlideData"
          class="text-card liquidGlass-wrapper" 
          :class="{ 'expanded': introductionStarted }"
          >
          <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
          <div class="liquidGlass-tint"></div>
          <div class="liquidGlass-shine"></div>
          <div class="liquidGlass-text adv-typography">
            <div class="adv-title">{{ currentSlideData.title }}</div>
            <div class="adv-divider"></div>
            <p class="adv-summary">{{ currentSlideData.summary }}</p>
            <ul class="adv-details">
              <li v-for="(detail, i) in currentSlideData.details" :key="i">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
  /* background-image: url('../assets/bac.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: pan-wallpaper 80s linear infinite alternate; */
}

/* @keyframes pan-wallpaper {
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: 100%;
  }
} */

.main-content-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 90vw;
  max-width: 1500px; /* 进一步放大 */
  aspect-ratio: 16/9;
  max-height: 90vh;
}

.reset-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 30; /* 确保在最上层 */
  width: 44px;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.reset-btn:hover {
  background-color: rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
}

.reset-btn svg {
  width: 24px;
  height: 24px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.hero-overlay {
  position: relative; /* Changed from absolute to relative */
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: column; /* Stack hero-container and button vertically */
  justify-content: center;
  align-items: center;
  gap: 0; /* Adjust gap */
  padding: 1rem;
  /* background: radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%); */
  
  /* Upgraded to a "Circular Reveal" (Iris Wipe) animation */
  clip-path: circle(150% at center); /* Start fully visible */
  /* Faster duration and a more responsive "ease-out" curve */
  transition: clip-path 0.7s cubic-bezier(0.5, 0, 0.2, 1);
}

/* 1. Hero Text Entrance Animation */
.hero-container .hero-title,
.hero-container .hero-subtitle,
.hero-container .hero-description {
  animation: fadeInUp 0.8s 0.2s both cubic-bezier(0.25, 1, 0.5, 1);
}
.hero-container .hero-subtitle { animation-delay: 0.4s; }
.hero-container .hero-description { animation-delay: 0.6s; }


.hero-fade-enter-from .hero-title,
.hero-fade-enter-from .hero-subtitle,
.hero-fade-enter-from .hero-description {
  animation: none; /* Disable entrance animation when returning */
}

/* Entering (when returning to home) */
.hero-fade-enter-from {
  clip-path: circle(0% at center);
}

/* Leaving (when starting introduction) */
.hero-fade-leave-to {
  clip-path: circle(0% at center);
}

.intro-btn-container {
  flex-shrink: 0; /* Prevent button container from shrinking */
}

.intro-btn {
  /* 只显示图片，去掉按钮边框和背景 */
  padding: 0;
  width: 120px; /* smaller button */
  height: 67.5px; /* maintain 16:9 */
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1), bounce-hint 2.5s 1s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

.intro-btn:hover {
  transform: scale(1.1); /* 只保留放大效果 */
  animation-play-state: paused; /* 悬停时暂停动画 */
}

.play-icon {
  width: 100%; /* 图片填满整个按钮区域 */
  height: 100%;
  object-fit: contain; /* 确保图片保持比例 */
  transition: transform 0.3s ease;
}

.intro-btn:hover .play-icon {
  transform: scale(1.1);
}
/* 3. Button Shine Effect - 只保留reset-btn的光泽效果 */
.reset-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}
.reset-btn:hover::after {
  left: 150%;
}

.hero-container {
  text-align: left; /* From center to left for a more structured look */
  max-width: 800px;
  border-radius: 2rem;
  font-size: 1.18rem;
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 10;
}

.carousel-container {
  width: 100%;
  height: 100%;
  position: relative; /* Ensure it's a positioning context for the text-card */
  opacity: 0;
  transform: translateY(30px) scale(0.98); /* Start slightly down and smaller for a more subtle effect */
  pointer-events: none;
  /* A smoother, more cinematic easing curve with longer duration */
  transition: opacity 1.4s cubic-bezier(0.86, 0, 0.07, 1), transform 1.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.carousel-container.is-active {
  opacity: 1;
  transform: translateY(0) scale(1); /* End at normal position and size */
  pointer-events: auto;
}

.card-swiper {
  width: 100%;
  /* 
    The container `.main-content-area` already defines the aspect ratio.
    The swiper should just fill its parent container.
    Removing redundant aspect-ratio and setting height to 100% fixes the mismatch.
  */
  height: 100%;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  --swiper-navigation-color: #fff;
  --swiper-navigation-size: 30px;
}

.slide-card {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
}

/* 4. Ken Burns Effect for Active Slide */
:deep(.swiper-slide-active) .slide-card {
  animation: kenBurns 10s ease-in-out infinite alternate; /* Speed up from 15s to 10s */
}

/* 5. Pulsing Swiper Navigation Arrows */
:deep(.swiper-button-prev), :deep(.swiper-button-next) {
    animation: pulse 2.5s 1s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

.text-card.liquidGlass-wrapper {
  /* Re-add absolute positioning to overlay it on the swiper */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  height: auto;
  min-height: 33%;
  max-height: 45%;
  border-radius: 0 0 2rem 2rem;
  cursor: pointer;
  /* 动画策略变更为裁剪路径(clip-path)，强制实时渲染模糊效果 */
  transition: clip-path 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), transform 0.4s ease;
  transform-style: preserve-3d;
  display: flex;
  font-weight: 600;
  overflow: hidden;
  color: #222;
  box-shadow: 0 6px 24px 0 rgba(30,40,60,0.10), 0 0 20px rgba(0,0,0,0.08);
  z-index: 10;
  /* 初始状态：卡片在原位，但被完全裁剪，不可见 */
  clip-path: inset(100% 0 0 0);
  pointer-events: none;
  /* Removed hardware acceleration from the wrapper */
}
.text-card.expanded {
  /* 最终状态：裁剪区域完全打开，卡片完整可见 */
  clip-path: inset(0% 0 0 0);
  pointer-events: auto;
}
/* 8. 3D Tilt on Hover for Advantage Card */
.text-card.expanded:hover {
    transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(15px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.15);
}

.liquidGlass-text.adv-typography {
  z-index: 3;
  padding: 2rem 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  animation: advFadeIn 0.7s cubic-bezier(0.4,0.2,0.2,1);
  overflow-y: auto; /* 内容溢出时可滚动 */
}
.adv-title {
  font-family: 'Avenir Next', 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.2;
  margin-bottom: 0.8rem;
  /* 恢复为深色高级感渐变文字 */
  color: #2a3a4d;
  background: linear-gradient(90deg,#6a8bbd 0%,#3b5998 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: all 0.3s;
  text-shadow: none; /* 移除阴影 */
}
.adv-divider {
  width: 48px;
  height: 3px;
  border-radius: 2px;
  /* 恢复为深色协调的渐变 */
  background: linear-gradient(90deg,#b0c4de 0%,#6a8bbd 100%);
  margin-bottom: 1rem;
  opacity: 0.7;
  transform-origin: left;
  transition: transform 0.8s 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform: scaleX(0);
}
.text-card.expanded .adv-divider {
  transform: scaleX(1);
}
.adv-summary {
  font-size: 1.1rem;
  font-weight: 500;
  /* 恢复为深灰色 */
  color: #3a4a5d;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  opacity: 0.95;
  transition: all 0.3s;
  text-shadow: none; /* 移除阴影 */
}
.adv-details {
  list-style: none;
  padding-left: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  /* 恢复为较浅的深灰色 */
  color: #4a5a6d;
  line-height: 1.8;
  width: 100%;
  text-shadow: none; /* 移除阴影 */
}
.adv-details li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.6rem;
  /* 7. Staggered Fade-in for Advantage Details */
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.text-card.expanded .adv-details li {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays */
.text-card.expanded .adv-details li:nth-child(1) { transition-delay: 0.6s; }
.text-card.expanded .adv-details li:nth-child(2) { transition-delay: 0.7s; }
.text-card.expanded .adv-details li:nth-child(3) { transition-delay: 0.8s; }
.text-card.expanded .adv-details li:nth-child(4) { transition-delay: 0.9s; }

.adv-details li::before {
  content: '▪';
  position: absolute;
  left: 0;
  top: 2px;
  /* 恢复为深色协调的强调色 */
  color: #6a8bbd;
  font-size: 1.2rem;
  line-height: 1;
}

.text-card.expanded .adv-title,
.text-card.expanded .adv-summary,
.text-card.expanded .adv-details {
  animation: advTextFadeIn 0.7s cubic-bezier(0.4,0.2,0.2,1);
}
.text-card.expanded:hover .adv-title {
  /* 悬停时增强渐变效果，或保持不变 */
  filter: brightness(1.1);
  text-shadow: none;
}
.text-card.expanded:hover .adv-summary {
  color: #2a3a4d;
}
@keyframes advFadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes advTextFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 768px) {
  .liquidGlass-text.adv-typography {
    padding: 1.2rem 1rem 1rem 1rem;
  }
  .adv-title {
    font-size: 1.3rem;
  }
  .adv-divider {
    width: 28px;
    height: 2px;
    margin-bottom: 0.7rem;
  }
  .adv-summary {
    font-size: 0.95rem;
  }
  .adv-details {
    font-size: 0.9rem;
    line-height: 1.7;
  }
  .adv-details li {
    padding-left: 1.2rem;
    margin-bottom: 0.4rem;
  }
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
  padding: 3.5rem; /* Increased padding for more whitespace */
  width: 100%;
}

.hero-title {
  font-family: 'Avenir Next', 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 4rem; /* Slightly adjusted for balance */
  font-weight: 700;
  line-height: 1.2;
  color: #1a2330; /* A sophisticated dark blue-gray */
  margin-bottom: 1.5rem; /* Increased spacing */
  letter-spacing: -0.02em; /* Tighter letter spacing for large titles */
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.5rem; /* Adjusted for hierarchy */
  font-weight: 500; /* Medium weight for distinction */
  line-height: 1.4;
  color: #4a5a6d; /* Softer, elegant gray */
  margin-bottom: 2rem; /* Increased spacing */
  letter-spacing: 0.01em;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 100%;
  color: #3a4a5d;
  margin: 0; /* Removed auto margin for left alignment */
  line-height: 1.8; /* Improved for readability */
}

.card-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
}

.adv-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.expand-btn {
  font-size: 1.5rem;
  font-weight: bold;
  color: #005cbf;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.expand-btn:hover {
  background: rgba(0, 92, 191, 0.3);
  transform: scale(1.1);
}

.card-content {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.adv-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #1a1a1a;
}

.adv-text b {
  color: #005cbf;
  font-weight: 700;
  background: linear-gradient(90deg, #00c6fb 0%, #005cbf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* 导航按钮样式 */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #fff;
  transition: all 0.3s ease;
}

:deep(.swiper-button-prev):hover,
:deep(.swiper-button-next):hover {
  background-color: rgba(0, 92, 191, 0.8);
  transform: scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .carousel-container {
    max-width: 95%;
  }
  
  .text-card {
    width: 60%;
    right: 1rem;
  }
  
  .text-card.expanded {
    min-height: 250px;
  }
  
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .liquidGlass-text {
    padding: 1.5rem;
  }
}

/* Keyframes for new animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes bounce-hint {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes kenBurns {
  from {
    transform: scale(1) translate(0, 0);
  }
  to {
    transform: scale(1.1) translate(-2%, 2%);
  }
}

.text-card .liquidGlass-effect {
  /* Inherit border-radius from parent to prevent corner artifacts */
  border-radius: inherit;
  /* Force hardware acceleration on the effect layer itself */
  will-change: filter, backdrop-filter;
  transform: translateZ(0);
}
</style>
