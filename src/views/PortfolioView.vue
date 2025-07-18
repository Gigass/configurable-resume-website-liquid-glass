<template>
  <div class="portfolio-view">
    <!-- SVG Filter for the glass distortion effect -->
    <svg width="0" height="0">
      <filter id="glass-distortion-portfolio">
        <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="3" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <h2 class="portfolio-title">项目经历 / 作品集</h2>

    <div class="portfolio-group">
      <h3>苏州中来光伏新材股份有限公司</h3>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>JECloud低代码平台</h4>
          <div class="project-meta">2022.07-至今 | 核心开发</div>
          <ul>
            <li>主导接口中心、国际化组件、移动端模块化、数据导入导出、配置化大屏、打印模板等核心功能设计与开发。</li>
            <li>推动平台标准化、全球化和高性能数据处理。</li>
          </ul>
          <div class="project-tags">Java / Spring / Vue3 / 微服务 / K8s / 多语言 / 响应式UI</div>
        </div>
      </div>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>CRM客户管理系统</h4>
          <div class="project-meta">2022.07-至今 | 设计&开发</div>
          <ul>
            <li>实现营销活动全生命周期管理、360°客户视图、自动化客户跟进、智能邮件营销等。</li>
            <li>支持精细化客户分层与数据追踪。</li>
          </ul>
          <div class="project-tags">Java / Spring / Vue3 / 邮件营销 / 自动化流程</div>
        </div>
      </div>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>实验室管理系统</h4>
          <div class="project-meta">2022.07-至今 | 设计&开发</div>
          <ul>
            <li>开发实验模板引擎、实验委托与跟进、专业录入界面、可配置化报告生成等。</li>
          </ul>
          <div class="project-tags">Java / Spring / Vue3 / 流程建模 / 数据可视化</div>
        </div>
      </div>
    </div>

    <div class="portfolio-group">
      <h3>魔元术（苏州）信息科技有限公司</h3>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>魔元术PASS快速开发平台</h4>
          <div class="project-meta">2020.04-2022.06 | 架构设计</div>
          <ul>
            <li>主导平台整体架构设计，模块化封装上千种业务逻辑，支持拖拽式业务组合。</li>
            <li>优化数据流程，实现全价值链数据一体化管理。</li>
          </ul>
          <div class="project-tags">Java / Spring / 拖拽式开发 / 数据集成 / 架构设计</div>
        </div>
      </div>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>魔元术移动BI</h4>
          <div class="project-meta">2020.01-2020.04 | 项目重构</div>
          <ul>
            <li>实现大数据实时性和移动化，支持多维度数据报表和移动端展现。</li>
          </ul>
          <div class="project-tags">Java / BI / 移动端 / 数据可视化</div>
        </div>
      </div>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>魔元术数据可视化大屏</h4>
          <div class="project-meta">2020.04-2020.06 | 后端开发</div>
          <ul>
            <li>为运维和决策提供一站式数据可视化和三维全景展示。</li>
          </ul>
          <div class="project-tags">Java / 数据可视化 / 大屏 / 三维展示</div>
        </div>
      </div>
    </div>

    <div class="portfolio-group">
      <h3>其它项目</h3>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>公益项目公众号“爪盟星”</h4>
          <div class="project-meta">2019.02-2020.01 | 前后端开发/架构</div>
          <ul>
            <li>参与初期立项、数据结构设计、接口开发、前端规范、bug修复、公众号接入等。</li>
          </ul>
          <div class="project-tags">Java / 微信公众号 / 前后端一体化</div>
        </div>
      </div>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>锦e行银行内部管理系统</h4>
          <div class="project-meta">2018.08-2019.01 | 前后端开发</div>
          <ul>
            <li>绩效系统全程开发上线，支持PC、iOS、Android多端。</li>
          </ul>
          <div class="project-tags">Java / 多端开发 / 银行管理系统</div>
        </div>
      </div>
      <div class="project-card liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-portfolio)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <h4>百万管家智慧社区</h4>
          <div class="project-meta">2017.12-2018.08 | 后端开发</div>
          <ul>
            <li>物业调度、缴费、报修、微店、周边便利等多业务模块开发。</li>
          </ul>
          <div class="project-tags">Java / 社区服务 / 微信网页</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-view {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 2rem;
}

.portfolio-title {
  font-size: 2.2rem;
  color: #005cbf;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
}

.portfolio-group {
  margin-bottom: 2rem;
}

.portfolio-group h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.project-card {
  margin-bottom: 1.5rem;
  border-radius: 2rem;
}

.liquidGlass-wrapper {
  position: relative;
  display: flex;
  font-weight: 600;
  overflow: hidden;
  color: black;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
  border-radius: 2rem;
}
.liquidGlass-effect {
  position: absolute;
  z-index: 0;
  inset: 0;
  backdrop-filter: blur(3px);
  filter: url(#glass-distortion-portfolio);
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
.liquidGlass-text h4 {
  font-size: 1.3rem;
  color: #005cbf;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.project-meta {
  color: #888;
  font-size: 0.98rem;
  margin-bottom: 0.7rem;
}
.liquidGlass-text ul {
  margin: 0 0 0.7rem 0;
  padding-left: 1.5rem;
  color: #222;
  font-size: 1rem;
  line-height: 1.7;
}
.project-tags {
  color: #005cbf;
  font-size: 0.95rem;
  margin-top: 0.5rem;
  font-weight: 600;
}
</style> 