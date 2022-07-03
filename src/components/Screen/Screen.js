import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(ViewStyle),
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
