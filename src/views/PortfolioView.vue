<script setup lang="ts">
import { ref } from 'vue';
import lb1 from '@/assets/lb/lb1.png';

const projects = ref([
  {
    company: '苏州中来光伏新材股份有限公司',
    items: [
      {
        title: '云中来企业级SaaS平台',
        meta: '2022.07-至今 | 核心开发',
        size: 'large', // 大卡片，占用一整列
        description: [
          '云中来平台是基于华为ServiceComb微服务架构打造的企业级SaaS多租户平台。平台分为核心系统组件和外围功能组件，并具备强大接口集成、国际化、多租户及安全管理能力，为企业应用数字化、云化、集成化提供坚实技术底座。',
          '核心系统组件包括：meta元数据查询与配置（提供字段定义、业务字典、枚举、实体模型等统一查询配置，支持业务模型灵活变更和敏捷适配）、基础功能配置（系统参数、业务参数、菜单、页面、模块等统一配置，支持业务部门自主完成场景调整）、RBAC人员架构组件（组织架构树、人员管理、岗位配置、角色权限分配，多租户数据隔离和权限分层）、消息通知组件（多渠道推送系统通知、业务提醒、审批消息，支持自定义消息模板和推送方式）、工作流组件（各类审批流、业务流、自定义流程设计，拖拉拽式流程建模，灵活配置业务流节点和流转规则）。',
          '外围功能组件涵盖：配置大屏与拖拽式配置（可视化大屏搭建工具，支持多数据源接入和动态展示）、配置打印与打印设计模块（自定义业务表单、标签、发票等文档打印模板，基于Word模板自助上传和自动解析）、ESB主数据管理（企业级主数据统一管理与标准化，实现各业务系统间主数据同步、分发、校验、溯源）。',
          '接口与集成中心集成各类主流应用系统（OA、SAP、EMAIL、LDAP、FSSC、V6000、SOLARTOWN等），包含接口配置、数据抛送、接口文档自动生成、数据源和加解密规则定义、接口日志和运维权限管理等功能，实现接口统一注册、调用、监控和安全管控。',
          '平台全面集成JWT认证机制实现分布式身份认证与授权，支持多语言文本、模板、日期、货币等国际化配置，各租户可按需加载不同语言包动态切换界面语言，为大型集团、跨国企业及中大型机构提供灵活、安全、高可扩展的数字平台能力，助力数字化和智能化转型。'
        ],
        tags: ['Java', 'Spring', 'Vue3', '微服务架构', 'SaaS平台', '多租户', 'JWT认证', '国际化', '接口集成', '工作流引擎', '元数据管理', 'RBAC权限', '消息推送', '数据可视化', '打印模板']
      },
      {
        title: '来宝AI智能体平台',
        meta: '2023.01-至今 | 核心开发',
        size: 'normal', // 普通卡片
        description: [
          '来宝AI项目是基于大模型AI能力开发的一体化智能体平台，全面整合了OA、SAP、云中来等企业核心系统的数据资源。',
          '平台支持多样化AI对话与智能问答，内置知识库管理，可智能检索企业知识并发起相关OA流程。',
          '来宝AI通过对接、调用OA和SAP，实现了如请假、出差、会议等业务流程的自动发起和审批流转，同时支持现有宿舍管理、CRM、LIMS等业务系统的信息查询与流程一键发起。',
          '平台还融合了爬虫Agent能力，结合开源爬虫项目，能够自动化采集外部信息（如欧盟、美国封禁公司名单等），进一步夯实数据广度。',
          '整体上，来宝AI项目实现了企业级知识融合、流程自动化、信息智能搜集与多系统协同，为企业数字化转型与智能办公提供了高效支持。'
        ],
        tags: ['AI大模型', '智能体平台', '系统集成', '流程自动化', '知识库管理', '爬虫Agent', '多系统协同', '数字化转型']
      },
      {
        title: 'CRM客户管理系统',
        meta: '2022.07-至今 | 设计&开发',
        size: 'normal', // 普通卡片
        description: [
          'CRM系统（客户关系管理系统）是一套支持企业销售、客户和服务流程的信息化平台。',
          '系统集成了客户资料管理、联系人、线索、商机、合同、回款、售后等核心功能，实现了从客户开发、销售跟进、合同签署、回款管理到售后服务的全过程数字化管理。',
          'CRM还能对销售机会、活动、任务、审批流程进行跟踪，支持联系人、客户池、竞争对手、供应商、产品、报价等信息维护。',
          '通过工作台、仪表盘、数据分析等模块，实现销售流程可视化、客户数据完整记录和团队高效协作。',
          '此外，CRM系统还涵盖了任务提醒、线索公海、合同审批、回款进度、售后登记等辅助功能，帮助企业全面提升客户管理效率与服务质量。'
        ],
        tags: ['Java', 'Spring', 'Vue3', 'CRM系统', '销售管理', '客户关系', '数据分析', '流程管理', '工作台']
      },
      {
        title: '实验室管理系统',
        meta: '2022.07-至今 | 设计&开发',
        size: 'normal', // 普通卡片
        description: [
          'LIMS系统（实验室信息管理系统）是一套全面支撑实验室日常业务和质量管理的信息化平台。',
          '集成用户与组织权限管理、人员培训档案、供应商及其评价体系等基础管理内容，规范不同用户和部门的职责分工。',
          '涵盖委托单、样品、测试任务、测试单等核心业务流程，实现从样品接收、库管、流转，到测试项目分配、测试数据采集、过程跟踪、任务状态监控的全过程数字化管理。',
          '支持测试单、项目、设备等模板化配置，提升标准化和自动化水平，并通过消息通知、流程变更、签名与印章管理等辅助功能，保障测试环节的规范合规与责任可追溯。',
          '质量监督、稽核、人员培训、老化测试及变更管理等模块，进一步完善实验室质量体系，实现实验室业务高效协同、数据完整可追溯、风险可控与管理持续改进的目标。'
        ],
        tags: ['Java', 'Spring', 'Vue3', 'LIMS系统', '质量管理', '流程建模', '数据可视化', '权限管理', '模板配置']
      }
    ]
  },
  {
    company: '魔元术（苏州）信息科技有限公司',
    items: [
      {
        title: '魔元术PASS快速开发平台',
        meta: '2020.04-2022.06 | 架构设计',
        size: 'normal', // 普通卡片
        description: [
          '主导平台从零到一的整体架构设计，落地微服务模块化开发理念，深度抽象并封装了上千种业务功能模块，助力实现低代码/零代码拖拽式配置与业务快速组合，极大提升开发效率和灵活性。',
          '搭建统一元数据管理、动态表单、业务规则引擎、流程编排、可视化配置等核心子系统，支持多租户场景和多组织并发，通过平台化支撑客户差异化需求，降低研发和维护成本。',
          '负责平台底层数据流、权限模型、事件总线及高并发异步任务机制的设计与实现，实现全价值链数据采集、流转、分析和一体化管理。平台接口开放，支持与第三方系统的高效集成。',
          '通过技术赋能和高度抽象，帮助企业在短周期内定制复杂业务流程，推动业务数字化转型与敏捷创新。'
        ],
        tags: ['Java', 'Spring', '拖拽式开发', '数据集成', '架构设计']
      },
      {
        title: '魔元术移动BI',
        meta: '2020.01-2020.04 | 项目重构',
        size: 'normal', // 普通卡片
        description: [
          '负责移动BI大数据分析平台的架构升级与重构，搭建高性能数据集成与展示通道，提升数据实时性与多端适配能力。',
          '系统可灵活对接企业各业务线数据源，实现ETL清洗、聚合与缓存加速，保障业务分析与展示的高可用与高并发。',
          '前端采用响应式和移动优先设计，支持PC与主流移动终端无缝切换，满足管理层随时随地查看核心指标与洞察。',
          '实现多维度分析、报表钻取、仪表盘搭建、动态权限等高阶数据分析需求，全面支撑业务决策的数据化演进。'
        ],
        tags: ['Java', 'BI', '移动端', '数据可视化']
      },
      {
        title: '魔元术数据可视化大屏',
        meta: '2020.04-2020.06 | 后端开发',
        size: 'normal', // 普通卡片
        description: [
          '参与大屏项目后端建设，实现多源异构数据的实时采集、校验、处理与多维聚合，为运维及管理层决策提供一站式可视化支持。',
          '后端负责数据流管理、权限校验、接口优化及三维全景大屏的动态数据支撑，确保亿级数据量下的高性能渲染与流畅交互。',
          '结合业务实际需求，定制监控预警、统计分析与三维可视化联动，实现数据与业务场景的深度结合，有力支撑企业运营及智能决策。',
          '优化弹性扩展和安全机制，为客户提供可靠高可用的数据可视化平台，提升数据管理和洞察能力。'
        ],
        tags: ['Java', '数据可视化', '大屏', '三维展示']
      }
    ]
  },
  {
    company: '其它项目',
    items: [
      {
        title: '公益项目公众号"爪盟星"',
        meta: '2019.02-2020.01 | 前后端开发/架构',
        size: 'normal', // 普通卡片
        description: [
          '作为核心成员参与公益项目“爪盟星”从方案设计到上线运维全过程，负责数据结构建模、接口开发和系统安全。',
          '主导并优化前端界面与交互规范，推动团队采用组件化开发，提升产品交互体验和开发效率。',
          '实现自动化消息通知、活动报名、数据统计、用户身份管理等全链路业务功能，实现信息流通与资源对接。',
          '负责微信生态系统的对接与合规审核，保证系统高可用性和数据安全，为公益项目持续高效运营提供技术保障。'
        ],
        tags: ['Java', '微信公众号', '前后端一体化']
      },
      {
        title: '锦e行银行内部管理系统',
        meta: '2018.08-2019.01 | 前后端开发',
        size: 'normal', // 普通卡片
        description: [
          '独立负责银行绩效管理系统的前后端开发，涵盖需求分析、架构设计、编码与多端适配上线。',
          '系统覆盖PC、iOS、Android等平台，支持银行内部多岗位绩效指标自动计算、KPI管理与人员评分，提升考核效率与透明度。',
          '推动数据与流程自动化，集成数据权限、审批工作流、统计报表和消息通知，提升了业务协同效率及数据安全管理。',
          '保障系统高并发、高安全、稳定运行，积极响应多端改版升级与运维支持，助力银行数字化流程转型。'
        ],
        tags: ['Java', '多端开发', '银行管理系统']
      },
      {
        title: '百万管家智慧社区',
        meta: '2017.12-2018.08 | 后端开发',
        size: 'normal', // 普通卡片
        description: [
          '负责“百万管家智慧社区”云平台后端开发，实现物业调度、账单缴费、报修、社区O2O、微店等业务全模块支撑。',
          '基于微服务与分布式架构，优化了居民、商户、物业三方互动流程，提升了收费、报修、服务响应的自动化和可追溯性。',
          '集成微信网页端，实现入口便捷、通知到人、智能客服、服务广覆盖。开发周期内完成多业务快速迭代和数据合规安全管控。',
          '通过数据统计与服务洞察，提升社区管理智能化水平和住户满意度，推动智慧社区运营数字化升级。'
        ],
        tags: ['Java', '社区服务', '微信网页']
      }
    ]
  }
]);

