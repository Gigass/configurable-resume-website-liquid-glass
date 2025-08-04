<template>
  <div class="opensource-view">
    <div class="content-wrapper" v-if="opensourceData">
      
      <!-- Introduction Container -->
      <div class="intro-container liquidGlass-wrapper">
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>
        <div class="liquidGlass-text">
          <div v-if="opensourceData.intro" class="structured-content">
            <div class="section growth-section">
              <h2 class="section-title">{{ opensourceData.intro.personal_growth.title }}</h2>
              <p>{{ opensourceData.intro.personal_growth.content }}</p>
            </div>

            <hr class="separator">
            <blockquote class="quote">"{{ opensourceData.intro.quote }}"</blockquote>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div v-for="project in opensourceData.projects" :key="project.name" class="project-card-wrapper liquidGlass-wrapper">
          <!-- Liquid Glass Layers -->
          <div class="liquidGlass-effect"></div>
          <div class="liquidGlass-tint"></div>
          <div class="liquidGlass-shine"></div>
          
          <!-- GitHub Readme Stats Card -->
          <a :href="project.url" target="_blank" class="card-link">
            <div class="project-card-content">
              <img 
                class="github-stats-card"
                :src="`https://github-readme-stats.vercel.app/api/pin/?username=${project.repo.split('/')[0]}&repo=${project.repo.split('/')[1]}&theme=${opensourceData.githubStatsCard.theme}&bg_color=${opensourceData.githubStatsCard.bg_color}&border_radius=${opensourceData.githubStatsCard.border_radius}&hide_border=${opensourceData.githubStatsCard.hide_border}&title_color=${opensourceData.githubStatsCard.title_color}&text_color=${opensourceData.githubStatsCard.text_color}&icon_color=${opensourceData.githubStatsCard.icon_color}`"
                :alt="project.name"
                @error="handleImageError"
                @load="handleImageLoad"
              />
              <!-- Fallback content when image fails to load -->
              <div class="fallback-card" v-if="imageErrors[project.name]">
                <div class="fallback-header">
                  <h3 class="fallback-title">{{ project.name }}</h3>
                  <div class="fallback-repo">{{ project.repo }}</div>
                </div>
                <p class="fallback-description">{{ project.description }}</p>
                <div class="fallback-footer">
                  <span class="github-link-text">查看在GitHub →</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- More Projects Link -->
      <div class="more-projects">
        <p>{{ opensourceData.moreProjects.text }}</p>
        <a :href="opensourceData.moreProjects.url" target="_blank" class="github-link">
          {{ opensourceData.moreProjects.buttonText }}
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useSiteData } from '@/stores/sitedata';

const { siteData } = useSiteData();
const opensourceData = computed(() => siteData.value?.opensource);

// Track image loading errors
const imageErrors = ref<Record<string, boolean>>({});

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const projectName = img.alt;
  imageErrors.value[projectName] = true;
};

const handleImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const projectName = img.alt;
  imageErrors.value[projectName] = false;
};
</script>

<style scoped>
.opensource-view {
  min-height: 100vh;
  padding-top: 8rem;
  padding-bottom: 4rem;
  width: 100%;
}

.opensource-view::before {
  /* This pseudo-element is now only used to add a mask layer, not a background image */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1); /* Slight dark mask */
  z-index: 0;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px; /* or your desired max width */
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem; /* Replaces margin-bottom on elements */
}

.intro-container {
  background-color: rgba(255, 255, 255, 0.1); /* 添加淡白色半透明背景 */
  text-align: center;
  margin-bottom: 3rem;
  /* 替换slideInDown为圆形显示效果 */
  clip-path: circle(75% at center); /* 开始时完全可见 */
  /* New width constraints */
  width: 100%;
  max-width: 1200px;
  /* Remove direct styling, will be handled by liquidGlass classes */
  padding: 0; /* Wrapper has no padding */
  border-radius: 15px;
  overflow: hidden; /* Important for liquid glass effect */
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  /* 合并transition属性 */
  transition: all 0.3s ease, clip-path 0.7s cubic-bezier(0.5, 0, 0.2, 1);
}

.intro-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.16), 0 6px 20px rgba(0, 0, 0, 0.12);
}

/* 添加内容的淡入动画 */
.intro-container .main-title,
.intro-container .intro-paragraph,
.intro-container .section,
.intro-container .conclusion-paragraph,
.intro-container .quote {
  animation: contentFadeInUp 0.8s both cubic-bezier(0.25, 1, 0.5, 1);
}

.intro-container .intro-paragraph { animation-delay: 0.2s; }
.intro-container .section { animation-delay: 0.4s; }
.intro-container .conclusion-paragraph { animation-delay: 0.6s; }
.intro-container .quote { animation-delay: 0.8s; }

.liquidGlass-text {
  padding: 3rem; /* Increased padding for better spacing */
  z-index: 3;
}

.projects-grid {
  display: grid;
  /* Default to a single column for mobile-first approach */
  grid-template-columns: 1fr;
  gap: 2.5rem; /* Increased gap for better spacing with larger cards */
  width: 100%;
}

