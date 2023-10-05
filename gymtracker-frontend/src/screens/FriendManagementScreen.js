import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const FriendManagementScreen = () => {
  return (
    <View>
      <Text>Friend Management</Text>
      <Button onPress={() => console.log('Add Friend')}>
        Add Friend
      </Button>
      <Text>Dummy Friend 1</Text>
      <Text>Dummy Friend 2</Text>
    </View>
  );
};

export default FriendManagementScreen;
