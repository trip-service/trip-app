// In index.js of a new project
import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const HomeScreen = () => {
  const theme = useTheme();
  console.log(theme);
  return <Text>Home</Text>;
};

export default HomeScreen;
