import { ref } from 'vue';

// Interfaces for Home section
interface Hero {
  title: string;
  subtitle: string;
  description: string;
}

interface Advantage {
  icon: string;
  title: string;
  summary: string;
  details: string[];
}

// Interfaces for Portfolio section
interface ProjectItem {
  title: string;
  meta: string;
  size: string;
  description: string[];
  tags: string[];
}

interface ProjectGroup {
  company: string;
  items: ProjectItem[];
}

// Interfaces for OpenSource section
interface OpenSourceIntro {
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

interface OpenSourceProject {
  name: string;
  repo: string;
  url: string;
  description: string;
}

// Interfaces for Contact section
interface ContactInfo {
  label: string;
  value: string;
  type: 'tel' | 'mailto' | 'text';
}

// Interface for Layout
interface NavLink {
  name: string;
  to: string;
}

// Main SiteData interface
export interface SiteData {
  layout: {
    navigation: NavLink[];
  };
  home: {
    hero: Hero;
    advantages: Advantage[];
    skillTags: string[];
  };
  portfolio: ProjectGroup[];
  opensource: {
    intro: OpenSourceIntro;
    projects: OpenSourceProject[];
    githubStatsCard: {
      theme: string;
      bg_color: string;
      border_radius: string;
      hide_border: string;
      title_color: string;
      text_color: string;
      icon_color: string;
    };
    moreProjects: {
      text: string;
      buttonText: string;
      url: string;
    };
  };
  contact: {
    title: string;
    contacts: ContactInfo[];
    social: {
      buttonText: string;
      link: string;
    };
  };
}

const siteData = ref<SiteData | null>(null);

export function useSiteData() {
  if (!siteData.value) {
    fetch('/data/sitedata.json')
      .then(response => response.json())
      .then(data => {
        siteData.value = data;
      })
      .catch(error => {
        console.error('Error fetching site data:', error);
      });
  }
  
  return {
    siteData
  };
} 