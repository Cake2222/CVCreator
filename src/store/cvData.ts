import { CVData } from '../types/cv';

export const initialCVData: CVData = {
  name: "Stefan Hart",
  title: "Legal Technology Analyst with a passion for automation and innovation",
  contact: {
    email: "stefanhart101@gmail.com",
    phone: "+44 (0)7518210049",
    linkedin: "https://www.linkedin.com/in/stefan-hart-5399a6208/",
    location: "16 Breach Road, Bristol, BS32BD"
  },
  summary: "Strategic and technically skilled Legal Technology Professional with a proven track record of leading digital transformation within top-tier law firms. Currently spearheading innovation initiatives at TLT LLP, a UK Top 50 firm known for its forward-thinking legal tech strategy. Formerly contributed to Womble Bond Dickinson's transatlantic legal tech roadmap, delivering scalable, AI-driven solutions across practice areas. Recognized for driving impactful innovation, optimizing legal operations, and mentoring teams in the adoption of emerging technologies. Adept in automation, data integration, process improvement, and cross-functional stakeholder engagement. Passionate about building scalable systems, fostering innovation, and aligning technology with business goals.",
  keyAchievements: [
    {
      title: "Digital Transformation Leadership",
      description: "Led the implementation of AI-driven document review systems, reducing review time by 60%",
      impact: "Significant cost savings and improved accuracy in legal document processing",
      date: "2024"
    },
    {
      title: "Innovation Award",
      description: "Received TLT's Exceed Award for exemplary commitment and innovation",
      impact: "Recognition of outstanding contribution to legal tech advancement",
      date: "2024"
    },
    {
      title: "Process Automation",
      description: "Designed and deployed custom Power App intake platform",
      impact: "Streamlined workflow triage and improved team efficiency by 40%",
      date: "2023"
    }
  ],
  experience: [
    {
      title: "Legal Technology Analyst (FutureLaw Team)",
      company: "TLT LLP, Bristol",
      period: "February 2025 - Present",
      achievements: [
        "Awarded TLT's Exceed Award for exemplary commitment, including a critical late-hour delivery of complex data solutions for partner-led initiatives",
        "Designed and deployed a custom Power App intake platform, streamlining workflow triage, significantly improving team efficiency and billing precision",
        "Implemented a dual platform data room for the HR team to store and share sensitive information",
        "Designed a firm-wide Power App intake platform to centralize legal tech requests, enabling data-driven prioritization, enhanced visibility for leadership, and alignment of initiatives with strategic innovation goals",
        "Led strategic planning for project reporting roadmaps, dashboards and insights, identifying and resolving key data and process inefficiencies",
        "Provided in person expert HighQ training and mentoring, enabling legal teams to build and manage custom client sites and workflows with confidence",
        "Responsible for the maintenance of the HighQ Collaborate system user licenses and data retention/management to stay within our allocated HighQ budget",
        "Collaborated with senior stakeholders including partners, KM heads, and legal operations leadership across departments to scope requirements and deliver high-impact legal tech solutions tailored to client needs"
      ]
    },
    {
      title: "Knowledge Management Systems Officer (KM Systems Team)",
      company: "TLT LLP, Bristol",
      period: "December 2023 - Present",
      achievements: [
        "Spearheaded optimization of HighQ Collaborate, reducing site setup time by 75% using Power Automate API workflows and SharePoint integration",
        "Built an automated reporting ecosystem using HighQ APIs and Power BI, delivering real-time insights across practice groups",
        "Deployed a self-serve Mimecast large file transfer solution, enhancing operational efficiency and user autonomy",
        "Managed high-volume HighQ sites, integrating iSheets, complex workflows, dashboards, and document automation",
        "Authored comprehensive technical documentation and built scalable API integrations for SharePoint dashboards",
        "Earned HighQ API Engineer certification, strengthening system-wide integration capabilities",
        "Led internal enablement initiatives, including firm-wide HighQ training programs and support structures"
      ]
    },
    {
      title: "Legal Technology Engineer",
      company: "Womble Bond Dickinson, Bristol",
      period: "June 2022 - December 2023",
      achievements: [
        "Oversaw 50+ HighQ sites, including Virtual Data Rooms for sensitive M&A and private equity transactions",
        "Developed WBD's external-facing Legal Due Diligence platform, modernizing legacy systems and enabling secure client collaboration",
        "Championed document automation with Contract Express, training legal teams and standardizing workflows",
        "Built advanced JavaScript/jQuery-based HighQ enhancements, enabling custom iSheet logic and automated data exports",
        "Implemented AI-driven data extraction workflows using Luminance, Kira, and Power Automate to reduce review time",
        "Piloted LLM use cases, developing a Microsoft Teams-integrated chatbot for internal knowledge queries",
        "Partnered directly with Luminance's product team to influence platform development and adoption strategies"
      ]
    }
  ],
  education: [
    {
      degree: "LegalTech LLM, 1st Class",
      institution: "Swansea University",
      year: "2020 - 2021",
      details: [
        "Specialized in AI, intellectual property, digital rights, and computational thinking",
        "Dissertation: 'Is AI-Focused Legislation Essential for Data Protection in the EU?' (First Class)",
        "Developed Python code using machine learning to predict trademark confusion in the EUIPO database"
      ]
    },
    {
      degree: "Law LLB (Hons), 1st Class",
      institution: "Swansea University",
      year: "2017 - 2020",
      details: [
        "Focused on Cybercrime, Terrorism Law, Media Law, and Medical Law",
        "Completed additional modules in Legal Technology and Innovation"
      ]
    },
    {
      degree: "A-Levels & GCSEs",
      institution: "Shrewsbury School",
      year: "2012 - 2017",
      details: [
        "A-Levels: Mathematics, Spanish, History (with Extended Project)",
        "GCSEs: 9 subjects including Maths and English"
      ]
    }
  ],
  skills: {
    "Legal Technology": {
      "HighQ Collaborate": 5,
      "Contract Express": 5,
      "DocuSign": 5,
      "SharePoint": 5,
      "Luminance": 5,
      "Kira": 4,
      "Legora": 4
    },
    "Data & Analytics": {
      "Power BI": 5,
      "Power Automate": 5,
      "Power Apps": 5,
      "Microsoft Copilot": 5,
      "Prompt Engineering": 4
    },
    "AI & Development": {
      "OpenAI GPT": 5,
      "Python": 4,
      "Typescript/Javascript": 5,
      "API Development": 5,
      "HTML": 5,
      "CSS": 4
    }
  },
  certifications: [
    "HighQ API Engineer Course completion",
    "7 Habbits of highly effective people 2-day course completion",
    "Certified Emergency First Aid Responder",
    "PADI Rescue Scuba Diver"
  ],
  projects: [
    {
      name: "Legal Due Diligence Platform",
      role: "Co-Developer operating within a team",
      achievements: [
        "Developed WBD's external-facing platform for legal due diligence",
        "Implemented secure client collaboration features",
        "Integrated document automation and review workflows"
      ]
    },
    {
      name: "Power App Intake Platform",
      role: "Lead developer and solution architect",
      achievements: [
        "Designed and deployed custom workflow triage system",
        "Improved team efficiency and billing precision",
        "Integrated with existing legal systems"
      ]
    },
    {
      name: "HighQ reporting and TopDesk site creation API Integration",
      role: "Lead developer",
      achievements: [
        "Built automated reporting ecosystem using HighQ APIs",
        "Reduced site setup time by 75% using Power Automate",
        "Delivered real-time insights across practice groups"
      ]
    },
    {
      name: "Custom built iSheets and iSheet to word export generation",
      role: "Lead developer",
      achievements: [
        "Built a completely bespoke iSheet to enhance usability and better display data to the relevant client",
        "Developed an iSheet to word conversion tool to allow users to export iSheets as word documents"
      ]
    }
  ]
};

// This will be expanded later to include state management
export const cvData = initialCVData; 