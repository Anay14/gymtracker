import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import styles from './styles/HomeScreenStyles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.recordSection}>
        <Text style={styles.title}>Record Your Exercise</Text>
        <Button
          mode="contained"
          style={styles.primaryButton}
          labelStyle={styles.primaryButtonText}
          onPress={() => console.log('Start New')}
        >
          Start New
        </Button>
        <Button
          mode="outlined"
          style={styles.secondaryButton}
          labelStyle={styles.secondaryButtonText}
          onPress={() => console.log('Record a Session')}
        >
          Record a Session
        </Button>
      </View>
      <View style={styles.feedSection}>
        <Text style={styles.secondaryTitle}>Feed</Text>
        <Button
          mode="text"
          style={styles.accentButton}
          labelStyle={styles.accentButtonText}
          onPress={() => console.log('Read Feed')}
        >
          Read Feed
        </Button>
      </View>
    </View>
  );
};


export default HomeScreen;
