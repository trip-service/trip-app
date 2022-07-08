import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function Tag({ text, style, type = 'primary' }) {
  const theme = useTheme();
  const colors = theme.palette[type];

  return (
    <View style={[styles.root, { backgroundColor: colors.main }, style]}>
      <Text style={[{ color: colors.contrastText }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,

    alignSelf: 'flex-start',
  },
});

Tag.propTypes = {
  style: PropTypes.shape(ViewStyle),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'info', 'error', 'success']),
};
