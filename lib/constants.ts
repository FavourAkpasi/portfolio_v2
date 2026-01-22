import { IEducation, IExperience, ILink, IProject, ISocial } from '@/types';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaUser, FaBriefcase, FaLaptop, FaGraduationCap } from 'react-icons/fa';

export const LINKS: ILink[] = [
  {
    name: 'About',
    href: '#about',
    icon: FaUser,
  },
  {
    name: 'Experience',
    href: '#experience',
    icon: FaBriefcase,
  },
  {
    name: 'Products',
    href: '#products',
    icon: FaLaptop,
  },
  {
    name: 'Education',
    href: '#education',
    icon: FaGraduationCap,
  },
];

export const SOCIALS: ISocial[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/favourakpasi/',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/favourakpasi/',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/akpasifavour/',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/favourakpasi',
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    position: 'Senior Frontend Engineer',
    company: 'Refinq GmbH',
    start_date: '2024',
    end_date: 'Present',
    description:
      'Lead frontend development and DevOps for the nature and climate risk intelligence platform. Build highly scalable web application for interpreting, understanding and visualizing complex geospatial data. Work closely with cross-functional teams including developers, scientists, and product managers to deliver a scalable digital product that focuses on user experience and accessibility. Contribute to machine learning workflows by correcting data bias and managing Azure infrastructure to support the platform’s AI-driven insights.',
    link: 'https://www.refinq.com/',
    tags: ['Typescript', 'React.js', 'Azure', 'DevOps', 'Vitest', 'Playwright', 'Machine Learning'],
  },
  {
    position: 'Senior Fullstack Engineer',
    company: 'Foundary',
    start_date: '2020',
    end_date: 'Present',
    description:
      'Built and delivered high quality scalable digital solutions for diverse clients. Lead development of design systems, web and mobile applications for an array of industries including ESG, finance, energy and retail. Integrated advanced machine learning models for data analysis, optimization and automation of processes and workflows.',
    link: 'https://foundary.dev/',
    tags: [
      'Typescript',
      'Next.js',
      'React.js',
      'Node.js',
      'Express',
      'React Native',
      'Swift',
      'Python',
      'FastAPI',
      'Pytorch',
      'Tensorflow',
      'MLX',
    ],
  },
  {
    position: 'Frontend Developer',
    company: 'Nitax Technologies',
    start_date: '2022',
    end_date: '2023',
    description:
      'Developed user-centric frontend solutions focused on Mobile Value-Added Services (mVAS) and digital transformation. Built and maintained responsive web applications supporting various business verticals including NXT Tech and NXT Medical. Collaborated with cross-functional teams including developers, product managers, and designers to deliver beautiful and scalable digital products that focus on user experience and accessibility.',
    link: 'https://nxt.ng/',
    tags: [
      'Typescript',
      'Next.js',
      'React.js',
      'React Native',
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    image: '/images/refinq.png',
    name: 'Refinq',
    description: 'Refinq is a nature and climate risk intelligence platform. It helps companies understand and manage the financial risks associated with climate change and biodiversity loss. Built for CFOs, risk managers, and ESG (Environmental, Social, and Governance) teams in sectors like energy, infrastructure, manufacturing, and retail, the solution aggregates fragmented data on climate and biodiversity and translates it into actionable financial insights.',
    website: 'https://www.refinq.com/',
    made_at: 'Refinq GmbH',
  },
  {
    image: '/images/betacare.png',
    name: 'BetaCare',
    description:
      'BetaCare is a virtual healthcare platform designed to provide accessible and affordable primary healthcare services to sub-Saharan Africans. It connects users with licensed doctors for instant consultations via video, audio, and chat, facilitating digital prescriptions and preliminary diagnosis. The platform ensures a seamless user experience across devices, bridging the gap in healthcare accessibility.',
    website: 'https://www.betacare.ng/',
    made_at: 'Nitax Technologies',
  },
  {
    image: '/images/asiko-energy.png',
    name: 'Asiko Energy',
    description:
      'Kita is a comprehensive Vessel and Product Management platform built for Asiko Energy to monitor and manage vessels and oil tanks. Developed with React, TypeScript, and GraphQL, it scales to support over 1,000 registered vessels and 100+ products, handling 5,000+ daily API requests. The platform features efficient state management and automated testing, resulting in an 80% increase in application performance and improved operational efficiency.',
    website: 'https://www.asikoenergy.com/',
    made_at: 'Nitax Technologies',
  },
  {
    image: '/images/hashrails.png',
    name: 'Hashrails',
    description:
      'Hashrails simplifies converting, moving, and settling stablecoins across fragmented markets. Built with one API, embedded compliance, and deep liquidity, it helps businesses connect local financial rails to global stablecoin networks seamlessly.',
    website: 'https://hashrails.xyz/',
    made_at: 'Foundary',
  },
  {
    image: '/images/valour.png',
    name: 'ValourPay',
    description:
      'Valour redefines financial infrastructure for emerging markets by combining tokenization, AI, and embedded finance. The platform accelerates cross-border commerce, unlocks capital flows, and delivers actionable treasury insights — all with enterprise-grade compliance and transparency.',
    website: 'https://valourpay.com/',
    made_at: 'Foundary',
  },
  {
    image: '/images/barrel.png',
    name: 'Barrel',
    description:
      'Barrel provides AI-powered employees for business operations, starting with HR. It automates repetitive tasks so teams can focus on people, not processes, improving efficiency and productivity.',
    website: 'https://usebarrel.ai/',
    made_at: 'Foundary',
  },
  {
    image: '/images/ops360.png',
    name: 'Ops360',
    description:
      'Ops360 helps businesses turn operational challenges into effortless growth. By partnering throughout the implementation process, it optimizes workflows, boosts productivity, and ensures sustainable success.',
    website: 'https://www.getexperthub.com/',
    made_at: 'Foundary',
  },
  {
    image: '/images/fintell360.png',
    name: 'Fintell360',
    description:
      'Fintell360 provides real-time financial insights for businesses, helping owners manage cash flow effectively and make informed decisions to improve overall financial performance.',
    website: 'https://fintell360.com/',
    made_at: 'Foundary',
  },
  {
    image: '/images/qotat.png',
    name: 'Qotat',
    description:
      'Qotat helps service professionals manage their business so they can focus on their craft. It provides a web and mobile app to create professional profiles, share unique booking links for easy scheduling, and get paid faster with secure payment options. Features include job documentation, team collaboration, and verified profiles to build client trust.',
    website: 'https://qotat-website.onrender.com',
    made_at: 'Foundary',
  },
  {
    image: '/images/escape.png',
    name: 'The Escape Lounge',
    description:
      'The Escape Lounge menu app lets customers browse and order from the lounge’s offerings seamlessly. Designed for a smooth, interactive experience, it enhances customer engagement and streamlines ordering.',
    website: 'https://menu.theescape.ng/?id=the-escape',
    made_at: 'Foundary',
  },
  {
    image: '/images/journal-buddy.png',
    name: 'Journal Buddy',
    description:
      'JournalBuddy is a web application that integrates OpenAI\'s language models to provide a unique journaling experience. It uses AI to analyze your entries, provide insights, and even suggest topics to write about.',
    website: 'https://journal-buddy-v2.vercel.app',
    github: 'https://github.com/FavourAkpasi/journal-buddy-v2',
    made_at: 'Foundary',
  },
];

export const EDUCATION: IEducation[] = [
  {
    logo: '/images/jku-logo.jpg',
    course: 'Msc Artificial Intelligence',
    school: 'Johannes Kepler University',
    start_date: '2023',
    end_date: '2026',
  },
  {
    logo: '/images/uniben.png',
    course: 'BEng Petroleum Engineering',
    school: 'University of Benin',
    start_date: '2013',
    end_date: '2019',
  },
];
