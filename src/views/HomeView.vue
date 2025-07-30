<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

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

const advantages = [
  {
    icon: '👨‍💻',
    text: '<b>多次从零搭建核心技术平台与团队</b>，具备独立完成技术选型、架构设计和项目全流程管理的能力，高效推动项目上线和团队成长，助力企业实现数字化升级。',
  },
  {
    icon: '🏭',
    text: '深耕<b>制造业信息化与数字化转型</b>，主导SaaS平台、CRM、实验室管理等核心系统的规划与开发，擅长将复杂业务流程自动化、数据化、平台化，为企业持续转型赋能。',
  },
  {
    icon: '💬',
    text: '精通<b>企业微信管理与开发</b>，长期担任企业微信超级管理员，负责企业微信与OA、CRM、ERP等系统的深度集成开发，有效推动企业移动办公、消息协同和流程自动化落地。',
  },
  {
    icon: '🧩',
    text: '<b>技术栈全面</b>，精通Java及Spring全家桶、主流微服务架构，熟悉Golang，有丰富的高性能服务开发和系统优化经验；同时精于多种数据库、缓存、分布式任务和消息中间件，能灵活应对各类业务场景。',
  },
  {
    icon: '☁️',
    text: '熟练掌握<b>云原生技术与架构设计</b>，参与平台容器化改造、K8s日常运维、多租户和高可用SaaS架构设计，支持平台全球化部署及高效运维管理。',
  },
  {
    icon: '📱',
    text: '拥有<b>全栈开发能力</b>，熟悉JavaScript、移动端开发及微信小程序，擅长前后端分离项目推进和多端系统集成，提升业务协同效率和用户体验。',
  },
  {
    icon: '🤖',
    text: '拥有<b>AI与智能化平台研发经验</b>，参与智能机器人、AI数据平台等项目，推动AI技术与业务系统深度融合，助力企业智能决策和流程自动化。',
  },
  {
    icon: '🚀',
    text: '<b>学习能力强</b>，热爱新技术研究，善于快速掌握前沿工具并应用于实际项目中，能够高效分析和解决疑难问题，持续推动技术创新和项目优化。',
  },
];

const skillTags = [
  'Java', 'Spring', 'Vue3', 'Golang', 'K8s', 'SaaS', '微服务', '数据库', 'AI', '企业微信', '全栈', '云原生', '自动化', '数据可视化', '移动端',
];

// 将优势和图片数据结合
const slidesData = advantages.map((advantage, index) => {
  const images = [lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8];
  return {
    ...advantage,
    image: images[index % images.length], // 循环使用图片
  };
});

const showCarousel = ref(false);
let scrollTimeout: number | null = null;
// const activeAdvantage = ref<number | null>(null); // No longer needed

const showFullscreen = () => {
  if (!showCarousel.value) {
    showCarousel.value = true;
  }
};

const hideFullscreen = () => {
  if (showCarousel.value) {
    showCarousel.value = false;
  }
};

const handleWheel = (event: WheelEvent) => {
  if (scrollTimeout !== null) return;

  const setScrollTimeout = () => {
    scrollTimeout = window.setTimeout(() => {
      scrollTimeout = null;
    }, 1500); // Animation duration + buffer
  };

  // On hero screen, scroll down to reveal content
  if (!showCarousel.value && event.deltaY > 10) {
    showFullscreen();
    setScrollTimeout();
  }
  // On content screen, scroll up from the top to return to hero
  else if (showCarousel.value && event.deltaY < -10) {
    const contentEl = document.querySelector('.fullscreen-content');
    // Only trigger if content is scrolled to the top
    if (contentEl && contentEl.scrollTop === 0) {
      hideFullscreen();
      setScrollTimeout();
    }
  }
};

onMounted(() => {
  window.addEventListener('wheel', handleWheel);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel);
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
});
</script>

