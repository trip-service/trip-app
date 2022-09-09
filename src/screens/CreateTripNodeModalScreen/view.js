import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button, Chip } from 'react-native-paper';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import TextInput from './components/TextInput';

const CreateTripNodeModalScreen = (props) => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.containerStyle}>
      <TextInput dense activeOutlineColor="#000" label="標題" mode="outlined" />
      <TextInput
        dense
        multiline
        activeOutlineColor="#000"
        label="內容"
        mode="outlined"
      />
      <View>
        <Text>照片</Text>
        <TouchableOpacity>
          <Image
            style={{ width: 96, height: 96 }}
            source={{
              uri: 'https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg',
            }}
          />
        </TouchableOpacity>
      </View>
      <TextInput dense activeOutlineColor="#000" label="位置" mode="outlined" />
      <TextInput dense activeOutlineColor="#000" label="連結" mode="outlined" />
      <TextInput dense activeOutlineColor="#000" label="標題" mode="outlined" />
      <View>
        <Text>開始時間</Text>
        <View>

        <RNDateTimePicker mode="time" value={new Date()} />
        </View>
      </View>
      <TextInput
        dense
        activeOutlineColor="#000"
        label="Duration"
        mode="outlined"
      />
      <View>
        <Text>標籤</Text>
        <View style={styles.rowStyle}>
          <View>
            <Chip>tag 1</Chip>
          </View>
          <View>
            <Chip>tag 2</Chip>
          </View>
        </View>
      </View>
      <View style={styles.rowStyle}>
        <View style={styles.buttonContainerStyle}>
          <Button mode="contained" onPress={() => navigation.goBack(null)}>
            新增
          </Button>
        </View>
        <View style={styles.buttonContainerStyle}>
          <Button mode="contained" onPress={() => navigation.goBack(null)}>
            取消
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 22,
    marginRight: 22,
  },
  rowStyle: { flexDirection: 'row' },
  buttonContainerStyle: { flex: 1, marginLeft: 6, marginRight: 6 },
});

export default CreateTripNodeModalScreen;
