'use client';

import {LINKS, SOCIALS} from '@/lib/constants';
import {Logo} from '../ui/logo';
import {cn} from '@/lib/utils';
import {useActiveLink} from '@/hooks/useActiveLink';
import {Button} from '../ui/button';
import {useTheme} from '@/hooks/useTheme';
import {ChevronRight, MoonIcon, SunIcon} from 'lucide-react';
import {ContactForm} from '../sections/contact-form';

export const Header = () => {
  const {activeLink, setActiveLink} = useActiveLink();
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="lg:h-svh">
      <div className="lg:hidden w-full py-6 px-4">
        <h1 className="font-bold text-4xl mt-4">Emmanuel Obeto</h1>
        <h2 className="font-medium text-lg mt-2">Software Engineer</h2>
        <p className="mt-4 text-muted-foreground">
          Passionate about crafting intuitive products that blend design and
          technology seamlessly.
        </p>
        <div className="flex items-center gap-2 mt-6">
          <a href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button>
              View Resume <ChevronRight />
            </Button>
          </a>
          <ContactForm />
        </div>
      </div>

      <div className="hidden xl:block w-full max-w-[550px] h-full p-4">
        <div className="w-full h-full bg-accent dark:bg-sidebar rounded-xl p-9 flex flex-col">
          <div className="flex-1">
            <Logo className="w-10 h-10" />
            <h1 className="font-bold text-4xl mt-4">Emmanuel Obeto</h1>
            <h2 className="font-medium text-lg mt-2">Software Engineer</h2>
            <p className="mt-4 text-muted-foreground">
              Passionate about crafting intuitive products that blend design and
              technology seamlessly.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <a
                href="https://docs.google.com/document/d/1cKj7X9SvuF-XNlT2kTZh7HgyxgWQYoSf1ufzZKuoAPg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  View Resume <ChevronRight />
                </Button>
              </a>
              <ContactForm />
            </div>

            <ul className="flex flex-col mt-12">
              {LINKS.map((link, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-4 h-4 flex items-center justify-center rounded-full border',
                      activeLink === link.href
                        ? 'border-primary'
                        : 'border-neutral-400 dark:border-border',
                    )}
                  >
                    <div
                      className={cn(
                        'w-2.5 h-2.5 rounded-full',
                        activeLink === link.href
                          ? 'bg-primary'
                          : 'bg-neutral-400 dark:bg-border',
                      )}
                    />
                  </div>
                  <a
                    href={link.href}
                    className={cn(
                      'h-9 flex items-center text-sm',
                      activeLink === link.href
                        ? 'rounded-md text-primary font-medium'
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
