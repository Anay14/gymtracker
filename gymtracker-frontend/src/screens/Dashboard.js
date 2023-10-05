import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Your Progress: 50%</Text>
      <Button onPress={() => console.log('View Details')}>
        View Details
      </Button>
    </View>
  );
};

export default Dashboard;
