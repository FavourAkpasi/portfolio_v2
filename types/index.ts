/* eslint-disable @typescript-eslint/no-explicit-any */
export type Theme = 'light' | 'dark';

export interface ILink {
  name: string;
  href: string;
}

export interface ISocial {
  icon: any;
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

export interface IContactForm {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}
