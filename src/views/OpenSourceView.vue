<template>
  <div class="opensource-view">
    <div class="intro-container">
      <h1 class="title">我的开源贡献</h1>
      <p class="subtitle">
        我热衷于开源，并积极贡献于社区。以下是我引以为傲的项目之一，它解决了实际问题并获得了社区的认可。
      </p>
    </div>

    <!-- Custom GitHub Card Component -->
    <div v-if="repoData" class="custom-github-card">
      <div class="card-header">
        <a :href="repoData.html_url" target="_blank" class="repo-name">
          <svg class="repo-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-1 1v2h1.75a.75.75 0 110 1.5h-2.5A2.5 2.5 0 012 13.5V2.5zM3.5 1h-1A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0013.5 1h-11zM4 1.75A.25.25 0 014.25 2h7.5a.25.25 0 01.25.25v2.5a.25.25 0 01-.25.25h-7.5a.25.25 0 01-.25-.25V2z"></path></svg>
          {{ repoData.full_name }}
        </a>
      </div>
      <p class="repo-description">{{ repoData.description }}</p>
      <div class="card-footer">
        <div class="footer-item">
          <span class="language-color" :style="{ backgroundColor: getLanguageColor(repoData.language) }"></span>
          <span>{{ repoData.language }}</span>
        </div>
        <a :href="`${repoData.html_url}/stargazers`" target="_blank" class="footer-item">
          <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 13.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.192L.646 6.374a.75.75 0 01.416-1.28l4.21-.612L7.327.668A.75.75 0 018 .25z"></path></svg>
          <span>{{ repoData.stargazers_count }}</span>
        </a>
        <a :href="`${repoData.html_url}/network/members`" target="_blank" class="footer-item">
          <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm1.625-7.5a.75.75 0 100-1.5.75.75 0 000 1.5zM8 4a.75.75 0 100-1.5A.75.75 0 008 4zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8 6.5a.75.75 0 100-1.5.75.75 0 000 1.5zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8 9a.75.75 0 100-1.5.75.75 0 000 1.5zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8 11.5a.75.75 0 100-1.5.75.75 0 000 1.5zm2.125.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
          <span>{{ repoData.forks_count }}</span>
        </a>
        <div class="footer-item">
          <span>Updated on {{ new Date(repoData.updated_at).toLocaleDateString() }}</span>
        </div>
      </div>
    </div>
    <div v-else class="loading-container">
      <p>Loading GitHub project...</p>
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

const repoData = ref<any>(null);

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/Gigass/xxl-job-oracle');
    if (response.ok) {
      repoData.value = await response.json();
    } else {
      console.error('Failed to fetch GitHub repo data:', response.status);
    }
  } catch (error) {
    console.error('Error fetching GitHub repo data:', error);
  }
});

// A simple function to get language colors
// In a real app, you might use a more comprehensive library or mapping
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
}

.intro-container {
  text-align: center;
  margin-bottom: 3rem;
  animation: slideInDown 1s ease-in-out;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.custom-github-card {
  width: 100%;
  max-width: 800px;
  background: #ffffff;
  border-radius: 15px;
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e1e4e8;
  animation: popIn 1s 0.5s ease-in-out backwards;
}

.custom-github-card:hover {
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
  font-size: 1.5rem;
  font-weight: 700;
  color: #0366d6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.repo-name:hover {
  text-decoration: underline;
}

.repo-description {
  font-size: 1rem;
  color: #586069;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #586069;
  border-top: 1px solid #e1e4e8;
  padding-top: 1rem;
}

.footer-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: inherit;
}

.footer-item .icon {
  fill: currentColor;
}

.language-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.1);
}

.loading-container {
  color: #586069;
}
.title {
  font-size: 3rem;
  font-weight: 800;
  color: #2a3a4d;
  background: linear-gradient(135deg, #1a2330 0%, #005cbf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 1.2rem;
  color: #4a5a6d;
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
</style> 