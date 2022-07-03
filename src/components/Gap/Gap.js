import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

export default function Gap({ height, width }) {
  return <View style={{ height: height, width: width }} />;
}

Gap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};
