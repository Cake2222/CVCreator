export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface ExecutiveSummaryData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
}

export interface SkillCategory {
  [key: string]: number;
}

export interface SkillsData {
  "Legal Technology": SkillCategory;
  "Data & Analytics": SkillCategory;
  "AI & Development": SkillCategory;
}

export interface ProjectData {
  name: string;
  role: string;
  achievements: string[];
}

export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface EducationData {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

export interface KeyAchievementData {
  title: string;
  date: string;
  description: string;
  impact: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  experience: ExperienceData[];
  education: EducationData[];
  skills: SkillsData;
  certifications: string[];
  projects: ProjectData[];
  keyAchievements: KeyAchievementData[];
} 