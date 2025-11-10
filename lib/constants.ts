import {IExperience, ILink, IProject, ISocial} from '@/types';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

export const LINKS: ILink[] = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
];

export const SOCIALS: ISocial[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/nuelobeto/',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/nuel-obeto/',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/nuelobeto/',
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    position: 'Senior Fullstack Engineer',
    company: 'Foundary',
    start_date: '2020',
    end_date: '2025',
    description:
      'Built and maintained high-performance web and mobile applications with React, Next.js, and React Native, powered by FastAPI and Django backends. Focused on crafting reusable components, optimizing performance, and delivering seamless user experiences.',
    link: 'https://foundary.dev/',
    tags: [
      'Typescript',
      'Next.js',
      'React.js',
      'React Query',
      'Redux',
      'React Native',
      'Python',
      'Node',
    ],
  },
  {
    position: 'Senior Frontend Engineer',
    company: 'Melon Africa',
    start_date: '2024',
    description:
      'Led frontend development for a cross-platform loyalty rewards platform, building responsive web and mobile apps with React, Next.js, TypeScript, React Native, and React Query while ensuring seamless user experience and reliable state management.',
    link: 'https://www.getmelon.co/',
    tags: ['Typescript', 'Next.js', 'React.js', 'React Query', 'React Native'],
  },
];

export const PROJECTS: IProject[] = [
  {
    image: '/images/melon-website.png',
    name: 'Melon Website',
    description:
      'The official marketing site for Melon — a rewards platform that helps users earn coins, track expenses, and discover partner deals. Designed to showcase the product’s features and make engagement effortless.',
    website: 'https://getmelon.co/',
    made_at: 'Melon Africa',
  },
  {
    image: '/images/melon-app.png',
    name: 'Melon Mobile App',
    description:
      'A rewards platform that lets users earn coins, track spending, and enjoy personalized shopping experiences through partner transactions. Designed to make everyday purchases more rewarding and engaging.',
    website:
      'https://play.google.com/store/apps/details?id=com.melonafrica.melon',
    made_at: 'Melon Africa',
  },
  {
    image: '/images/melon-partners.png',
    name: 'Melon Partners App',
    description:
      'A vendor platform that helps businesses boost customer loyalty, increase sales, and gain valuable insights. With Melon, partners can engage customers through rewards, personalized experiences, and data-driven growth tools — turning every purchase into lasting loyalty.',
    website: 'https://partners.getmelon.co/',
    made_at: 'Melon Africa',
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
    image: '/images/escape.png',
    name: 'The Escape Lounge',
    description:
      'The Escape Lounge menu app lets customers browse and order from the lounge’s offerings seamlessly. Designed for a smooth, interactive experience, it enhances customer engagement and streamlines ordering.',
    website: 'https://menu.theescape.ng/?id=the-escape',
    made_at: 'Foundary',
  },
  {
    image: '/images/todopal.png',
    name: 'TodoPal',
    description:
      'TodoPal is a simple and intuitive task management app that helps users organize, track, and complete their daily tasks efficiently. Built with React, TypeScript, and Redux Toolkit for a smooth and responsive experience.',
    website: 'https://todopal.vercel.app/',
    github: 'https://github.com/nuelobeto/redux-toolkit-react-ts',
  },
];
