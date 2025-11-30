import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconType } from 'react-icons/lib';

export type Theme = 'light' | 'dark';

export interface ILink {
  name: string;
  href: string;
  icon:
  | ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  | IconType;
}

export interface ISocial {
  icon:
  | ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  | IconType;
  href: string;
}

export interface IExperience {
  position: string;
  company: string;
  start_date: string;
  end_date?: string;
  description: string;
  link: string;
  tags: string[];
}

export interface IProject {
  image: string;
  name: string;
  description: string;
  website: string;
  github?: string;
  made_at?: string;
}

export interface IEducation {
  logo: string;
  course: string;
  school: string;
  start_date: string;
  end_date?: string;
}

export interface IContactForm {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}
