import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from '../ui/logo';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LINKS, SOCIALS } from '@/lib/constants';
import { useActiveLink } from '@/hooks/useActiveLink';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { TimePortal } from '../ui/time-portal';

export const MobileSidebar = () => {
  const { activeLink, setActiveLink } = useActiveLink();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="sm:hidden">
        <MenuIcon className="size-5 text-foreground" />
      </SheetTrigger>
      <SheetContent side="left" className="gap-0">
        <SheetHeader className="h-14 px-4 flex-row items-center justify-between border-b">
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
          <Logo />

          <SheetClose>
            <XIcon className="size-5 text-foreground" />
          </SheetClose>
        </SheetHeader>

        <ScrollArea className="h-[calc(100%-56px-56px)]">
          <ul className="p-4 flex flex-col gap-2">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={cn(
                    'h-9 flex items-center px-4',
                    activeLink === link.href
                      ? 'bg-primary/10 rounded-md text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  onClick={() => {
                    setActiveLink(link.href);
                    setOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </ScrollArea>

        <SheetFooter className="h-14 px-4 flex-row items-center justify-between border-t">
          <ul className="flex items-center gap-8">
            {SOCIALS.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[&_svg:not([class*='size-'])]:size-6 text-muted-foreground"
                >
                  <social.icon />
                </a>
              </li>
            ))}
          </ul>
          <TimePortal />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
