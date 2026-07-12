import {describe, it, expect} from 'vitest';
import {Education} from '@/components/sections/education';
import {EDUCATION} from '@/lib/constants';
import {renderWithProviders, screen} from '@/test/integration';

describe('Education', () => {
  it('renders the section heading', () => {
    renderWithProviders(<Education />);
    expect(
      screen.getByRole('heading', {name: 'Education'}),
    ).toBeInTheDocument();
  });

  it('renders an entry for each school', () => {
    renderWithProviders(<Education />);
    expect(screen.getByText(EDUCATION[0].course)).toBeInTheDocument();
  });
});
