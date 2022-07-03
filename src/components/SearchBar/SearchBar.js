import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from 'react-native-paper';

export default function SearchBar({ style }) {
  const theme = useTheme();
  return (
    <View style={[styles.root, style]}>
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.surface }]}
        placeholder="Search"
      />

      <TouchableOpacity
        style={[styles.filter, { backgroundColor: theme.colors.surface }]}
      >
        <MaterialIcons name="filter-list" size={24} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
}

SearchBar.propTypes = {
  style: PropTypes.shape(ViewStyle),
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 8,

    flexDirection: 'row',
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
  },
  filter: {
    marginLeft: 12,
    width: 40,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
