import React from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import EmptyContent from './components/EmptyContent';
import TripCard from './components/TripCard';

const {width, height} = Dimensions.get("window");
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const renderItem = () => <TripCard />;

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.containerStyle}>
      <Searchbar
        style={styles.searchbarStyle}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={DATA}
        ListEmptyComponent={() => <EmptyContent />}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={{width, position: 'absolute', bottom: 20}}>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
        新增行程
      </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 64,
    flex: 1,
  },
  searchbarStyle: { marginLeft: 22, marginRight: 22, marginBottom: 22 },
  contentContainerStyle: {marginTop: 12, paddingBottom: 64},
});
export default HomeScreen;
