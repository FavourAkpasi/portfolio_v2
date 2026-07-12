'use client';

import {useEffect, useState} from 'react';
import {MoonIcon, SunIcon} from 'lucide-react';
import {useTheme} from 'next-themes';
import {Button} from './button';

export const ThemeToggle = () => {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes resolves the theme on the client before hydration, so the icon
  // must not render until after mount to avoid a server/client mismatch.
  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="secondary"
      size="icon"
      className="border"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />)}
    </Button>
  );
};
