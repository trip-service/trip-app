import color from 'color';
import { DefaultTheme } from 'react-native-paper';

const black = '#333333';
const white = '#ffffff';
const outline = '#D9D9D9';

const background = {
  default: '#FAFAFA',
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
  contrastText: black,
};

const secondary = {
  main: '#52D2D9',
  light: '#b3eced',
  contrastText: black,
};

const info = {
  main: '#26648B',
  light: '#4F8FBF',
  contrastText: black,
};

const error = {
  main: '#26648B',
  light: '#d27573',
  contrastText: black,
};

const success = {
  main: '#75cfbf',
  light: '#52d99c',
  contrastText: black,
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

    // navigation
    border: color(black).alpha(0.5).rgb().string(),
    card: white,
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
    outline,
  },
  animation: {
    scale: 1.0,
  },
};

export default LightTheme;
