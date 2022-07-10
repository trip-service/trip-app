import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

import BottomSheetTextField from '~/components/BottomSheetTextField';
import FixedBottomSheet from '~/components/FixedBottomSheet';
import SearchBar from '~/components/SearchBar';
import { FAKE_SEARCH_LIST } from '~/data/list';

function AddForm({ onClose }) {
  return (
    <View style={styles.addContainer}>
      <BottomSheetTextField label="創建新的行程" placeholder="行程標題" />
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

const BottomForms = ({ type, onChange }) => {
  const sheetRef = useRef(null);

  const handleClose = () => {
    sheetRef.current.close();
  };

  // BottomSheet 無法同時存在兩個 bottom sheets
  // 用變數控制 snapPoints 使用上會出現 bug
  if (type === 'add')
    return (
      <FixedBottomSheet
        ref={sheetRef}
        index={0}
        height={170}
        onChange={onChange}
      >
        <AddForm onClose={handleClose} />
      </FixedBottomSheet>
    );

  return (
    <FixedBottomSheet
      ref={sheetRef}
      index={0}
      height="100%"
      onChange={onChange}
    >
      <ImportForm onClose={handleClose} />
    </FixedBottomSheet>
  );
};

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
  type: PropTypes.oneOf(['add', 'import']).isRequired,
  onChange: PropTypes.func.isRequired,
};

RenderItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }),
  borderColor: PropTypes.string,
};

export default BottomForms;
