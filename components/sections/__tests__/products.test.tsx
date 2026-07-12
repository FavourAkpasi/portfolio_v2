import {describe, it, expect} from 'vitest';
import {Products} from '@/components/sections/products';
import {PRODUCTS} from '@/lib/constants';
import {renderWithProviders, screen} from '@/test/integration';

describe('Products', () => {
  it('renders the section heading', () => {
    renderWithProviders(<Products />);
    expect(screen.getByRole('heading', {name: 'Products'})).toBeInTheDocument();
  });

  it('renders each product name and image', () => {
    renderWithProviders(<Products />);
    expect(screen.getByText(PRODUCTS[0].name)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCTS[0].name)).toBeInTheDocument();
  });
});
