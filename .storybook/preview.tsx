import type { Preview } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/reduxStore/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Provider>
    ),
  ],
};

export default preview;
