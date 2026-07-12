import {ReactElement, ReactNode} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'next-themes';
import ActiveSectionContextProvider from '@/context/active-section-context';

/**
 * A fresh QueryClient per render keeps tests isolated. Retries are disabled so a
 * failing query surfaces immediately instead of hanging the test.
 */
function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {queries: {retry: false}},
  });
}

/**
 * Mirrors the app's real provider stack (app/providers.tsx) so components that
 * read theme, query, or active-section context render the same way they do in
 * production.
 */
export function AllProviders({children}: {children: ReactNode}) {
  return (
    <QueryClientProvider client={createTestQueryClient()}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

/**
 * Drop-in replacement for RTL's `render` that wraps the UI in AllProviders.
 * Use this in every component test instead of importing `render` directly.
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: AllProviders, ...options});
}

// Re-export the rest of RTL (screen, within, fireEvent, ...) so test files have
// a single import source.
export * from '@testing-library/react';
