import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="GymTracker" />
      <Appbar.Action icon="bell" onPress={() => {}} />
      <Appbar.Action icon="logout" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default AppBar;
