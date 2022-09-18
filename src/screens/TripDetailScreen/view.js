import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Chip, Card, Button, Title } from 'react-native-paper';
import {
  Tabs,
  TabScreen,
} from 'react-native-paper-tabs';
import TripDetailCard from './components/TripDetailCard';

function ExploreWitHookExamples() {
  return (
    <Card style={{ padding: 12 }}>
      <View style={{flexDirection: "row"}}>
        <View>
          <View>
            <Text>09:00 ~ 11:00</Text>
          </View>
          <View>
            <Title>早餐</Title>
          </View>
          <View>
            <Text>想吃早餐店還是早午餐店? 還是睡到飽再吃午餐</Text>
          </View>
        </View>
        <View>
          <Text>照片</Text>
          <TouchableOpacity>
            <Card.Cover
              style={{ width: 96, height: 96 }}
              source={{
                uri: 'https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Chip icon="map-marker-outline">駱駝咖啡廳</Chip>
      <Chip icon="link">美食部落推薦|台中早午餐</Chip>
      <View style={{flexDirection: "row"}}>
        <View style={{marginRight: 6, marginLeft: 6}}>
          <Chip>tag 1</Chip>
        </View>
        <View style={{marginRight: 6, marginLeft: 6}}>
          <Chip>tag 1</Chip>
        </View>

      </View>
    </Card>
  );
}

const TripDetailScreen = props => {
  const { navigation } = props;
  return (
    <View style={styles.containerStyle}>
      <TripDetailCard />
      <View style={{ flex: 1 }}>
        {/* <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 22}}>尚未新增詳細行程!</Text>
        </View> */}
        <Tabs>
          <TabScreen label="Day1">
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="Day2">
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen
            label="Day3"
            // optional props
            // onPressIn={() => {
            //   console.log('onPressIn explore');
            // }}
            // onPress={() => {
            //   console.log('onPress explore');
            // }}
          >
            <ExploreWitHookExamples />
          </TabScreen>
        </Tabs>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Button
            mode="contained"
            onPress={() => navigation.navigate('CreateTripNodeModal')}
          >
            新增詳細行程
          </Button>
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
