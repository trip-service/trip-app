import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import FixedBottomSheet from '~/components/FixedBottomSheet';
import Gap from '~/components/Gap';
import Screen from '~/components/Screen';
import SearchBar from '~/components/SearchBar';
import { FAKE_LIST } from '~/data/list';

import BottomForms from './components/BottomForms';
import FabGroup from './components/FabGroup';
import ListCard from './components/ListCard';
import ListTitle from './components/ListTitle';

const renderItem = ({ item }) => {
  if (item.type === 'groupTitle') return <ListTitle item={item} />;
  return <ListCard item={item} />;
};

export default function ListHomeScreen() {
  const [sheetOpen, setSheetOpen] = useState(null);
  const sheetRef = useRef(null);

  const handleAdd = () => {
    setSheetOpen('add');
  };

  const handleImport = () => {
    setSheetOpen('import');
  };

  useEffect(() => {
    if (sheetOpen) {
      sheetRef.current.snapToIndex(0);
    }
  }, [sheetOpen]);

  const handleClosePress = () => {
    setSheetOpen(null);
    sheetRef.current.close();
  };

  const handleChange = ev => {
    if (ev === -1) {
      setSheetOpen(null);
    }
  };

  return (
    <>
      <Screen>
        <SearchBar />
        <View style={styles.content}>
          <FlatList
            data={FAKE_LIST}
            renderItem={renderItem}
            keyExtractor={item => item.id || item.title}
            ItemSeparatorComponent={() => <Gap height={8} />}
          />
        </View>
        <FabGroup onAdd={handleAdd} onImport={handleImport} />
      </Screen>
      <FixedBottomSheet
        ref={sheetRef}
        index={-1}
        height={sheetOpen === 'add' ? 170 : '100%'}
        onChange={handleChange}
      >
        <BottomForms type={sheetOpen} onClose={handleClosePress} />
      </FixedBottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1 },
});
