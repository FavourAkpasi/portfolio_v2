import {describe, it, expect} from 'vitest';
import {Experience} from '@/components/sections/experience';
import {EXPERIENCES} from '@/lib/constants';
import {renderWithProviders, screen} from '@/test/integration';

describe('Experience', () => {
  it('renders the section heading', () => {
    renderWithProviders(<Experience />);
    expect(
      screen.getByRole('heading', {name: 'Experience'}),
    ).toBeInTheDocument();
  });

  it('renders an entry for each experience', () => {
    renderWithProviders(<Experience />);
    expect(screen.getByText(EXPERIENCES[0].position)).toBeInTheDocument();
    expect(screen.getByText(EXPERIENCES[0].company)).toBeInTheDocument();
  });
});
