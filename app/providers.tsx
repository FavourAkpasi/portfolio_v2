'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Toaster} from '@/components/ui/sonner';
import {ReactNode, Suspense, useState} from 'react';
import ActiveSectionContextProvider from '@/context/active-section-context';

export function Providers({children}: {children: ReactNode}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ActiveSectionContextProvider>
        <Suspense>{children}</Suspense>
        <Toaster />
      </ActiveSectionContextProvider>
    </QueryClientProvider>
  );
}
