<template>
  <div class="about-view">
    <!-- 顶部简介区液态玻璃包裹 -->
    <div class="about-hero liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h1 class="about-slogan">全栈架构师 | 数字化转型推动者</h1>
        <div class="about-sub">让技术驱动业务，让创新成就未来</div>
      </div>
    </div>

    <!-- 优势区整体液态玻璃包裹 -->
    <div class="advantages-glass liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <div class="advantages-grid">
          <div class="adv-card liquidGlass-wrapper" v-for="(item, idx) in advantages" :key="idx">
            <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
            <div class="liquidGlass-tint"></div>
            <div class="liquidGlass-shine"></div>
            <div class="liquidGlass-text adv-content">
              <span class="adv-icon" v-html="item.icon"></span>
              <span class="adv-text" v-html="item.text"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技能标签区 -->
    <div class="skills-section liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h3>核心技能</h3>
        <div class="skills-tags">
          <span class="skill-tag" v-for="tag in skillTags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped>
.about-view {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  padding-bottom: 2rem;
}
.about-hero.liquidGlass-wrapper {
  max-width: 900px;
  margin-bottom: 1.5rem;
}
.about-slogan {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(90deg, #005cbf 10%, #00c6fb 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 0.5rem;
}
.about-sub {
  font-size: 1.2rem;
  color: #005cbf;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.advantages-glass.liquidGlass-wrapper {
  max-width: 900px;
  width: 100%;
  margin-bottom: 1.5rem;
}
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
  width: 100%;
}
.adv-card.liquidGlass-wrapper {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
}
.adv-content {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.7;
  padding: 1.5rem 1.5rem 1.5rem 1.2rem;
}
.adv-icon {
  font-size: 2.1rem;
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
  max-width: 900px;
  margin: 0 auto;
  margin-top: 1.5rem;
}
.skills-section h3 {
  font-size: 1.2rem;
  color: #005cbf;
  margin-bottom: 1rem;
  font-weight: 700;
}
.skills-tags {
  display: flex;
  flex-wrap: wrap;
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
</style>
