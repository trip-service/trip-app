import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

import SearchBar from '~/components/SearchBar';
import TextField from '~/components/TextField';
import { FAKE_SEARCH_LIST } from '~/data/list';

function AddForm({ onClose }) {
  return (
    <View style={styles.addContainer}>
      <TextField label="創建新的行程" placeholder="行程標題" />
      <View style={styles.addActions}>
        <Button mode="outlined" onPress={onClose}>
          取消
        </Button>
        <Button style={styles.addButton} mode="contained" icon="plus">
          建立
        </Button>
      </View>
    </View>
  );
}

const RenderItem = ({ item, borderColor }) => {
  return (
    <View style={[styles.listItem, { borderColor }]}>
      <Text>{item.title}</Text>
    </View>
  );
};

function ImportForm({ onClose }) {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.importContainer}>
      <View
        style={[styles.searchBar, { backgroundColor: theme.colors.background }]}
      >
        <SearchBar />
      </View>
      <View
        style={[
          styles.list,
          { backgroundColor: theme.palette.background.paper },
        ]}
      >
        <FlatList
          data={FAKE_SEARCH_LIST}
          renderItem={({ item }) => (
            <RenderItem item={item} borderColor={theme.palette.outline} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.addContainer}>
        <View style={{ backgroundColor: theme.palette.background.paper }}>
          <View style={styles.addActions}>
            <Button mode="outlined" onPress={onClose}>
              取消
            </Button>
            <Button style={styles.addButton} mode="contained" icon="plus">
              匯入
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function BottomForms({ type, onClose }) {
  if (!type) return null;
  if (type === 'add') return <AddForm onClose={onClose} />;
  return <ImportForm onClose={onClose} />;
}

const styles = StyleSheet.create({
  addContainer: { padding: 20 },
  addActions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  addButton: {
    marginLeft: 16,
    elevation: 0,
  },
  importContainer: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  searchBar: {
    paddingVertical: 10,
  },
});

AddForm.propTypes = {
  onClose: PropTypes.func,
};

ImportForm.propTypes = {
  onClose: PropTypes.func,
};

BottomForms.propTypes = {
  type: PropTypes.oneOf(['add', 'import']),
  onClose: AddForm.propTypes.onClose,
};

RenderItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }),
  borderColor: PropTypes.string,
};
