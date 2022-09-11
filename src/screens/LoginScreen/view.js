import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "840924562253-o8r0c4mq2qe0mpjkbljinvhjf27qm21v.apps.googleusercontent.com",
    iosClientId: "840924562253-06jh0clfulq694p0t9vtfnp0ovomcaoj.apps.googleusercontent.com",
    expoClientId: "840924562253-4afj41f42scidkcq25ng00ca232c95u4.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);


  async function getUserData() {
    try {
      console.log("🚀 ~ file: view.js ~ line 31 ~ getUserData ~ getUserData")
      let userInfoResponse = await axios.get("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}`}
      });
      console.log("🚀 ~ file: view.js ~ line 35 ~ getUserData ~ userInfoResponse.data", userInfoResponse.data)
      setUserInfo(userInfoResponse.data);
    } catch(error) {
      console.log("🚀 ~ file: view.js ~ line 35 ~ getUserData ~ error", error)
      
    }
    
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{uri: userInfo.picture}} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }

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
          onPress={accessToken ? getUserData : () => { promptAsync({useProxy: true}) }}>
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
