import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FAB } from 'react-native-paper';

export default function FabGroup({ onAdd, onImport }) {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <FAB.Group
      open={open}
      icon={open ? 'close' : 'plus'}
      actions={[
        { icon: 'plus', onPress: onAdd },
        { icon: 'import', onPress: onImport },
      ]}
      onStateChange={onStateChange}
    />
  );
}

FabGroup.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired,
};
