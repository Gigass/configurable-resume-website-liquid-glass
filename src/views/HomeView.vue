<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
        <p class="hero-intro">
          <b>
            8年Java开发及系统架构经验，专注于制造业信息化与数字化转型。多年来，在多家制造业企业主导或参与SaaS平台、CRM系统、实验室管理等核心业务系统的规划与建设，擅长将制造企业的复杂流程实现自动化、数据化和智能化，助力企业实现高效运营与数字化升级。<br><br>
            具备从零搭建核心技术平台和技术团队的能力，熟悉全流程项目管理和跨系统集成，精通Java、Spring全家桶、微服务架构，掌握企业微信集成、云原生技术及K8s集群运维，能够保障系统的高可用和全球化部署。同时具备全栈开发能力，能够高效推动前后端及多端平台的协同开发和集成。<br><br>
            拥有丰富的制造业场景落地经验，包括客户管理、实验数据采集与管理、生产报价、采购决策、人力评估等核心业务系统开发，对企业业务流程有深入理解，能通过技术有效提升业务效率。具有AI与智能化平台建设实践，能够推动AI与制造业业务系统的深度融合，促进智能决策和管理自动化。<br><br>
            具备较强的学习能力和技术创新意识，能够快速掌握新技术并应用于制造业实际业务场景，不断为企业创造技术价值。
          </b>
        </p>
        <RouterLink to="/portfolio" class="liquidGlass-btn">查看我的作品</RouterLink>
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
  font-size: 1.18rem;
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
  padding: 3rem 4rem;
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
  margin: 0 auto 2.5rem;
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
</style>
