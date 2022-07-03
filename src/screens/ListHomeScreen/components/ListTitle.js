import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function ListTitle({ item }) {
  return (
    <View style={styles.listTitle}>
      <Text>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listTitle: {
    paddingHorizontal: 20,
    marginTop: 16,
    fontWeight: '500',
  },
});

ListTitle.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }),
};
