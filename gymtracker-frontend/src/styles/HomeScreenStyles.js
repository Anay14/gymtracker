// src/screens/HomeScreenStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordSection: {
    marginBottom: 20,
  },
  feedSection: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gilroy-ExtraBold',
    color: '#007BFF',
    marginBottom: 20,
  },
  secondaryTitle: {
    fontSize: 20,
    fontFamily: 'Gilroy-Light',
    color: '#6C757D',
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#007BFF',
    marginBottom: 10,
  },
  primaryButtonText: {
    fontFamily: 'Gilroy-ExtraBold',
    color: '#F8F9FA',
  },
  secondaryButton: {
    borderColor: '#6C757D',
    marginBottom: 10,
  },
  secondaryButtonText: {
    fontFamily: 'Gilroy-Light',
    color: '#343A40',
  },
  accentButton: {
    borderColor: '#28A745',
  },
  accentButtonText: {
    fontFamily: 'Gilroy-Light',
    color: '#28A745',
  },
});