<template>
  <main class="home-view">
    <svg width="0" height="0">
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

    <div class="hero-container liquidGlass-wrapper" :class="{ 'hidden': showCarousel }">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h1 class="hero-title">Chris Yang</h1>
        <p class="hero-subtitle">资深Java工程师 | 技术平台构建者</p>
        <p class="hero-description">
          致力于将复杂的业务流程自动化、数据化、平台化，为企业数字化转型持续赋能。
        </p>
      </div>
    </div>

    <!-- Scroll Down Arrow -->
    <div class="scroll-down-arrow" @click="showFullscreen" v-show="!showCarousel">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>


    <!-- Fullscreen Content -->
    <div class="fullscreen-content" :class="{ 'visible': showCarousel }">
      <swiper
        :modules="[Navigation, Autoplay, EffectFade]"
        :slides-per-view="1"
        :space-between="0"
        loop
        effect="fade"
        :fade-effect="{
          crossFade: true
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :navigation="true"
        class="fullscreen-swiper"
      >
        <swiper-slide v-for="(slide, index) in slidesData" :key="index">
          <div class="slide-background" :style="{ backgroundImage: `url(${slide.image})` }"></div>
          <div class="adv-card liquidGlass-wrapper visible">
            <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
            <div class="liquidGlass-tint"></div>
            <div class="liquidGlass-shine"></div>
            <div class="liquidGlass-text adv-content">
              <span class="adv-icon" v-html="slide.icon"></span>
              <span class="adv-text" v-html="slide.text"></span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </main>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column; /* 改为纵向排列 */
  align-items: center;
  justify-content: center; /* 垂直居中 hero-container */
  gap: 3.5rem; /* 增加卡片间距 */
  flex-grow: 1;
  min-height: 100vh; /* 确保至少一屏高 */
  padding-bottom: 5rem; /* 底部留出空间 */
  overflow: hidden; /* 隐藏滚动条，手动控制内容切换 */
  position: relative; /* 为绝对定位的子元素提供基准 */
}

.hero-container {
  text-align: center;
  max-width: 800px;
  border-radius: 2rem;
  font-size: 1.18rem;
  margin-bottom: 0; /* 移除和下方内容的固定间距 */
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  transition-delay: 0.5s; /* 延迟 hero 入场，避免动画冲突 */
  z-index: 10;
}

.hero-container.hidden {
  opacity: 0;
  transform: scale(0.9);
  pointer-events: none;
  transition-delay: 0s; /* hero 退场时无延迟 */
}

.scroll-down-arrow {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 11;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.scroll-down-arrow:hover {
  opacity: 1;
}

.scroll-down-arrow svg {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}


.fullscreen-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* The following properties are good for the hero, but not for the fullscreen container */
  /* align-items: center; */
  /* justify-content: center; */
  padding: 0; /* Remove padding to allow true fullscreen */
  overflow-y: auto;
  box-sizing: border-box;
  /* Hide scrollbar */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  transition: opacity 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), visibility 0s 1.2s;
  z-index: 20;
}

.fullscreen-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.fullscreen-content.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition-delay: 0s;
}

.fullscreen-swiper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  --swiper-navigation-color: #fff; /* Ensure nav arrows are visible on dark backgrounds */
  --swiper-navigation-size: 30px; /* Adjust arrow size */
}

.swiper-slide {
  position: relative; /* For positioning the card inside */
  overflow: hidden; /* To contain the card animation */
}

.slide-background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease-out;
}

/* No longer need hover effect for background */
/*
.swiper-slide:hover .slide-background {
  transform: scale(1.05);
}
*/

.adv-card.liquidGlass-wrapper {
  position: absolute;
  top: 50%;
  right: 5%; /* Position on the right */
  transform: translateY(-50%); /* Center vertically */
  width: 90%;
  max-width: 480px;
  min-height: 280px;
  /* Card is now visible by default, no transition on entry */
  opacity: 1;
  pointer-events: auto; /* Card is always interactive */
}

/* Remove hover-based visibility logic */
/*
.swiper-slide:hover .adv-card.liquidGlass-wrapper {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
  pointer-events: auto;
  transition-delay: 0.1s;
}
*/

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
  padding: 4rem 4rem;
}

