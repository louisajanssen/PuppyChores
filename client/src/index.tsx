import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons, createTheme, loadTheme } from '@fluentui/react';
import { App } from './App';

initializeIcons();

const myTheme = createTheme({
    palette: {
        themePrimary: '#315920',
        themeLighterAlt: '#020401',
        themeLighter: '#080e05',
        themeLight: '#0f1b0a',
        themeTertiary: '#1e3613',
        themeSecondary: '#2b4f1c',
        themeDarkAlt: '#3f6a2d',
        themeDark: '#558142',
        themeDarker: '#79a268',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#070b05',
        neutralSecondary: '#0a0f06',
        neutralPrimaryAlt: '#0c1308',
        neutralPrimary: '#15210e',
        neutralDark: '#111a0b',
        black: '#131e0d',
        white: '#ffffff',
}});

loadTheme(myTheme)

ReactDOM.render(<App />, document.getElementById('app'));