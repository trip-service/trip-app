import {StyleSheet ,View, Text, TextInput as BaseTextInput} from "react-native";

const TextInput = (props) => {
    const {containerStyle, textStyle, label, ...rest} = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text>{label}</Text>
      <BaseTextInput
        dense
        activeOutlineColor="#000"
        mode="outlined"
        label={label}
        {...rest}
        style={[styles.textStyle, textStyle]}
    />
    </View>
  );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 6,
    },
    textStyle: {
        borderColor: "#ccc",
        borderWidth: 1,
        height: 26,
        marginTop: 6,
    },
});

export default TextInput;
