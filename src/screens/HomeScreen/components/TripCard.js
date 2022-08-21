import { StyleSheet, View, Text } from 'react-native';
import { Chip } from 'react-native-paper';

const TripCard = () => {
  return (
    <View style={styles.cardContainerStyle}>
      <View style={styles.rowStyle}>
        <Text style={styles.dateTextStyle}>2022年 7月30日 - 8月1日</Text>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.titleStyle}>台中三天兩夜</Text>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.descTextStyle}>到台中走透透，爬大坑吃美食逛夜市</Text>
      </View>
      <View style={styles.footerContainerStyle}>
        <View style={styles.tagContainerStyle}>
          <View>
            <Chip>tag 1</Chip>
          </View>
          <View>
            <Chip>tag 2</Chip>
          </View>
        </View>
        <View>
          <Chip icon="map-marker-outline">台中</Chip>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    paddingTop: 12,
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 22,
    backgroundColor: '#ffffff',
  },
  rowStyle: { marginTop: 6, marginBottom: 6 },
  dateTextStyle: { fontSize: 16 },
  titleStyle: { fontSize: 18, fontWeight: '600' },
  descTextStyle: { fontSize: 12 },
  footerContainerStyle: { flexDirection: 'row', marginTop: 12 },
  tagContainerStyle: { flexDirection: 'row', flexWrap: 'wrap', flex: 1 },
});

export default TripCard;
