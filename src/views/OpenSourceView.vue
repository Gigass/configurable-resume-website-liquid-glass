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
          
          <!-- Custom Project Card -->
          <a :href="project.url" target="_blank" class="card-link">
            <div class="custom-project-card">
              <div class="project-header">
                <div class="project-icon"># </div>
                <div class="project-meta">
                  <h3 class="project-title">{{ project.name }}</h3>
                  <div class="project-repo">{{ project.repo }}</div>
                </div>
              </div>
              <p class="project-description">
                {{ projectStats[project.repo]?.description || project.description }}
              </p>
              
              <!-- Project Stats -->
              <div class="project-stats" v-if="projectStats[project.repo] && !loadingStats[project.repo]">
                <div class="stat-item">
                  <span class="stat-icon">⭐</span>
                  <span class="stat-value">{{ projectStats[project.repo].stars }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-icon">🍴</span>
                  <span class="stat-value">{{ projectStats[project.repo].forks }}</span>
                </div>
                <div class="stat-item" v-if="projectStats[project.repo].language">
                  <span class="language-dot" :style="{ backgroundColor: getLanguageColor(projectStats[project.repo].language) }"></span>
                  <span class="stat-value">{{ projectStats[project.repo].language }}</span>
                </div>
                <div class="stat-item" v-if="projectStats[project.repo].updatedAt">
                  <span class="stat-value">{{ formatDate(projectStats[project.repo].updatedAt) }}</span>
                </div>
              </div>
              
              <!-- Loading Stats -->
              <div class="project-stats loading-stats" v-else-if="loadingStats[project.repo]">
                <div class="loading-dot"></div>
                <span class="loading-text">加载项目信息...</span>
              </div>
              
              <div class="project-footer">
                <div class="github-icon-wrapper">
                  <svg class="github-icon" viewBox="0 0 16 16" width="16" height="16">
                    <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </div>
                <span class="view-github-text">查看项目</span>
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
import { computed, ref, onMounted } from 'vue';
import { useSiteData } from '@/stores/sitedata';

const { siteData } = useSiteData();
const opensourceData = computed(() => siteData.value?.opensource);

// Project stats interface
interface ProjectStats {
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
  description: string;
}

// Store project stats
const projectStats = ref<Record<string, ProjectStats>>({});
const loadingStats = ref<Record<string, boolean>>({});

// API endpoints to try (in order of preference)
const API_ENDPOINTS = [
  'https://api.github.com/repos',
  'https://github-api-proxy.vercel.app/api/repos',
  // Add more proxy endpoints as backup
];

// Fetch project stats from GitHub API
const fetchProjectStats = async (repo: string): Promise<ProjectStats | null> => {
  for (const endpoint of API_ENDPOINTS) {
    try {
      const response = await fetch(`${endpoint}/${repo}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        return {
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          language: data.language || 'Unknown',
          updatedAt: data.updated_at || '',
          description: data.description || '',
        };
      }
    } catch (error) {
      console.warn(`Failed to fetch from ${endpoint}: ${error}`);
      // Continue to next endpoint
    }
  }
  return null;
};

// Format date
const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return '今天';
  if (diffDays === 1) return '昨天';
  if (diffDays < 30) return `${diffDays}天前`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}个月前`;
  return `${Math.floor(diffDays / 365)}年前`;
};

// Get language color
const getLanguageColor = (language: string): string => {
  const colors: Record<string, string> = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C++': '#f34b7d',
    'C': '#555555',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Swift': '#ffac45',
    'Kotlin': '#F18E33',
    'Dart': '#00B4AB',
    'C#': '#239120',
    'Vue': '#4FC08D',
    'CSS': '#1572B6',
    'HTML': '#e34c26',
    'Shell': '#89e051',
  };
  return colors[language] || '#586069';
};

// Load stats for all projects
onMounted(async () => {
  if (!opensourceData.value?.projects) return;
  
  for (const project of opensourceData.value.projects) {
    loadingStats.value[project.repo] = true;
    
    try {
      const stats = await fetchProjectStats(project.repo);
      if (stats) {
        projectStats.value[project.repo] = stats;
      }
    } catch (error) {
      console.error(`Failed to load stats for ${project.repo}:`, error);
    } finally {
      loadingStats.value[project.repo] = false;
    }
  }
});
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

.custom-project-card {
  width: 100%;
  height: 100%;
  min-height: 140px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  color: #2d3748;
  background: transparent;
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.project-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.project-meta {
  flex: 1;
  min-width: 0;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: #2d3748;
  line-height: 1.3;
  /* Truncate long titles */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-repo {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
  opacity: 0.8;
}

.project-description {
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 0.8rem 0;
  /* Multi-line text truncation */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 500;
}

.project-stats {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(100, 116, 139, 0.15);
  border-bottom: 1px solid rgba(100, 116, 139, 0.15);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.stat-icon {
  font-size: 0.7rem;
}

.language-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.stat-value {
  font-weight: 600;
}

.loading-stats {
  justify-content: center;
  padding: 0.8rem 0;
}

.loading-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #667eea;
  animation: pulse 1.5s ease-in-out infinite alternate;
  margin-right: 0.5rem;
}

.loading-text {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

@keyframes pulse {
  from { opacity: 0.4; }
  to { opacity: 1; }
}

.project-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(100, 116, 139, 0.2);
}

.github-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: rgba(100, 116, 139, 0.1);
}

.github-icon {
  color: #64748b;
  transition: color 0.2s ease;
}

.view-github-text {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
  transition: color 0.2s ease;
}

/* Hover effects */
.project-card-wrapper:hover .project-title {
  color: #667eea;
}

.project-card-wrapper:hover .github-icon,
.project-card-wrapper:hover .view-github-text {
  color: #667eea;
}

.project-card-wrapper:hover .github-icon-wrapper {
  background: rgba(102, 126, 234, 0.1);
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
    padding-top: 4rem; /* 减少顶部内边距 */
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
  .custom-project-card {
    min-height: 120px;
    padding: 1.2rem;
  }
  
  .project-header {
    margin-bottom: 0.8rem;
  }
  
  .project-icon {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .project-description {
    font-size: 0.85rem;
    -webkit-line-clamp: 2; /* Show fewer lines on mobile */
    margin-bottom: 0.6rem;
  }
  
  .project-stats {
    gap: 0.8rem;
    padding: 0.4rem 0;
    margin-bottom: 0.8rem;
  }
  
  .stat-item {
    font-size: 0.75rem;
  }
  
  .stat-icon {
    font-size: 0.65rem;
  }
  /* Ensure the more-projects section is visible */
  .more-projects {
    margin-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style> 