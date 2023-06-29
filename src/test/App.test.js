import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
import myCurrencies from './Currencies';

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
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
