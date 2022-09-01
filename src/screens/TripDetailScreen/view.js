import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import TripDetailCard from './components/TripDetailCard';

const TripDetailScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <TripDetailCard />
      <View style={{flex: 1}}>
        <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 22}}>尚未新增詳細行程!</Text>
        </View>

        <View style={{flex: 1,alignItems: 'center'}}>
          <Button mode="contained" >新增詳細行程</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 64,
  },
});

export default TripDetailScreen;
