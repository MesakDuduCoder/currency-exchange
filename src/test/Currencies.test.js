import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import myCurrencies from './Currencies';
import Currencies from '../components/Currencies';

const reducer = (
  state = {
    currencies: { currencies: myCurrencies },
  },
) => state;

const store = configureStore({ reducer });
describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = render(
      <MemoryRouter>
        <Provider store={store}>
          <Currencies />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
