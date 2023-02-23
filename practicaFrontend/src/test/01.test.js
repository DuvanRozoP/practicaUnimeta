import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

describe('Agregar adecuadamente los elementos Html', () => {
  it('Debe de existe dentro de section un elemento "form"', () => {
    const { getByRole } = render(<App />);

    const section = getByRole('region', { name: /login/i });
    const form = getByRole('form');

    expect(section).toContainElement(form);
  });
});
