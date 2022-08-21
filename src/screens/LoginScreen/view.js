import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Avatar, Button } from 'react-native-paper';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <View style={styles.containerStyle}>
      <View>
        <Avatar.Image
          size={180}
          source={{
            uri: 'https://images.chinatimes.com/newsphoto/2021-12-09/1024/20211209003452.jpg',
          }}
        />
      </View>
      <View style={styles.marginTop26}>
        <Text>Camel Trip</Text>
      </View>
      <View style={styles.marginTop72}>
        <Text>走出屬於你的旅程</Text>
      </View>
      <View style={styles.marginTop26}>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          以 Google 進入
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: width * 0.2 + 64,
    flex: 1,
    alignItems: 'center',
  },
  marginTop26: { marginTop: 26 },
  marginTop72: { marginTop: 72 },
});

export default HomeScreen;
