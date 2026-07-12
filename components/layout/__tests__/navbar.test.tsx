import {describe, it, expect} from 'vitest';
import {Navbar} from '@/components/layout/navbar';
import {LINKS} from '@/lib/constants';
import {renderWithProviders, screen} from '@/test/integration';

describe('Navbar', () => {
  it('renders the navigation landmark', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders a link for each nav item', () => {
    renderWithProviders(<Navbar />);
    LINKS.forEach(link => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });
});
