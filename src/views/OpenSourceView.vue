<template>
  <div class="opensource-view">
    <div class="intro-container liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <!-- Render structured content from JSON here -->
        <div v-if="introContent" class="structured-content">
          <h1 class="main-title">{{ introContent.title }}</h1>
          <p class="intro-paragraph">{{ introContent.introduction }}</p>
          
          <div class="section principles-section">
            <h2 class="section-title">{{ introContent.principles.title }}</h2>
            <p>{{ introContent.principles.description }}</p>
            <ul>
              <li v-for="(point, index) in introContent.principles.points" :key="index">{{ point }}</li>
            </ul>
          </div>

          <div class="section community-section">
            <h2 class="section-title">{{ introContent.community.title }}</h2>
            <p>{{ introContent.community.content }}</p>
          </div>

          <div class="section growth-section">
            <h2 class="section-title">{{ introContent.personal_growth.title }}</h2>
            <p>{{ introContent.personal_growth.content }}</p>
          </div>

          <p class="conclusion-paragraph">{{ introContent.conclusion }}</p>
          <hr class="separator">
          <blockquote class="quote">"{{ introContent.quote }}"</blockquote>
        </div>
      </div>
    </div>

    <div class="projects-grid">
      <!-- Loop through projects and create a card for each -->
      <div v-for="project in projects" :key="project.name" class="github-card liquidGlass-wrapper">
        <!-- Liquid Glass Effect Layers -->
        <div class="liquidGlass-effect" style="filter: url(#glass-distortion-global)"></div>
        <div class="liquidGlass-tint"></div>
        <div class="liquidGlass-shine"></div>

        <!-- Card Content -->
        <div class="liquidGlass-text">
          <div class="card-header">
            <a :href="project.url" target="_blank" class="repo-name">
              <svg class="repo-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-1 1v2h1.75a.75.75 0 110 1.5h-2.5A2.5 2.5 0 012 13.5V2.5zM3.5 1h-1A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0013.5 1h-11zM4 1.75A.25.25 0 014.25 2h7.5a.25.25 0 01.25.25v2.5a.25.25 0 01-.25.25h-7.5a.25.25 0 01-.25-.25V2z"></path></svg>
              {{ project.name }}
            </a>
          </div>
          <p class="repo-description">{{ project.repoData ? project.repoData.description : project.description }}</p>

          <!-- GitHub Stats -->
          <div class="github-stats">
            <div class="stats-item">
              <svg class="stats-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 13.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.192L.646 6.374a.75.75 0 01.416-1.28l4.21-.612L7.327.668A.75.75 0 018 .25z"></path></svg>
              <span>{{ project.repoData ? project.repoData.stargazers_count : '加载中...' }} Stars</span>
            </div>
            <div class="stats-item">
              <svg class="stats-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm1.625-7.5a.75.75 0 100-1.5.75.75 0 000 1.5zM8 4a.75.75 0 100-1.5A.75.75 0 008 4zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8 6.5a.75.75 0 100-1.5.75.75 0 000 1.5zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8 9a.75.75 0 100-1.5.75.75 0 000 1.5zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8 11.5a.75.75 0 100-1.5.75.75 0 000 1.5zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
              <span>{{ project.repoData ? project.repoData.forks_count : '加载中...' }} Forks</span>
            </div>
            <div class="stats-item">
              <svg class="stats-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
              <span>{{ project.repoData ? project.repoData.open_issues_count : '加载中...' }} Issues</span>
            </div>
            <div class="stats-item">
              <svg class="stats-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path></svg>
              <span>{{ project.repoData ? new Date(project.repoData.updated_at).toLocaleDateString() : '加载中...' }}</span>
            </div>
          </div>

          <!-- Language -->
          <div v-if="project.repoData && project.repoData.language" class="language-section">
            <div class="language-item">
              <span class="language-color" :style="{ backgroundColor: getLanguageColor(project.repoData.language) }"></span>
              <span>{{ project.repoData.language }}</span>
            </div>
          </div>

          <!-- Contributors List -->
          <div v-if="project.contributors && project.contributors.length" class="contributors-section">
            <h4 class="section-title">主要贡献者</h4>
            <div class="contributors-list">
              <a v-for="contributor in project.contributors.slice(0, 5)" :key="contributor.id" :href="contributor.html_url" target="_blank" class="contributor-link">
                <img :src="contributor.avatar_url" :alt="contributor.login" class="contributor-avatar" :title="`${contributor.login} - ${contributor.contributions} 次提交`">
              </a>
            </div>
          </div>

          <!-- View on GitHub Button -->
          <a :href="project.url" target="_blank" class="view-github-btn">
            <svg class="github-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            在 GitHub 上查看
          </a>
        </div>
      </div>
    </div>

    <div class="more-projects">
      <p>想要探索更多我的项目吗？</p>
      <a href="https://github.com/Gigass" target="_blank" class="github-link">
        访问我的 GitHub 主页
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Define a type interface for our project structure
interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number; // Added contributions for contributor list
}

