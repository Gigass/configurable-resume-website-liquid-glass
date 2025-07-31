<script setup lang="ts">
import { ref } from 'vue';
import lb1 from '@/assets/lb/lb1.png';

const projects = ref([
  {
    company: '苏州中来光伏新材股份有限公司',
    items: [
      {
        title: 'JECloud低代码平台',
        meta: '2022.07-至今 | 核心开发',
        description: [
          '主导接口中心、国际化组件、移动端模块化、数据导入导出、配置化大屏、打印模板等核心功能设计与开发。',
          '推动平台标准化、全球化和高性能数据处理。'
        ],
        tags: ['Java', 'Spring', 'Vue3', '微服务', 'K8s', '多语言', '响应式UI']
      },
      {
        title: 'CRM客户管理系统',
        meta: '2022.07-至今 | 设计&开发',
        description: [
          '实现营销活动全生命周期管理、360°客户视图、自动化客户跟进、智能邮件营销等。',
          '支持精细化客户分层与数据追踪。'
        ],
        tags: ['Java', 'Spring', 'Vue3', '邮件营销', '自动化流程']
      },
      {
        title: '实验室管理系统',
        meta: '2022.07-至今 | 设计&开发',
        description: [
          '开发实验模板引擎、实验委托与跟进、专业录入界面、可配置化报告生成等。'
        ],
        tags: ['Java', 'Spring', 'Vue3', '流程建模', '数据可视化']
      }
    ]
  },
  {
    company: '魔元术（苏州）信息科技有限公司',
    items: [
        {
        title: '魔元术PASS快速开发平台',
        meta: '2020.04-2022.06 | 架构设计',
        description: [
          '主导平台整体架构设计，模块化封装上千种业务逻辑，支持拖拽式业务组合。',
          '优化数据流程，实现全价值链数据一体化管理。'
        ],
        tags: ['Java', 'Spring', '拖拽式开发', '数据集成', '架构设计']
      },
        {
        title: '魔元术移动BI',
        meta: '2020.01-2020.04 | 项目重构',
        description: [
          '实现大数据实时性和移动化，支持多维度数据报表和移动端展现。'
        ],
        tags: ['Java', 'BI', '移动端', '数据可视化']
      },
       {
        title: '魔元术数据可视化大屏',
        meta: '2020.04-2020.06 | 后端开发',
        description: [
            '为运维和决策提供一站式数据可视化和三维全景展示。'
        ],
        tags: ['Java', '数据可视化', '大屏', '三维展示']
      }
    ]
  },
  {
    company: '其它项目',
    items: [
       {
        title: '公益项目公众号“爪盟星”',
        meta: '2019.02-2020.01 | 前后端开发/架构',
        description: [
            '参与初期立项、数据结构设计、接口开发、前端规范、bug修复、公众号接入等。'
        ],
        tags: ['Java', '微信公众号', '前后端一体化']
      },
       {
        title: '锦e行银行内部管理系统',
        meta: '2018.08-2019.01 | 前后端开发',
        description: [
          '绩效系统全程开发上线，支持PC、iOS、Android多端。'
        ],
        tags: ['Java', '多端开发', '银行管理系统']
      },
       {
        title: '百万管家智慧社区',
        meta: '2017.12-2018.08 | 后端开发',
        description: [
          '物业调度、缴费、报修、微店、周边便利等多业务模块开发。'
        ],
        tags: ['Java', '社区服务', '微信网页']
      }
    ]
  }
]);

// Custom directive for staggered animation
const vStagger = {
  mounted: (el: HTMLElement) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, (index + 1) * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const children = Array.from(el.children);
    children.forEach(child => {
        observer.observe(child as HTMLElement);
    });
  }
};
</script>

<template>
  <div class="portfolio-view">
    <!-- SVG filter definition is now moved to App.vue -->

    <h1 class="portfolio-title">项目经历 / 作品集</h1>
    <div v-for="(group, groupIndex) in projects" :key="groupIndex" class="portfolio-group">
      <h2 class="company-title">{{ group.company }}</h2>
      <div class="projects-grid" v-stagger>
        <div v-for="(project, projectIndex) in group.items" :key="projectIndex" class="project-card liquidGlass-wrapper">
          <!-- Re-injecting the liquid glass effect layers -->
          <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
          <div class="liquidGlass-tint"></div>
          <div class="liquidGlass-shine"></div>
          <div class="liquidGlass-text">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-meta">{{ project.meta }}</p>
            <ul class="project-description">
              <li v-for="(desc, i) in project.description" :key="i">{{ desc }}</li>
            </ul>
            <div class="project-tags">
              <span v-for="(tag, i) in project.tags" :key="i" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-view {
  min-height: 100vh;
  padding: 8rem 2rem 4rem 2rem;
  position: relative; /* Needed for the pseudo-element */
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 1;
}

.portfolio-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/profilebk.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
}

.portfolio-title {
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  color: #fff;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;
}

.company-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(42, 58, 77, 0.4);
  /* Change to a dark, gradient text for better readability */
  color: #2a3a4d;
  background: linear-gradient(90deg, #2a3a4d 0%, #4a6fa1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.project-card {
  border-radius: 1.5rem;
  color: #1a2330;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  opacity: 0;
  transform: translateY(30px);
  position: relative; /* Needed for the glass layers */
  overflow: hidden; /* To contain the glass layers */
}
.project-card.is-visible {
    opacity: 1;
    transform: translateY(0);
}


.project-card:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.05) translateZ(20px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.liquidGlass-text {
  padding: 1.5rem 2rem;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a2330;
}

.project-meta {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5a6d;
  margin-bottom: 1rem;
}

.project-description {
  list-style-position: inside;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.project-description li {
  font-size: 1rem;
  line-height: 1.6;
  color: #3a4a5d;
  margin-bottom: 0.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tag {
  background-color: rgba(0, 92, 191, 0.1);
  color: #005cbf;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}
</style> 