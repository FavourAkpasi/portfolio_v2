import {describe, it, expect} from 'vitest';
import {Header} from '@/components/layout/header';
import {renderWithProviders, screen} from '@/test/integration';

describe('Header', () => {
  it('renders the name and title', () => {
    renderWithProviders(<Header />);
    // The header renders a mobile and a desktop copy, so the text appears twice.
    expect(screen.getAllByText('Favour Akpasi').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Software Engineer').length).toBeGreaterThan(0);
  });

  it('renders the resume link', () => {
    renderWithProviders(<Header />);
    const resumeLinks = screen
      .getAllByRole('link')
      .filter(link =>
        link.getAttribute('href')?.includes('Favour_Akpasi_resume.pdf'),
      );
    expect(resumeLinks.length).toBeGreaterThan(0);
  });
});