.hero-title {
  font-size: 4.3rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.7rem;
  font-weight: 400;
  color: #333333;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.18rem;
  max-width: 600px;
  color: #333333;
  margin: 1.5rem auto 0; /* 调整与副标题的间距 */
}

.hero-intro {
  font-size: 1.15rem;
  color: #222;
  font-weight: 700;
  margin: 0 auto 2.2rem;
  line-height: 1.9;
  text-align: left;
  background: rgba(255,255,255,0.12);
  border-radius: 1.2rem;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
  max-width: 700px;
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

.liquidGlass-btn {
  display: inline-block;
  margin-top: 2.5rem;
  padding: 0.9rem 2.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  background-color: #005cbf;
  border-radius: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 92, 191, 0.4);
}
.liquidGlass-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 25px rgba(0, 92, 191, 0.5);
  filter: brightness(1.15);
}

/* About Content Styles */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
  max-width: 900px;
  /* 移除背景和边框，让卡片独立 */
  position: relative; /* 为 Swiper 导航按钮定位 */
}

.advantages-glass {
  width: 100%;
  border-radius: 0;
  background: none;
  box-shadow: none;
  padding: 0 4rem; /* 为导航按钮留出空间 */
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.adv-card.liquidGlass-wrapper {
  min-height: 280px; /* 调整卡片高度以适应内容 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
}

.adv-card.liquidGlass-wrapper.is-visible {
  /* 动画结束状态 */
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.adv-content {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.7;
  padding: 2.5rem 3rem;
}

.adv-icon {
  font-size: 2.5rem; /* 增大图标 */
  flex-shrink: 0;
  margin-top: 0.2rem;
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

.skills-section {
  width: 100%;
}

.skills-section h3 {
  font-size: 1.2rem;
  color: #005cbf;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center; /* 居中标题 */
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 居中标签 */
  gap: 0.7rem;
}

.skill-tag {
  display: inline-block;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.25);
  color: #005cbf;
  font-weight: 700;
  border-radius: 1.2rem;
  padding: 0.4rem 1.2rem;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: background 0.2s;
}

.skill-tag:hover {
  background: #005cbf;
  color: #fff;
}

.final-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 900px;
  margin-top: 3rem;
}

/* Swiper-specific styles */
.advantages-carousel {
  width: 100%;
  overflow: visible; /* 让卡片阴影不被裁剪 */
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 92, 191, 0.4);
  opacity: 0.8;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: #005cbf;
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(0, 92, 191, 0.5);
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #005cbf;
  transition: all 0.3s ease;
  z-index: 30; /* 确保导航在顶层 */
}
:deep(.swiper-button-prev)::after,
:deep(.swiper-button-next)::after {
  font-size: 1.5rem;
  font-weight: 900;
}

:deep(.swiper-button-prev):hover,
:deep(.swiper-button-next):hover {
  background-color: #005cbf;
  color: #fff;
  box-shadow: 0 6px 20px rgba(0, 92, 191, 0.4);
}

:deep(.swiper-button-prev) {
  left: 0;
}
:deep(.swiper-button-next) {
  right: 0;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .liquidGlass-text {
    padding: 2.5rem 2rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .fullscreen-content {
    padding: 0; /* Fullscreen should have no padding */
  }

  .adv-content {
    padding: 2rem 1.5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .adv-card.liquidGlass-wrapper {
    /* On mobile, card takes more width and is centered */
    top: auto;
    bottom: 2rem;
    left: 50%;
    right: auto;
    width: 90%;
    transform: translateX(-50%);
  }

  /* Remove hover-specific rule for mobile */
  /*
  .swiper-slide:hover .adv-card.liquidGlass-wrapper {
    transform: translateX(-50%) translateY(0);
  }
  */

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    /* Keep nav buttons on mobile but make them smaller */
    width: 40px;
    height: 40px;
  }

  :deep(.swiper-button-prev)::after,
  :deep(.swiper-button-next)::after {
    font-size: 1.2rem;
  }
}
</style>
