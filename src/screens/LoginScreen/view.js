import React from 'react';
import { StyleSheet, Platform, View, Text, Dimensions } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const { width } = Dimensions.get('window');

const {extra} = Constants.manifest;

const HomeScreen = (props) => {
  const {handleLogin} = props;
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: extra.androidClientId,
    iosClientId: extra.iosClientId,
    expoClientId: extra.expoClientId,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      handleLogin({
        os: Platform.OS,
        token: response.authentication.accessToken,
        notificationToken: "testdemo",
      });
    }
  }, [response]);

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
        <Button
          mode="contained"
          onPress={() => promptAsync({useProxy: true})}>
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
