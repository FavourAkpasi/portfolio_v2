'use client';

import {LINKS, SOCIALS} from '@/lib/constants';
import {Logo} from '../ui/logo';
import {cn} from '@/lib/utils';
import {useActiveLink} from '@/hooks/useActiveLink';
import {Button} from '../ui/button';
import {useTheme} from '@/hooks/useTheme';
import { MoonIcon, SunIcon} from 'lucide-react';
import {ContactForm} from '../sections/contact-form';
import { FaFilePdf, FaRegFilePdf } from "react-icons/fa6";

export const Header = () => {
  const {activeLink, setActiveLink} = useActiveLink();
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="lg:h-svh">
      <div className="lg:hidden w-full py-6 px-4">
        <h1 className="font-bold text-4xl mt-4">Favour Akpasi</h1>
        <h2 className="font-medium text-lg mt-2">Software Engineer</h2>
        <p className="mt-4 text-muted-foreground">
          Passionate about crafting intuitive solutions that seamlessly blend design and
          technology.
        </p>
        <div className="flex items-center gap-2 mt-6">
          <a href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button>
              View Resume <FaFilePdf />
            </Button>
          </a>
          <ContactForm />
        </div>
      </div>

      <div className="hidden xl:block w-full max-w-[550px] h-full p-4 relative z-40">
        <div className="w-full h-full bg-accent dark:bg-sidebar rounded-xl p-9 flex flex-col">
          <div className="flex-1">
            <Logo className="w-10 h-10" />
            <h1 className="font-bold text-4xl mt-4">Favour Akpasi</h1>
            <h2 className="font-medium text-lg mt-2">Software Engineer</h2>
            <p className="mt-4 text-muted-foreground">
              Passionate about crafting intuitive solutions that seamlessly blend design and
              technology.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <a
                href="/docs/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  View Resume <FaRegFilePdf />
                </Button>
              </a>
              <ContactForm />
            </div>

            <ul className="flex flex-col mt-12">
              {LINKS.map((link, index) => (
                <li key={index} className="flex items-center gap-3">
                  
                  <div
                    className={cn(
                      'flex items-center justify-center rounded-full border',
                      activeLink === link.href
                        ? 'border-primary w-6 h-6'
                        : 'border-neutral-400 dark:border-border w-4 h-4',
                    )}
                  >
                    {/* <div
                      className={cn(
                        'w-2.5 h-2.5 rounded-full',
                        activeLink === link.href
                          ? 'bg-primary'
                          : 'bg-neutral-400 dark:bg-border',
                      )}
                    /> */}
                    {activeLink === link.href && (
                      <link.icon className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <a
                    href={link.href}
                    className={cn(
                      'h-9 flex items-center text-sm',
                      activeLink === link.href
                        ? 'rounded-md text-lg font-medium'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-8">
              {SOCIALS.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="[&_svg:not([class*='size-'])]:size-6 text-primary"
                  >
                    <social.icon />
                  </a>
                </li>
              ))}
            </ul>

            <Button
              variant="secondary"
              size="icon"
              className="border"
              onClick={() => toggleTheme()}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
