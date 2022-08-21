import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const EmptyContent = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff"}}>
      <View style={styles.contentStyle}>
        <View>
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>尚未新增旅遊行程</Text>
          </View>
          <View style={styles.buttonContainerStyle}>
            <Button mode="contained" onPress={() => console.log('Pressed')}>
              新增行程
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainerStyle: { marginBottom: 16 },
  buttonContainerStyle: { marginTop: 16 },
  textStyle: { fontSize: 22, fontWeight: '600' },
  contentStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default EmptyContent;
