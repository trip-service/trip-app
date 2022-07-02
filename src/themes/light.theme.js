import color from 'color';
import { DefaultTheme } from 'react-native-paper';

const black = '#333333';
const white = '#ffffff';

const background = {
  default: '#EEEEEE',
  paper: white,
};

const text = {
  default: black,
  disabled: color(black).alpha(0.26).rgb().string(),
  placeholder: color(black).alpha(0.54).rgb().string(),
};

const primary = {
  main: '#FFD4AC',
  light: '#F7E6CA',
};

const secondary = {
  main: '#52D2D9',
  light: '#b3eced',
};

const info = {
  main: '#26648B',
  light: '#4F8FBF',
};

const error = {
  main: '#d95952',
  light: '#d27573',
};

const success = {
  main: '#00cf86',
  light: '#52d99c',
};

const LightTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: 4,
  // paper
  colors: {
    primary: primary.main,
    accent: secondary.main,
    background: background.default,
    surface: white,
    error: error.main,
    text: text.default,
    onSurface: black,
    disabled: text.disabled,
    placeholder: text.placeholder,
    backdrop: color(black).alpha(0.5).rgb().string(),
    notification: error.main,
  },
  // customize
  palette: {
    primary,
    secondary,
    info,
    success,
    error,
    black,
    white,
    background,
    text,
  },
  animation: {
    scale: 1.0,
  },
};

export default LightTheme;
