import React, { useState } from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

export default function FabGroup() {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'close' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            { icon: 'import', onPress: () => console.log('Pressed add') },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
}
