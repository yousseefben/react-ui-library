import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../.storybook/defaultTheme';

const customRender = (node, ...options) => render(
    <ThemeProvider theme={theme}>
        {node}
    </ThemeProvider>,
    ...options,
);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender };
