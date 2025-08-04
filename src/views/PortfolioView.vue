<script setup lang="ts">
import { computed } from 'vue';
import { useSiteData } from '@/stores/sitedata';

const { siteData } = useSiteData();
const projects = computed(() => siteData.value?.portfolio);

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
      <div v-if="projects" v-for="(group, groupIndex) in projects" :key="groupIndex" class="portfolio-group">
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

@media (max-width: 768px) {
  .portfolio-view {
    padding-top: 4rem; /* 减少顶部内边距 */
    padding-bottom: 2rem;
  }
  .content-wrapper {
    padding: 0 1rem;
    gap: 2rem;
  }
  .company-title {
    font-size: 1.5rem;
    padding: 0.8rem 1.5rem;
    margin-bottom: 1.5rem;
  }
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .project-card {
    border-radius: 1rem;
  }
  .project-card:hover {
    transform: none;
  }
  .liquidGlass-text {
    padding: 1.5rem;
  }
  .project-title {
    font-size: 1.3rem;
  }
  .large-card .project-title {
    font-size: 1.6rem;
  }
  .project-description li {
    font-size: 0.95rem;
  }
  .large-card .project-description li {
    font-size: 1rem;
  }
}
</style> 