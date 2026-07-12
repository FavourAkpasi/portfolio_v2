import {describe, it, expect} from 'vitest';
import {About} from '@/components/sections/about';
import {renderWithProviders, screen} from '@/test/integration';

describe('About', () => {
  it('renders the section heading', () => {
    renderWithProviders(<About />);
    expect(screen.getByRole('heading', {name: 'About'})).toBeInTheDocument();
  });
});
