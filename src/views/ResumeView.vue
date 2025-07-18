<template>
  <div class="resume-view">
    <svg width="0" height="0">
      <filter id="glass-distortion-resume">
        <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="3" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <h2 class="resume-title">个人简历</h2>

    <!-- 基本信息 -->
    <div class="resume-section liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-resume)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h3>基本信息</h3>
        <ul class="info-list">
          <li><strong>姓名:</strong> 杨志超</li>
          <li><strong>性别:</strong> 男</li>
          <li><strong>年龄:</strong> 30岁</li>
          <li><strong>电话:</strong> 15370145716</li>
          <li><strong>微信:</strong> o1547654938</li>
          <li><strong>邮箱:</strong> 1547654938@qq.com</li>
          <li><strong>工作年限:</strong> 8年</li>
          <li><strong>求职意向:</strong> Java</li>
          <li><strong>期望薪资:</strong> 16-22K</li>
          <li><strong>期望城市:</strong> 苏州</li>
        </ul>
      </div>
    </div>

    <!-- 个人优势 -->
    <div class="resume-section liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-resume)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h3>个人优势</h3>
        <ul class="advantages-list">
          <li>多次从零搭建核心技术平台与团队，具备独立完成技术选型、架构设计和项目全流程管理的能力，高效推动项目上线和团队成长，助力企业实现数字化升级。</li>
          <li>深耕制造业信息化与数字化转型，主导SaaS平台、CRM、实验室管理等核心系统的规划与开发，擅长将复杂业务流程自动化、数据化、平台化，为企业持续转型赋能。</li>
          <li>精通企业微信管理与开发，长期担任企业微信超级管理员，负责企业微信与OA、CRM、ERP等系统的深度集成开发，有效推动企业移动办公、消息协同和流程自动化落地。</li>
          <li>技术栈全面，精通Java及Spring全家桶、主流微服务架构，熟悉Golang，有丰富的高性能服务开发和系统优化经验；同时精于多种数据库、缓存、分布式任务和消息中间件，能灵活应对各类业务场景。</li>
          <li>熟练掌握云原生技术与架构设计，参与平台容器化改造、K8s日常运维、多租户和高可用SaaS架构设计，支持平台全球化部署及高效运维管理。</li>
          <li>拥有全栈开发能力，熟悉JavaScript、移动端开发及微信小程序，擅长前后端分离项目推进和多端系统集成，提升业务协同效率和用户体验。</li>
          <li>拥有AI与智能化平台研发经验，参与智能机器人、AI数据平台等项目，推动AI技术与业务系统深度融合，助力企业智能决策和流程自动化。</li>
          <li>学习能力强，热爱新技术研究，善于快速掌握前沿工具并应用于实际项目中，能够高效分析和解决疑难问题，持续推动技术创新和项目优化。</li>
        </ul>
      </div>
    </div>

    <!-- 工作经历 -->
    <div class="resume-section liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-resume)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h3>工作经历</h3>
        <div class="work-exp">
          <div class="work-item">
            <div class="work-header">
              <span class="work-company">苏州中来光伏新材股份有限公司</span>
              <span class="work-role">Java开发</span>
              <span class="work-time">2022.07-至今</span>
            </div>
            <ul>
              <li>参与JECloud低代码平台核心功能设计与开发，包括接口中心、国际化组件、移动端模块化设计、数据导入导出、配置化大屏和打印模板设计。</li>
              <li>主导CRM客户管理、实验室管理系统、报价管理系统等多个业务系统的设计开发。</li>
              <li>参与企业服务总线(ESB)系统设计与实现，负责跨系统数据集成与服务管理。</li>
              <li>负责新员工技术培训与“师带徒”人才培养工作。</li>
              <li>参与“来宝”智能机器人平台开发，实现AI对话系统与OA流程自动化集成，构建企业知识库与本地向量数据库。</li>
            </ul>
          </div>
          <div class="work-item">
            <div class="work-header">
              <span class="work-company">魔元术（苏州）信息科技有限公司</span>
              <span class="work-role">Java开发</span>
              <span class="work-time">2020.01-2022.06</span>
            </div>
            <ul>
              <li>主导魔元术PASS快速开发平台整体架构设计，模块化封装上千种业务逻辑。</li>
              <li>负责魔元术移动BI项目设计和重构，提升数据实时性和移动化。</li>
              <li>参与数据可视化大屏、问卷平台等多项目开发。</li>
            </ul>
          </div>
          <div class="work-item">
            <div class="work-header">
              <span class="work-company">苏州银丰睿哲信息科技有限公司</span>
              <span class="work-role">Java开发</span>
              <span class="work-time">2018.08-2020.01</span>
            </div>
            <ul>
              <li>分析业务需求，设计后端接口并完成调试。</li>
              <li>开发前端页面，完成与后端接口的联调与测试。</li>
              <li>负责bug修复与系统优化。</li>
            </ul>
          </div>
          <div class="work-item">
            <div class="work-header">
              <span class="work-company">上海黎德科技</span>
              <span class="work-role">Java后端开发</span>
              <span class="work-time">2017.06-2018.08</span>
            </div>
            <ul>
              <li>负责API开发、数据库设计、代码编写与本地调试。</li>
              <li>配合前端开发人员完成接口联调。</li>
              <li>快速响应线上bug并修复。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 项目经历（简要） -->
    <div class="resume-section liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-resume)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h3>项目经历（精选）</h3>
        <ul class="project-list">
          <li><strong>JECloud低代码平台：</strong> 主导接口中心、国际化、移动端模块化、数据导入导出等核心功能设计与开发。</li>
          <li><strong>CRM客户管理系统：</strong> 实现营销活动全生命周期管理、360°客户视图、自动化客户跟进、智能邮件营销等。</li>
          <li><strong>魔元术PASS快速开发平台：</strong> 主导整体架构设计，模块化封装上千种业务逻辑，支持拖拽式业务组合。</li>
          <li><strong>魔元术移动BI：</strong> 实现大数据实时性和移动化，支持多维度数据报表和移动端展现。</li>
          <li><strong>公益项目公众号“爪盟星”：</strong> 参与初期立项、数据结构设计、接口开发、前端规范、bug修复、公众号接入等。</li>
        </ul>
      </div>
    </div>

    <!-- 教育经历 -->
    <div class="resume-section liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-resume)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <h3>教育经历</h3>
        <ul class="edu-list">
          <li><strong>江苏海洋大学</strong> 本科 通信工程 2013-2017</li>
        </ul>
      </div>
    </div>

    <!-- 下载简历按钮 -->
    <div class="resume-download">
      <button class="download-btn" disabled>下载PDF简历（敬请期待）</button>
    </div>
  </div>
</template>

<style scoped>
.resume-view {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 2rem;
}

.resume-title {
  font-size: 2.2rem;
  color: #005cbf;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
}

.resume-section {
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
  filter: url(#glass-distortion-resume);
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
.liquidGlass-text h3 {
  font-size: 1.3rem;
  color: #005cbf;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.info-list,
.advantages-list,
.project-list,
.edu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.info-list li,
.advantages-list li,
.project-list li,
.edu-list li {
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
  line-height: 1.7;
}
.advantages-list li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #005cbf;
}
.work-exp {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.work-item {
  margin-bottom: 0.5rem;
}
.work-header {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.work-company {
  color: #005cbf;
}
.work-role {
  color: #333;
}
.work-time {
  color: #888;
  font-weight: 400;
}
.work-item ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.5rem;
  color: #222;
  font-size: 1rem;
  line-height: 1.7;
}
.resume-download {
  text-align: center;
  margin-top: 1.5rem;
}
.download-btn {
  background: #005cbf;
  color: #fff;
  border: none;
  border-radius: 1.5rem;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: not-allowed;
  opacity: 0.7;
}
</style> 