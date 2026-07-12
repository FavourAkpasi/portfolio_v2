import {describe, it, expect} from 'vitest';
import {ContactForm} from '@/components/sections/contact-form';
import {renderWithProviders, screen} from '@/test/integration';

describe('ContactForm', () => {
  it('renders the trigger button', () => {
    renderWithProviders(<ContactForm />);
    expect(
      screen.getByRole('button', {name: /let's talk/i}),
    ).toBeInTheDocument();
  });
});