interface RepoData {
  language: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
  open_issues_count: number;
  updated_at: string;
}

interface IntroContent {
  title: string;
  introduction: string;
  principles: {
    title: string;
    description: string;
    points: string[];
  };
  community: {
    title: string;
    content: string;
  };
  personal_growth: {
    title: string;
    content: string;
  };
  conclusion: string;
  quote: string;
}

interface Project {
  name: string;
  repo: string;
  url: string;
  description: string;
  repoData: RepoData | null;
  contributors: Contributor[] | null;
  loading: boolean;
  error: string | null;
}

const projects = ref<Project[]>([]);
const introContent = ref<IntroContent | null>(null);

const fetchIntroContent = async () => {
  try {
    const response = await fetch('/opensource_intro.json');
    introContent.value = await response.json();
  } catch (error) {
    console.error('Error fetching or parsing intro JSON:', error);
  }
};

const fetchProjectsData = async () => {
  try {
    // 1. Fetch the list of projects from the local JSON file
    const response = await fetch('/opensource.json');
    const projectList = await response.json();
    
    // Initialize projects ref with basic data and repoData as null
    projects.value = projectList.map((p: any) => ({ 
      ...p, 
      repoData: null, 
      contributors: null,
      loading: true,
      error: null
    }));

    // 2. Fetch detailed data for each project from GitHub API
    projects.value.forEach(async (project, index) => {
      try {
        // Fetch repo data
        const repoResponse = await fetch(`https://api.github.com/repos/${project.repo}`);
        if (repoResponse.ok) {
          project.repoData = await repoResponse.json();
        } else {
          console.error(`Failed to fetch GitHub repo data for ${project.repo}:`, repoResponse.status);
          project.error = `无法加载仓库数据 (${repoResponse.status})`;
        }

        // Fetch contributors data
        try {
          const contributorsResponse = await fetch(`https://api.github.com/repos/${project.repo}/contributors`);
          if (contributorsResponse.ok) {
            project.contributors = await contributorsResponse.json();
          } else {
            console.error(`Failed to fetch contributors for ${project.repo}:`, contributorsResponse.status);
          }
        } catch (error) {
          console.error(`Error fetching contributors for ${project.repo}:`, error);
        }

        // Mark loading as complete
        project.loading = false;
      } catch (error) {
        console.error(`Error fetching GitHub data for ${project.repo}:`, error);
        project.error = '加载数据时发生错误';
        project.loading = false;
      }
    });
  } catch (error) {
    console.error('Error fetching projects.json:', error);
  }
};

onMounted(() => {
  fetchIntroContent();
  fetchProjectsData();
});

const getLanguageColor = (language: string): string => {
  const colors: { [key: string]: string } = {
    'Java': '#b07219',
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#41b883',
  };
  return colors[language] || '#c_gray';
};
</script>

<style scoped>
.opensource-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem 2rem;
  position: relative; /* Needed for the pseudo-element */
  z-index: 1;
}

.opensource-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/opensourcebk.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
  animation: fadeIn 1s ease-in-out;
  /* 硬件加速以防止滚动时闪烁 */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;
}
.github-card {
  /* Remove direct background and border, as liquidGlass-wrapper will handle it */
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: popIn 1s ease-in-out backwards;
  /* Add overflow hidden for the glass effect */
  overflow: hidden;
  position: relative;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0;
  margin-bottom: 1rem;
}

.github-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.16), 0 6px 20px rgba(0, 0, 0, 0.12);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.repo-icon {
  fill: #586069;
  margin-right: 0.5rem;
  vertical-align: middle;
}

.repo-name {
  color: #1a2330; /* Darker color for readability on glass */
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.repo-name:hover {
  text-decoration: underline;
  color: #0366d6;
}

.repo-description {
  color: #2a3a4d;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-weight: 500;
}

.github-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #3a4a5d;
  font-weight: 500;
}

.stats-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.stats-item:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.stats-icon {
  fill: currentColor;
}

.language-section {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  display: inline-flex;
}

.language-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.1);
}

.contributors-section {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #3a4a5d;
  margin-bottom: 0.8rem;
}

.contributors-list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contributor-link {
  text-decoration: none;
  color: inherit;
  position: relative;
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

.section-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #3a4a5d;
  margin-bottom: 0.5rem;
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
  margin-top: 2rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
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
</style> 