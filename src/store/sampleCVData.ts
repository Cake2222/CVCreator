import { CVData } from '../types/cv';

export const sampleCVData: CVData = {
  name: "Jane Smith",
  title: "Legal Technology Specialist",
  contact: {
    email: "jane.smith@example.com",
    phone: "+44 (0)1234567890",
    linkedin: "https://linkedin.com/in/janesmith",
    location: "London, UK"
  },
  summary: "Experienced Legal Technology Specialist with a focus on digital transformation and process automation. Skilled in implementing legal tech solutions and driving innovation in legal practice.",
  keyAchievements: [
    {
      title: "Process Automation",
      description: "Implemented automated document review system",
      impact: "Reduced review time by 50%",
      date: "2023"
    }
  ],
  experience: [
    {
      title: "Legal Technology Specialist",
      company: "Example Law Firm",
      period: "2022 - Present",
      achievements: [
        "Led digital transformation initiatives",
        "Implemented legal tech solutions",
        "Trained legal teams on new technologies"
      ]
    }
  ],
  education: [
    {
      degree: "Law LLB",
      institution: "Example University",
      year: "2018 - 2021",
      details: [
        "Legal Technology focus",
        "First Class Honours"
      ]
    }
  ],
  skills: {
    "Legal Technology": {
      "Document Automation": 5,
      "Legal Research Tools": 4
    },
    "Data & Analytics": {
      "Power BI": 4,
      "Data Analysis": 4
    }
  },
  certifications: [
    "Legal Technology Certification",
    "Project Management Professional"
  ],
  projects: [
    {
      name: "Document Automation System",
      role: "Lead Developer",
      achievements: [
        "Designed and implemented automated document system",
        "Reduced processing time by 60%"
      ]
    }
  ]
}; 