/* Switch to a 2-column layout on medium screens and up */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Switch to a 3-column layout on large screens */
@media (min-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card-wrapper {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 1rem; /* Add padding to the wrapper */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex; /* Use flexbox to center the card */
  align-items: center;
  justify-content: center;
}

.project-card-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.card-link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2; /* Place the link above the glass effect */
}

.project-card-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.github-stats-card {
  width: 100%;
  height: auto; /* Allow height to be determined by content */
  display: block;
  min-height: 120px; /* Ensure minimum height */
}

.fallback-card {
  width: 100%;
  height: 120px;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-radius: 8px;
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.fallback-header {
  margin-bottom: 8px;
}

.fallback-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #58a6ff;
}

.fallback-repo {
  font-size: 12px;
  color: #8b949e;
  margin: 0;
}

.fallback-description {
  font-size: 14px;
  color: #e6edf3;
  line-height: 1.4;
  margin: 8px 0;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.fallback-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.github-link-text {
  font-size: 12px;
  color: #58a6ff;
  font-weight: 500;
}

.repo-header a {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.repo-header a:hover {
  color: #ffb366;
}

.repo-description {
  font-size: 0.95rem;
  margin: 0.75rem 0;
  flex-grow: 1; /* Allow description to take up available space */
  line-height: 1.6;
  color: #c0c0c0;
}

.repo-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #a0a0a0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 0.75rem;
}

.repo-language .language-color {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
  vertical-align: middle;
}

.stat-item {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.stat-item:hover {
  color: #ffb366;
}

.contributors-section {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
}

.contributors-list {
  display: flex;
  justify-content: flex-end;
}

.contributor-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin-left: -10px; /* Create the overlapping effect */
  transition: all 0.3s ease;
}

.contributor-avatar:hover {
  transform: translateY(-3px) scale(1.1);
  border-color: #fff;
  z-index: 10;
}

.view-github-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #2ea44f 0%, #22863a 100%);
  box-shadow: 0 4px 15px rgba(46, 164, 79, 0.4);
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.view-github-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(46, 164, 79, 0.6);
}

.github-icon {
  fill: currentColor;
  width: 16px;
  height: 16px;
}

.loading-container {
  color: #586069;
}
.title {
  font-size: 3rem;
  font-weight: 800;
  color: #1a2330;
  background: linear-gradient(135deg, #1a2330 0%, #005cbf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 1.2rem;
  color: #2a3a4d;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}
.more-projects {
  text-align: center;
  animation: slideInUp 1s ease-in-out;
}

.more-projects p {
  font-size: 1.1rem;
  color: #4a5a6d;
  margin-bottom: 1rem;
  font-weight: 500;
}

.github-link {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #ff9933 0%, #ffb366 100%);
  box-shadow: 0 4px 15px rgba(255, 153, 51, 0.4);
  transition: all 0.3s ease;
}

.github-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 153, 51, 0.6);
}

.loading-footer {
  color: #999;
  font-size: 0.9rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e1e4e8;
}

.contributors-section {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.contributors-list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contributor-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.contributor-avatar:hover {
  transform: scale(1.1);
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInDown {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes popIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes slideInUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes contentFadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.structured-content {
  text-align: left;
  line-height: 1.8;
  color: #3a4a5d;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a2330;
  background: linear-gradient(135deg, #1a2330 0%, #005cbf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
  text-align: center;
}

.section {
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: #2a3a4d;
  margin-bottom: 1rem;
  border-bottom: 2px solid rgba(0, 92, 191, 0.2);
  padding-bottom: 0.5rem;
}

.intro-paragraph,
.conclusion-paragraph,
.structured-content p {
  margin-bottom: 1rem;
  font-weight: 500;
}

.structured-content ul {
  list-style-position: inside;
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.structured-content li {
  margin-bottom: 0.75rem;
}

.separator {
  border: none;
  border-top: 1px solid rgba(0, 92, 191, 0.1);
  margin: 2.5rem 0;
}

.quote {
  font-style: italic;
  text-align: center;
  color: #586069;
  font-size: 1.1rem;
  font-weight: 500;
  border-left: 4px solid rgba(0, 92, 191, 0.3);
  padding-left: 1rem;
  margin: 2rem auto 0;
  max-width: 80%;
}

@media (max-width: 768px) {
  .opensource-view {
    padding-top: 6rem;
    padding-bottom: 2rem;
    min-height: auto; /* Allow content to determine height */
  }
  .content-wrapper {
    padding: 0 1rem;
    gap: 2rem;
    min-height: auto; /* Allow content to determine height */
  }
  .intro-container {
    margin-bottom: 2rem;
  }
  .liquidGlass-text {
    padding: 1.5rem;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .projects-grid {
    gap: 1.5rem;
    min-height: auto; /* Allow content to determine height */
    /* Ensure grid items have enough space */
    grid-auto-rows: auto;
  }
  .project-card-wrapper {
    min-height: 200px; /* Ensure minimum height for project cards */
    height: auto; /* Allow height to expand with content */
  }
  .project-card-wrapper:hover {
    transform: none;
  }
  .github-stats-card {
    max-width: 100%;
    height: auto;
    min-height: 150px; /* Ensure cards are visible */
  }
  /* Ensure the more-projects section is visible */
  .more-projects {
    margin-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style> 