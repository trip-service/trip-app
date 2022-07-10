import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import TextField, {
  styles,
  TextFieldHelperText,
  TextFieldLabel,
} from '../TextField/TextField';

const BottomSheetTextField = forwardRef(
  (
    { label, helperText, keepHelperTextSpace, style, inputStyle, ...rest },
    ref
  ) => {
    const theme = useTheme();

    return (
      <View style={style}>
        <TextFieldLabel label={label} />
        <BottomSheetTextInput
          ref={ref}
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
);

BottomSheetTextField.displayName = 'BottomSheetTextField';
BottomSheetTextField.propTypes = TextField.propTypes;

export default memo(BottomSheetTextField);
