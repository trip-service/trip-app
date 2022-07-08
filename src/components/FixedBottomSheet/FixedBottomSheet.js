import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const renderBackdrop = props => (
  <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
);

const FixedBottomSheet = forwardRef(
  ({ index, height, children, ...rest }, ref) => {
    const theme = useTheme();

    return (
      <BottomSheet
        ref={ref}
        index={index}
        snapPoints={[height]}
        enableHandlePanningGesture={false}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheetBackground}
        {...rest}
      >
        <View
          style={[
            styles.content,
            { backgroundColor: theme.palette.background.paper },
          ]}
        >
          {children}
        </View>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  content: { flex: 1 },
  bottomSheetBackground: { borderRadius: 0 },
});

FixedBottomSheet.propTypes = {
  index: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

FixedBottomSheet.displayName = 'FixedBottomSheet';

export default FixedBottomSheet;
