module.exports = {
    "expo": {
      "name": "example",
      "slug": "example",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "plugins": [
        "expo-community-flipper"
      ],
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "updates": {
        "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true,
        "bundleIdentifier": "",
        "buildNumber": "1.0.0"
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#FFFFFF"
        },
        "package": "",
        "versionCode": 1
      },
      "web": {
        "favicon": "./assets/favicon.png"
      }
    }
  }
  