import {addParameters, configure} from '@storybook/react';
import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import defaultTheme from './defaultTheme';

const themes = [defaultTheme];


addDecorator(withThemesProvider(themes));
addParameters({ options: { name: 'My UI Library' }} );
const req = require.context("../src", true, /.stories.js/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}


configure(loadStories, module);
