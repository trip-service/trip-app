import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Subheading, Text, useTheme } from 'react-native-paper';

function TextFieldLabel({ label }) {
  if (!label) return null;

  return <Subheading style={styles.label}>{label}</Subheading>;
}

function TextFieldHelperText({ helperText = '', keepHelperTextSpace }) {
  if (!helperText && !keepHelperTextSpace) return null;

  return <Text style={styles.helperText}>{helperText}</Text>;
}

export default function TextField({
  label,
  helperText,
  style,
  inputStyle,
  keepHelperTextSpace,
  ...rest
}) {
  const theme = useTheme();

  return (
    <View style={style}>
      <TextFieldLabel label={label} />
      <TextInput
        style={[
          styles.input,
          { borderColor: theme.palette.outline },
          inputStyle,
        ]}
        placeholderTextColor={theme.colors.placeholder}
        {...rest}
      />

      <TextFieldHelperText
        helperText={helperText}
        keepHelperTextSpace={keepHelperTextSpace}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  helperText: {
    marginLeft: 16,
    marginTop: 6,
    minHeight: 18,
  },
});

TextFieldLabel.propTypes = {
  label: PropTypes.string,
};

TextFieldHelperText.propTypes = {
  helperText: PropTypes.string,
  keepHelperTextSpace: PropTypes.bool,
};

TextField.propTypes = {
  label: TextFieldLabel.propTypes.label,
  helperText: TextFieldHelperText.propTypes.helperText,
  keepHelperTextSpace: TextFieldHelperText.propTypes.keepHelperTextSpace,
  inputStyle: PropTypes.shape(TextStyle),
  style: PropTypes.shape(ViewStyle),
};