// Custom directive for staggered animation, now observing a wrapper
const vStagger = {
  mounted: (el: HTMLElement) => {
    const children = Array.from(el.children); // These are now the .card-wrapper elements
    children.forEach((child, index) => {
      (child.querySelector('.project-card') as HTMLElement)?.style.setProperty('--i', String(index));
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add .is-visible to the .project-card INSIDE the wrapper
          entry.target.querySelector('.project-card')?.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    children.forEach(child => {
      observer.observe(child as HTMLElement);
    });
  }
};
</script>

<template>
  <div class="portfolio-view">
    <div class="content-wrapper">
      <div v-for="(group, groupIndex) in projects" :key="groupIndex" class="portfolio-group">
        <h2 class="company-title">{{ group.company }}</h2>
        <div class="projects-grid" v-stagger>
          <!-- Each card is now wrapped in a .card-wrapper for intersection observation -->
          <div v-for="(project, projectIndex) in group.items" :key="projectIndex" class="card-wrapper" :class="{ 'large-card': project.size === 'large' }">
            <div class="project-card liquidGlass-wrapper">
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
    </div>
  </div>
</template>

<style scoped>
.portfolio-view {
  min-height: 100vh;
  padding-top: 8rem;
  padding-bottom: 4rem;
  width: 100%;
}

.portfolio-view::before {
  /* 此伪元素现在只用于添加一个遮罩层，而不是背景图 */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: -1;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.portfolio-group {
  width: 100%; /* 确保组占满 wrapper 宽度 */
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
  font-weight: 800;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #ffb366 0%, #ff9933 100%);
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px rgba(255, 179, 102, 0.3),
              0 4px 16px rgba(255, 179, 102, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 179, 102, 0.8);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.company-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.company-title:hover::before {
  left: 100%;
}

.company-title:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(255, 179, 102, 0.4),
              0 6px 20px rgba(255, 179, 102, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

/* 大卡片样式 - 占用一整列 */
.card-wrapper.large-card {
  grid-column: 1 / -1; /* 从第一列到最后一列 */
}

.large-card .project-card {
  /* 大卡片的特殊样式 */
  min-height: 400px; /* 增加最小高度 */
}

.large-card .project-title {
  font-size: 2.2rem; /* 更大的标题 */
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #1a2330 0%, #005cbf 50%, #2a3a4d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.large-card .project-meta {
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
  margin-bottom: 1.5rem;
}

.large-card .project-description li {
  font-size: 1.15rem; /* 更大的描述文字 */
  line-height: 1.8;
  margin-bottom: 1rem;
  font-weight: 700;
  padding: 0.8rem 0;
  padding-left: 1.5rem;
}

.large-card .project-tags {
  margin-top: 2.5rem; /* 更多的标签间距 */
  padding-top: 1.5rem;
}

.large-card .tag {
  font-size: 0.95rem; /* 更大的标签 */
  padding: 0.5rem 1.2rem;
  font-weight: 800;
}

.card-wrapper {
  /* This wrapper has a size and is observable, but is otherwise invisible */
  position: relative;
}

.project-card {
  border-radius: 1.5rem;
  color: #1a2330;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  /* Upgraded to a "Circular Reveal" (Iris Wipe) animation */
  clip-path: circle(0% at center);
  transition: clip-path 0.8s cubic-bezier(0.25, 1, 0.5, 1) calc(var(--i, 0) * 100ms),
              transform 0.4s ease,
              box-shadow 0.4s ease;
  
  /* 高级感阴影效果 */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
              0 4px 16px rgba(0, 0, 0, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.project-card.is-visible {
  /* The circle expands to 75% radius, which is enough to cover the corners of the card */
  clip-path: circle(75% at center);
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
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #1a2330;
  background: linear-gradient(135deg, #1a2330 0%, #2a3a4d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-meta {
  font-size: 0.9rem;
  font-weight: 700;
  color: #005cbf;
  margin-bottom: 1rem;
  padding: 0.3rem 0.8rem;
  background: linear-gradient(135deg, rgba(0, 92, 191, 0.1) 0%, rgba(0, 92, 191, 0.05) 100%);
  border-radius: 20px;
  display: inline-block;
  border-left: 3px solid #005cbf;
}

.project-description {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.project-description li {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.7;
  color: #2a3a4d;
  margin-bottom: 0.8rem;
  padding: 0.5rem 0;
  border-left: 2px solid rgba(0, 92, 191, 0.2);
  padding-left: 1rem;
  position: relative;
}

.project-description li::before {
  content: '•';
  color: #005cbf;
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 92, 191, 0.1);
}

.tag {
  background: linear-gradient(135deg, rgba(0, 92, 191, 0.15) 0%, rgba(0, 92, 191, 0.05) 100%);
  color: #005cbf;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 700;
  border: 1px solid rgba(0, 92, 191, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 92, 191, 0.3);
  border-color: rgba(0, 92, 191, 0.4);
}

.tag:hover::before {
  left: 100%;
}
</style> 