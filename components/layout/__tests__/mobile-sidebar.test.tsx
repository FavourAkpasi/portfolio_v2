import {describe, it, expect} from 'vitest';
import {MobileSidebar} from '@/components/layout/mobile-sidebar';
import {renderWithProviders, screen} from '@/test/integration';

describe('MobileSidebar', () => {
  it('renders the menu trigger button', () => {
    renderWithProviders(<MobileSidebar />);
    // The sheet content is closed by default; only the trigger is in the DOM.
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
