'use client';

import {MoonIcon, SunIcon} from 'lucide-react';
import {Button} from '../ui/button';
import {Logo} from '../ui/logo';
import {MobileSidebar} from './mobile-sidebar';
import {useTheme} from 'next-themes';
import {LINKS} from '@/lib/constants';
import {useActiveLink} from '@/hooks/useActiveLink';
import {cn} from '@/lib/utils';

export const Navbar = () => {
  const {resolvedTheme, setTheme} = useTheme();
  const {activeLink, setActiveLink} = useActiveLink();

  return (
    <nav className="w-svw h-14 px-4 sticky top-0 left-0 z-50 bg-background xl:hidden flex items-center justify-between border-b">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <Logo />
        <ul className="hidden sm:flex items-center gap-8 ml-4">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={cn(
                  'text-sm transition-colors',
                  activeLink === link.href
                    ? 'text-primary font-medium'
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
      <Button
        variant="secondary"
        size="icon"
        className="border"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </nav>
  );
};
