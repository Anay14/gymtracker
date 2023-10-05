import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john.doe@example.com</Text>
      <Button onPress={() => console.log('Edit Profile')}>
        Edit Profile
      </Button>
    </View>
  );
};

export default ProfileScreen;
