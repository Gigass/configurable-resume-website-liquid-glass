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

const expandedCard = ref<number | null>(null);

const toggleCard = (index: number) => {
  expandedCard.value = expandedCard.value === index ? null : index;
};

// 移除全屏相关逻辑
const showCarousel = ref(false);
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

    <div class="hero-container liquidGlass-wrapper">
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

    <!-- 卡片式轮播图 -->
    <div class="carousel-container">
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
      >
        <swiper-slide v-for="(slide, index) in slidesData" :key="index">
          <div class="slide-card" :style="{ backgroundImage: `url(${slide.image})` }">
            <div 
              class="text-card liquidGlass-wrapper" 
              :class="{ 'expanded': expandedCard === index }"
              @click="toggleCard(index)"
            >
              <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
              <div class="liquidGlass-tint"></div>
              <div class="liquidGlass-shine"></div>
              <div class="liquidGlass-text">
                <div class="card-header">
                  <span class="adv-icon" v-html="slide.icon"></span>
                  <span class="expand-btn">{{ expandedCard === index ? '−' : '+' }}</span>
                </div>
                <div class="card-content" v-show="expandedCard === index">
                  <span class="adv-text" v-html="slide.text"></span>
                </div>
              </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-grow: 1;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
}

.hero-container {
  text-align: center;
  max-width: 800px;
  border-radius: 2rem;
  font-size: 1.18rem;
  margin-bottom: 0;
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 10;
}

.carousel-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.card-swiper {
  width: 100%;
  aspect-ratio: 16/9;
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

.text-card.liquidGlass-wrapper {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  min-height: 120px;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
  /* 恢复液态玻璃样式 */
  display: flex;
  font-weight: 600;
  overflow: hidden;
  color: black;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
}

.text-card.expanded {
  min-height: 300px;
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
  padding: 2rem;
  width: 100%;
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
  margin: 1.5rem auto 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
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
</style>
