import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

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

  const handleAdd = () => {
    setSheetOpen('add');
  };

  const handleImport = () => {
    setSheetOpen('import');
  };

  const handleChange = ev => {
    if (ev === -1) setSheetOpen(null);
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
      {!!sheetOpen && <BottomForms type={sheetOpen} onChange={handleChange} />}
    </>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1 },
});
