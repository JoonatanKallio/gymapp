import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

test('Page', () => {
    const { container } = render(<Page />);
    expect(container.querySelectorAll('div')).toBeDefined();
});
