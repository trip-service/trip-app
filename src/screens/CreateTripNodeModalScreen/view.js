import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, TextInput, Chip } from 'react-native-paper';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CreateTripNodeModalScreen = () => {
  return (
    <View style={styles.containerStyle}>
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
        <Image
          style={{ width: 96, height: 96 }}
          source={{
            uri: 'https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg',
          }}
        />
      </View>
      <TextInput dense activeOutlineColor="#000" label="位置" mode="outlined" />
      <TextInput dense activeOutlineColor="#000" label="連結" mode="outlined" />
      <TextInput dense activeOutlineColor="#000" label="標題" mode="outlined" />
      <View>
        <Text>開始時間</Text>
        <RNDateTimePicker mode="time" display="inline" value={new Date()} />
      </View>
      <View>
        <Text>Duration</Text>
        <TextInput
          dense
          activeOutlineColor="#000"
          label="Duration"
          mode="outlined"
        />
      </View>
      <View>
        <Text>Duration</Text>
        <TextInput
          dense
          activeOutlineColor="#000"
          label="Duration"
          mode="outlined"
        />
      </View>
      <View>
        <Text>標籤</Text>
        <View style={{flexDirection: 'row'}}>
        <View>
            <Chip>tag 1</Chip>
          </View>
          <View>
            <Chip>tag 2</Chip>
          </View>
        </View>
        
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            新增
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            取消
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

export default CreateTripNodeModalScreen;
