import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const HomeScreen = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
    </View>);
};

export default HomeScreen;
